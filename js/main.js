window.addEventListener('DOMContentLoaded', function () {
    let icon = document.getElementById("mailIcon");

    icon.onclick = () => {
            let mailText = document.createElement("p");
            mailText.textContent = "maricelj62@gmail.com";
            mailText.classList.add("mailContainer__parr");
            document.getElementById("mailDivision").textContent = "";
            document.getElementById("mailDivision").appendChild(mailText);
            mailText.classList.add('animate__animated', 'animate__fadeIn');    
      };
})
    
