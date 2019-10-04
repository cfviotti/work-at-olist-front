emailInputElement = document.querySelector('.js-emailInput')


emailInputElement.addEventListener('input', function() {
  isValidEmail(this.value)
})


let isValidEmail= (emailInputValue) => {
  // Validating emails through regex is not really a good idea, but for mockup purposes it's all right :)
  // This is a simplified version found on StackOverflow based on the RFC 2822 standard. 
  // More on the subject topic on:
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  // https://www.regular-expressions.info/email.html

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  return emailRegex.test(emailInputValue)
}
