var previewBlock = document.querySelector('.preview img');
var images       = document.querySelectorAll('.images img');
var mainImage    = previewBlock.src;

images.forEach( image =>
                {
                image.onmouseover = function (){  
                previewBlock.src = image.src;
                }
                image.onmouseout = function (){  
                previewBlock.src = mainImage;
                }
                }
)

var header = document.getElementById("forAfter");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}