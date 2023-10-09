window.onload = pageLoad;
function pageLoad(){
	var button = document.getElementById("myForm");
    button.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["repassword"].value;
    if(x != y)
    {
        document.getElementById('errormsg').innerHTML = "Wrong Password";
        alert("Wrong Password");
        return false;
    }
    else
    {
        alert("Success");
    }
}