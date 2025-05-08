public with sharing class ParseRepresentativesData {
    @AuraEnabled(cacheable=true)
    public static List<Representative__c> returnRepsList(){
        return [
            SELECT Id,
                Name, 
                Photo_URL__c, 
                Description__c,
                Country__c
            FROM Representative__c 
            WITH SECURITY_ENFORCED
        ];
        
    }
}