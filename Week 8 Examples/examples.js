const balls = document.getElementsByClassName('ball');

const turnOffBtn = document.getElementsByClassName('turnOffCreepiness');

turnOffBtn[0].addEventListener('click', function (event) {
  event.preventDefault();

  document.removeEventListener('mousemove', trackEyes);
  
})

document.addEventListener('mousemove', trackEyes);

function trackEyes (event) {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
}