import { LightningElement } from 'lwc';
import Account_object from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name';
import Phone_field from '@salesforce/schema/Account.Phone';
// import Location_field from '@salesforce/schema/Account.Location__c';
import Zip_Code_field from '@salesforce/schema/Account.Zip_Code__c';
import Pickup_Address_Field from '@salesforce/schema/Account.Pickup_Address__c';
import Delivery_Address_Field from '@salesforce/schema/Account.Delivery_Address__c';
import Complete_Address_field from '@salesforce/schema/Account.Complete_Address__c';
import Email__c from '@salesforce/schema/Account.Email__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomerDetails extends LightningElement {

    accountObject = Account_object;
    name = Name_field;
    phone = Phone_field;
    // location = Location_field;
    postalCode = Zip_Code_field;
    pickupAddress = Pickup_Address_Field;
    deliveryAddress = Delivery_Address_Field;
    completeAddress = Complete_Address_field;
    emailId = Email__c;
    
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
        
    }

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
        
    }
    
    showToast() {
        const event = new ShowToastEvent({
            message: 'Customer Details Saved Successfully',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
    
}