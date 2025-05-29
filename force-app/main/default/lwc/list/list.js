import { LightningElement, api } from 'lwc';
import returnRepsList from '@salesforce/apex/ParseRepresentativesData.returnRepsList';
let pageBegin = 0;
let pageEnd = 6;
let step = 6;

export default class List extends LightningElement {
    representativesFromApex = [];
    representativesList = [];
    searchResults = [];
    paginationState = true;
    pageNumber;
    sortingList = [];
    sortingOrder;
    sortingState;
    sortingArrowName;
    sortingArrowCountry;
    sortingArrowNameVisibility;
    sortingArrowCountryVisibility;

    @api 
    candidateSearch(searchValue){
        
        this.searchResults = [];
        for(let representative of this.representativesFromApex){
            if(representative.Name.includes(searchValue))
                this.searchResults.push(representative);   
        } 
        if(this.searchResults.length === 0){
            this.representativesList = [];
            this.paginationState = false;
            this.template.querySelector('c-snackbar').setSnackbarMessage('No results found! (Try another search term)', false);
        } else{
            this.representativesList = [];
            this.representativesList = this.searchResults; 
            this.paginationState = false;
        }  
        
        
    }

    @api
    clearSearch(){
        pageBegin = 0;
        pageEnd = 6;
        this.pageNumber = 1;
        this.representativesList = this.representativesFromApex.slice(pageBegin,pageEnd);
        this.paginationState = true;
        this.sortingOrder = undefined;
        this.sortingState = false;
        this.sortingArrowName = '';
        this.sortingArrowCountry = '';
    }

    connectedCallback(){
        this.getApexRepresentativeValues();       
    }

    async getApexRepresentativeValues(){
        this.representativesFromApex = await returnRepsList();
        this.representativesList = this.representativesFromApex.slice(pageBegin,pageEnd);
        this.pageNumber = 1;
    } 
    
    handleTileClick(evt) {
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
        this.dispatchEvent(event);
    }

    handleNext(){
        if (pageEnd !== this.representativesFromApex.length){
            pageBegin = pageEnd;
            if(pageEnd === this.representativesFromApex.length-(this.representativesFromApex.length%step)){
                pageEnd = pageEnd+ this.representativesFromApex.length%6;
            } else{
                pageEnd = pageEnd+step;
            }
            if (this.sortingOrder !== undefined){

                this.representativesList = this.sortingList.slice(pageBegin,pageEnd);
            } else{
                this.representativesList = this.representativesFromApex.slice(pageBegin,pageEnd);
            }        
            this.pageNumber++;
        }
    }
    handlePrev(){
        if(this.pageNumber !== 1){
            pageBegin -= step;
        if(pageEnd === this.representativesFromApex.length){
            if (this.representativesFromApex.length%step === 0)
                pageEnd -= step;
            else
            pageEnd -= this.representativesFromApex.length%step;
        } else{
            pageEnd -= step;
        }      
        if (this.sortingOrder !== undefined){
            this.representativesList = this.sortingList.slice(pageBegin,pageEnd);
        }
        else{
            this.representativesList = this.representativesFromApex.slice(pageBegin,pageEnd);
        }
        this.pageNumber--;
        }
    }

    handleSort(event){
        this.sortingState = true;
        this.sortingList = [...this.representativesFromApex];
        if(event.target.name === 'name'){
            this.sortingList.sort((rep1, rep2) =>{
                if (rep1.Name < rep2.Name) {
                    return -1;
                } else if (rep1.Name > rep2.Name) {
                    return 1;
                }
                return 0;
            });
            this.sortingArrowNameVisibility = true;
            this.sortingArrowCountryVisibility = false;
        } else if (event.target.name === 'country'){
            this.sortingList.sort((rep1, rep2) =>{
                if (rep1.Country__c < rep2.Country__c) {
                    return -1;
                } else if (rep1.Country__c > rep2.Country__c) {
                    return 1;
                }
                return 0;
            });
            this.sortingArrowCountryVisibility = true;
            this.sortingArrowNameVisibility = false;
        }
        if(!this.sortingOrder && this.sortingArrowNameVisibility){
            this.sortingArrowName = '↓';
            this.sortingArrowCountry = '';
            this.representativesList = this.sortingList.slice(pageBegin, pageEnd);
            this.sortingOrder = true;
        } else if(this.sortingOrder && this.sortingArrowNameVisibility){
            this.sortingArrowName = '↑';
            this.sortingArrowCountry = '';
            this.representativesList = this.sortingList.reverse().slice(pageBegin, pageEnd);
            this.sortingOrder = false;
        } else if(!this.sortingOrder && this.sortingArrowCountryVisibility){
            this.sortingArrowCountry = '↓';
            this.sortingArrowName = '';
            this.representativesList = this.sortingList.slice(pageBegin, pageEnd);
            this.sortingOrder = true;
        } else if(this.sortingOrder && this.sortingArrowCountryVisibility){
            this.sortingArrowCountry = '↑';
            this.sortingArrowName = '';    
            this.representativesList = this.sortingList.reverse().slice(pageBegin, pageEnd);
            this.sortingOrder = false;
        }
        pageBegin = 0;
        pageEnd = 6;
        this.pageNumber = 1;
    }

}