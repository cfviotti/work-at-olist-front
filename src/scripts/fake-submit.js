const signupFormElement = document.querySelector('.js-signupForm')
const signupSubmitElement = document.querySelector('.js-signupSubmit')
const submitLoaderElement = document.querySelector('.js-submitLoader')
const signupSuccessElement = document.querySelector('.js-signupSuccess')


// signupFormElement.addEventListener('submit', function(signupForm) {
//   console.log(signupForm)
//   fakeSubmitSignup(this)
// })

signupFormElement.addEventListener('submit', function(e) {
  e.preventDefault()
  showLoader()
  setTimeout(() => formSuccessfulSend(), 4000);
})

let showLoader = () => {
  submitLoaderElement.classList.add('-show')
  signupSubmitElement.classList.add('-hidelabel')
}

let formSuccessfulSend = () => {
  signupSuccessElement.classList.add('-show')
  signupFormElement.remove()
}
