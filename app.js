var color = ["salmon","green","lightblue","brown","purple","lightyellow"]
var index = -1;
var body = document.getElementsByTagName("body")[0];
console.log(body)
var button = document.querySelector("button");
console.log(button)

function change(){
    index++;
    button.innerText=color[index]
    button.style.backgroundColor = color[index];
    body.style.backgroundColor = color[index];
    if(index>=(color.length) - 1){
        index = -1
    }
}

