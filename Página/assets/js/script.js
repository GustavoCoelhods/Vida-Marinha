/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * 
  alternar a barra de navegação ao clicar em qualquer link da barra de navegação
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * Efeito scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});


var isExpanded = false;
  var searchInput = document.getElementById('searchInput');

  function toggleSearch() {
    if (isExpanded) {
      // Minimiza o campo de pesquisa
      searchInput.style.width = '30px';
      searchInput.value = ''; // Limpa o valor ao minimizar
    } else {
      // Expande o campo de pesquisa
      searchInput.style.width = '200px'; // ou qualquer largura desejada
      searchInput.focus();
    }

    isExpanded = !isExpanded;
  }