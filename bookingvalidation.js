function bookingValidation() {
  var uorigin = document.validity.origin;
  var udestination = document.validity.destination;
  var udepartdate = document.validity.departdate;
  var unumberadult = document.validity.numberadult;
  var uname = document.validity.username;
  var ucell = document.validity.phonenumber;

if (cityselect(uorigin)) {
if (cityselect(udestination)) {
if (passenger(unumberadult)) {
}
}
}  
return false;
}

function cityselect(uorigin) {
  if (uorigin.value == "Default") {
    alert ('Select your city of origin from the list');
    uorigin.focus();
    return false;
  }
  else {
    return true;
  }
  
function cityselect(udestination) {
  if (udestination.value == "Default") {
    alert ('Select your city of destination from the list');
    udestination.focus();
    return false;
  }
  else {
    return true;
  }
  
function passenger(unumberadult) {
  if (unumberadult == 0) {
    alert ('Select number of adults');
    unumberadult.focus();
    return false;
  }
  else {
    return true
  }

function allLetter(uname) 
 {  
 var letters = /^[A-Za-z]+$/; 
 if(uname.value.match(letters)) 
 { 
 return true; 
 } 
 else 
 { 
 alert('Username must have alphabet characters only'); 
 uname.focus(); 
 return false; 
 } 
 } 
  
function allnumber(ucell) {
  var number = /^[0-9]+$/;
  if (!ucell.value.match(number)) {
    alert ("Phone number have to be all number");
    return false;
  };
  if (ucell.length < 11) {
    alert ("Your phone number missing some digits");
    return false;
  }
  else {
  return true;
  }
