let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let myForm = new FormData(e.target)
    console.log(myForm.get("age"));
    console.log(myForm.get("email"));
    if(myForm.get("password").length < 5){
        console.log("Access denied")
    }else{
        console.log("Access allowed");
    }
    
})