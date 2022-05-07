<template>
  <div>
    <DetailBanner
      :sight-name="sightName"
      :banner-img="bannerImg"
      :gallary-imgs="gallaryImgs"
    />
    <DetailHeader />
    
    <div class="content">
      <DetailList :list="categoryList" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DetailBanner from './components/DetailBanner.vue';
import DetailHeader from './components/DetailHeader.vue';
import DetailList from './components/DetailList.vue';
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { ref } from 'vue'


export default {
  name: 'RecommendDetail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  setup(){
    const sightName = ref('')
    const bannerImg = ref('')
    const gallaryImgs = ref([])
    const categoryList = ref([])
    const route=useRoute()
    async function getDetailInfo(){
      let res=await axios.get('http://localhost:8080/detail.json', {
          params: {
            id: route.params.id,
          },
        })
          const detailRes = res.data;
          if (detailRes.ret && detailRes.data) {
            sightName.value = detailRes.data.sightName;
            bannerImg.value= detailRes.data.bannerImg;
            gallaryImgs.value = detailRes.data.gallaryImgs;
           categoryList.value= detailRes.data.categoryList;
          }
    }
    onMounted(()=>{
      getDetailInfo()
    })
    return{
      sightName,
      bannerImg,
      gallaryImgs,
      categoryList,
      getDetailInfo
    }
  }
  // data() {
  //   return {
  //     sightName: '',
  //     bannerImg: '',
  //     gallaryImgs: [],
  //     categoryList: [],
  //   };
  // },
  // mounted() {
  //   this.getDetailInfo();
  // },
  // methods: {
  //   getDetailInfo() {
  //     axios
  //       .get('http://localhost:8080/detail.json', {
  //         params: {
  //           id: this.$route.params.id,
  //         },
  //       })
  //       .then((res) => {
  //         const detailRes = res.data;

  //         if (detailRes.ret && detailRes.data) {
  //           this.sightName = detailRes.data.sightName;
  //           this.bannerImg = detailRes.data.bannerImg;
  //           this.gallaryImgs = detailRes.data.gallaryImgs;
  //           this.categoryList = detailRes.data.categoryList;
  //         }
  //       });
  //   },
  // },
};
</script>

<style scoped>
.content {
  height: 50rem;
}
</style>
