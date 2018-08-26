$(document).ready(function() {
    $('form').on('submit', function(e) {
        list = $('form').serializeArray()
        // password
        if(list[1].value !== "123") {
            e.preventDefault()
            alert("wrong password!")
        }
  });

  document.getElementById("myText").innerHTML = "Hello: "+getUrlVars().login;

});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
