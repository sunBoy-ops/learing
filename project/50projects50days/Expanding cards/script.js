var panels = document.querySelectorAll('.panel');

// 旧的for写法
// for (let i = 0; i < panels.length; i++) {
//   panels[i].onclick = function () {
//     for (let i = 0; i < panels.length; i++) {
//       panels[i].className = 'panel';
//     }
//     this.className = 'panel active';
//   };
// }

// forEach写法
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
