window.gapi.client
        .init({
          clientId:'Your Client ID',
          scope: "email",
          plugin_name:'App Name that you used in google developer console API'
        })

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been signed out successfully!");
      $(".g-signin2").css("display","block");
      $(".data").css("display","none");
    });
  }