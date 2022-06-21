const btn = document.getElementById("btn");
const screen = document.querySelector(".screen")
console.log(screen)
btn.onclick = function generateRandomeAyah() {
  const request = new XMLHttpRequest();

  let ayahNumber = Math.floor(Math.random() * (6236 - 1 + 1)) + 1; // get random number between 6236(max number) and 1

  request.open("GET", `http://api.alquran.cloud/v1/ayah/${ayahNumber}`);
  request.send();

  const div = document.createElement("div"); // div to make copies from later
  const paragraph = document.createElement("p"); // p to make copies from later

  request.onreadystatechange = function () {
    if (this.status === 200 && this.readyState == 4) {
      Boolean(document.querySelector(".ayah"))
        ? document.querySelector(".ayah").remove()
        : ""; // to make sure only one ayah is in the page

      let JsData = JSON.parse(request.responseText);
      let ayah = JsData.data.text;

      // DOM
      let ayahDiv = div.cloneNode();
      let ayahText = paragraph.cloneNode();
      ayahDiv.classList.add("ayah");
      let ayahTextNode = document.createTextNode(ayah);
      ayahText.appendChild(ayahTextNode);
      ayahDiv.appendChild(ayahText);

      screen.appendChild(ayahDiv);
    }
  };
};
