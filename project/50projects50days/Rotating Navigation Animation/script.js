const switchList = document.querySelectorAll('.switch>.iconfont');
const container = document.querySelector('.container');
const switchs = document.querySelector('.switch');
const containerA = document.querySelector('.container-a');
switchList[1].addEventListener('click', function () {
  container.style.transform = 'rotateZ(-25deg)';
  switchs.style.transform = 'rotateZ(-90deg)';
  containerA.style.opacity = 1;
});
switchList[0].addEventListener('click', function () {
  container.style.transform = 'rotateZ(0deg)';
  switchs.style.transform = 'rotateZ(0deg)';
  containerA.style.opacity = 0;
});
