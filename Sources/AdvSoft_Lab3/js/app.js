
//google login


function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyATBETmTE2XR54hf6mMdzJ60U9_Himty_A');
    gapi.client.load('plus','v1', function () {});
    
}

/*   facebook
=================================================
 */
window.fbAsyncInit = function() {
    FB.init({
        appId            : '476369869409329',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10',
        status: true
    });
    //FB.AppEvents.logPageView();
    FB.getLoginStatus(function (response) {
        if(response.status === 'connected'){
            //are connected
        }else if(response.status === 'not_authorized'){
            // not auth
        }else{
            //not logged into fb
        }

    });

};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));





/* local storage
=========================================================================
 */
function store() {

    var inputEmail = document.getElementById("email1");
    var inputName = document.getElementById("fullname1");
    var inputPW = document.getElementById("password1");
    var inputUsername = document.getElementById("username1");

    localStorage.setItem("email",inputEmail.value);
    localStorage.setItem("fullname",inputName.value);
    localStorage.setItem("password",inputPW.value);
    localStorage.setItem("username",inputUsername.value);
    alert("Success!! You ar now registered. Please login.");
}

function entry() {

    var user = document.getElementById("username2");
    var pass = document.getElementById("password2");

    if(localStorage.getItem("username") === user.value  && localStorage.getItem("password") === pass.value)
    {
        window.location.href="home.html";
    }
    else{alert("Login not successful. Please try again.");}
}
