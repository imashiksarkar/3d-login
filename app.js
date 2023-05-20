let signUpBtnTglr = document.getElementById('signUpSwicher');
let signInBtnTglr = document.getElementById('signInSwicher');
let card = document.getElementById('card');

signUpBtnTglr.addEventListener('click', () => {
  card.classList.add('rear');
});
signInBtnTglr.addEventListener('click', () => {
  card.classList.remove('rear');
});
