const $principalImage = document.querySelector('.principal-image-box')

const $cat1 = document.querySelector('.cat-1')
const $cat2 = document.querySelector('.cat-2')
const $cat3 = document.querySelector('.cat-3')

function placeCat1() {
  $principalImage.innerHTML = '<img class="main-image" src="./images/cat-1.jpg"></img>'
}

function placeCat2() {
  $principalImage.innerHTML = '<img class="main-image" src="./images/cat-2.jpg"></img>'
}

function placeCat3() {
  $principalImage.innerHTML = '<img class="main-image" src="./images/cat-3.jpg"></img>'
}

$cat1.addEventListener('click', placeCat1)
$cat2.addEventListener('click', placeCat2)
$cat3.addEventListener('click', placeCat3)

