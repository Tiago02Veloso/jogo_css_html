const son = document.querySelector('.son');
const pipe = document.querySelector('.pipe');

function jump() {
  son.classList.add('jump');

  setTimeout(() => {
    son.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  console.log('loop');

  const pipePosition = pipe.offsetLeft;
  const sonPosition = +window.getComputedStyle(son).bottom.replace('px', '');

  console.log(sonPosition);

  if (pipePosition <= 120 && pipePosition > 0 && sonPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    son.style.animation = 'none';
    son.style.bottom = `${sonPosition}px`;

    son.src = './img/game-o.png';
    son.style.width = '150px';
    son.style.marginLeft = '0px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);

