var tog = 1;
var tog1 = 1;
var togindi = 0;
function myFunction(x) {
  x.classList.toggle("is-active");
  console.log(tog);
  if (tog === 0) {
    document.getElementById("sidebar").style.width = "320px";
    document.getElementById("content").style.marginLeft = "320px";
    document.getElementById("content").style.width = "calc(100% - 320px";
    tog = 1;
  } else {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("content").style.marginLeft = "0px";
    document.getElementById("content").style.width = "100vw";
    tog = 0;
  }
}

const buttonDarkMode = document.querySelector("#darkmode");

buttonDarkMode.addEventListener("click", function () {
  if (tog1 === 1) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    tog1 = 0;
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    tog1 = 1;
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

const indicador =  document.getElementById("indicator");
const widget =  document.getElementById("widget");
widget.addEventListener("click", function () {
  if (togindi === 1) {
    indicador.style.backgroundColor = "rgb(224, 60, 60)";
    indicador.style.boxShadow = " rgba(100, 87, 87, 0.2) 0 -1px 5px 1px, inset #c01f1f 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
    togindi = 0;
  } else {
    indicador.style.backgroundColor = "rgb(27, 79, 221)";
    indicador.style.boxShadow = "rgba(100, 87, 87, 0.2) 0 -1px 5px 1px, inset #1f52c0 0 -1px 9px, rgba(4, 0, 255, 0.815) 0 2px 12px";
    togindi = 1;
  }
  
});
