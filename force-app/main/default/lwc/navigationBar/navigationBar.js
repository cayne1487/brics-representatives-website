import { LightningElement } from 'lwc';

export default class NavigationBar extends LightningElement {
    pageClick;
 

    handleClick(event){
        this.pageClick = event.currentTarget.name;
    }
   
}