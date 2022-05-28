<template>
    <div class="footerMusic">
        <div class="footerLeft">
            <img src="" alt="">
            <div>
                <p></p>
                <span>横滑切换</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapState } from "vuex";
    export default {

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
        padding: 0.2rem;
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
        }

    }
</style>