function calculate(){
    loanAmount= document.getElementById("loan-amount").value;
    interestValue=document.getElementById("interest-amount").value;
    monthelyValue=document.getElementById("monthlypayment").value;
    result=document.getElementById("result");
    interestE=document.getElementById("ineterstP");
    interest= loanAmount*(interestValue*0.01)/monthelyValue;
    monthelyPayment=(loanAmount/monthelyValue+interest);
    result.innerHTML=` Total Payment Taka ${monthelyPayment}`;
    interestE.innerHTML=` Inerest Taka ${interest}`;
    

    
}