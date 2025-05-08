import {LightningElement, api} from 'lwc';
export default class PagesComponent extends LightningElement {
    _clickNumber=undefined;
    homePage;
    contactPage;
    mapPage;

    set clickPage(value){
        this._clickNumber = value;
        switch(this._clickNumber){
        case "home": 
            this.homePage=true;
            this.contactPage=false;
            this.mapPage=false;
            break;
        case "contact": 
            this.homePage=false;
            this.contactPage=true;
            this.mapPage=false;
            break;
        case "map": 
            this.homePage=false;
            this.contactPage=false;
            this.mapPage=true;
            break;
        default:
            this.homePage=true;
            this.contactPage=false;
            this.mapPage=false;
            break;
        }

    }

    @api
    get clickPage(){
        return this._clickNumber;
    }


  
    
}