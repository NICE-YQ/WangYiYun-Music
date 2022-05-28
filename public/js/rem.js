function remSize(){
//获取设备宽度
var deviceWidth = document.documentElement.clientWidth || window.innerWidth
//最大不能超过750
if(deviceWidth>=750){
    deviceWidth = 750
}
//最小不能超过320
if(deviceWidth<=320){
    deviceWidth = 320
}
document.documentElement.style.fontSize =(deviceWidth/7.5)+'px'
//设置字体大小
document.querySelector('body').style.fontSize = 0.3+'rem'
}
remSize()
window.onresize = function(){
    //当窗口发生改变时调用
    remSize()
}