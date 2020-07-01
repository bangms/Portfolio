const pageScroll = document.getElementById('page-scroll');
const contents = pageScroll.querySelectorAll('.section');
const sectionLen = contents.length;
let sectionHeight = window.innerHeight;
const startNum = 0;
const transition = "transform 1s cubic-bezier(0.77, 0, 0.175, 1)";

setElementHeight(sectionHeight);
cloneElement();

pageScroll.style.transform = `translateY(-${sectionHeight * (startNum + 1)}px)`;

let curIndex = startNum;
let curSlide = contents[curIndex]; 
curSlide.classList.add('section_active');

window.addEventListener('mousewheel', mousewheel);
window.addEventListener('keydown', onkeydown);

// window.addEventListener('resize', function(e) {
//   e.preventDefault();
//   sectionHeight = window.innerHeight;
//   setElementHeight(sectionHeight);
//   pageScroll.style.transform = `translateY(-${sectionHeight * (startNum + 1)}px)`;
//   clone1.style.height = sectionHeight + "px";
//   clone2.style.height = sectionHeight + "px";
// });

function onkeydown(e) {
  if (e.keyCode == 38){//상
    console.log('upup');
    scrollUp();  
  } else if (e.keyCode == 40){//하
    scrollDown();
  }
}

function mousewheel(e) {
  let scroll = e.deltaY;
  if(scroll > 0) { // down
   scrollDown();
  } else if (scroll < 0) { // up
   scrollUp();
  }
}

function setElementHeight(sectionHeight) {
  pageScroll.style.height = sectionHeight * (sectionLen + 2) + "px";
  contents.forEach(element => element.style.height = sectionHeight + "px");
}

function scrollUp() {
  if (curIndex >= 0) {
    pageScroll.style.transition = transition;
    pageScroll.style.transform = `translateY(-${sectionHeight * curIndex}px)`;
  }
  if (curIndex === 0) {
    setTimeout(function() {
      pageScroll.style.transition = "0ms";
      pageScroll.style.transform = `translateY(-${sectionHeight * sectionLen}px)`;
    }, 1000);
    curIndex = sectionLen;
  }
  curSlide.classList.remove('section_active');
  curSlide = contents[--curIndex];
  curSlide.classList.add('section_active');
}

function scrollDown() {
  if (curIndex <= sectionLen - 1) {
    pageScroll.style.transition = transition;
    pageScroll.style.transform = `translateY(-${sectionHeight * (curIndex + 2)}px)`;
  }
  if (curIndex === sectionLen - 1) {
    setTimeout(function() {
      pageScroll.style.transition = "0ms";
      pageScroll.style.transform = `translateY(-${sectionHeight}px)`;
    }, 1000);
    curIndex = -1;
  }
  curSlide.classList.remove('section_active');
  curSlide = contents[++curIndex];
  curSlide.classList.add('section_active');
}

function cloneElement() {
  let firstChild = pageScroll.firstElementChild;
  let lastChild = pageScroll.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);
  
  clonedFirst.id='clone1';
  clonedLast.id='clone2';

  pageScroll.appendChild(clonedFirst);
  pageScroll.insertBefore(clonedLast, pageScroll.firstElementChild);
}

