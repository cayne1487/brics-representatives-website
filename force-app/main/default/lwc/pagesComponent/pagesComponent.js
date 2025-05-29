import {LightningElement, api} from 'lwc';
export default class PagesComponent extends LightningElement {
    homePageVisible = true;
    contactPageVisible = false;
    mapPageVisible = false;

    @api
    setPage(pageName){
        switch(pageName){
            case "home": 
                this.homePageVisible = true;
                this.contactPageVisible = false;
                this.mapPageVisible = false;
                break;
            case "contact": 
                this.homePageVisible = false;
                this.contactPageVisible = true;
                this.mapPageVisible = false;
                break;
            case "map": 
                this.homePageVisible = false;
                this.contactPageVisible = false;
                this.mapPageVisible = true;
                break;
            default:
                this.homePageVisible = true;
                this.contactPageVisible = false;
                this.mapPageVisible = false;
                break;
            }
    }
}