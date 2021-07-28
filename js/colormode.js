function toggleDarkMode() {
   var body = document.body;
   body.classList.toggle("dark-mode");
   iconColorTheme(body)
}


function iconColorTheme(body) {
   let email = document.getElementById("email_icon")
   let github = document.getElementById("github_icon")
   let instagram = document.getElementById("instagram_icon")
   email.src = "./img/icon_email_dark.svg"
   github.src = "./img/icon_github_dark.png"
   instagram.src = "./img/icon_instagram_dark.svg"
   if (body.classList == "dark-mode") {
      email.src = "./img/icon_email_light.svg"
      github.src = "./img/icon_github_light.png"
      instagram.src = "./img/icon_instagram_light.svg"
   }
   
}