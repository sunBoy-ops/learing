// 1、查询图书列表
// 页面加载 渲染图书列表 封装渲染函数
const creator = 'admin2001';

const getBookList = function () {
  axios
    .get('http://hmajax.itheima.net/api/books', { params: { creator } })
    .then((res) => {
      let resData = res.data.data;
      document.querySelector('.list').innerHTML = resData
        .map(
          (item) =>
            `
        <tr>
          <td>${item.id}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td>
            <span class="del" data-id=${item.id}>删除</span>
            <span class="edit" data-id=${item.id}>编辑</span>
          </td>
        </tr>
        `
        )
        .join('');
    })
    .catch((err) => {
      console.log(err);
    });
};
getBookList();
// 2.添加图书
// （1）获取模态框中数据（2）验证内容不能为空 （3）发送请求添加到数据库（4）重新渲染
const addModal = new bootstrap.Modal('.add-modal');
const editModal = new bootstrap.Modal('.edit-modal');

// document.querySelector('.plus-btn').addEventListener('click', () => {
//   addModal.show();
// });
document.querySelector('.add-btn').addEventListener('click', () => {
  const data = serialize(document.querySelector('.add-form'), { hash: true, empty: true });
  if (Object.values(data).some((item) => !item)) {
    alert('输入内容为空');
    return;
  }

  axios.post('http://hmajax.itheima.net/api/books', { ...data, creator }).then((res) => {
    getBookList();
    addModal.hide();
    document.querySelector('.add-form').reset();
  });
});
// 3.修改图书信息
// 点击编辑按钮 表单数据回显 修改完成 点击保存 发送修改ajax
// 时间委托
document.querySelector('.list').addEventListener('click', function (e) {
  if (e.target.classList.contains('edit')) {
    editModal.show();
    axios.get(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`).then((res) => {
      const datas = res.data.data;
      // 数据回显
      Object.keys(res.data.data).forEach((item) => {
        document.querySelector(`.edit-form .${item}`).value = datas[item];
      });
      // 修改表单数据 再发送请求
      // document.querySelector('.edit-btn').addEventListener('click', function () {
      //   let bookname = document.querySelector(`.add-form .bookname`).value;
      //   let author = document.querySelector(`.add-form .author`).value;
      //   let publisher = document.querySelector(`.add-form .publisher`).value;
      //   axios.put(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`, { bookname, author, publisher, creator }).then((res) => {
      //     console.log(res);
      //   });
      // });
      document.querySelector('.edit-btn').addEventListener('click', () => {
        const data = serialize(document.querySelector('.edit-form'), { hash: true, empty: true });
        if (Object.values(data).some((item) => !item)) {
          alert('输入内容为空');
          return;
        }
        axios.put(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`, { ...data, creator }).then((res) => {
          getBookList();
          editModal.hide();
          document.querySelector('.edit-form').reset();
        });
      });
    });
  }
  // 4.删除
  // 点击删除 发送请求 再渲染
  if (e.target.classList.contains('del')) {
    axios.delete(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`).then((res) => {
      console.log(res);
      getBookList();
    });
  }
});
