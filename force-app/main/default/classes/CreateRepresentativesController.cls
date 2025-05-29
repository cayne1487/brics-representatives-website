public with sharing class CreateRepresentativesController {
    
    @AuraEnabled
    public static void insertNewRepresentative(String name, String description, String photoURL, String country) {
        Representative__c representative = new Representative__c();
        representative.Name = name;
        representative.Description__c = description;
        representative.Photo_URL__c = photoURL;
        representative.Country__c = country;
        insert representative;
    }
}