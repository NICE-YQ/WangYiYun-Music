import { Button,Swipe, SwipeItem ,Popup} from 'vant';
//把引入的组件引入到一个数组中
let plugin = [
    Button,Swipe, SwipeItem,Popup
]
 export default function getVant(app){
    plugin.forEach(item=>{
        return app.use(item)
    })
}