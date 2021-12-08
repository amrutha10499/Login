function validateLogIn(){
    var UserName=document.getElementById("uName").value;
    var Password=document.getElementById("pass").value;

      if(UserName!==""){
          if(UserName.length>5){
             if(UserName.match(/^[a-z]/)){
                  if(Password!==""){
                       if(Password.length>5){
                          document.getElementById("resp").innerHTML="login succesful";
                        } else{
                        document.getElementById("resp").innerHTML="password must be strong ";
                           }
                   }else{
                       document.getElementById("resp").innerHTML="enter password";
                   }
               }else {
                 document.getElementById("resp").innerHTML="invalid username";
                   }
         
           }else{
                document.getElementById("resp").innerHTML="username cannot be less than 5 characters ";
                }
       
       }else{
            document.getElementById("resp").innerHTML="enter username";
            }   

}
        
    
    
