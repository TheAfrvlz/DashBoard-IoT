var tog = 1;
var tog1 = 1;
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

buttonDarkMode.addEventListener('click', function() {
  if(tog1 === 1) {
      trans()
      document.documentElement.setAttribute('data-theme', 'dark')
      tog1 = 0;
  } else {
      trans()
      document.documentElement.setAttribute('data-theme', 'light')
      tog1 = 1;
  }
})

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
  }, 1000)
}
