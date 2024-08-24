import  {PubSubManager} from './pubSubManager'
import {AddData} from './addPubData';
  AddData();

PubSubManager.getInstance().userSubscribe("101", "apple");
