class Tab {
  constructor(id) {
    // 获取元素
    this.main = document.querySelector(id);
    this.lis = document.querySelectorAll('.firstnav ul li');
    this.sectionLis = document.querySelector('.tabscon section');
    this.toggleTab();
  }
  // 1.切换功能
  toggleTab() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = function () {
        this.className = 'liactive';
      };
    }
  }
  // 2.添加功能
  addTab() {}
  // 3.删除功能
  removeTab() {}
  // 4.修改功能
  editTab() {}
}
new Tab('#tab');
