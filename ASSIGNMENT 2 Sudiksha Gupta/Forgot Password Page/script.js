
function resetForm() {
    document.getElementById('passwordForm').reset();
}


function cancelAction() {
   alert("Cancelled successfully!");
}



function saveForm(){
    const passwordField1 = document.getElementById('newPassword');
    const passwordField2 = document.getElementById('confirmPassword');
    const passwordLength1 = passwordField1.value.length;
    const passwordLength2 = passwordField2.value.length;

    if (passwordLength1>0 && passwordLength2>0) {
        if(passwordField1.value===passwordField2.value && passwordLength1==passwordLength2){
            alert("Password saved successfully!");
        }else{
            alert("New password and confirmed password do not match please try again!");
        }
       
    } else {
        alert("Please enter the new password then save!");
    
    }
   
}