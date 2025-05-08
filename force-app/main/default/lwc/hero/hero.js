import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class Hero extends LightningElement {
    isVisisble;

    connectedCallback(){
        this.isVisisble=true;
        
    }

    imageURL = IMAGES + '/hero.png';
}