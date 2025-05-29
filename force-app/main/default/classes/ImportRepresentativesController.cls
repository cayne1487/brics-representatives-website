public with sharing class ImportRepresentativesController {

    static final Integer FIRST_NAME_INDEX = 0;
    static final Integer LAST_NAME_INDEX = 1;
    static final Integer COUNTRY_INDEX = 2;
    static final Integer DESCRIPTION_INDEX = 3;
    static final Integer PHOTO_URL_INDEX = 4;
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
                representative.Name = insertionValues[FIRST_NAME_INDEX]+' '+insertionValues[LAST_NAME_INDEX];
                representative.Country__c = insertionValues[COUNTRY_INDEX];
                representative.Description__c=insertionValues[DESCRIPTION_INDEX];
                representative.Photo_URL__c=insertionValues[PHOTO_URL_INDEX];
                representativesList.add(representative);
            }
            insert representativesList;
    }
}