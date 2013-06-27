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
console.log("<br>");

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
console.log("<br>");

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
console.log("<br>");