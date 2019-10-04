inputElements = document.querySelectorAll('input')

// Start form with empty styles
inputElements.forEach(el => el.classList.add('-empty'))

inputElements.forEach(el => {
  el.addEventListener('input', function(el) {
    if (this.value == "") {
      this.classList.add('-empty')
    } else {
      this.classList.remove('-empty')
    }
  })
})
