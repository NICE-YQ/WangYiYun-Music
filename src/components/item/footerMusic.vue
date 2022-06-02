<template>
    <div class="footerMusic">
        <div class="footerLeft" @click="updataDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div>
                <p>{{playList[playListIndex].al.name}}</p>
                <span>横滑切换</span>
            
            </div>
        </div>
        <div class="footRight">
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>
              <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
              </svg>  
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
        <van-popup v-model:show="detailShow" position="top" :style="{ height: '100%',width:'100%' }">
           22233
        </van-popup >
    </div>
</template>

<script>
    import { mapMutations, mapState } from "vuex";
    export default {
        computed:{
            ...mapState(['playList','playListIndex','isbtnShow','detailShow'])
        },
        mounted(){
            console.log(this.$refs)
        },
        methods:{
            play:function(){
                //判断音乐是否播放
                if(this.$refs.audio.paused){
                    this.$refs.audio.play()
                    this.updataIsbtnShow(false)
                }else{
                    this.$refs.audio.pause();
                    this.updataIsbtnShow(true)
                }
            },
            ...mapMutations(['updataIsbtnShow','updataDetailShow'])
        },
        watch:{
            playListIndex:function(){
                //监听当歌曲下表发生改变时，自动播放歌曲
                this.$refs.audio.autoplay=true;
                if(this.$refs.audio.paused){
                    //本来是暂停状态，切换歌曲时，切换为播放状态 
                    this.updataIsbtnShow(false);
                };
            },
            playList:function(){
                    if(this.isbtnShow){
                        this.$refs.audio.autoplay = true;
                        this.updataIsbtnShow(false)
                    }
                }
        }
    }
</script>

<style lang="less">
    .footerMusic {
        width: 100%;
        height: 1.4rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #999;
        display: flex;
        
        justify-content: space-between;

        .footerLeft {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            div>p{
               font-size: 0.3rem; 
            }
        }
        .footRight{
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 0.2rem;
            .icon{
                width: 0.6rem;
                height: 0.6rem;
            }
        }

    }
</style>