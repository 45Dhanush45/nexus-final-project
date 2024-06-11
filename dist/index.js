const sideBar = document.getElementById("side-nav")

const changeBtn = function(){
    sideBar.style.display="block"
}

function closeBtn(){
    sideBar.style.display="none"

}

function sendMail(e){

    // e.preventDefault()
    let forms = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }

    emailjs.send("service_smw70he","template_ygzftvr",forms).then(alert("email send!!"))


}




