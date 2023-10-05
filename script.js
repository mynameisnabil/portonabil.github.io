const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')
const smMenuLink5 = document.querySelector('.main-header__sm-menu-link--5')
const smMenuLink6 = document.querySelector('.main-header__sm-menu-link--6')
const smMenuLink7 = document.querySelector('.main-header__sm-menu-link--7')

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  smMenuLink1.style.transitionDelay = '.5s'
  smMenuLink1.style.transform = 'translateY(0)'
  smMenuLink1.style.opacity = '1'

  smMenuLink2.style.transitionDelay = '.8s'
  smMenuLink2.style.transform = 'translateY(0)'
  smMenuLink2.style.opacity = '1'

  smMenuLink3.style.transitionDelay = '1.1s'
  smMenuLink3.style.transform = 'translateY(0)'
  smMenuLink3.style.opacity = '1'

  smMenuLink4.style.transitionDelay = '1.4s'
  smMenuLink4.style.transform = 'translateY(0)'
  smMenuLink4.style.opacity = '1'

  smMenuLink5.style.transitionDelay = '1.7s'
  smMenuLink5.style.transform = 'translateY(0)'
  smMenuLink5.style.opacity = '1'

  smMenuLink6.style.transitionDelay = '2s'
  smMenuLink6.style.transform = 'translateY(0)'
  smMenuLink6.style.opacity = '1'

  smMenuLink7.style.transitionDelay = '2.3s'
  smMenuLink7.style.transform = 'translateY(0)'
  smMenuLink7.style.opacity = '1'

})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {

    smMenuLink7.style.transitionDelay = '0s'
    smMenuLink7.style.transform = 'translateY(50px)'
    smMenuLink7.style.opacity = '0'


    smMenuLink6.style.transitionDelay = '3s'
    smMenuLink6.style.transform = 'translateY(50px)'
    smMenuLink6.style.opacity = '0'

    smMenuLink5.style.transitionDelay = '5s'
    smMenuLink5.style.transform = 'translateY(50px)'
    smMenuLink5.style.opacity = '0'


    smMenuLink4.style.transitionDelay = '9s'
    smMenuLink4.style.transform = 'translateY(50px)'
    smMenuLink4.style.opacity = '0'

    smMenuLink3.style.transitionDelay = '12s'
    smMenuLink3.style.transform = 'translateY(50px)'
    smMenuLink3.style.opacity = '0'

    smMenuLink2.style.transitionDelay = '15s'
    smMenuLink2.style.transform = 'translateY(50px)'
    smMenuLink2.style.opacity = '0'

    smMenuLink1.style.transitionDelay = '18s'
    smMenuLink1.style.transform = 'translateY(50px)'
    smMenuLink1.style.opacity = '0'

    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {


  smMenuLink7.style.transitionDelay = '0s'
  smMenuLink7.style.transform = 'translateY(50px)'
  smMenuLink7.style.opacity = '0'

  smMenuLink6.style.transitionDelay = '3s'
  smMenuLink6.style.transform = 'translateY(50px)'
  smMenuLink6.style.opacity = '0'

  smMenuLink5.style.transitionDelay = '6s'
  smMenuLink5.style.transform = 'translat9eY(50px)'
  smMenuLink5.style.opacity = '0'

  smMenuLink4.style.transitionDelay = '9s'
  smMenuLink4.style.transform = 'translateY(50px)'
  smMenuLink4.style.opacity = '0'

  smMenuLink3.style.transitionDelay = '12s'
  smMenuLink3.style.transform = 'translateY(50px)'
  smMenuLink3.style.opacity = '0'

  smMenuLink2.style.transitionDelay = '15s'
  smMenuLink2.style.transform = 'translateY(50px)'
  smMenuLink2.style.opacity = '0'

  smMenuLink1.style.transitionDelay = '18s'
  smMenuLink1.style.transform = 'translateY(50px)'
  smMenuLink1.style.opacity = '0'

  smMenu.style.transitionDelay = '1.2s'
  smMenu.classList.remove('main-header__sm-menu--active')
})





// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const root = document.documentElement;



const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

themeColorSelector.addEventListener('click', () => {
  eventFire(themeColorSelectorInput, 'input')
})

const setDynamicColor = (color) => {

  const { r, g, b } = hexToRgb(`${color}`)
  
  root.style.setProperty('--themeColor', `${r},${g},${b}`);
  //localStorage.setItem('color', color)
}

themeColorSelectorInput.addEventListener('input', (e) => {
  setDynamicColor(e.target.value)
})

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector('.main-header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})



function hobbyHiveLiveLinkClick(){
  window.location.href = "https://youtu.be/aB2II0CmVFM";

}

function hobbyHiveCodeLinkClick() {
  window.location.href = "https://github.com/mynameisnabil/FinproSEV1"

}

function acaraseruAppsLinkClick() {
  window.location.href = "https://play.google.com/store/apps/details?id=id.or.acci.event&hl=en-ID"
}

function blazebusterDemolinkClick() {
  window.location.href = "https://youtu.be/gDlsl0t8bmc"
}

function blujackcodelink() {
  window.location.href = "https://github.com/hanzayaim/MCS_LAB_FinalProject"
}

function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}





