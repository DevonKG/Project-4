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
    if(theEmail.indexOf("@") < theEmail.lastIndexOf("."))//lastIndexOf allows periods to be used IN the email address
    {
        return true;
    } else 
    {
        return false;
    }
}
console.log(EmailAddressFormat("x@y.z"));
console.log("<br>");