document.addEventListener('DOMContentLoaded', () => {
  // this code will be executed once the page has loaded
  let displayElement = document.getElementById('display')

  setTimeout(() => {
    displayElement.innerHTML = '<h1>Hello Informator Students!</h1>'
    displayElement.classList.add('header')
  }, 1000)

  const showAlert = () => {
    alert('You clicked me!')
  }

  // function showAlert() {
  //   alert('You clicked me!')
  // }
  let buttonElement = document.querySelector('button')
  buttonElement.addEventListener('click', showAlert)
}) 