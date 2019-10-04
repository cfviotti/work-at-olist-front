nameInputElement = document.querySelector('.js-nameInput')


nameInputElement.addEventListener('input', function() {
  isValidFullName(this.value)
})


let isValidFullName = (nameInputValue) => {
  // Testing for at least two words, not requiring capital letters
  const fullNameRegex = /(\w.+\s).+/i

  return fullNameRegex.test(nameInputValue)
}
