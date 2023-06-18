// 1、查询图书列表
// 页面加载 渲染图书列表 封装渲染函数
const creator = 'admin2001';

const getBookList = function () {
  axios
    .get('http://hmajax.itheima.net/api/books', { params: { creator } })
    .then((res) => {
      console.log(res);
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
            <span class="del">删除</span>
            <span class="edit">编辑</span>
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

// document.querySelector('.plus-btn').addEventListener('click', () => {
//   addModal.show();
// });
document.querySelector('.add-btn').addEventListener('click', () => {
  const data = serialize(document.querySelector('.add-form'), { hash: true, empty: true });
  console.log(data);
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
