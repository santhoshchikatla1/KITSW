//RestrictSpace 
function RestrictSpace() {
    if (event.keyCode == '32') {
        event.returnValue = false;
        return false;
    }
}

//++++++++++++++++++++++++++++++++++++ Begin of restricting multiple spaces //++++++++++++++++++++++++++++++++++++

function MultipleSpaces(str) {
    var name = str.value;
    str.value = name.replace(/ +(?= )/g, '');

}
function nospaces(t) {
    if (t.value.match(/\s/g)) {
        swal("User Alert!", "Sorry you are not allowed to enter any spaces !", "error");
        t.value = t.value.replace(/\s/g, '');
    }
}
function checkSpecialKeys(e) {
    if (e.keycode != 9 && e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40)
        return false;
    else
        return true;
}
//++++++++++++++++++++++++++++++++++++   Begin of restricting multiple spaces    ++++++++++++++++++++++++++++++++++++ 
//--------------------------------------------

/////Funtion to Restrict Length for multiline TextBox////////////////
function checkTextAreaMaxLength(textBox, e, length) {
    var mLen = textBox["MaxLength"];
    if (null == mLen)
        mLen = length;
    var maxLength = parseInt(mLen);
    if (!checkSpecialKeys(e)) {
        if (textBox.value.length > maxLength - 1) {
            if (window.event)//IE
                e.returnValue = false;
            else//Firefox
                e.preventDefault();
        }
    }
}
function ChckPasteCount(charLimit, inputId) {
    var text = window.clipboardData.getData("Text");
    var remainingChars = charLimit - (document.getElementById(inputId).value.length + parseInt(text.length));
    if (parseInt(remainingChars) < 0)
        return false;
    else
        return true;
}
function CountChars(charLimit, inputId, outputId) {
    var remainingChars = charLimit - document.getElementById(inputId).value.length;
    document.getElementById(outputId).innerHTML = remainingChars;
}
////>>>>

function isDateKeytouch(evt) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode == 47) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        return true;
    }
}
function isAlphaNumeric(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 8) return true;

    var keynum;
    var keychar;
    var charcheck = /[a-zA-Z0-9]/;
    if (window.event) // IE
    {
        keynum = e.keyCode;
    }
    else {
        if (e.which) // Netscape/Firefox/Opera
        {
            keynum = e.which;
        }
        else return true;
    }

    keychar = String.fromCharCode(keynum);
    return charcheck.test(keychar);
}
///>>>>>>>>>>

function isNumberKeytouch(evt) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        return true;
    }
}

function isDecimalKeyTouch(evt) {

    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));


    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
        return false;
    }
    else {
        return true;
    }
}

function NamesValidation(evt, obj) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if ((charCode < 48 || (charCode > 57 && charCode < 65) || (charCode > 48 && charCode < 58) || (charCode === 46 && this.value.split('.').length === 2) || (charCode > 90 && charCode < 97) || charCode > 122) && (charCode != 32 && charCode != 46)) {
        return false;
    }
}