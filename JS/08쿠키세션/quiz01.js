

var res = document.querySelector(".res");
btn.onclick = function () {
    window.open("quiz01result.html");
    
}

window.onload = function(){
     for (var i = 1; i <= 2; i++) {
        if (res.childElementCount >= 2) {
            res.firstChild.remove();
        }
        var img1 = localStorage.getItem(cnt - i);
        var img11 = document.createElement("img");
        img11.src = img1;
        img11.style.width = "100px";
        res.appendChild(img11);
    }
}