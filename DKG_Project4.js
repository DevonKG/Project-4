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
document.write(PhoneNumberFormat("185-252-5766"));
document.write("<br>");

