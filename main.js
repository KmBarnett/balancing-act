// NOTE: banner functionality
(function() {
let button = document.getElementById('cbut');
let hide = document.getElementById('hulk');
let account = document.getElementById('epps');

  function handleClick() {
    hide.style.display='none';
    account.style.height='70%';
  }
button.addEventListener("click", handleClick);
}());
// NOTE: Nav functionality
(function() {
 let btn1 = document.getElementById('btn1')
 let btn2 = document.getElementById('btn2')
 let btn3 = document.getElementById('btn3')
 let dashboard = document.getElementById('dshbrd')
 let wallet = document.getElementById('wlt')
 let user = document.getElementById('usr')

 function handleNavClick(butn) {
   if (butn === "1") {
     btn1.classList.add("nav-slctd")
     btn2.classList.remove("nav-slctd")
     btn3.classList.remove("nav-slctd")
     dashboard.classList.remove("hide")
     wallet.classList.add("hide")
     user.classList.add("hide")

   }
   else if (butn === "2") {
     btn1.classList.remove("nav-slctd")
     btn2.classList.add("nav-slctd")
     btn3.classList.remove("nav-slctd")
     dashboard.classList.add("hide")
     wallet.classList.remove("hide")
     user.classList.add("hide")
   }
   else if (butn === "3") {
     btn1.classList.remove("nav-slctd")
     btn2.classList.remove("nav-slctd")
     btn3.classList.add("nav-slctd")
     dashboard.classList.add("hide")
     wallet.classList.add("hide")
     user.classList.remove("hide")
   }
 }

  function btn1Click() {
   handleNavClick('1')
  }
  function btn2Click() {
    handleNavClick('2')
  }
  function btn3Click() {
    handleNavClick('3')
  }
btn1.addEventListener('click', btn1Click)
btn2.addEventListener('click', btn2Click)
btn3.addEventListener('click', btn3Click)
}());


(function() {
 let btn1 = document.getElementById('all')
 let btn2 = document.getElementById('inflw')
 let btn3 = document.getElementById('otflw')

 function handleTransClick(butn) {
   if (butn === "1") {
     btn1.classList.add("trbtn-seltd")
     btn2.classList.remove("trbtn-seltd")
     btn3.classList.remove("trbtn-seltd")

   }
   else if (butn === "2") {
     btn1.classList.remove("trbtn-seltd")
     btn2.classList.add("trbtn-seltd")
     btn3.classList.remove("trbtn-seltd")
   }
   else if (butn === "3") {
     btn1.classList.remove("trbtn-seltd")
     btn2.classList.remove("trbtn-seltd")
     btn3.classList.add("trbtn-seltd")
   }
 }

  function btn1Click() {
   handleTransClick('1')
  }
  function btn2Click() {
    handleTransClick('2')
  }
  function btn3Click() {
    handleTransClick('3')
  }
btn1.addEventListener('click', btn1Click)
btn2.addEventListener('click', btn2Click)
btn3.addEventListener('click', btn3Click)
}());
