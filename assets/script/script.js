function animaScroll() {
  const sobre = document.querySelectorAll('[data-anime]');
  sobre.forEach((elemento) => {
    const distancia = elemento.offsetTop;

    window.addEventListener('scroll', e => {
      e.preventDefault();
      if (window.pageYOffset > distancia - 300) {
        elemento.classList.remove('left-down');
        elemento.classList.add(elemento.dataset.anime);
      } else {
        elemento.classList.remove(elemento.dataset.anime);
        elemento.classList.add('left-down');
      }

    });
  });
}

animaScroll();


function produtosAnime() {

  //Adicionando o efeito de S c r o l l
  const produtosItem = document.querySelectorAll('.produtos-item-1');
  const tamanhoJanela = window.innerHeight * 3 / 4;

  produtosItem.forEach(elemento => {
    window.addEventListener('scroll', function (e) {
      e.preventDefault();
      const distanciaElemento = elemento.offsetTop;
      if (window.pageYOffset > distanciaElemento - tamanhoJanela) {
        elemento.classList.remove('animate__fadeOut');
        elemento.classList.add('animate__fadeInUp');
      } else {
        elemento.classList.remove('animate__fadeInUp');
        elemento.classList.add('animate__fadeOut');
      }
    });
  });

  const produtosItem2 = document.querySelectorAll('.produtos-item-2');
  produtosItem2.forEach(elemento => {
    window.addEventListener('scroll', function (e) {
      e.preventDefault();
      const distanciaTop = elemento.offsetTop;
      if (window.pageYOffset > distanciaTop - tamanhoJanela) {
        elemento.classList.remove('animate__fadeOut');
        elemento.classList.add('animate__fadeInUp');
      } else {
        elemento.classList.remove('animate__fadeInUp');
        elemento.classList.add('animate__fadeOut');
      }

    });
  });

  const produtosItem3 = document.querySelectorAll('.produtos-item-3');
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    produtosItem3.forEach(elemento => {
      const distancia = elemento.offsetTop;
      if (window.pageYOffset > distancia - tamanhoJanela) {
        elemento.classList.remove('animate__fadeOut');
        elemento.classList.add('animate__fadeInUp');
      } else {
        elemento.classList.remove('animate__fadeInUp');
        elemento.classList.add('animate__fadeOut');
      }
    });
  });

}
produtosAnime()


function contatoAnime() {
  const tamanhoJanela = window.innerHeight * 3 / 4;
  const contato = document.querySelectorAll('.contato-item');
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    contato.forEach(elemento => {
      const distancia = elemento.offsetTop;
      if (window.pageYOffset > distancia - tamanhoJanela) {
        elemento.classList.remove('animate__fadeOut');
        elemento.classList.add('animate__fadeIn');
      } else {
        elemento.classList.remove('animate__fadeIn');
        elemento.classList.add('animate__fadeOut')
      }

    });
  });
}

contatoAnime();

function animeRodapé() {
  const footer = document.querySelectorAll('footer');
  const tamanhoJanela = window.innerHeight * 3 / 4;
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    footer.forEach(elemento => {
      const distanciaFooter = elemento.offsetTop;
      if (window.pageYOffset > distanciaFooter - tamanhoJanela) {
        elemento.classList.remove('animate__fadeOut');
        elemento.classList.add('animate__fadeInLeft');
      } else {
        elemento.classList.remove('animate__fadeInLeft');
        elemento.classList.add('animate__fadeOut')
      }
    });
  });
}

animeRodapé();

function headerSuave() {
  const menuNav = document.querySelectorAll('.menu-nav ul li a');
  menuNav.forEach(elemento => {
    const href = elemento.getAttribute('href');
    const distancia = href.offsetTop;
  });

}

headerSuave();