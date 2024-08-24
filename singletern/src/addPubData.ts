import  {PubSubManager} from './pubSubManager'
let rate = 1 ;
export function AddData() {
    setInterval(() => {
        rate++;
        PubSubManager.getInstance().handleMessage("apple",rate.toString());
   },2000)
}