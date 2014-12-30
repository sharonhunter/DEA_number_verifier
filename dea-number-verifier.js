$(document).ready(function(){
    
   var dea_number = $("#dea_number");
   
   dea_number.on("change", function() {
         var dea_value = $("#dea_number").val();
         var valid = validateDeaNumber(dea_value);
       console.log("validateDeaNumber() returned " + valid);
       });
 });

function validateDeaNumber(dea_number){
    
    var firstLetter = dea_number.charAt(0);
       var acceptedLetters = ["A","B","F","G","M","P","R"];
        
            if (acceptedLetters.indexOf(firstLetter) >= 0){
               console.log("First Letter is an accepted character.");
            }  
            else {
                console.log("First letter is an invalid character.");
                return false;
            }
        // Check that second letter matches first letter of last name
        var lastName = $("#last_name").val();
        var nameLetter = lastName.charAt(0);
        var secondLetter = dea_number.charAt(1);
    
        if (secondLetter === nameLetter) {
           console.log("Name letter and DEA letters match.");
        }
        else {
            console.log("Name letter and DEA letters do not match.");
            return false;
        }  
    
        // Use of - 0 below is to convert strings returned by charAt to numbers so that they can be added together
        // Calculate the sum of the 1st, 3rd and 5th digits
         var firstSum = (dea_number.charAt(2) - 0) + (dea_number.charAt(4) - 0) + (dea_number.charAt(6) - 0);
         
        // Calculate the sum of the 2nd, 4th, and 6th positions
        var secondSum = (dea_number.charAt(3) - 0) + (dea_number.charAt(5) - 0) + (dea_number.charAt(7) - 0);
        var totalSum = secondSum * 2;
        var checkSum = firstSum + totalSum;
        
        // Use modulo % 10 to get ones place
        var checkNum = checkSum % 10;
        var checkDigit = (dea_number.charAt(8) - 0);
        
        if (checkNum === checkDigit){
            console.log("Check digit is correct.");
        }
        else {
            console.log("Check digit is incorrect.");
            return false;
        }
        
    return true;
}