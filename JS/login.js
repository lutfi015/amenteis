function validate(){
    if((document.getElementById("name").value =="")&&(document.getElementById("pass").value =="")){
        Swal.fire({
            text: "Mohon Lengkapi data!",
            icon: 'warning',
            confirmButtonColor: 'black',
        })
    } else if(document.getElementById("name").value == ""){
        Swal.fire({
            title: "Error!",
            text: "Username tidak boleh kosong!",
            icon: 'error',
            confirmButtonColor: 'black',
        })
    } else if(document.getElementById("pass").value ==""){
        Swal.fire({
            title: "Error!",
            text: "Password tidak boleh kosong!",
            icon: 'error',
            confirmButtonColor: 'black',
        
    })
    } else{
        window.location.href="index.html";
    }
}