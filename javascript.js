function validate(form){
     var password = document.getElementById("password").value;

     var isValid= true;
     if(password!=123){
          alert("Wrong password");
          form.password.focus();
          isValid= false;
     }
     return isValid;
}
var username = document.getElementById("username").value;

function GetUrlValue(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
        }
    }
}
