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

(function() {
 let btn1 = document.getElementById('btn1')
 let btn2 = document.getElementById('btn2')
 let btn3 = document.getElementById('btn3')

 function handleNavClick(butn) {
   if (butn === "1") {
     btn1.classList.add("nav-slctd")
     btn2.classList.remove("nav-slctd")
     btn3.classList.remove("nav-slctd")
   }
   else if (butn === "2") {
     btn1.classList.remove("nav-slctd")
     btn2.classList.add("nav-slctd")
     btn3.classList.remove("nav-slctd")
   }
   else if (butn === "3") {
     btn1.classList.remove("nav-slctd")
     btn2.classList.remove("nav-slctd")
     btn3.classList.add("nav-slctd")
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
