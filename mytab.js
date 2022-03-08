function loadRandomImage() {
    let idx = Math.floor(Math.random() * 11);
    console.log(idx);
    document.body.style.backgroundImage = "url('ganesh-" +  idx + ".png')";
}