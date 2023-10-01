const firebaseConfig = {
    apiKey: "AIzaSyDOZSgG2dSlNXufrlBjn3RWXMzwWW0mmrs",
    authDomain: "whatsapp-2474e.firebaseapp.com",
    databaseURL: "https://whatsapp-2474e-default-rtdb.firebaseio.com",
    projectId: "whatsapp-2474e",
    storageBucket: "whatsapp-2474e.appspot.com",
    messagingSenderId: "503162150320",
    appId: "1:503162150320:web:438ac7169985d167634a75",
    measurementId: "G-SRYCRP6RQZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function verifydf()
 {
    alert('Process is Starting.');
    var r_email = document.getElementById('r_email').value;
    var r_cpassword = document.getElementById('r_con_password').value;
    var r_password = document.getElementById('r_password').value;
    var r_name = document.getElementById('r_username').value;

    var semail = r_email;
    var sdomain = semail.substring(semail.lastIndexOf("@") +1);
    if(r_email != sdomain){
        if(r_name != '' && r_email != '' && r_password != '' && r_cpassword != ''){
            if(r_cpassword == r_password){
                var val = Math.floor(Math.random() * 100000);
                
                localStorage.setItem('itpd' , val);
                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "arkabhattacharyac42@gmail.com",
                    Password : "0E01EAE52949065802D27BF1723C1F1FCA91",
                    To :  document.getElementById('r_email').value,
                    From : "arkabhattacharyac42@gmail.com",
                    Subject : "OTP FOR YOUR MWORLD IS:",
                    Body : "YOUR OTP IS "+val+""
                }).then(
                  
                  message => alert(message)
                  
                
                );
                alert('OTP WILL BE SEND TO THE GIVEN EMAIL');
                localStorage.setItem('r_username',document.getElementById('r_username').value);
                localStorage.setItem('r_email',document.getElementById('r_email').value);
                localStorage.setItem('r_password',document.getElementById('r_password').value);
                localStorage.setItem('r_con_password',document.getElementById('r_con_password').value);
                alert('SENDED');
    
                    document.getElementById('r_username').style.display = 'none';
                    document.getElementById('r_password').style.display = 'none';
                    document.getElementById('r_con_password').style.display = 'none';
                    document.getElementById('r_email').style.display = 'none';
                    document.getElementById('verify').style.display = 'none';
                    document.getElementById('r_n').style.display = 'none';
                    document.getElementById('r_p').style.display = 'none';
                    document.getElementById('r_cp').style.display = 'none';
                    document.getElementById('r_n').style.display = 'none';
                    
                    document.getElementById('otp').style.display = 'block';
                    document.getElementById('create').style.display = 'block';
                    document.getElementById('problem').style.display = 'block';

          
            }else{
                alert('EMAIL IS NOT VALID.');
            }
        }
        else{
            alert('SOME STRINGS ARE MISSING');
        }
    }else{
        alert('TWO PASSWORD DID NOT MATCH');
        r_password = "";
        r_cpassword="";
    }


  
 }




//THIS IS THE SIGN UP PART

function createAccount(){

    if(localStorage.getItem('itpd') == (document.getElementById('otp').value)){
    var r_name = localStorage.getItem('r_username');
    var r_email = localStorage.getItem('r_email')
    var r_password = localStorage.getItem('r_password')
    var r_cpassword = localStorage.getItem('r_con_password')
    var semail = r_email
    var sname   = semail.substring(0, semail.lastIndexOf("@"));
    var sdomain = semail.substring(semail.lastIndexOf("@") +1);
    

 
             alert('Processing Your Request .....')
             var ref = firebase.database().ref('Whatsapp_User/').child(sname);
             ref.once('value' , function(get_me){
             var data = get_me.val();
             localStorage.setItem('check' , data.NAME);

             
             });
             setTimeout(function(){
                var check = localStorage.getItem('check');
                console.log(check);
                localStorage.removeItem('check');
                if (check == undefined || check == null  || check == "" ){
                  if(check != r_name){
                    document.getElementById('hide').value = 'ok';
                  }else{
                    window.location = 'index.html'
                    alert('SOMEONE ALREADY CREATED THIS ACCOUNT WITH SAME USERNAME PLEASE CHANGE IT.');

                  }

                }else{
                    alert('EMAIL ALREADY EXSISTS SORRY BUT WE CANT ACCEPT THIS REQUEST');
                    window.location = 'index.html';
                }
             },2000);
            
         setTimeout(function(){
            alert('Almost Done');
             if(document.getElementById('hide').value == 'ok'){
                 firebase.database().ref('Whatsapp_User/').child(sname).update({
                     NAME:r_name,
                     EMAIL:r_email,
                     PASSWORD:r_password
                     });
                     firebase.database().ref('Searched Box/').child(r_name).update({
                        NAME:r_name,
                        EMAIL:r_email,
                        PASSWORD:r_password,
                        });

                    
             alert('ACCOUNT CREATED SUCCESFULL HURRAY !!!');
             localStorage.setItem('forphoto',sname);
             window.location = 'photo.html';
             }else{
                 console.log('SYSTEM RUN OUT OF AN ERROR  ..... ERROR ......')
             }
     
         },8000);
     
         }else{
             alert('Incorrect Otp Please Try Again.')

            }

}

// SIGN UP PART END.

//SIGN IN PART START.
function login()
{
    alert('PLEASE WAIT 8 SECOND.');

    var lemail = document.getElementById('lemail').value;
    var lpassword = document.getElementById('lpassword').value;
    var lsemail = lemail
    var lsname   = lsemail.substring(0, lsemail.lastIndexOf("@"));
    var lsdomain = lsemail.substring(lsemail.lastIndexOf("@") +1);
    if(lemail != lsdomain){
        if(lemail != '' && lpassword != ''){

            var ldef = firebase.database().ref('Whatsapp_User/').child(lsname);
            ldef.once('value' , function(lhjkd){
            var data = lhjkd.val();
            var email = data.EMAIL;
            var password = data.PASSWORD;
            localStorage.setItem('ss',email);
            localStorage.setItem('dff',password);
            if(email == lemail && password == lpassword){

            alert('SUCCESFULL.');

            localStorage.setItem('information', lsname);
            setTimeout(function(){
                window.location = 'main.html';
            },2000);
          

            localStorage.removeItem('ss');
            localStorage.removeItem('dff');
            }else{
                localStorage.removeItem('ss');
                localStorage.removeItem('dff');
                alert('INCORRECT PASSWORD TRY AGAIN.')
                window.location = 'index.html';
            }
            });
    
    
            setTimeout(function(){
                console.log('Stag 2');
                var checkpp = localStorage.getItem('ss');
                var checkname = localStorage.getItem('dff')
                console.log(checkname);
                console.log(checkpp);
                if(checkpp == undefined || checkpp == null || checkname == undefined || checkname == null){
                alert('INCORRECT EMAIL ADDRESS PLEASE CHECK IT.');
                window.location = 'index.html';
                localStorage.removeItem('ss');
                localStorage.removeItem('dff');
                }else{
                    alert('SOMETHING WENT WRONG FROM OUR SIDE.');
                    window.location = 'index.html';
                    localStorage.removeItem('ss');
                    localStorage.removeItem('dff');
                }
                },8000);
    
        }else{
            alert('SOME STRINGS ARE MISSING.')
        }
    
    }else{
        alert('Enter Valid Email.');
        window.location = 'index.html';
    }
    

}

//SIGN IN PART END.
