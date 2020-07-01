const nodejs = document.getElementById('Nodejs');
console.log(nodejs.getBoundingClientRect());

const cube = document.getElementById('cube');
const div = cube.querySelector('div');

let rotateX = 0;
let rotateY = 0;
let translateZ = div.clientHeight / 2;
let transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg`;
let startX,startY,endX,endY;

updateTransformStyle();
cube.addEventListener('mousedown',mousedown);
cube.addEventListener('mouseup',mouseup);

window.onresize = function(e) {
  translateZ = div.clientHeight / 2;
  updateTransformStyle();
  init(translateZ);
}

window.onload = function(){
  translateZ = div.clientHeight / 2;
  init(translateZ);

}

function init(translateZ) {
  const WEB = document.getElementById('Web');
  const JS = document.getElementById('Javascript');
  const REACT = document.getElementById('React');
  const GIT = document.getElementById('Git');
  const JQUERY = document.getElementById('Jquery');
  const NODEJS = document.getElementById('Nodejs');

  WEB.style.transform = `rotateX(180deg) rotateZ(180deg) translateZ(${translateZ}px)`;
  WEB.style.webkitTransform = `rotateX(180deg) rotateZ(180deg) translateZ(${translateZ}px)`;
  WEB.style.msTransform = `rotateX(180deg) rotateZ(180deg) translateZ(${translateZ}px)`;

  JS.style.transform = `rotateY(-90deg) translateZ(${translateZ}px)`;
  JS.style.webkitTransform = `rotateY(-90deg) translateZ(${translateZ}px)`;
  JS.style.msTransform = `rotateY(-90deg) translateZ(${translateZ}px)`;

  REACT.style.transform = `rotateX(-90deg) translateZ(${translateZ}px)`;
  REACT.style.webkitTransform = `rotateX(-90deg) translateZ(${translateZ}px)`;
  REACT.style.msTransform = `rotateX(-90deg) translateZ(${translateZ}px)`;

  GIT.style.transform = `rotateY(90deg) translateZ(${translateZ}px)`;
  GIT.style.webkitTransform = `rotateY(90deg) translateZ(${translateZ}px)`;
  GIT.style.msTransform = `rotateY(90deg) translateZ(${translateZ}px)`;

  JQUERY.style.transform = `rotateX(90deg) translateZ(${translateZ}px)`;
  JQUERY.style.webkitTransform = `rotateX(90deg) translateZ(${translateZ}px)`;
  JQUERY.style.msTransform = `rotateX(90deg) translateZ(${translateZ}px)`;

  NODEJS.style.transform = `rotateY(0deg) translateZ(${translateZ}px)`;
  NODEJS.style.webkitTransform = `rotateY(0deg) translateZ(${translateZ}px)`;
  NODEJS.style.msTransform = `rotateY(0deg) translateZ(${translateZ}px)`;
}

function mousedown(e) {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;
}

function mouseup(e) {
  e.preventDefault();
  endX = e.clientX;
  endY = e.clientY;

  if(startY+50 > endY && endY > startY-50) {
    if(startX < endX) {
      rotate_right();
    } else {
      rotate_left();
    }
  }

  if(startX-50 < endX && endX < startX+50) {
    if(startY > endY) {
      rotate_top();
    } else {
      rotate_bottom();
    }
  }

  pytha(startX, startY, endX, endY);

  if(startX > endX && startY > endY && lineLength > 150) {
    rotate_diagonallyToTheLeftAndUp();
  }

  if(startX < endX && startY < endY && lineLength > 150) {
    rotate_diagonallyToTheRightAndDown();
  }

  if(startX > endX && startY < endY && lineLength > 150) {
    rotate_diagonallyToTheLeftAndDown();
  }

  if(startX < endX && startY > endY && lineLength > 150) {
    rotate_diagonallyToTheRightAndUp();
  }

  updateTransformStyle();
}

function pytha(x1, y1, x2, y2) {
  var width = Math.abs(x1 - x2),
      height = Math.abs(y1 - y2);
  lineLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

  return lineLength;
}

function updateTransformStyle() {
  transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  cube.style.transform = transform;
  cube.style.webkitTransform = transform;
  cube.style.msTransform = transform;
}

function rotate_right() {
  console.log(rotateY);
    if (startX+200 < endX) {
      rotateY += 180;
    } else {
      rotateY += 90;
    }
    updateTransformStyle()
}

function rotate_left() {
    if (startX-200 > endX) {
      rotateY -= 180;
    } else {
      rotateY -= 90;
    }
    updateTransformStyle()
}

function rotate_top() {
    if (startY-200 < endY) {
      rotateX += 180;
    } else {
      rotateX += 90;
    }
    updateTransformStyle()
}

function rotate_bottom() {
    if (startY+200 < endY) {
      rotateX -= 180;
    } else {
      rotateX -= 90;
    }
    updateTransformStyle()
}

function rotate_diagonallyToTheLeftAndDown() {
  // 왼쪽 아래 X는 - Y는 +
  if(lineLength > 200) {
    rotateX -= 180;
    rotateY -= 180;
  } else {
    rotateX -= 90;
    rotateY -= 90;
  }
  updateTransformStyle()
}

function rotate_diagonallyToTheRightAndDown() {
  // 오른쪽 아래 X는 + Y는 +
  if(lineLength > 200) {
    rotateX -= 180;
    rotateY += 180;
  } else {
    rotateX -= 90;
    rotateY += 90;
  }
  updateTransformStyle()
}

function rotate_diagonallyToTheLeftAndUp() {
  // 왼쪽 위 X는 - Y는 -
  if(lineLength > 200) {
    rotateY -= 180;
    rotateX += 180;
  } else {
    rotateY -= 90;
    rotateX += 90;
  }
  updateTransformStyle()
}

function rotate_diagonallyToTheRightAndUp() {
  // 오른쪽 위 X는 + Y는 -
  if(lineLength > 200) {
    rotateY += 180;
    rotateX += 180;
  } else {
    rotateY += 90;
    rotateX += 90;
  }
  updateTransformStyle()
}
