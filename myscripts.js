function getElement(id){
    return document.getElementById(id).value;
  
  }
  function isEmpty(id){
    if(getElement(id)==''){
  
      return true;
    }
    
    return false;
  }
  function isString(name)
  {
    var len=name.length;
    for(var i=0;i<=len;i++)
    {
        if(name.codePointAt(i)>64 && name.codePointAt(i)<91 ||name.codePointAt(i)>96 && name.codePointAt(i)<123 )
           return true;
        else 
        return false;
    }

  }






  function onSubmitHandle(){
    var pass = document.getElementById("pass_word").value;
    var cpass = document.getElementById("cpass_word").value;
    const email = document.getElementById('gmail_id').value;
    var atSymbol = email.indexOf("@");
    var dot = email.lastIndexOf('.');
    const name = document.getElementById('fname').value;
    var isformvalid = true;
    if(isEmpty('invite_code')) {
      isformvalid = false;
      alert('Please enter invite code');
    } else if(isEmpty('fname')) {
      isformvalid = false;
      alert('Please enter your name');
    } else if(isEmpty('gmail_id')) {
      isformvalid = false;
      alert('Please enter your mail id');
    } else if(isEmpty('pass_word')) {
      isformvalid = false;
      alert('Please enter your password');
    } else if(isEmpty('cpass_word')) {
      isformvalid = false;
      alert('Enter the  password !');
    }
    else if(!isString(name))
    {
        alert("Enter Your name in only alphabets.");
        isformvalid = false;
    }
    else if(pass != cpass){ 
      alert("Both the passwords do not match !!!");
      isformvalid = false;
    }
  
          
          else if(atSymbol < 1){
            alert("Invalid E-mail");
            isformvalid = false;
          }
          
       else if(dot <= atSymbol + 2){
          alert("Invalid E-mail");
          isformvalid = false;
        }
         else if(dot == gmail_id.length - 1){
            alert("Invalid E-mail");
            isformvalid = false;
          }


          else if(pass.length<8)
          {
            alert("Password cannot be less than 8 characters");
          }
     





          else if(isformvalid)
            {
    alert("Your file is submited.");
  }
          
     
    return isformvalid;
  }