import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {
    snackbarMessage;
    

    @api
    setSnackbarMessage(value, isSuccess) {
        let snackbar = this.template.querySelector('.snackbar');
        this.snackbarMessage = value;
        if(isSuccess) {
            snackbar.style.backgroundColor = '#11e911';
        } else {
            snackbar.style.backgroundColor = '#e91130';
        }
        snackbar.classList.add('show');
        setTimeout(() => {
            snackbar.classList.remove('show');
        }, 3000);
    }
}