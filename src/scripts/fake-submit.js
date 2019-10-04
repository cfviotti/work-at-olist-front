 signupFormElement = document.querySelector('.js-signupForm')
 signupSubmitElement= document.querySelector('.js-signupSubmit')
 submitLoaderElement= document.querySelector('.js-submitLoader')


// signupFormElement.addEventListener('submit', function(signupForm) {
//   console.log(signupForm)
//   fakeSubmitSignup(this)
// })

signupFormElement.addEventListener('submit', function(e) {
  e.preventDefault()
  showLoader()
  setTimeout(() => signupFormElement.submit(), 4000);
})

let showLoader = () => {
  submitLoaderElement.classList.add('-show')
  signupSubmitElement.classList.add('-hidelabel')
}
