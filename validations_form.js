function validate_details(){

    //firstname
    let firstName=document.getElementById("firstName");
    let error_firstName=document.getElementById("error_firstName");
    error_firstName.textContent="";
    name_value=firstName.value;
    if(name_value==""){
        error_firstName.textContent="*required";
        firstName.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_name(name_value)){
        firstName.style.border = "2px solid red";
        error_firstName.textContent="*invalid name";
    }else{
        firstName.style.border = "2px solid green";
    }

    //date
    let date=document.getElementById("date");
    let error_date=document.getElementById("error_date");
    error_date.textContent="";
    date_value=date.value;
    if(date_value==""){
        error_date.textContent="*required";
        date.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_date(date_value)){
        date.style.border = "2px solid red";
        error_date.textContent="*invalid name";
    }else{
        date.style.border = "2px solid green";
    }

    //email
    let email=document.getElementById("email");
    let error_email=document.getElementById("error_email");
    error_email.textContent="";
    email_value=email.value;
    if(email_value==""){
        error_email.textContent="*required";
        email.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_email(email_value)){
        email.style.border = "2px solid red";
        error_email.textContent="*invalid email";
    }else{
        email.style.border = "2px solid green";
    }


    //password
    let password=document.getElementById("password");
    let error_password=document.getElementById("error_password");
    error_password.textContent="";
    password_value=password.value;
    if(password_value==""){
        error_password.textContent="*required";
        password.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_password(password_value)){
        password.style.border = "2px solid red";
        error_password.textContent="*invalid email";
    }else{
        password.style.border = "2px solid green";
    }

    //pancard

    let pancard=document.getElementById("pancard");
    let error_pancard=document.getElementById("error_pancard");
    error_pancard.textContent="";
    pancard_value=pancard.value;
    if(pancard_value==""){
        error_pancard.textContent="*required";
        pancard.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_pancard(pancard_value)){
        pancard.style.border = "2px solid red";
        error_pancard.textContent="*invalid pancard";
    }else{
        pancard.style.border = "2px solid green";
    }

    //mobile

    let mobile=document.getElementById("mobile");
    let error_mobile=document.getElementById("error_mobile");
    error_mobile.textContent="";
    mobile_value=mobile.value;
    if(mobile_value==""){
        error_mobile.textContent="*required";
        mobile.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_mobile(mobile_value)){
        mobile.style.border = "2px solid red";
        error_mobile.textContent="*invalid pancard";
    }else{
        mobile.style.border = "2px solid green";
    }

    //address
    let address=document.getElementById("address");
    let error_address=document.getElementById("error_address");
    error_address.textContent="";
    address_value=address.value;
    if(address_value==""){
        error_address.textContent="*required";
        address.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_address(address_value)){
        address.style.border = "2px solid red";
        error_address.textContent="*invalid address";
    }else{
        address.style.border = "2px solid green";
    }

    //pincode

    let pincode=document.getElementById("pincode");
    let error_pincode=document.getElementById("error_pincode");
    error_pincode.textContent="";
    pincode_value=pincode.value;
    if(pincode_value==""){
        error_pincode.textContent="*required";
        pincode.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_pincode(pincode_value)){
        pincode.style.border = "2px solid red";
        error_pincode.textContent="*invalid pincode";
    }else{
        pincode.style.border = "2px solid green";
    }

    //url

    let url=document.getElementById("url");
    let error_url=document.getElementById("error_url");
    error_url.textContent="";
    url_value=url.value;
    if(url_value==""){
        error_url.textContent="*required";
        url.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_url(url_value)){
        url.style.border = "2px solid red";
        error_url.textContent="*invalid url";
    }else{
        url.style.border = "2px solid green";
    }


    //number

    let number=document.getElementById("number");
    let error_number=document.getElementById("error_number");
    error_number.textContent="";
    number_value=number.value;
    if(number_value==""){
        error_number.textContent="*required";
        number.style.border = "2px solid #d3d3d3";
    }
    else if(!validate_number(number_value)){
        number.style.border = "2px solid red";
        error_number.textContent="*invalid number";
    }else{
        number.style.border = "2px solid green";
    }


    //

}


