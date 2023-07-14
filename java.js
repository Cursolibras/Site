const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    
    

  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
  // alert("ola");

    
}

btnMobile.addEventListener('click', toggleMenu);
