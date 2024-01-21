
const scriptURL = 'https://script.google.com/macros/s/AKfycbwImskf7mgevTD4jjt860OgE5SQZoAIXSGmYfrI9ILV46popBIwp-l8z-v7zMcTnSet/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Success!!! Your message has been sent"
      setTimeout (function (){
        msg.innerHTML = ""
      }, 4000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


  const menuBtn = document.querySelector('.hamburger__menu-button');
  const mobileNav = document.querySelector('.header__menu');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      mobileNav.style.display = 'flex';
     }else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      mobileNav.style.display = 'none';
     }
  })
