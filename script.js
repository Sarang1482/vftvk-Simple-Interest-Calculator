window.addEventListener('load', (event) => {
    document.getElementById("show").style.display = "none";
  });


// Function to compute interest
function compute()
{
    
    var p = document.getElementById("principal").value;
    var n = document.getElementById("years").value;  
    var r= document.getElementById("rate").value;  
    var result = document.getElementById("result");    
    var deposit = document.getElementById("deposit");
    var intrate = document.getElementById("int_rate");
    var yearon = document.getElementById("year_on");
    var cur_yr = new Date().getFullYear(); //Get current year
    if(p<=0 || p==""){
        alert("Please enter a positive number only");
        document.getElementById("show").style.display = "none";
        document.getElementById("principal").focus();
    }
    else
    document.getElementById("show").style.display = "";
    result.innerHTML =  (p*n*r/100);
    deposit.innerHTML = p;
    intrate.innerHTML = r;
    yearon.innerHTML = Number(cur_yr) + Number(n);
}  
//Function to get print slide value
function slide(){
    var r= document.getElementById("rate").value;  
    var output = document.getElementById("print_val");
    output.innerHTML = r;
}


