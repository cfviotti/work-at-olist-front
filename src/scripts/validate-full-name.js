nameInputElement = document.querySelector('.js-nameInput')


nameInputElement.addEventListener('input', function() {
  isValidFullName(this.value)
})


let isValidFullName = (nameInputValue) => {
  // Testing for at least two words, not requiring capital letters
  const fullNameRegex = /(\w.+\s).+/i

  if (fullNameRegex.test(nameInputValue)) {
    nameInputElement.classList.add('-valid')
    return true

  } else {
    nameInputElement.classList.remove('-valid')
    return false
  }
}
