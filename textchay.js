var string = "Tất cả các khóa học miễn phí";
var str = string.split("");
var el = document.getElementById('str');


(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 100);
})();