console.log("hello world");
fetch("https://api.imgflip.com/get_memes");
const request = new XMLHttpRequest();
request.open("GET", "https://api.imgflip.com/get_memes");
request.send();
const image = document.createElement("img")
// console.log(request);

request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState == 4) {
    let JsData = JSON.parse(request.responseText)
    console.log(JsData.data.memes)
    let memesArray = JsData.data.memes
    memesArray.forEach(e => {
        let meme = image.cloneNode()
        let memeUrl = e.url
        meme.setAttribute("src",memeUrl)
        document.body.appendChild(meme)
        console.log(e.name)
    });
  }
};
