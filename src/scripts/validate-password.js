passwordInputElement = document.querySelector('.js-passwordInput')

passwordScoreElements = document.querySelectorAll('.js-passwordScore')

minCharsValidationElement = document.querySelector('.js-minCharsValidation')
minCapsValidationElement = document.querySelector('.js-minCapsValidation')
minNumValidationElement = document.querySelector('.js-minNumValidation')


passwordInputElement.addEventListener('input', function() {
  isValidPassword(this.value)
})


let isValidPassword = (passwordInputValue) => {
  let score = 0
  let passwordRequirements = {
    minCharsValidation: hasMinimumCharacters(passwordInputValue),
    minCapsValidation: hasCapitalLetter(passwordInputValue),
    minNumberValidation: hasNumber(passwordInputValue)
  }

  // Count number of passed requirements (valued true) in passwordRequirments object
  score = Object.values(passwordRequirements).reduce((accumulator, curReq) => accumulator + curReq, 0)

  if (score == 3) {
    passwordInputElement.classList.add('-valid')
  } else {
    passwordInputElement.classList.remove('-valid')
  }

  switch (score) {
    case 0:
      passwordScoreElements.forEach(el => el.classList.remove('-mediumscore', '-highscore', '-lowscore'))
      return false
      break

    case 1:
      passwordScoreElements.forEach(el => {
        el.classList.remove('-mediumscore', '-highscore')
        if (el.classList.contains('js-low')) {
          el.classList.add('-lowscore')
        }
      })
      return false
      break

    case 2:
      passwordScoreElements.forEach(el => {
        el.classList.remove('-lowscore', '-highscore')
        if (el.classList.contains('js-low') || el.classList.contains('js-medium')) {
          el.classList.add('-mediumscore')
        }
      })
      return false
      break

    case 3:
      passwordScoreElements.forEach(el => {
        el.classList.remove('-lowscore', '-mediumscore')
        el.classList.add('-highscore')
      })

      return true
      break
  }
}

let hasMinimumCharacters = (passwordInputValue) => {
  const minCharactersRegex = /^.{6,}$/g

  if (minCharactersRegex.test(passwordInputValue)) {
    minCharsValidationElement.classList.add('-pass')
    return true

  } else {
    minCharsValidationElement.classList.remove('-pass')
    minCharsValidationElement.classList.add('-fail')
    return false
  }
}

let hasCapitalLetter = (passwordInputValue) => {
  const minCapsRegex = /^(?=.*[A-Z]).{1,}$/g

  if (minCapsRegex.test(passwordInputValue)) {
    minCapsValidationElement.classList.add('-pass')
    return true

  } else {
    minCapsValidationElement.classList.remove('-pass')
    minCapsValidationElement.classList.add('-fail')
    return false
  }
}

let hasNumber = (passwordInputValue) => {
  const minNumberRegex = /^(?=.*\d).{1,}$/g

  if (minNumberRegex.test(passwordInputValue)) {
    minNumValidationElement.classList.add('-pass')
    return true

  } else {
    minNumValidationElement.classList.remove('-pass')
    minNumValidationElement.classList.add('-fail')
    return false
  }
}
