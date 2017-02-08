function bookingvalidation() {
    var uOrigin = localStorage.getItem ("origin");
    var uDestination = localStorage.getItem("destination");

if (cityselect(uOrigin)) {
    if (cityselect(uDestination)) {
    }
}
return false
}

function cityselect(uOrigin) {
    if (uOrigin.value== "Default") {
        alert ('Select your city of origin from the list');
        uOrigin.focus();
        return false;
    }
    else {
         document.write("passed value = "+uOrigin);
    }
}

function cityselect(uDestination) {
    if (uDestination.value== "Default") {
        alert ('Select your city of origin from the list');
        uDestination.focus();
        return false;
    }
    else {
        document.write("passed value = "+uDestination)
    }
}
