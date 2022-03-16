let c1 = Math.floor(Math.random() * 800);
let c2 = Math.floor(Math.random() * 800);
let c3 = Math.floor(Math.random() * 800);
let c4 = Math.floor(Math.random() * 800);
let c5 = Math.floor(Math.random() * 800);
localStorage.setItem("flag", 0);
let f = localStorage.getItem("flag");
const v1 = localStorage.setItem("vimg1", c1);
const v2 = localStorage.setItem("vimg2", c2);
const v3 = localStorage.setItem("vimg3", c3);
const v4 = localStorage.setItem("vimg4", c4);
const v5 = localStorage.setItem("vimg5", c5);
let titpagimg = document.getElementById('titulo');
let titimg = document.getElementById('timg');
let visita1 = document.getElementById('ndv1');
let visita2 = document.getElementById('ndv2');
let visita3 = document.getElementById('ndv3');
let visita4 = document.getElementById('ndv4');
let visita5 = document.getElementById('ndv5');
let imag1 = document.getElementById('img1');
let imag2 = document.getElementById('img2');
let imag3 = document.getElementById('img3');
let imag4 = document.getElementById('img4');
let imag5 = document.getElementById('img5');
visita1.innerHTML = localStorage.getItem("vimg1");
visita2.innerHTML = localStorage.getItem("vimg2");
visita3.innerHTML = localStorage.getItem("vimg3");
visita4.innerHTML = localStorage.getItem("vimg4");
visita5.innerHTML = localStorage.getItem("vimg5");
imag1.addEventListener("click", () => {
    window.open("assets/img1.html", '', 'resizable=1,width=800,height=400');
    c1++; localStorage.setItem("vimg1", c1);visita1.innerHTML = c1})
imag2.addEventListener("click", () => {c2++; localStorage.setItem("vimg2", c2);visita2.innerHTML = c2; console.log(c2)})
imag3.addEventListener("click", () => {
    window.open("assets/img3.html", '', 'resizable=1,width=800,height=400');
    c3++; localStorage.setItem("vimg3", c3);visita3.innerHTML = c3})
imag4.addEventListener("click", () => {c4++; localStorage.setItem("vimg4", c4);visita4.innerHTML = c4; console.log(c4)})
imag5.addEventListener("click", () => {
    window.open("assets/img5.html", '', 'resizable=1,width=800,height=400');
    c5++; localStorage.setItem("vimg5", c5);visita5.innerHTML = c5})
let ct = document.getElementById('ct').addEventListener("click", () => {
    fetch("js/home.json")
    .then(resultadous => resultadous.json())
    .then(respuestaus =>{
        for( let i=0; i < respuestaus.length; i++){
            let textarea = document.getElementById('floatingTextarea');
            textarea.innerHTML = respuestaus[i].texto;
        }
    })
})