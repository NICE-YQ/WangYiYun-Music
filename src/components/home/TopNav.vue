<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo1"></use>
            </svg>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style lang="less">
    .topNav {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 65%;
            display:flex;
            height:100%;
            justify-content: space-around;
            align-items: center;
            font-size :0.36rem;
            .active{
                font-weight: 900;
            }
        }
    }
</style>