(function() {
let button = document.getElementById('cbut');
let hide = document.getElementById('hulk');
  function handleClick() {
    hide.style.display='none';
  }
button.addEventListener("click", handleClick);
}());
