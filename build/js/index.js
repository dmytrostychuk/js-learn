let numbRadius = document.querySelector('#numbRadius');
let numbHeight = document.querySelector('#numbHeight');
let countBtn = document.querySelector('#countBtn');

countBtn.addEventListener('click', function () {
  let volume = 3.14 * Number(numbRadius.value) * 2 * Number(numbHeight.value);
  document.querySelector('#output').textContent = volume;
});
