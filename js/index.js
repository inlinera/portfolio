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
//
const dialog = document.getElementById('myDialog');
const dialogOpener = document.querySelector('.openDialogBtn');
const dialogCloser = document.querySelector('.closeDialogBtn');
//
function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget
  const isClickedOnBackDrop = target === dialog
  if (isClickedOnBackDrop) {
    dialog.close()
  }
}
function openModalAndLockScroll() {
  dialog.showModal()
  document.body.classList.add('scroll-lock')
}
function returnScroll() {
  document.body.classList.remove('scroll-lock')
}
function close() {
  dialog.close()
  returnScroll()
}
dialog.addEventListener('click', closeOnBackDropClick)
dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
});