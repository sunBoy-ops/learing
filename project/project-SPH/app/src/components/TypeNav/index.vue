<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <!-- <h1>{{categoryList}}</h1> -->
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div
              class="item"
              v-for="(c1,index) in categoryList"
              :key="c1.categoryId"
            >
              <h3
                @mouseenter="enterIndex(index)"
                :class="{'h3-hover':index==currentIndex}"
              >
                <a href="">{{c1.categoryName}}</a>
              </h3>
              <div
                class="item-list clearfix"
                :style="{'display':currentIndex==index?'block':'none'}"
              >
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a href="">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="c3 in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a href="">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: "TypeNav",
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      currentIndex: undefined,
    };
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 向vuex发送信号
    this.$store.dispatch("categoryList");
  },
  methods: {
    enterIndex(index) {
      this.currentIndex = index;
    },
    leaveIndex() {
      this.currentIndex = undefined;
    },
  },
  computed: {
    ...mapState({
      // mapState 对象写法 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 右侧函数 state 参数，state，就是vuex中 大仓库中的数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style scoped lang="less">
//@import 'xxx.less';引入公共css类
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .h3-hover {
            background-color: skyblue;
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
  }
}
</style>
