const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const phonenumber=document.getElementById('phonenumber');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkInputs();
});


function checkInputs(){
    const emailvalue=email.value.trim();
    const passwordvalue =password.value.trim();
    const confirmpasswordvalue=confirmpassword.value.trim();
    const phonenumbervalue=phonenumber.value.trim();
    const regex = /^(\d{3})[-.\s]*(\d{3})[-.\s]*(\d{4})$/;
    
    
      
    
    //email validation// 

    if(emailvalue===''){
        //show error
        //add error class
        setErrorFor(email,'email canot be blank')
    } else if(!isEmail(emailvalue)){
        setErrorFor(email,'email is not valid');

    }
    
    else 
    {
        setSuccessFor(email);
    }

//Eamil validation ends here!!//
      

//Password Validation//
if(passwordvalue==='')
{
    setErrorFor(password,'password fiels canot be blank');
}

else if(passwordvalue.search(/[0-9]/)==-1)
{
    // document.getElementById('password').innerHTML='your password is week strength';
    setErrorFor(password,'Atleast 1 numeric value must be needed');
}
else if(passwordvalue.search(/[a-z]/)==-1){
    setErrorFor(password,'password is week !!! small letter should be entered');

}
else if(passwordvalue.search(/[A-Z]/)==-1){
    document.getElementById('passerror').innerHTML='password is medium strength and its pass containes Uppercase Letter';
    document.getElementById('passerror').style.color='orange';
}
else if(passwordvalue.search(/[!\@\#\$\%]/)==-1)
{
    document.getElementById('passerror').innerHTML='Password is Medium Strength and it containes Atleast One special charecter';
    document.getElementById('passerror').style.color='orange';
}
else{
    document.getElementById('passerror').innerHTML='Excellent !Strong Password';
    document.getElementById('passerror').style.color='green';
    setSuccessFor(password);
}

if(confirmpasswordvalue==='')
{
setErrorFor(confirmpassword,'Confirmpassword field is required');
}else if(confirmpasswordvalue!=passwordvalue)
{
setErrorFor(confirmpassword,'Password doesnt match');
}
else{
setSuccessFor(confirmpassword);
}
//password validation ends here//




//Phone number validation//
   
 if(phonenumbervalue==='')
{
     setErrorFor(phonenumber,'phonenumber fields canot be blank');
 }

else if (!regex.test(phonenumbervalue)) {
  
    setErrorFor(phonenumber,'Phone number must contain exactly 10 digits, and may be formatted as XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX');
}
else {


    setSuccessFor(phonenumber);
}


}
//phone number validation ends here//

function setErrorFor(input,message)
{
    const inputControl=input.parentElement;//.input-control
    const small=inputControl.querySelector('small');

    small.innerText=message;//add error message inside small

    inputControl.className='input-control error';//add error class


}

function setSuccessFor(input){

    const inputControl=input.parentElement;

    inputControl.className='input-control success'


}


function isEmail(email){

    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

}
// const phonenumber=document.getElementById('phonenumber');
//  phonenumber.addEventListener('blur', validatePhoneNumber);
//   function validatePhoneNumber() {
//     const phonenumbervalue = phonenumber.value.trim().replace(/[- .]/g, ''); // remove dashes, periods, and spaces from phone number
//     const regex = /^[0-9]{10}$/; // regular expression to match phone number format
//     if (!regex.test(phonenumbervalue)) {
//       phonenumber.classList.add('invalid');
//       phonenumber.setCustomValidity('Phone number must contain exactly 10 digits, and may be formatted as XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX');
//     } else {
//      phonenumber.classList.remove('invalid');
//      phonenumber.setCustomValidity('');
//     }
//   }