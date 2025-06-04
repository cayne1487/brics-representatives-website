import { LightningElement, api} from 'lwc';
const REGEXP = /(https?:\/\/.*\.(?:png|jpg))/;
export default class Detail extends LightningElement {
    imageVisibility = false;
    _representative;
    
    set representative(value){
        this._representative = value;
        if(!this._representative.Photo_URL__c || !REGEXP.test(this._representative.Photo_URL__c)){
            this.imageVisibility = false;
        }
        else{
            this.imageVisibility = true;
        }
    }

    @api
    get representative(){
        return this._representative;
    }
    
    handleClose(){
        this.dispatchEvent(new CustomEvent('close'));
    }
    
    
}