const navigation = document.getElementById('navigation')

//Event Listener no scroll
window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

//Ativa o menu
function activateMenuAtCurrentSection(section) {
//Definição
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

//Verificação
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

//Atribuição
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

//Aplicação
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

//Altera o estilo da nav quando der o scroll
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

//Abre e fecha o menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//Biblioteca ScrollReveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(` 
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`
)