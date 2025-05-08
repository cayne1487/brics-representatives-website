import { LightningElement} from 'lwc';
import  insertNewRepresentative from '@salesforce/apex/CreateRepresentativesController.insertNewRepresentative';
import importRepresentatives from '@salesforce/apex/ImportRepresentativesController.importRepresentatives';

const REGEXP = /(https?:\/\/.*\.(?:png|jpg))/;

export default class Selector extends LightningElement {
    selectedRepresentative;
    inputValue;
    cancelButtonVisible = false;
    detailVisible = false;
    pageClick;
    firstName;
    lastName;
    country;
    description;
    photoURL;
    createRepDialog;
    imageLink;
    imageVisibility = false;
    imageVisibilityDetail;

    
    renderedCallback(){
        this.createRepDialog=this.template.querySelector('.create-dialog');
        this.firstName=this.template.querySelector('.first-name');
        this.lastName=this.template.querySelector('.last-name');
        this.country=this.template.querySelector('.country');
        this.description=this.template.querySelector('.description');
        this.photoURL=this.template.querySelector('.photo-url');
    }


    handleRepresentativeSelected(evt) {
        this.selectedRepresentative = evt.detail;

        this.detailVisible = true;
    }

    handleKeyPress(event){
        if(event.code === 'Enter'){
            this.template.querySelector('c-list').candidateSearch(event.target.value);
            this.cancelButtonVisible = true;
        }
    }

    handleSearchButton(){
        this.template.querySelector('c-list').candidateSearch(this.refs.searchField.value );
        this.cancelButtonVisible = true;
    }


    handleCancelClick(){
        this.refs.searchField.value = '';
        this.template.querySelector('c-list').clearSearch();
        this.cancelButtonVisible = false;
    }

    detailClose(){
        this.detailVisible = false;
    }

    
        showDialog(){
            this.createRepDialog.showModal();
        }
    
        closeDialog() {
            this.createRepDialog.close();
            this.firstName.value ='';
            this.lastName.value ='';
            this.country.value ='';
            this.description.value ='';
            this.photoURL.value ='';
            this.imageLink='';
        }
    
        handleSubmit(event) {
            event.preventDefault(); 
            insertNewRepresentative({
                name:this.firstName.value+' '+this.lastName.value, 
                description:this.description.value,
                photoURL:this.photoURL.value,
                country:this.country.value
            })
            .then(() => {
                this.firstName.value ='';
                this.lastName.value ='';
                this.country.value ='';
                this.description.value ='';
                this.photoURL.value ='';
                this.imageLink='';
                this.createRepDialog.close();
                this.template.querySelector('c-snackbar').setSnackbarMessage('Successfully added new representative, please refresh to aplly changes', true);
                
        
    
                
            })
            .catch((error) => {
                this.template.querySelector('c-snackbar').setSnackbarMessage('Failed to add new representative!', false);
                console.log(JSON.stringify(error));
            })         

        }
    
        handleClick(event){
            this.pageClick = event.currentTarget.name;
        }
    
        handleURL(event){

            if(REGEXP.test(event.currentTarget.value)){
                this.imageVisibility = true;
                this.imageLink=event.currentTarget.value;
            }
            else{
                this.imageVisibility = false;
            }
        }
    
        
        handleFileUpload(event){
            const REGEX = new RegExp('(.*?).(csv)$', 'i');
            const file = event.target.files[0];
            let text;
            if(file && REGEX.test(file.name)){
                let reader = new FileReader();
                reader.onload = function (e) {
                    text = e.target.result;
                    importRepresentatives({inputText:text});
                    this.template.querySelector('c-snackbar').setSnackbarMessage('Successfully added new representative, please refresh to aplly changes', true);
                 }
                 reader.readAsText(file);
            }
            else{
                this.template.querySelector('c-snackbar').setSnackbarMessage('File not found, or format is not valid',false);
            }
        }

}