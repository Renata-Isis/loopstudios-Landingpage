const btnMobile = document.querySelector('.menu-button');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault(); //Evitando que quando o evento for de touchstart o click não seja ativado
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active'); //Verificando se no nav existe o active, para alterar o aria-expande de false para true e vice e versa
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    //Verificando se estiver ativo eu fecho o menu, caso contrário o abrir menu
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); //Para evitar a espera de 3 milisegundos para abrir o menu
