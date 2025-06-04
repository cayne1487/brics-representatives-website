import { LightningElement } from 'lwc';

export default class NavigationBar extends LightningElement {
    pageClick;
 
    handleClick(event){
        this.template.querySelector('c-pages-component').setPage(event.currentTarget.name)
    }
   
}