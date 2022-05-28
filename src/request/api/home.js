import service from "..";
//获取轮播图首页数据
export  function getBanner(){
    return service({
        method:'GET',
        url:'banner?type=2'
    })
}
export function getMusicList(){
    return service({
        method:'GET',
        url:'personalized?limit=10'
    })
}