public with sharing class ImportRepresentativesController {
    @AuraEnabled
    @future
    public static void importRepresentatives (String inputText) {
            List<Representative__c> representativesList = new List<Representative__c>();

            String[] csvLines = new String[]{};
            String[] insertionValues = new String[]{};
            csvLines = inputText.split('\n');
            for(Integer i = 1 ; i < csvLines.size() ; i++){
                Representative__c representative = new Representative__c();
                insertionValues = csvLines[i].split(',');
                representative.Name = insertionValues[0]+' '+insertionValues[1];
                representative.Country__c = insertionValues[2];
                representative.Description__c=insertionValues[3];
                representative.Photo_URL__c=insertionValues[4];
                representativesList.add(representative);
            }
            insert representativesList;
    }
}