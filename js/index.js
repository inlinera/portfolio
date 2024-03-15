const firstContent = document.querySelector('.content__block1');
const secondContent = document.querySelector('.content__block2');
const thirdContent = document.querySelector('.content__block3');
const fourthContent = document.querySelector('.content__block4');
const contentBlocks = document.querySelector('.content__allblocks');
//
const span = document.getElementById('span');
const span1 = document.getElementById('span1');
//
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.links');
menuBtn.addEventListener('click', function(){
menu.classList.toggle('active');
});
//
function hideContent(){
firstContent.classList.toggle('active');
secondContent.classList.toggle('active');
thirdContent.classList.toggle('active');
fourthContent.classList.toggle('active');
contentBlocks.classList.toggle('active');
span.classList.toggle('active');
span1.classList.toggle('active');
};
// MY POPUP
function openModal1() {
  document.querySelector('.modal1').classList.add('open');
};
//close бест модал виндов
function closeModal1() {
  document.querySelector('.modal1').classList.remove('open');
}
// Закрытие при нажатии escape(стрелочная функция)
window.addEventListener('keydown', (e) => {
document.querySelector('.modal1').classList.remove('open');
});
//close модал виндов при клике вне его
document.querySelector('.modal1 .modal__info1').addEventListener('click', event => {
 event._isClickWithInModal = true;
});
document.querySelector('.modal1').addEventListener('click', event => {
 if (event._isClickWithInModal) return;
 event.currentTarget.classList.remove('open');
});
//open бест модал виндов 2
function openModal() {
  document.querySelector('.modal').classList.add('open');
};
//close бест модал виндов 2
function closeModal() {
  document.querySelector('.modal').classList.remove('open');
}
// Закрытие при нажатии escape(стрелочная функция) 2
window.addEventListener('keydown', (e) => {
document.querySelector('.modal').classList.remove('open');
});
//close модал виндов при клике вне его 2
document.querySelector('.modal .modal__info').addEventListener('click', event => {
 event._isClickWithInBestModal = true;
});
document.querySelector('.modal').addEventListener('click', event => {
 if (event._isClickWithInBestModal) return;
 event.currentTarget.classList.remove('open');
});
//best modal window 