<script type='text/javascript'>
function formValidator() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var mobilenumber = document.getElementById('mobilenumber');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm')
    {
    if (isNumeric(mobilenumber, "Mobile number is numeric"))
        {
        if (lengthRestriction(mobilenumber,9,13))
            {
            if (isAlphabet(name, "Name is alphabetical"))
                {
                if (isAlphanumeric(password, "Password Alphanumeric"))
                    {
                    if (lengthResttriction(password, 6,12))
                        {
                            return true;   
                        }   
                    }
                }
            }
        }
    }
    return false;
}
 
function isAlphabet(element, helperMessage) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (element.value.match(alphaExp))
    {
        return true;
    }
    else
    {
        alert (helperMessage);
        element.focus();
        return false;
    }
}

function is Alphanumeric(element, helperMessage) {
    var aplphaExp = /^[0-9a-zA-Z]+$/;
    if (element.value.match(alphaExp))
    {
        return true;
    }
    else 
    {
        alert (helperMessage);
        element.focus();
        return false;
    }
}

function lengthRestriction(element, min, max)
{
    var uInput = element.value;
    If (uInput.length >= min && uInput.length <= max)
    {
        return true;
    }
    else
    {
        alert ("Please enter between "+min+" and "+max" characters");
        element.focus();
        return false;
    }
}

function isNumeric(element.helperMessage)
{
    var numericExp = /^[0-9]+$/;
    if (element.value.match(numericExp))
    {
        return true;
    }
    else
    {
        alert(helperMessage);
        element.focus();
        return false;
    }
}
                
</script>
