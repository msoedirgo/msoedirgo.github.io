function returnformValidation() {
var uorigin = document.validity.origin;
var udestination = document.validity.destination;
var udepartdate = document.validity.departdate;
var unumberadult = document.validity.numberadult;

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
