/* 增删改查业务
1.查询业务
2.新增业务
3.编辑业务
4.删除业务
*/
// 外号用于区分你是谁(相当于账户)，这样每个人的图书列表都是不一样的
// 你的操作就不会影响其他人的数据
const creator = '张三'

// 1.查询业务 : ajax请求数据 + 渲染数据

const getBookList = () => {
  // (1)ajax请求数据
  axios.get('http://hmajax.itheima.net/api/books', { params: { creator } }).then(res => {
    console.log(res)
    // (2)渲染数据
    // 固定格式语法:  元素.innerHTML = arr.map().join('')
    document.querySelector('.list').innerHTML = res.data.data.map(item => `
    <tr>
        <td>${item.id}</td>
        <td>${item.bookname}</td>
        <td>${item.author}</td>
        <td>${item.publisher}</td>
        <td>
          <span class="del" data-id="${item.id}">删除</span>
          <span class="edit" data-id="${item.id}">编辑</span>
        </td>
      </tr>
    `).join('')
  })
}

getBookList()

// 2.新增业务

// 2.1 点击添加按钮
// 为什么写在事件外面： 因为new每调用一次就会得到一个新的实例
const addModal = new bootstrap.Modal('.add-modal')

document.querySelector('.plus-btn').addEventListener('click', function () {
  // 弹出模态框
  addModal.show()
})

// 2.2 点击保存按钮(表单提交)
document.querySelector('.add-btn').addEventListener('click', function () {
  // (1)获取表单数据: serialize
  const data = serialize(document.querySelector('.add-form'), { hash: true, empty: true })
  console.log(data)
  // (2)非空校验  item===''  与 !item 等价
  if (Object.values(data).some(item => !item)) {
    alert('输入框不能为空')
    return
  }

  // (3)发送ajax
  axios.post('http://hmajax.itheima.net/api/books', {
    ...data,
    creator
  }).then(res => {
    console.log(res)
    // (4)重新加载列表
    getBookList()
    // 弹窗消失+表单清空
    addModal.hide()
    document.querySelector('.add-form').reset()
  })
})


// 3.编辑业务

// 为什么写在事件外面： 因为new每调用一次就会得到一个新的实例
const editModal = new bootstrap.Modal('.edit-modal')

// 3.1 点击编辑按钮(委托事件)
document.querySelector('tbody').addEventListener('click', function (e) {
  // 判断是不是编辑
  if (e.target.classList.contains('edit')) {
    // (1)弹出模态框
    editModal.show()
    // (2)数据回显： ajax获取点击的详情, 渲染到表单上
    /* 路径参数：不需要?来分隔，而是直接在url后面使用/来连接参数值
    url/参数值
    */
    axios.get(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`).then(res => {
      console.log(res)
      // 数据回显 : 其实页面有四个表单的， id的那个表单不需要用户去填写所有隐藏了
      /* 服务器返回的对象的属性名, 和表单的类名是一样的。于是我产生一个大胆的想法 */
      Object.keys(res.data.data).forEach(item => {
        console.log(item)
        document.querySelector(`.edit-form .${item}`).value = res.data.data[item]
      })
      // document.querySelector('.edit-form .id').value = res.data.data.id
      // document.querySelector('.edit-form .bookname').value = res.data.data.bookname
      // document.querySelector('.edit-form .author').value = res.data.data.author
      // document.querySelector('.edit-form .publisher').value = res.data.data.publisher
    })
  }
})

// 3.2 点击保存按钮
document.querySelector('.edit-btn').addEventListener('click', function () {
  // (1)获取表单数据: serialize
  const data = serialize(document.querySelector('.edit-form'), { hash: true, empty: true })
  console.log(data)
  // (2)非空校验  item===''  与 !item 等价
  if (Object.values(data).some(item => !item)) {
    alert('输入框不能为空')
    return
  }

  // (3)发送ajax
  axios.put(`http://hmajax.itheima.net/api/books/${data.id}`, {
    ...data,
    creator
  }).then(res => {
    console.log(res)
    // (4)重新加载列表
    getBookList()
    // 弹窗消失+表单清空
    editModal.hide()
    document.querySelector('.edit-form').reset()
  })
})

// 4.删除业务 : 委托事件
document.querySelector('tbody').addEventListener('click',function(e){
  // 判断是不是删除按钮
  if( e.target.classList.contains('del') ){
    // (1)获取id发送ajax
    axios.delete(`http://hmajax.itheima.net/api/books/${e.target.dataset.id}`).then(res=>{
      console.log( res )
      // (2)重新加载列表
      getBookList()
    })
  }
})


