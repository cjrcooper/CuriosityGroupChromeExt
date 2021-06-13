let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

document.getElementById('changeColor').addEventListener('click',function(){
    console.log(chrome.extension.getBackgroundPage());
 });
