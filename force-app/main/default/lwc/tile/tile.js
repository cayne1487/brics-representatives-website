import { LightningElement, api } from 'lwc';

const REGEXP = /(https?:\/\/.*\.(?:png|jpg))/;

export default class Tile extends LightningElement {
    @api representative;
    imageVisibility = true;

    renderedCallback(){
        if(!this.representative.Photo_URL__c || !REGEXP.test(this.representative.Photo_URL__c)){
            this.imageVisibility = false;
        }
    }


    tileClick() {
        const event = new CustomEvent('tileclick', {
            detail: this.representative
        });  
        this.dispatchEvent(event);
    }
}