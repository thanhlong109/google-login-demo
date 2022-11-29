window.gapi.client
        .init({
          clientId:'839204089047-k33hl0ujttukcukvonah48el710amu1u.apps.googleusercontent.com',
          scope: "longntse161734@fpt.edu.vn",
          plugin_name:'test login google'
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