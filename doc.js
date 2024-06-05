function validateForm() 
{
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if (username="Zealous.INC" && password=="asscat") {
        //alert("Name can't be blank");
        alert("Login successful");
        window.location="proj.html";
        return false;
    }
    else if (password="asscat") {
        alert("Please enter your password.");
        alert("Password is incorrect.");
        return false;
    }
    
    return true;
}
