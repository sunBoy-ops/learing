// 获取两个控制按钮 进度条 小球个数
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// 定义初始着色小球
let currentActive = 1;

prev.addEventListener('click', () => {
  currentActive--;
  // 临界条件判断 当为最小值1时，再减减就为0，初始为1
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

next.addEventListener('click', () => {
  currentActive++;
  // 临界条件判断 当为最大值4时，再加加就为5，初始为ircles.length
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

function update() {
  // 按钮通过控制currentActive的值，小球发生变色
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // 进度条控制
  progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%';

  // 控制按钮disabled
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
