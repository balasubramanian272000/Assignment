function validating()
{
    var Name = document.getElementById("name");
    // var refx = /[5-6]\d{4}0/;
    if(Name.value.trim() !== "")
    {
        // alert("valid username");
        Name.style.border = "solid 2px green";
        document.getElementById("invaildname").innerHTML="valid";
        document.getElementById("invaildname").style.visibility="visible";
        document.getElementById("invaildname").style.color="green";
        
    }
    else
    {
        Name.style.border = "solid 2px red";
        document.getElementById("invaildname").innerHTML="Invalid";
        document.getElementById("invaildname").style.visibility="visible";
        document.getElementById("invaildname").style.color="red";
        
    }

    var Email = document.getElementById("Myemail") ;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

    if(Email.value.trim() == "")
    {
        Email.style.border = "solid 2px red";
        document.getElementById("invalidemail").innerHTML="Invalid";
        document.getElementById("invalidemail").style.visibility="visible";
        document.getElementById("invalidemail").style.color="red";
    }
    if (!filter.test(Email.value)) {  
        Email.style.border = "solid 2px red";
        document.getElementById("invalidemail").innerHTML="Enter the correct Email Id";
        document.getElementById("invalidemail").style.visibility="visible";
        document.getElementById("invalidemail").style.color="red";
    }  
    else{
        Name.style.border = "solid 2px green";
        document.getElementById("invalidemail").innerHTML="valid";
        document.getElementById("invalidemail").style.visibility="visible";
        document.getElementById("invalidemail").style.color="green";
    }

    var FatherName = document.getElementById("Fathername");

    if(FatherName.value.trim() !== "")
    {
        FatherName.style.border = "solid 2px green";
        document.getElementById("invaildFathername").innerHTML="valid";
        document.getElementById("invaildFathername").style.visibility="visible";
        document.getElementById("invaildFathername").style.color="green"; 
    }
    else
    {
        FatherName.style.border = "solid 2px red";
        document.getElementById("invaildFathername").innerHTML="Invalid";
        document.getElementById("invaildFathername").style.visibility="visible";
        document.getElementById("invaildFathername").style.color="red"; 
    }

    var Date = document.getElementById("dateOfBirth");
    
    if(Date.value.trim() !== "")
    {
        
        Date.style.border = "solid 2px green";
        document.getElementById("birth").innerHTML="valid";
        document.getElementById("birth").style.visibility="visible";
        document.getElementById("birth").style.color="green";
        
    }
    else
    {
        Date.style.border = "solid 2px red";
        document.getElementById("birth").innerHTML="Invalid";
        document.getElementById("birth").style.visibility="visible";
        document.getElementById("birth").style.color="red";
        
    }

    var Mobile = document.getElementById("mobile");
   
    if(Mobile .value.trim() !== "" || Mobile.value >=1 && Mobile.value<=10)
    {
        Mobile .style.border = "solid 2px green";
        document.getElementById("invalidMobileNumber").innerHTML="valid";
        document.getElementById("invalidMobileNumber").style.visibility="visible";
        document.getElementById("invalidMobileNumber").style.color="green";
        
    }
    else
    {
        Mobile .style.border = "solid 2px red";
        document.getElementById("invalidMobileNumber").innerHTML="Invalid";
        document.getElementById("invalidMobileNumber").style.visibility="visible";
        document.getElementById("invalidMobileNumber").style.color="red";
        
    }

}