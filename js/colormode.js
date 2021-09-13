function toggleDarkMode() {
   var body = document.body;
   body.classList.toggle("dark-mode");
   iconColorTheme(body)
}


function iconColorTheme(body) {
   let email = document.getElementById("email_icon")
   let github = document.getElementById("github_icon")
   let linkedin = document.getElementById("linkedin_icon")
   let instagram = document.getElementById("instagram_icon")
   let heartIcon = document.getElementById("heart")
   email.src = "./img/icon_email_dark.svg"
   github.src = "./img/icon_github_dark.png"
   linkedin.src = "./img/icon_linkedin_dark.svg"
   instagram.src = "./img/icon_instagram_dark.svg"
   heartIcon.src = "./img/heart_dark.svg"
   if (body.classList == "dark-mode") {
      email.src = "./img/icon_email_light.svg"
      github.src = "./img/icon_github_light.png"
      linkedin.src = "./img/icon_linkedin_light.svg"
      instagram.src = "./img/icon_instagram_light.svg"
      heartIcon.src = "./img/heart_light.svg"
   }
   
}