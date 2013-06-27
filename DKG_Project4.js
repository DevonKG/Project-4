//alert("JavaScript works!");

/* Devon Gildark
 * SDI Project 4
 * 1306
 */

//1.
function PhoneNumberFormat(theString)
{
    if(theString.indexOf("-")==3 && theString.lastIndexOf("-")==7 && theString.length==12)
{
return true;
}
else {
return false;
}
}
console.log(PhoneNumberFormat("185-252-5766"));
console.log(" ");

//2.
function EmailAddressFormat(theEmail)
{
    if(theEmail.indexOf("@") < theEmail.lastIndexOf("."))
    {
        return true;
    } else 
    {
        return false;
    }
}
console.log(EmailAddressFormat("x@y.z"));
console.log(" ");

//3.
function URLTest(theURL)
{
    if (theURL.slice(0,4)== "http" || theURL.slice(0,5)== "https")
    {
        return true;
    } else
    {
        return false;
    }
}
console.log(URLTest("https://www.google.com"));
console.log(" ");

//4.
function FormatNumber(numberToFormat,precisionDigit)
{
    var newNum = (numberToFormat.toFixed(numberToFormat,precisionDigit));
    return newNum;
}
console.log(FormatNumber(3.1415926535,4));
console.log(" ");

//5.
function largestNextNumber(theArray,theMagicNumber) {

var numberArray = [1,4,7,9,10,14,15];
var magicNumber = 5;
var storedLargeNumber = 1000000;
for (var i = 0 ; i < numberArray.length ; i++)
{
    if (numberArray[i] > magicNumber && numberArray[i] < storedLargeNumber)
    {
    storedLargeNumber = numberArray[i];
    }
}
    return storedLargeNumber;
};
console.log(largestNextNumber([1,4,7,9,10,14,15],5));

//6