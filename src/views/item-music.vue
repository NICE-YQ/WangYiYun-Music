<template>
    <div id="item-music">
       <itemMusicTop :playlist="state.playlist"></itemMusicTop>
       <itemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"></itemMusicList>
    </div>
</template>

<script >
    import{useRoute}from 'vue-router'
    import{onMounted,reactive}from 'vue'
    import{getMusicItemList,getItemList} from '@/request/api/itemMusic.js'
    import itemMusicTop from '@/components/item/itemMusicTop.vue'
    import itemMusicList from '@/components/item/itemMusicList.vue'
    
export default {
    setup(){
        const state = reactive({
            playlist:{}, //歌单详情页数据
            itemList:[],//歌曲列表
        })
        onMounted(async()=>{
           let id=useRoute().query.id;
           //console.log(id);
           //获取歌单详情
           let res = await getMusicItemList(id)
           //console.log(res);
           state.playlist = res.data.playlist;
            //获取歌单列表
            let result= await getItemList(id);
           // console.log(result);
           state.itemList = result.data.songs
            //防止页面刷新 数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
           

        });
        return{
            state
        }
    },
    components:{
        itemMusicTop,
        itemMusicList
    }
}
</script>

<style >

</style>
