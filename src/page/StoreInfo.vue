<template>
  <div>
    <van-row>
      <van-col span="3">
        <van-icon name="arrow-left" class="header-icon" size="30px" @click="backClick()" />
      </van-col>
      <van-col span="18">
        <van-search v-model="value" placeholder="想吃什么搜一搜" shape="round" />
      </van-col>
      <van-col span="3">
        <van-icon name="cart-circle" class="header-icon" size="30px" />
      </van-col>
    </van-row>

    <van-tabs v-model="active">
      <van-tab title="点餐">
        <!-- 点餐区域 -->
        <van-divider>{{storesinfo[$route.params.index].name}}</van-divider>
        <br />

        <div>
          <!-- 侧边索引 -->
          <van-col span="4">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item
                v-for="obj in storesinfo[$route.params.index].tags"
                :key="obj.name"
                :title="obj.name"
              />
            </van-sidebar>
          </van-col>
          <!-- 商品展示区域 -->
          <van-col span="20">
            <van-card
              v-for="obj in storesinfo[$route.params.index].goods"
              :key="obj.name"
              :price="obj.price"
              :desc="obj.desc"
              :title="obj.name"
              :thumb="obj.thumb"
              :hidden="showGood(obj.tags)"
            >
              <div slot="footer">
                <van-button round type="info" size="mini">+</van-button>
              </div>
            </van-card>
          </van-col>
        </div>
        <!-- 点餐区域 -->
      </van-tab>
      <van-tab title="评价"></van-tab>
      <van-tab title="商家"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
  computed: {},
  methods: {
    showGood(tags) {
      if (tags.indexOf(this.activeKey) === -1 && this.activeKey !== 0) {
        return true;
      } else {
        return false;
      }
    },
    backClick() {
      this.$router.replace("/home");
      console.log(this.storesinfo[0].tags);
    }
  },
  data() {
    return {
      hid: false,
      activeKey: 0,
      storesinfo: [
        {
          name: "华莱士",
          tags: [
            {
              id: 0,
              name: "全部"
            },
            {
              id: 1,
              name: "推荐"
            },
            {
              id: 2,
              name: "炸鸡们"
            },
            {
              id: 3,
              name: "可乐们"
            },
            {
              id: 4,
              name: "汉堡们"
            }
          ],
          goods: []
        },
        {
          name: "DIO面包店",
          tags: [
            {
              id: 0,
              name: "全部"
            },
            {
              id: 1,
              name: "推荐"
            },
            {
              id: 2,
              name: "儿童餐"
            },
            {
              id: 3,
              name: "成人餐"
            },
            {
              id: 4,
              name: "亲子餐"
            }
          ],
          goods: [
            {
              name: "成人套餐",
              desc: "饥饿度+100",
              price: 1000,
              tags: [3],
              thumb: "http://i2.tiimg.com/703382/c95e7d6d089fb7ef.jpg"
            },
            {
              name: "亲子套餐",
              desc: "培养良好的亲子关系",
              price: 1200,
              tags: [1, 4],
              thumb: "http://i2.tiimg.com/703382/c95e7d6d089fb7ef.jpg"
            },
            {
              name: "儿童套餐",
              desc: "让你的儿子吃的很饱",
              price: 500,
              tags: [2],
              thumb: "http://i2.tiimg.com/703382/c95e7d6d089fb7ef.jpg"
            }
          ]
        },
        {
          name: "星辰据点",
          tags: [
            {
              id: 0,
              name: "全部"
            },
            {
              id: 1,
              name: "推荐"
            },
            {
              id: 2,
              name: "肉食套餐"
            },
            {
              id: 3,
              name: "蔬食套餐"
            },
            {
              id: 4,
              name: "荤素搭配"
            }
          ],
          goods: []
        }
      ]
    };
  }
};
</script>

<style>
.header-icon {
  margin: 10px;
}
</style>