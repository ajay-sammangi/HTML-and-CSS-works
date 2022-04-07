function page1(){
    const login1view = document.getElementById("loginpage1");
    const login2view = document.getElementById("loginpage2");
    const signupformview = document.getElementById("signupform");
    const dashboardview = document.getElementById("dashboard");
    const validationsform=document.getElementById("validations_form");

    login1view.style.display = "block";
    login2view.style.display = "none";
    signupformview.style.display = "none";
    dashboardview.style.display = "none";
    validationsform.style.display="none";

}

function page2() {

    const login1view = document.getElementById("loginpage1");
    const login2view = document.getElementById("loginpage2");
    const signupformview = document.getElementById("signupform");
    const dashboardview = document.getElementById("dashboard");
    const validationsform=document.getElementById("validations_form");

    login1view.style.display = "none";
    login2view.style.display = "block";
    signupformview.style.display = "none";
    dashboardview.style.display = "none";
    validationsform.style.display="none";

}

function signupform() {

    const login1view = document.getElementById("loginpage1");
    const login2view = document.getElementById("loginpage2");
    const signupformview = document.getElementById("signupform");
    const dashboardview = document.getElementById("dashboard");
    const validationsform=document.getElementById("validations_form");

    signupformview.style.display = "block";
    login2view.style.display = "none";
    login1view.style.display = "none";
    dashboardview.style.display = "none";
    validationsform.style.display="none";
}

function dashboard() {

    const login1view = document.getElementById("loginpage1");
    const login2view = document.getElementById("loginpage2");
    const signupformview = document.getElementById("signupform");
    const dashboardview = document.getElementById("dashboard");
    const validationsform=document.getElementById("validations_form");

    dashboardview.style.display = "block";
    login2view.style.display = "none";
    signupformview.style.display = "none";
    login1view.style.display = "none";
    validationsform.style.display="none";

}

function validations(){
    const login1view = document.getElementById("loginpage1");
    const login2view = document.getElementById("loginpage2");
    const signupformview = document.getElementById("signupform");
    const dashboardview = document.getElementById("dashboard");
    const validationsform=document.getElementById("validations_form");

    dashboardview.style.display = "none";
    login2view.style.display = "none";
    signupformview.style.display = "none";
    login1view.style.display = "none";
    validationsform.style.display="block";
}