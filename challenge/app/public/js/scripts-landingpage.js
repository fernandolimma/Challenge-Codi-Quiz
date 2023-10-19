const formOpenBtn = document.querySelector('#form-open')
const home = document.querySelector('.home')
const formContainer = document.querySelector('.form_container')
const formCloseBtn = document.querySelector('.form_close')
const loginBtn = document.querySelector('#login')
const pwShowHide = document.querySelectorAll('.pw_hide')

formOpenBtn.addEventListener('click', () => home.classList.add('show'))
formCloseBtn.addEventListener('click', () => home.classList.remove('show'))

pwShowHide.forEach((icon) => {
  icon.addEventListener('click', () => {
    const getPwInput = icon.parentElement.querySelector('input')
    if (getPwInput.type === 'password') {
      getPwInput.type = 'text'
      icon.classList.replace('uil-eye-slash', 'uil-eye')
    } else {
      getPwInput.type = 'password'
      icon.classList.replace('uil-eye', 'uil-eye-slash')
    }
  })
})
loginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  formContainer.classList.remove('active')
})