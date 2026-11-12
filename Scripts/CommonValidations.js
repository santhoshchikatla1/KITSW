function ValidInteger(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
        if (theField.value != "") {
            //if (theField.value.charAt(0) == '0') {
            //         Notificationtoastr("User Alert!", "Enter " + paraName + " correctly");
            //    theField.focus();
            //    return false;
            //}


            //Added by Naveen B On 11/12/2018
            if (theField.value.length <= minlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            if (theField.value.length >= maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxlength + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}
function ValidInteger_Old(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {
            if (theField.value.charAt(0) == '0') {
                Notificationtoastr("User Alert!", "Enter " + paraName + " correctly!", "error");
                theField.focus();
                return false;
            }
            msg = validateField(theField, 'INT', minlength, maxlength, paraName, '');
            if (msg.length > 0) {
                Notificationtoastr(msg);
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}


function ValidFloat(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {
            if (theField.value.charAt(0) == '0') {
                Notificationtoastr("User Alert!", "Enter " + paraName + " correctly!", "error");
                theField.focus();
                return false;
            }
            msg = validateFloatField(theField, paraName, 'TRUE', minlength, maxlength);
            if (msg.length > 0) {
                Notificationtoastr("User Alert!", + msg + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    //}
    return true;
}
//Name start
function ValidName(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        var fieldValue = theField.value;
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
        var ApplicantNAME = fieldValue;
        if (ApplicantNAME != "") {
            var regex = /^[A-Za-z./ ]+$/;
            if (!regex.test(ApplicantNAME)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            if (ApplicantNAME.length <= minlength || ApplicantNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than  " + maxlength + " characters!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            var re = /^[a-zA-Z]/;
            if (!re.test(ApplicantNAME.charAt(0))) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets Initially!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
        }
    }
    return true;
}

function ValidNamecomma(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        var fieldValue = theField.value;
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var ApplicantNAME = fieldValue;
        if (ApplicantNAME != "") {
            var regex = /^[A-Za-z0-9-, ]+$/;
            if (!regex.test(ApplicantNAME)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            if (ApplicantNAME.length <= minlength || ApplicantNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than  " + maxlength + " characters!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            var re = /^[a-zA-Z]/;
            if (!re.test(ApplicantNAME.charAt(0))) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets Initially!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
        }
    }
    return true;
}

function ValidNameVillage(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        var fieldValue = theField.value;
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var ApplicantNAME = fieldValue;
        if (ApplicantNAME != "") {
            var regex = /^[A-Za-z0-9- ]+$/;
            if (!regex.test(ApplicantNAME)) {
                Notificationtoastr("User Alert!", "" + paraName + " not valid !", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            if (ApplicantNAME.length <= minlength || ApplicantNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than  " + maxlength + " characters!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            re = /[a-zA-Z]/;
            if (!re.test(theField.value)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}


function ValidNameMedia(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        var fieldValue = theField.value;
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var ApplicantNAME = fieldValue;
        if (ApplicantNAME != "") {
            var regex = /^[A-Za-z0-9- ]+$/;
            if (!regex.test(ApplicantNAME)) {
                Notificationtoastr("User Alert!", "" + paraName + " not valid !", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            if (ApplicantNAME.length <= minlength || ApplicantNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than  " + maxlength + " characters!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            re = /[a-zA-Z]/;
            if (!re.test(theField.value)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}
//Name End
function ValidNamesubject(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        var fieldValue = theField.value;
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var ApplicantNAME = fieldValue;
        if (ApplicantNAME != "") {
            var regex = /^[A-Za-z.,/ ]+$/;
            if (!regex.test(ApplicantNAME)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            if (ApplicantNAME.length <= minlength || ApplicantNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than  " + maxlength + " characters!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
            var re = /^[a-zA-Z]/;
            if (!re.test(ApplicantNAME.charAt(0))) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain only Alphabets Initially!", "error");
                theField.focus();
                fieldValue = "";
                return false;
            }
        }
    }
    return true;
}
//Dropdown Start
function CheckDropDownList(theField_txtname, paraName) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (theField.selectedIndex == 0) {
            //Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
            Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
            theField.focus();
            return false;
        }
        if (theField.selectedIndex == -1) {
            //Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
            Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    return true;
}

//dropdownlist not mandatory start
function CheckDropDownListoptional(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "O") {
        if (theField != null) {
            if (theField.selectedIndex == 100) {
                //Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
                Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
    }
    return true;
}
//dropdownlist not mandatory end
//Dropdown End


//Doorno start
function ValidDoorNo(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {
            var doorno = theField.value;
            var reg = /^[A-Za-z0-9.,-/ ]+$/;
            if (!reg.test(doorno)) {
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            var re = /[1-9]/;
            if (!re.test(doorno)) {
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}
//Doorno end


//Certificate Number start
function ValidCertificateNumber(theField_txtname, paraName, ismandatory, minlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {
            var doorno = theField.value;
            var reg = /^[A-Za-z0-9.,-/ ]+$/;
            if (!reg.test(doorno)) {
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            var re = /[1-9]/;
            if (!re.test(doorno)) {
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }

            if (theField.value.length <= minlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }



    }
    return true;
}
//Doorno end


//Locality Start
function ValidLocality(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var APPNAME = theField.value;
        if (APPNAME != "") {
            for (var i = 0; i <= (APPNAME.length - 1); i++) {
                var theChar = APPNAME.substring(i, i + 1);
                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '/' || theChar == '.') || (theChar == ',' || theChar == '&') || (theChar == '(' || theChar == ')') || (theChar == '-' || theChar == ':'))) {
                    Notificationtoastr("User Alert!", "Enter alphabets and this special characters(.,/;()&-) only " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
            if (theField.value.charAt(0) == " ") {
                Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == '-') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == ' ') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.')) {
                Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            re = /[a-zA-Z]/;
            if (!re.test(theField.value)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}
//Locality end


//Remarks Start
function ValidRemarks(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '&') || (theChar == '/') || (theChar == ',') || (theChar == '.') || (theChar == '(') || (theChar == ')') || (theChar == ':') || (theChar == '-'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[a-zA-Z]/;
        if (!re.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
    }
    //}
    return true;
}
//Remarks End
//Passport validation start

function ValidPassport(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        var PAS = APPNAME.substring(0, 3);
        re = /[a-zA-Z]/;
        if (!re.test(PAS)) {
            Notificationtoastr("User Alert!", "" + paraName + " must start with alphabet !", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        res = /[0-9]/;
        if (!res.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }
    return true;
}
//passportvalidation end
//voterid validation start
function ValidVoterid(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        res = /[a-zA-Z]/;
        if (!res.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }
    return true;
}
//voterid vlidation end
//driving licence validation start
function ValidDrivingLicence(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        res = /[a-zA-Z]/;
        if (!res.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }
    return true;
}

function Validpatent(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == '-') || (theChar == '/'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        //res = /[a-zA-Z]/;
        //if (!res.test(theField.value)) {
        //    Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
        //    theField.focus();
        //    theField.value = "";
        //    return false;
        //}

    }
    return true;
}

function ValidPatent(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        //res = /[a-zA-Z]/;
        //if (!res.test(theField.value)) {
        //    Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
        //    theField.focus();
        //    theField.value = "";
        //    return false;
        //}

    }
    return true;
}
function ValidAICTEID(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        //for (var i = 0; i <= (APPNAME.length - 1); i++) {
        //    var theChar = APPNAME.substring(i, i + 1);
        //    if (!((theChar >= '0' && theChar <= '9'))) {
        //        Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
        //        theField.focus();
        //        //theField.value = "";
        //        return false;
        //    }
        //}
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(1) != "-") {
            Notificationtoastr("User Alert!", "" + paraName + " " + " is not valid !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
       
    }
    return true;
}
function ValidVIDWANID(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        //for (var i = 0; i <= (APPNAME.length - 1); i++) {
        //    var theChar = APPNAME.substring(i, i + 1);
        //    if (!((theChar >= '0' && theChar <= '9'))) {
        //        Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
        //        theField.focus();
        //        //theField.value = "";
        //        return false;
        //    }
        //}
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    return true;
}
function ValidORCIDID(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        //if (theField.value.charAt(0) == "0") {
        //    Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
        //    theField.focus();
        //    theField.value = "";
        //    return false;
        //}
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if ((theField.value.charAt(4) != "-") && (theField.value.charAt(9) != "-") && (theField.value.charAt(14) != "-")) {
            Notificationtoastr("User Alert!", "" + paraName + " " + " is not valid !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if ((fieldValue.charAt(0) == "0") && (fieldValue.charAt(1) == "0") && (fieldValue.charAt(2) == "0") &&
            (fieldValue.charAt(3) == "0") && (fieldValue.charAt(4) == "-") && (fieldValue.charAt(5) == "0") &&
            (fieldValue.charAt(6) == "0") && (fieldValue.charAt(7) == "0") && (fieldValue.charAt(8) == "0") &&
            (fieldValue.charAt(9) == "-") && (fieldValue.charAt(10) == "0") && (fieldValue.charAt(11) == "0") &&
            (fieldValue.charAt(12) == "0") && (fieldValue.charAt(13) == "0") && (fieldValue.charAt(14) == "-")
            && (fieldValue.charAt(15) == "0") && (fieldValue.charAt(16) == "0") && (fieldValue.charAt(17) == "0") && (fieldValue.charAt(18) == "0")) {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

    }
    return true;
}
function ValidRESEARCHERID(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        var PAS = APPNAME.substring(0, 1);
        re = /[a-zA-Z]/;
        if (!re.test(PAS)) {
            Notificationtoastr("User Alert!", "" + paraName + " must start with alphabet !", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }
    return true;
}
function ValidGOOGLESCHOLARID(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == "0") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9'))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                //theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with special character!", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters", "error");
            theField.focus();
            //theField.value = "";
            return false;
        }
       
        res = /[a-zA-Z]/;
        if (!res.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }
    return true;
}
//driving licence validation end
//Pincode start

//ValidDOI
function ValidDOI(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var PosPincode = theField.value;
        //var regex = /^[0-9/-.]+$/;
        var regex = /^[A-Za-z0-9-./:_]+$/;
        //var regex = /^[0-9-./]+$/;
        if (!regex.test(PosPincode)) {
            Notificationtoastr("User Alert!", "Please Enter valid " + paraName + "!", "error");
            theField.focus();
            return false;
        }
        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.') || (fieldValue.charAt(0) == ':')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        
    }
   
    return true;
}
function ValidPincode(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    /* if (theField != null) {*/
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var PosPincode = theField.value;
        var regex = /^[0-9]+$/;
        if (!regex.test(PosPincode)) {
            Notificationtoastr("User Alert!", "Please Enter valid 6 digits " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (PosPincode.charAt(0) != "5") {
            Notificationtoastr("User Alert!", "Please Enter valid 6 digits  " + paraName + " starting with 5 !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (PosPincode.length < 6) {
            Notificationtoastr("User Alert!", "Enter 6 digits  " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    //}
    return true;
}

//pincode end

function ValidAddressLines(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '&') || (theChar == '_') || (theChar == '/') || (theChar == ',') || (theChar == '.') || (theChar == '(') || (theChar == ')') || (theChar == ':') || (theChar == '-') || (theChar == ';') || (theChar == '!') || (theChar == ''))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&')||(APPNAME.charAt(0) == '') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
                        Notificationtoastr(paraName + " should not start with special character");
                        theField.focus();
                        theField.value = "";
                        return false;
                    }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[a-zA-Z]/;
        if (!re.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    //}
    return true;
}

function ValidAddressLinesorg(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') ||  (theChar == ',') || (theChar == '.')|| (theChar == ''))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr(paraName + " should not start with special character");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[a-zA-Z]/;
        if (!re.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    //}
    return true;
}

function Validweblink(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    var APPNAME = theField.value;
    if (APPNAME != "") {
        if (theField.value.charAt(0) == " ") {
            Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        for (var i = 0; i <= (APPNAME.length - 1); i++) {
            var theChar = APPNAME.substring(i, i + 1);
            if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '&') || (theChar == '_') || (theChar == '/') || (theChar == ',') || (theChar == '.') || (theChar == '(') || (theChar == ')') || (theChar == ':') || (theChar == '-') || (theChar == ';') || (theChar == '!') || (theChar == '') || (theChar == '?') || (theChar == '='))) {
                Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
        if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            Notificationtoastr(paraName + " should not start with special character");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[a-zA-Z]/;
        if (!re.test(theField.value)) {
            Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    //}
    return true;
}


//Date Start
function ValidDate(dob_txtname, paraName, ismandatory, compToCurrDate, ServerDate) {
    var dob = document.getElementById(dob_txtname);
    if (dob != null) {
        var DOB = dob.value;

        if (ismandatory == "M") {
            if (dob.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                dob.focus();
                return false;
            }
        }

        if (DOB != "") {

            msg = validateDate(dob, paraName, compToCurrDate);
            if (msg.length > 0) {

                Notificationtoastr("User Alert!", + msg + "!", "error");

                dob.focus();
                //dob.value = "";
                return false;
            }
            if (document.getElementById(ServerDate) != null) {
                var arr = fieldValue.split("/");
                locDay = arr[0];
                locMonth = arr[1];
                locYear = arr[2];
                var kk = Server_isPastDate(locDay, locMonth, locYear, document.getElementById(ServerDate).value);
                if (kk.length > 0) {
                    Notificationtoastr("User Alert!", + msg + "!", "error");
                    dob.focus();
                    //dob.value = "";
                    return false;
                }
            }
            else {
                today = new Date();
            }
        }
    }
    return true;
}
function Server_isPastDate(Intfrom_day, Intfrom_month, Intfrom_year, ServerDate) {
    today = new Date(ServerDate);
    var locDay = today.getDate();
    var locMonth = today.getMonth();
    var locYear = today.getFullYear();

    //check if the browser is netscape, add 1900 to year
    if (navigator.appName.indexOf("Netscape") != -1)
        locYear = locYear + 1900;

    locMonth++;

    locDay = GetInt(locDay, 10);

    var isGreaterThan = compare_date(Intfrom_day, Intfrom_month, Intfrom_year, locDay, locMonth, locYear);
    if (isGreaterThan)
        return false;
    else
        return true;
}
//Date end

//New Date Validation
function ValidateDate(fieldvalue, paraName, ismandatory) {
    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;
        }
    }
    if (dob.value != "") {
        var today = new Date();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;
            }

            var aFromDate = fBDate1.value.split("/");
            var fdd1 = aFromDate[0]; //get the day part- From date
            var fmm1 = aFromDate[1]; //get the month part- From date
            var fyyyy1 = aFromDate[2]; //get the year part- From date

            if (fyyyy1 <= "1900") {
                // Notificationtoastr('Please Enter Date after 1900');
                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;
            }

            var DOB = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));
            if (DOB >= today) {
                Notificationtoastr("User Alert!", "" + paraName + " " + "should be a date prior to the current date !", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;
            }
        }
    }
    return true;
}

// Mobile Number Start
function ValidMobileNumber(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);


    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;

            }
        }
        if (theField.value != "") {
            var Mobile = theField.value;
            var Reg = /^[0-9]+$/;
            if (!Reg.test(Mobile)) {
                Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName + "!", "error");
                theField.value = "";
                theField.focus();
                return false;
            }
            if (Mobile.length != 10) {
                Notificationtoastr("User Alert!", "" + paraName + " should be Ten Digits !", "error");
                theField.focus();
                return false;
            }
            if (Mobile.charAt(0) == "0") {
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                theField.value = "";
                theField.focus();
                return false;
            }
            if (Mobile.charAt(0) != "9" && Mobile.charAt(0) != "8" && Mobile.charAt(0) != "7" && Mobile.charAt(0) != "6") {
                Notificationtoastr("User Alert!", "" + paraName + " should start with 6/7/8/9 !", "error");
                theField.value = "";
                theField.focus();
                return false;
            }
        }
    }
    return true;
}

// Mobile Number End
//pancard validation start
//if ($("#ContentPlaceHolder1_txtChkPanCard").val().trim() == '') {
//    isValid = false;
//    AddValidationCustom("Please Enter PAN Card Number", $("#ContentPlaceHolder1_txtChkPanCard"));
//    return false;
//}
//if ($("#ContentPlaceHolder1_txtChkPanCard").val() != '') {
//    var regex = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;
//    if (!regex.test($("#ContentPlaceHolder1_txtChkPanCard").val())) {
//        isValid = false;
//        AddValidationCustom("Please enter valid PAN Card Number", $("#ContentPlaceHolder1_txtChkPanCard"));
//        return false;
//    }
//    if ($("#ContentPlaceHolder1_txtChkPanCard").val().length != 10) {
//        isValid = false;
//        AddValidationCustom("PAN Card Number Should be 10 Digits", $("#ContentPlaceHolder1_txtChkPanCard"));
//        return false;
//    }
//}
function ValidPancard(theField_txtname, paraName, ismandatory) {
    var theField = document.getElementById(theField_txtname);
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;

        }
    }
    if (theField.value != "") {
        var Pan = theField.value;
        var Reg = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/;
        if (!Reg.test(Pan)) {
            Notificationtoastr("User Alert!", "Please enter valid " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (Pan.length != 10) {
            Notificationtoastr("User Alert!", "" + paraName + " should be Ten Digits !", "error");
            theField.focus();
            return false;
        }

    }

    return true;
}
//pancard validation end
//Aadhaar Number Start

function ValidAadharNo(theField_txtname, ismandatory) {

    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == 'M') {
            if (theField.value.trim() == "") {
                Notificationtoastr("User Alert!", "Please Enter the Aadhaar No.!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }

        if (theField.value != "") {

            if (theField.value.length != "12") {
                Notificationtoastr("User Alert!", "Aadhaar No. (UID) must contains 12 digits !", "error");
                theField.focus();
                return false;
            }

            var cc = validateVerhoeff(theField.value);
            if (cc != 0) {
                Notificationtoastr("User Alert!", "Please Enter Correct Aadhaar No. (UID) !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }

            var aadharCard = validateVerhoeff(theField.value);
            for (var i = 0; i <= (aadharCard.length - 1); i++) {
                var theChar = aadharCard.substring(i, i + 1);
                if (!((theChar >= '0' && theChar <= '9'))) {
                    Notificationtoastr("User Alert!", "Enter Aadhaar No. Correctly !", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }
    }
    return true;
}

function validateVerhoeff(num) {

    var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];

    // The permutation table
    var p = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];

    // The inverse table
    var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

    var cc;
    var c = 0;
    var myArray = StringToReversedIntArray(num);
    for (var i = 0; i < myArray.length; i++) {

        c = d[c][p[(i % 8)][myArray[i]]];
    }
    cc = c;
    return cc;
}
function StringToReversedIntArray(num) {
    var myArray = [num.length];
    for (var i = 0; i < num.length; i++) {
        myArray[i] = (num.substring(i, i + 1));
    }
    myArray = Reverse(myArray);
    return myArray;
}
function Reverse(myArray) {
    var reversed = [myArray.length];
    for (var i = 0; i < myArray.length; i++) {
        reversed[i] = myArray[myArray.length - (i + 1)];
    }
    return reversed;
}

//Aadhaar Number End

//Files Uploads start

function ValidFileUpload(chkname, filename, paramName, ismandatory) {
    if (document.getElementById(chkname) != null) {
        if (ismandatory == 'M') {
            if (document.getElementById(chkname).checked == false) {
                Notificationtoastr("User Alert!", "Please Check " + paramName + "!", "error");
                document.getElementById(chkname).focus();
                return false;
            }
        }
        if (document.getElementById(chkname).checked == true) {
            if ((document.getElementById(filename).value == "")) {
                Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
                document.getElementById(filename).focus();
                return false;
            }

            var x = document.getElementById(filename).value;
            var ar_name = x.split('.');

            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if (ar_name[1].toLowerCase() != "pdf") {
                        Notificationtoastr("User Alert!", "Please upload only Pdf files for " + paramName + "!", "error");
                        document.getElementById(filename).value = "";
                        return false;
                    }
                }
                else {
                    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                    document.getElementById(filename).value = "";
                    return false;
                }
            }
            var re = /[!@#$%^&*(),<>']/;
            if (re.test(x)) {
                Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
    }
    return true;
}

function ValidFileUploadpdf(filename, paramName, ismandatory) {

    if (ismandatory == 'M') {

        if ((document.getElementById(filename).value == "")) {
            Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
            document.getElementById(filename).focus();
            return false;
        }
    }
    if ((document.getElementById(filename).value != "")) {
        var fileSize = document.getElementById(filename).files[0];
        if (fileSize.size > 1048576) {
            Notificationtoastr("User Alert!", " Selected File Size Exceeds 1 MB ", "error");
            //Notificationtoastr("User Alert!", +paramName + "File Size Exceeds 500KB", "error");
            //Notificationtoastr("User Alert!", + paramName + "Please upload file for", "error");
            document.getElementById(filename).focus();
            return false;
        }

    }
    var x = document.getElementById(filename).value;
    var ar_name = x.split('.');

    if (ar_name != null) {
        if (ar_name.length == "2") {
            if (ar_name[1].toLowerCase() != "pdf") {
                Notificationtoastr("User Alert!", "Please upload only Pdf files for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
        else {
            Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
            document.getElementById(filename).value = "";
            return false;
        }
    }
    var re = /[!@#$%^&*(),<>']/;
    if (re.test(x)) {
        Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
        document.getElementById(filename).value = "";
        return false;
    }


    return true;
}

function ValidFileUploadpdfN(filename, paramName, ismandatory) {

    if (ismandatory == 'M') {

        if ((document.getElementById(filename).value == "")) {
            Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
            document.getElementById(filename).focus();
            return false;
        }
    }
    if ((document.getElementById(filename).value != "")) {
        var fileSize = document.getElementById(filename).files[0];
        if (fileSize.size > 1048576) {
            Notificationtoastr("User Alert!", " Selected File Size Exceeds 1 MB ", "error");
            //Notificationtoastr("User Alert!", +paramName + "File Size Exceeds 500KB", "error");
            //Notificationtoastr("User Alert!", + paramName + "Please upload file for", "error");
            document.getElementById(filename).focus();
            return false;
        }

    }
    var x = document.getElementById(filename).value;
    var ar_name = x.split('.');

    if (ar_name != null) {
        if (ar_name.length == "2") {
            if (ar_name[1].toLowerCase() != "pdf") {
                Notificationtoastr("User Alert!", "Please upload only Pdf files for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
        //else {
        //    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
        //    document.getElementById(filename).value = "";
        //    return false;
        //}
    }
    //var re = /[!@#$%^&*(),<>']/;
    //if (re.test(x)) {
    //    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
    //    document.getElementById(filename).value = "";
    //    return false;
    //}


    return true;
}

function ValidFileUploadjpg(filename, paramName, ismandatory) {

    if (ismandatory == 'M') {

        if ((document.getElementById(filename).value == "")) {
            Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
            document.getElementById(filename).focus();
            return false;
        }
    }
    if ((document.getElementById(filename).value != "")) {
        var fileSize = document.getElementById(filename).files[0];
        if (fileSize.size > 512000) {
            //Notificationtoastr("User Alert!",+paramName+" File Size Exceeds 500KB", "error");
            //Notificationtoastr("User Alert!", + paramName + "Please upload file for", "error");
            Notificationtoastr("User Alert!", " Selected File Exceeds 500KB ", "error");
            document.getElementById(filename).focus();
            return false;
        }

    }
    var x = document.getElementById(filename).value;
    var ar_name = x.split('.');

    if (ar_name != null) {
        if (ar_name.length == "2") {
            if (!((ar_name[ar_name.length - 1].toLowerCase() == "jpeg") || (ar_name[ar_name.length - 1].toLowerCase() == "jpg"))) {
                Notificationtoastr("User Alert!", "Please upload only JPG/JPEG files for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }

        }
        else {
            Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
            document.getElementById(filename).value = "";
            return false;
        }
    }
    var re = /[!@#$%^&*(),<>']/;
    if (re.test(x)) {
        Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
        document.getElementById(filename).value = "";
        return false;
    }


    return true;
}

//Files Uploads end

/////Funtion to Restrict Length for multiline TextBox Start////////////////
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
    if (remainingChars > -1) {
        document.getElementById(outputId).innerHTML = remainingChars;
    }
}
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

//RationCard Validation
function ValidateRationCard(FieldName, paraName, ismandatory) {
    var RationCard = document.getElementById(FieldName);

    if (RationCard.value != "") {
        if (ismandatory == "M") {
            if (RationCard.value == "") {
                Notificationtoastr("User Alert!", "Please enter " + "  " + paraName + "!", "error");
                RationCard.focus();
                return false;
            }
        }
        for (var i = 0; i <= (RationCard.value.length - 1); i++) {
            var theChar = RationCard.value.substring(i, i + 1);

            if (!((theChar >= '0' && theChar <= '9') || (theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z'))) {
                Notificationtoastr("User Alert!", "Enter " + " " + paraName + " " + "Correctly !", "error");
                RationCard.focus();
                RationCard.value = "";
                return false;
            }
        }
        if (RationCard.value.length < 15) {
            Notificationtoastr("User Alert!", "Enter 15 digits " + paraName + "!", "error");
            RationCard.focus();
            RationCard.value = "";
            return false;
        }
    }
    //var rationcardNo = document.getElementById('<%= txtRationCard.ClientID %>').value;
    if (RationCard.value != "") {
        var theChar = RationCard.value.substring(0, 3);
        var thechar1 = RationCard.value.substring(3, 16);
        if ((theChar != 'WAP') && (theChar != 'wap') && (theChar != 'YAP') && (theChar != 'yap') && (theChar != 'AAP') && (theChar != 'aap') && (theChar != 'PAP') && (theChar != 'pap') && (theChar != 'RAP') && (theChar != 'rap') && (theChar != 'TAP') && (theChar != 'tap') || (thechar1 == '000000000000')) {
            Notificationtoastr("User Alert!", "Please Enter" + paraName + " " + "Correctly starting with WAP,PAP,AAP ..!", "error");
            RationCard.focus();
            RationCard.value = "";
            return false;
        }


        re = /[0-9]/;
        if (!re.test(RationCard.value)) {

            Notificationtoastr("User Alert!", "" + paraName + " " + " Must Contain at least one number !", "error");
            RationCard.focus();
            RationCard.value = "";
            return false;
        }
    }
    return true;

}
/////Funtion to Restrict Length for multiline TextBox End////////////////

//Email Validation
function ValidateEmailID(FieldName, paraName, ismandatory) {
    var Email = document.getElementById(FieldName);

    if (Email.value != "") {
        if (ismandatory == "M") {
            if (Email.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                Email.focus();
                return false;
            }
        }

        var filter = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var num = /^([^0-9!#$%^&*(-)_~`=+{}?]*)$/;
        var email = document.getElementById(FieldName);
        if (!num.test(email.value.charAt(0))) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }

        if (!filter.test(email.value)) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }

        var Email1 = email.value.split('@')
        var Email2 = Email1[1];

        var count;
        var Domains = ["gmail.com", "yahoo.in", "yahoo.co.in", "hotmail.com", "gmail.co.in", "tcs.com"];
        for (var i = 0; i < Domains.length; i++) {
            if (Email2.toUpperCase() == Domains[i].toUpperCase()) {
                count = 1;
                break;
            }
            else {
                count = 0;
            }
        }
        if (count == '0') {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }
    }
    return true;
}

function ValidateOfficialEmailID(FieldName, paraName, ismandatory) {
    var Email = document.getElementById(FieldName);

    //if (Email.value != "") {
        if (ismandatory == "M") {
            if (Email.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                Email.focus();
                return false;
            }
        }
    if (Email.value != "") {
        var filter = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var num = /^([^0-9!#$%^&*(-)_~`=+{}?]*)$/;
        var email = document.getElementById(FieldName);
        if (!num.test(email.value.charAt(0))) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }

        if (!filter.test(email.value)) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }

        var Email1 = email.value.split('@')
        var Email2 = Email1[1];

        var count;
        var Domains = ["Kitsw.ac.in"];
        for (var i = 0; i < Domains.length; i++) {
            if (Email2.toUpperCase() == Domains[i].toUpperCase()) {
                count = 1;
                break;
            }
            else {
                count = 0;
            }
        }
        if (count == '0') {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }
    }
    return true;
}



//Added by Tulasi on 25/08/2020
//function ValidIntegerValue(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {
//    var theField = document.getElementById(theField_txtname);
//    if (theField != null) {
//        if (ismandatory == "M") {
//            if (theField.value == "") {
//                     Notificationtoastr("User Alert!", "Please enter " + paraName + "");
//                theField.focus();
//                return false;
//            }
//        }
//        if (theField.value != "") {
//            var num = theField.value;
//            var Reg = /^[0-9]+$/;
//            if (!Reg.test(num)) {
//                     Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName);
//                theField.value = "";
//                theField.focus();
//                return false;
//            }
//            if (theField.value.charAt(0) == '0') {
//                     Notificationtoastr("User Alert!", "Enter " + paraName + " correctly");
//                theField.focus();
//                return false;
//            }
//            //Added by Naveen B On 11/12/2018
//            if (parseInt(theField.value) < minvalue) {
//                Notificationtoastr(paraName + " should be greater than or equal to" + minvalue);
//                theField.focus();
//                theField.value = "";
//                return false;
//            }
//            if (parseInt(theField.value) > maxvalue) {
//                Notificationtoastr(paraName + " should be less than " + maxvalue);
//                theField.focus();
//                theField.value = "";
//                return false;
//            }

//        }

//    }
//    return true;
//}


function ValidAddressLines(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var APPNAME = theField.value;
        if (APPNAME != "") {
            if (theField.value.charAt(0) == " ") {
                Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }

            for (var i = 0; i <= (APPNAME.length - 1); i++) {
                var theChar = APPNAME.substring(i, i + 1);
                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '&') || (theChar == '_') || (theChar == '/') || (theChar == ',') || (theChar == '.') || (theChar == '(') || (theChar == ')') || (theChar == ':') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
            //            if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            //                Notificationtoastr(paraName + " should not start with special character");
            //                theField.focus();
            //                theField.value = "";
            //                return false;
            //            }
            if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            re = /[a-zA-Z]/;
            if (!re.test(theField.value)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}

function ValidateEmailID1(FieldName, paraName, ismandatory) {
    var Email = document.getElementById(FieldName);


    if (ismandatory == "M") {
        if (Email.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            Email.focus();
            return false;
        }
    }
    if (Email.value != "") {
        var filter = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var num = /^([^0-9!#$%^&*(-)_~`=+{}?]*)$/;
        var email = document.getElementById(FieldName);
        if (!num.test(email.value.charAt(0))) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }

        if (!filter.test(email.value)) {
            Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false;
        }
        var thechar = email.value.split('@');
        var Email1 = email.value.split('@')
        var Email2 = Email1[1].substring(0, 1);
        if (Email2 == '_') {
            Notificationtoastr("User Alert!", "please Enter Valid " + paraName + "!", "error");
            email.value = "";
            email.focus();
            return false
        }
        if (thechar[0] != "") {
            var thechar2 = thechar[1]
            for (var i = 0; i <= (thechar2.length - 1); i++) {
                var theChar = thechar2.substring(i, i + 1);
                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar == '.'))) {
                    Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                    email.value = "";
                    email.focus();
                    return false;
                }
            }
        }
        if (thechar[1] != "") {
            var dot = thechar[1].split('.');
            if (dot[1] == dot[2]) {
                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                return false;
            }

            var Domains = ["com", "co.in", "Apple", "Mango"];


            var dot = thechar[1].split('.');
            for (var i = 0; i <= (dot[0].length - 1); i++) {
                var theChar1 = dot[0].substring(i, i + 1);
                if ((theChar1 >= '0' && theChar1 <= '9')) {
                    Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                    email.value = "";
                    email.focus();
                    return false;
                }
            }
        }
    }
    return true;
}

function ValidateDateofBirth(fieldvalue, paraName, ismandatory) {
    //debugger
    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;

        }
    }
    if (dob.value != "") {
        var today = new Date();
        var CurrentYear = new Date().getFullYear();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            //var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            //if (!reg.test(fBDate1.value)) {
            //    Notificationtoastr("User Alert!", "Enter Valid" + paraName + " ", "error");                
            //    fBDate1.focus();
            //    fBDate1.value = "";
            //    return false;

            //}

            var aFromDate = fBDate1.value.split("/");
            var fdd1 = aFromDate[0]; //get the day part- From date
            var fmm1 = aFromDate[1]; //get the month part- From date
            var fyyyy1 = aFromDate[2]; //get the year part- From date
            var DOB = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));

            if (DOB >= today) {
                Notificationtoastr("User Alert!", "" + paraName + " " + "should be a date before to the current date!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }
        }
    }
    return true;
}

function ValidJPGFileUpload(chkname, filename, paramName, ismandatory) {
    if (document.getElementById(chkname) != null) {
        if (ismandatory == 'M') {
            if (document.getElementById(chkname).checked == false) {
                Notificationtoastr("User Alert!", "Please Check " + paramName + "!", "error");
                document.getElementById(chkname).focus();
                return false;
            }
        }
        if (document.getElementById(chkname).checked == true) {
            if ((document.getElementById(filename).value == "")) {
                Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
                document.getElementById(filename).focus();
                return false;
            }

            var x = document.getElementById(filename).value;
            var ar_name = x.split('.');

            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if (ar_name[1].toLowerCase() != "jpg") {
                        Notificationtoastr("User Alert!", "Please upload only JPG files for " + paramName + "!", "error");
                        document.getElementById(filename).value = "";
                        return false;
                    }
                }
                else {
                    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                    document.getElementById(filename).value = "";
                    return false;
                }
            }
            var re = /[!@#$%^&*(),<>']/;
            if (re.test(x)) {
                Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
    }
    return true;
}


//newly added by govind on 27/08/2020
function ValidNameAlphaNumeric(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    /*if (theField != null) {*/
    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    //}

    //if (fieldValue == "") {
    //    Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
    //    theField.focus();
    //    return false;
    //}
    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '.') || (theChar == '/') || (theChar == '#') || (theChar == ',') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        re = /[0-9]/;
        if (!re.test(fieldValue)) {
            //alert(paraName);
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
    }
    return true;
}

function ValidNameAlphaNumerichallticketno(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    /*if (theField != null) {*/
    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    //}

    //if (fieldValue == "") {
    //    Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
    //    theField.focus();
    //    return false;
    //}
    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '.') || (theChar == '/') || (theChar == '#') || (theChar == ',') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character  !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        re = /[0-9]/;
        if (!re.test(fieldValue)) {           
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if ((fieldValue.charAt(0) == "0") && (fieldValue.charAt(1) == "0") && (fieldValue.charAt(2) == "0") &&
            (fieldValue.charAt(3) == "0") && (fieldValue.charAt(4) == "0") && (fieldValue.charAt(5) == "0") &&
            (fieldValue.charAt(6) == "0") && (fieldValue.charAt(7) == "0") && (fieldValue.charAt(8) == "0") &&
            (fieldValue.charAt(9) == "0")) {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if ((fieldValue.charAt(0) == "0") && (fieldValue.charAt(1) == "0") && (fieldValue.charAt(2) == "0") &&
            (fieldValue.charAt(3) == "0") && (fieldValue.charAt(4) == "0") && (fieldValue.charAt(5) == "0") &&
            (fieldValue.charAt(6) == "0") && (fieldValue.charAt(7) == "0") && (fieldValue.charAt(8) == "0") &&
            (fieldValue.charAt(9) == "0") && (fieldValue.charAt(10) == "0") && (fieldValue.charAt(11) == "0") &&
            (fieldValue.charAt(12) == "0") && (fieldValue.charAt(13) == "0") && (fieldValue.charAt(14) == "0")) {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        //if (fieldValue.charAt(0) == "0")
        //    {
        //    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
        //    theField.value = "";
        //    theField.focus();
        //    return false;
        //}
    }
    return true;
}

function ValidNameAlphaNumericRollNumber(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    /*if (theField != null) {*/
    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    //}

    //if (fieldValue == "") {
    //    Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
    //    theField.focus();
    //    return false;
    //}
    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '.') || (theChar == '/') || (theChar == '#') || (theChar == ',') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        re = /[0-9]/;
        if (!re.test(fieldValue)) {
            //alert(paraName);
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

        var re = /^[a-zA-Z]/;
        if ((!re.test(fieldValue.charAt(0))) || (!re.test(fieldValue.charAt(3))) || (!re.test(fieldValue.charAt(4)))) {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.focus();
            //fieldValue = "";
            return false;
        }
    }
    return true;
}

function ValidGPA(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;

    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }

    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (theField.value.charAt(0) == '0') {
            Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            theField.focus();
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == '+') || (theChar == '.'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct. " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.') || (fieldValue.charAt(0) == '+')
            || (fieldValue.charAt(0) == '!') || (fieldValue.charAt(0) == '@') || (fieldValue.charAt(0) == '#') || (fieldValue.charAt(0) == '$') || (fieldValue.charAt(0) == '%') || (fieldValue.charAt(0) == '&') || (fieldValue.charAt(0) == '*')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }


        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

    }
    return true;
}
function ValidCGPA(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;

    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }

    if (fieldValue != "") {
        if (parseInt(theField.value) < minvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than or equal to" + minvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (parseInt(theField.value) > maxvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be less than or equal to " + maxvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == '+') || (theChar == '.'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct. " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.') || (fieldValue.charAt(0) == '+')
            || (fieldValue.charAt(0) == '!') || (fieldValue.charAt(0) == '@') || (fieldValue.charAt(0) == '#') || (fieldValue.charAt(0) == '$') || (fieldValue.charAt(0) == '%') || (fieldValue.charAt(0) == '&') || (fieldValue.charAt(0) == '*')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }


        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        
        var cgpaPattern = /^\d(\.\d{1,2})?$|^10(\.00)?$/;
        if (!cgpaPattern.test(fieldValue)) {
            Notificationtoastr("User Alert!", "" + paraName + " should not greater than 10.00 !", "error");
            theField.focus();
            theField.value = "";
            return false;

        }

    }
    return true;
}
function ValidOverAll(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;

    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }

    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= '0' && theChar <= '9') || (theChar == '.'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct. " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character and Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }


        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

    }
    return true;
}

function ValidNameAlphaNumeric1(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (theField != null) {
        if (ismandatory == "M") {
            if (fieldValue == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
    }

    if (fieldValue == "") {
        Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
        theField.focus();
        return false;
    }
    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters Or number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters Or number  and less than " + maxlength + " characters Or number !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '.') || (theChar == '/') || (theChar == '#') || (theChar == ',') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ') || (fieldValue.charAt(0) == '0') || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Zeros !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
    }
    return true;
}


function ValidJPEGFileUpload(chkname, filename, paramName, ismandatory) {
    debugger;
    if (document.getElementById(chkname) != null) {
        if (ismandatory == 'M') {
            if (document.getElementById(chkname).checked == false) {
                Notificationtoastr("User Alert!", "Please Check " + paramName + "!", "error");
                document.getElementById(chkname).focus();
                return false;
            }
        }

        if (document.getElementById(chkname).checked == true) {
            if ((document.getElementById(filename).value == "")) {
                Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
                document.getElementById(filename).focus();
                return false;
            }

            var x = document.getElementById(filename).value;
            var ar_name = x.split('.');

            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if (!((ar_name[ar_name.length - 1].toLowerCase() == "jpeg") || (ar_name[ar_name.length - 1].toLowerCase() == "jpg") || (ar_name[ar_name.length - 1].toLowerCase() == "png") || (ar_name[ar_name.length - 1].toLowerCase() == "gif"))) {
                        Notificationtoastr("User Alert!", "Please upload only jpeg/jpg files for " + paramName + "!", "error");
                        document.getElementById(filename).value = "";
                        return false;
                    }
                }
                else {
                    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                    document.getElementById(filename).value = "";
                    return false;
                }
            }
            var re = /[!@#$%^&*(),<>']/;
            if (re.test(x)) {
                Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
    }
    return true;
}

function CountChars1(charLimit, inputId, outputId) {
    if (parseInt(document.getElementById(outputId).innerHTML) < 1) {
        document.getElementById(inputId).value = document.getElementById(inputId).value.substr(0, charLimit);
    }
    var remainingChars = charLimit - (document.getElementById(inputId).value.length);
    document.getElementById(outputId).innerHTML = remainingChars;
}



function ChckPasteCount1(charLimit, inputId, lblspan) {
    var text = window.clipboardData.getData("Text");
    var remainingChars = charLimit - (document.getElementById(inputId).value.length + parseInt(text.length));
    if (parseInt(remainingChars) < 0)
        return false;
    else
        return true;
    if (parseInt(document.getElementById(lblspan).innerHTML) < 1) {
        document.getElementById(inputId).value = document.getElementById(inputId).value.substr(0, charLimit);
    }
}

////Age validation
function ValidateCalendarAge(fieldvalue, paraName, ismandatory, minval, maxval) {


    var dob = document.getElementById(fieldvalue);

    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;
        }
    }

    if (dob != null) {
        var today = new Date();
        var nowyear = today.getFullYear();
        var nowmonth = today.getMonth() + 1;
        var nowday = today.getDate();

        var appAge = dob.value.split("/");
        var day = appAge[0];
        var month = appAge[1];
        var year = appAge[2];
        var age = (nowyear - year).toString();
        var age_month = nowmonth - month;
        var age_day = nowday - day;


        if (age > maxval) {
            Notificationtoastr("User Alert!", + paraName + " cannot be more than " + maxval + " Years.Please enter correct age !", "error");
            document.getElementById(fieldvalue).value = '';
            document.getElementById(fieldvalue).focus();
            return false;
        }
        if (age_month < 0 || (age_month == 0 && age_day < 0)) {
            age = parseInt(age) - 1;
        }
        if ((age == minval && age_month <= 0 && age_day <= 0) || age < minval) {
            Notificationtoastr("User Alert!", + paraName + " should be more than " + minval + " years.Please enter a valid Date of Birth !", "error");
            document.getElementById(fieldvalue).value = '';
            document.getElementById(fieldvalue).focus();
            return false;
        }

    }
    return true;
}

////Age validation
function ValidateAge(fieldvalue, paraName, ismandatory, minval, maxval) {
    var age = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (age.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            age.focus();
            return false;
        }
    }

    if (age != null) {


        if (age > maxval) {
            Notificationtoastr("User Alert!", + paraName + " cannot be more than " + maxval + " Years.Please enter correct age !", "error");
            document.getElementById(fieldvalue).value = '';
            document.getElementById(fieldvalue).focus();
            return false;
        }
        if (age_month < 0 || (age_month == 0 && age_day < 0)) {
            age = parseInt(age) - 1;
        }
        if ((age == minval && age_month <= 0 && age_day <= 0) || age < minval) {
            Notificationtoastr("User Alert!", + paraName + " should be more than " + minval + " years.Please enter a valid Date of Birth !", "error");
            document.getElementById(fieldvalue).value = '';
            document.getElementById(fieldvalue).focus();
            return false;
        }

    }
    return true;
}



//Phone Number
function ValidatePhoneNo(FieldName, paraName, ismandatory) {

    var phoneno = document.getElementById(FieldName);
    if (phoneno.value != "") {
        if (ismandatory == "M") {
            if (phoneno.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                phoneno.focus();
                return false;

            }
        }
        if (phoneno.value.charAt(0) != 0) {
            Notificationtoastr("User Alert!", "" + paraName + " " + "should start with 0 !", "error");
            phoneno.focus();
            phoneno.value = "";
            return false;
        }

        if (phoneno.value.charAt(1) == 0) {
            Notificationtoastr("User Alert!", "" + paraName + " " + " can not be all Zeros !", "error");
            phoneno.focus();
            phoneno.value = "";
            return false;
        }
        if (phoneno.value.length < 11) {
            Notificationtoastr("User Alert!", "" + paraName + " " + "should be Eleven Digits !", "error");
            phoneno.focus();
            phoneno.value = "";
            return false;
        }

    }
    return true;
}

//New Date Validation for allowing future dates and should not allow past dates Added By Naveen B on 20/12/2018
function ValidateFutureDate(fieldvalue, paraName, ismandatory) {

    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;

        }
    }
    if (dob.value != "") {
        var today = new Date();
        var CurrentYear = new Date().getFullYear();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }

            var aFromDate = fBDate1.value.split("/");
            var fdd1 = aFromDate[0]; //get the day part- From date
            var fmm1 = aFromDate[1]; //get the month part- From date
            var fyyyy1 = aFromDate[2]; //get the year part- From date
            var DOB = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));

            if (fyyyy1 < CurrentYear) {
                // Notificationtoastr('Please Enter Date after 1900');
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }


            if (DOB <= today) {
                Notificationtoastr("User Alert!", "" + paraName + " " + "should be a date after to the current date !", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }
        }
    }
    return true;
}

function ValidateFutureDateCM(fieldvalue, paraName, ismandatory) {

    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;

        }
    }
    if (dob.value != "") {
        var today = new Date();
        var CurrentYear = new Date().getFullYear();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }

            var aFromDate = fBDate1.value.split("/");
            var fdd1 = aFromDate[0]; //get the day part- From date
            var fmm1 = aFromDate[1]; //get the month part- From date
            var fyyyy1 = aFromDate[2]; //get the year part- From date
            var DOB = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));

            if (fyyyy1 < CurrentYear) {
                // Notificationtoastr('Please Enter Date after 1900');
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }


            if (DOB <= today) {
                Notificationtoastr("User Alert!", "" + paraName + " " + "should be greater than current date !", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }
        }
    }
    return true;
}

function ValidateFutureDateM(fieldvalue, paraName, ismandatory) {

    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;

        }
    }
    if (dob.value != "") {
        var today = new Date();
        var CurrentYear = new Date().getFullYear();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }           

        }
    }
    return true;
}


//New Date Validation for NOT allowing future dates and should allow past dates 
function ValidateFutureDate1(fieldvalue, paraName, ismandatory) {

    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Select " + paraName + "!", "error");
            dob.focus();
            return false;

        }
    }
    if (dob.value != "") {
        var today = new Date();
        var CurrentYear = new Date().getFullYear();
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }

            var aFromDate = fBDate1.value.split("/");
            var fdd1 = aFromDate[0]; //get the day part- From date
            var fmm1 = aFromDate[1]; //get the month part- From date
            var fyyyy1 = aFromDate[2]; //get the year part- From date
            var DOB = new Date(parseFloat(fyyyy1), parseFloat(fmm1 - 1), parseFloat(fdd1, 10));

            if (fyyyy1 > CurrentYear) {
                // Notificationtoastr('Please Enter Date after 1900');
                Notificationtoastr("User Alert!", "Please Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }


            if (DOB >= today) {
                Notificationtoastr("User Alert!", "" + paraName + " " + "should be a date before to the current date !", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }
        }
    }
    return true;
}


//Compare Dates as From Date and To date

function ValidateCompareDates(txtfrmdateid, txttodateid, frmmsg, tomsg) {
    var FromDate = $("#" + txtfrmdateid).val();
    FromDate = new Date(FromDate.split('/')[2], FromDate.split('/')[1] - 1, FromDate.split('/')[0]);
    var ToDate = $("#" + txttodateid).val();
    ToDate = new Date(ToDate.split('/')[2], ToDate.split('/')[1] - 1, ToDate.split('/')[0]);
    var timeDiff = ToDate.getTime() - FromDate.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //Notificationtoastr(diffDays);
    if (diffDays < 0) {
        Notificationtoastr("User Alert!", "Please Enter " + tomsg + " should be after " + frmmsg + "!", "error");
        $("#" + txttodateid).focus();
        return false;
        //break;
    }
    return true;
}
function ValidIntegerValueIncome(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var num = theField.value;
        var Reg = /^[0-9]+$/;
        if (!Reg.test(num)) {
            Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        //Added by Naveen B On 11/12/2018
        if (parseInt(theField.value) < minvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than or equal to" + minvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (parseInt(theField.value) > maxvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }

    //}
    return true;
}
function ValidIntegerValue(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
    }
    if (theField.value != "") {
        var num = theField.value;
        var Reg = /^[0-9 ]+$/;
        if (!Reg.test(num)) {
            Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (theField.value.charAt(0) == '0') {
            Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        //Added by Naveen B On 11/12/2018
        if (parseInt(theField.value) < minvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than or equal to" + minvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (parseInt(theField.value) > maxvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

    }

    //}
    return true;
}

function ValidAccountNo(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {
            var num = theField.value;
            var Reg = /^[0-9]+$/;
            if (!Reg.test(num)) {
                Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName + "!", "error");
                theField.value = "";
                theField.focus();
                return false;
            }
 
        }

        if (theField.value != "") {
            if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }

            if (theField.value.charAt(0) == '0') {
                Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
                theField.focus();
                return false;
            }
        }

    }
    return true;
}
//Added by sravani k for education service rool number accept start with 0 series
function ValidRollNo(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        if (theField.value != "") {

            if (theField.value.length < minlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            if (theField.value.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxlength + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}

function ValidJPGandJPEGFileUpload(chkname, filename, paramName, ismandatory) {
    if (document.getElementById(chkname) != null) {
        if (ismandatory == 'M') {
            if (document.getElementById(chkname).checked == false) {
                Notificationtoastr("User Alert!", "Please Check " + paramName + "!", "error");
                document.getElementById(chkname).focus();
                return false;
            }
        }
        if (document.getElementById(chkname).checked == true) {
            if ((document.getElementById(filename).value == "")) {
                Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
                document.getElementById(filename).focus();
                return false;
            }

            var x = document.getElementById(filename).value;
            var ar_name = x.split('.');

            if (ar_name != null) {
                if (ar_name.length == "2") {
                    if ((ar_name[1].toLowerCase() != "jpg") && (ar_name[1].toLowerCase() != "jpeg")) {
                        Notificationtoastr("User Alert!", "Please upload only JPG/JPEG files for " + paramName + "!", "error");
                        document.getElementById(filename).value = "";
                        return false;
                    }
                }
                else {
                    Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                    document.getElementById(filename).value = "";
                    return false;
                }
            }

            var re = /[!@#$%^&*(),']/;
            if (re.test(x)) {
                Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
    }
    return true;

}

function ValidIntegerValueHyphen(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var num = theField.value;
        var Reg = /^[A-Za-z0-9-/ ]+$/;
        if (!Reg.test(num)) {
            Notificationtoastr("User Alert!", "Please Enter Only Digits and Alphabets for " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        //var Reg = /^[0-9]+$./;
        //var Reg = /^[0-9-]+$/;
        //if (!Reg.test(num)) {
        //    Notificationtoastr("User Alert!", "Please Enter Only Digits for " + paraName + "!", "error");
        //    theField.value = "";
        //    theField.focus();
        //    return false;
        //}
        if (theField.value.charAt(0) == '0' || theField.value.charAt(0) == '-') {
            Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            theField.focus();
            return false;
        }
        //Added by Naveen B On 11/12/2018
        if (parseInt(theField.value) < minvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than or equal to" + minvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (parseInt(theField.value) > maxvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {
            //alert(paraName);
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
    }

    //}
    return true;
}

function ValidIntegerValueHyphenSSN(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var num = theField.value;
        var Reg = /^[A-Za-z0-9-/ ]+$/;
        if (!Reg.test(num)) {
            Notificationtoastr("User Alert!", "Please Enter Only Digits and Alphabets for " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

        if (theField.value.charAt(0) == '0' || theField.value.charAt(0) == '-') {
            Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            theField.focus();
            return false;
        }
        if (theField.value != "") {
            if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            re = /[0-9]/;
            if (!re.test(theField.value)) {
                //alert(paraName);
                Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
                theField.value = "";
                theField.focus();
                return false;
            }
        }

        //}
        return true;
    }
}

function ValidIntegerValueHyphenAtoZ(theField_txtname, paraName, ismandatory, minvalue, maxvalue) {
    var theField = document.getElementById(theField_txtname);
    //if (theField != null) {
    if (ismandatory == "M") {
        if (theField.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    if (theField.value != "") {
        var num = theField.value;
        //var Reg = /^[0-9]+$./;
        var Reg = /^[A-Za-z0-9- ]+$/;
        if (!Reg.test(num)) {
            Notificationtoastr("User Alert!", "Please Enter Only Digits and Alphabets for " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (theField.value.charAt(0) == '0') {
            Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            theField.focus();
            return false;
        }
        //Added by Naveen B On 11/12/2018
        if (parseInt(theField.value) < minvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than or equal to" + minvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (parseInt(theField.value) > maxvalue) {
            Notificationtoastr("User Alert!", "" + paraName + " should be less than " + maxvalue + "!", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        re = /[0-9]/;
        if (!re.test(theField.value)) {
            //alert(paraName);
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

    }

    //}
    return true;
}

function ValidSSNNo(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        
        if (theField.value != "") {
            if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            //re = /[0-9]/;
            //if (!re.test(theField.value)) {
            //    //alert(paraName);
            //    Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            //    theField.value = "";
            //    theField.focus();
            //    return false;
            //}
            //if (theField.value.charAt(0) == '0') {
            //    Notificationtoastr("User Alert!", "Enter " + paraName + " correctly !", "error");
            //    theField.focus();
            //    return false;
            //}
        }

    }
    return true;
}

//Ends

//added by for faculty roll number details and university details
function ValidFacultyAlphaNumericRollNumber(theField_txtname, paraName, ismandatory, minlength, maxlength) {


    var theField = document.getElementById(theField_txtname);
    var fieldValue = theField.value;
    /*if (theField != null) {*/
    if (ismandatory == "M") {
        if (fieldValue == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            theField.focus();
            return false;
        }
    }
    //}

    //if (fieldValue == "") {
    //    Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
    //    theField.focus();
    //    return false;
    //}
    if (fieldValue != "") {
        if (fieldValue.length < minlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }
        if (fieldValue.length <= minlength || fieldValue.length > maxlength) {
            Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        if (fieldValue != "") {
            for (var i = 0; i <= (fieldValue.length - 1); i++) {
                var theChar = fieldValue.substring(i, i + 1);

                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') | (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '.') || (theChar == '/') || (theChar == '#') || (theChar == ',') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
        }

        if ((fieldValue.charAt(0) == '/') || (fieldValue.charAt(0) == '-') || (fieldValue.charAt(0) == ' ')  || (fieldValue.charAt(0) == ',') || (fieldValue.charAt(0) == '.')) {
            Notificationtoastr("User Alert!", "" + paraName + " should not start with Special Character !", "error");
            theField.focus();
            theField.value = "";
            return false;
        }

        re = /[0-9]/;
        if (!re.test(fieldValue)) {
            //alert(paraName);
            Notificationtoastr("User Alert!", "" + paraName + " Must Contain at least one number !", "error");
            theField.value = "";
            theField.focus();
            return false;
        }
        if (parseInt(fieldValue) == '0') {
            Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
            theField.value = "";
            theField.focus();
            return false;
        }

        //var re = /^[a-zA-Z]/;
        //if ((!re.test(fieldValue.charAt(0))) || (!re.test(fieldValue.charAt(3))) || (!re.test(fieldValue.charAt(4)))) {
        //    Notificationtoastr("User Alert!", "Please Enter Correct " + paraName + "!", "error");
        //    theField.focus();
        //    //fieldValue = "";
        //    return false;
        //}
    }
    return true;
}


function ValidFacultyUniversity(theField_txtname, paraName, ismandatory, minlength, maxlength) {
    var theField = document.getElementById(theField_txtname);
    if (theField != null) {
        if (ismandatory == "M") {
            if (theField.value == "") {
                Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
                theField.focus();
                return false;
            }
        }
        var APPNAME = theField.value;
        if (APPNAME != "") {
            if (theField.value.charAt(0) == " ") {
                Notificationtoastr("User Alert!", "Enter Correct " + paraName + "!", "error");
                theField.focus();
                theField.value = "";
                return false;
            }

            for (var i = 0; i <= (APPNAME.length - 1); i++) {
                var theChar = APPNAME.substring(i, i + 1);
                if (!((theChar >= 'a' && theChar <= 'z') || (theChar >= 'A' && theChar <= 'Z') || (theChar >= '0' && theChar <= '9') || (theChar == ' ') || (theChar == '&') || (theChar == '_') || (theChar == '/') || (theChar == ',') || (theChar == '.') || (theChar == '(') || (theChar == ')') || (theChar == ':') || (theChar == '-'))) {
                    Notificationtoastr("User Alert!", "Enter valid " + paraName + "!", "error");
                    theField.focus();
                    theField.value = "";
                    return false;
                }
            }
            //            if ((APPNAME.charAt(0) == '&') || (APPNAME.charAt(0) == '/') || (APPNAME.charAt(0) == ',') || (APPNAME.charAt(0) == '.') || (APPNAME.charAt(0) == '(') || (APPNAME.charAt(0) == ')') || (APPNAME.charAt(0) == ':') || (APPNAME.charAt(0) == '-')) {
            //                Notificationtoastr(paraName + " should not start with special character");
            //                theField.focus();
            //                theField.value = "";
            //                return false;
            //            }
            if (APPNAME.length <= minlength || APPNAME.length > maxlength) {
                Notificationtoastr("User Alert!", "" + paraName + " should be greater than " + minlength + " characters and less than " + maxlength + " characters !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
            re = /[a-zA-Z]/;
            if (!re.test(theField.value)) {
                Notificationtoastr("User Alert!", "" + paraName + " must contain at least one alphabet !", "error");
                theField.focus();
                theField.value = "";
                return false;
            }
        }
    }
    return true;
}

// end


function Validatedashboarddob(fieldvalue, paraName, ismandatory) {

    var dob = document.getElementById(fieldvalue);
    if (ismandatory == "M") {
        if (dob.value == "") {
            Notificationtoastr("User Alert!", "Please Enter " + paraName + "!", "error");
            dob.focus();
            return false;
        }
    }
    if (dob.value != "") {
        var fBDate1 = document.getElementById(fieldvalue);
        if (fBDate1.value != "") {

            var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            if (!reg.test(fBDate1.value)) {

                Notificationtoastr("User Alert!", "Enter Valid " + paraName + "!", "error");
                fBDate1.focus();
                fBDate1.value = "";
                return false;

            }


        }
    }
    return true;
}

function ValidFileUploadpdfmb(filename, paramName, ismandatory) {

    if (ismandatory == 'M') {

        if ((document.getElementById(filename).value == "")) {
            Notificationtoastr("User Alert!", "Please upload file for " + paramName + "!", "error");
            document.getElementById(filename).focus();
            return false;
        }
    }
    if ((document.getElementById(filename).value != "")) {
        var fileSize = document.getElementById(filename).files[0];
        if (fileSize.size > 1048576) {
            Notificationtoastr("User Alert!", " Selected File Size Exceeds 1 MB ", "error");
            //Notificationtoastr("User Alert!", +paramName + "File Size Exceeds 500KB", "error");
            //Notificationtoastr("User Alert!", + paramName + "Please upload file for", "error");
            document.getElementById(filename).focus();
            return false;
        }

    }
    var x = document.getElementById(filename).value;
    var ar_name = x.split('.');

    if (ar_name != null) {
        if (ar_name.length == "2") {
            if (ar_name[1].toLowerCase() != "pdf") {
                Notificationtoastr("User Alert!", "Please upload only Pdf files for " + paramName + "!", "error");
                document.getElementById(filename).value = "";
                return false;
            }
        }
        else {
            Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
            document.getElementById(filename).value = "";
            return false;
        }
    }
    var re = /[!@#$%^&*(),<>']/;
    if (re.test(x)) {
        Notificationtoastr("User Alert!", "Invalid File name for " + paramName + "!", "error");
        document.getElementById(filename).value = "";
        return false;
    }


    return true;
}


