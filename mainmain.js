

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
  function dj(){
  
      var eyzddd = firebase.database().ref('Image/').child(localStorage.getItem('information'));
      eyzddd.once('value',function(d){
      var data = d.val();
      localStorage.setItem('SenderPhotocf',data.LINK);
      });

    
  }

   
  document.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
   
      if(localStorage.getItem('Inprocess') == undefined || localStorage.getItem('Inprocess') != 'yes')
      {
        localStorage.setItem('Inprocess','yes');
        document.getElementById('my-3').setAttribute('readonly', true);
        console.log('Pass');
        alert('We have got your request now security check will be done');
      var ref =  firebase.database().ref('SEARCHEDFOR/').child(localStorage.getItem('dbv')+document.getElementById('my-3').value)
      ref.once('value',function(dsf){
      var data = dsf.val();
      localStorage.setItem('d',data.Y);
      });
      setTimeout(function(){
        if(localStorage.getItem('d') == undefined || localStorage.getItem('d') == null)
        {
          alert('Security Check Done.');
          if(document.getElementById('my-3').value != ''){
        
  
          
             
            
            localStorage.removeItem('d');
           
            alert('We Got Your Request Process Has Started.');

            var dd =  firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
         dd.once('value', function(sd){
         var data = sd.val();
         var name = data.NAME;
         localStorage.setItem('Verify',name);
         console.log(name + 'Add');
         }); 
         console.log(document.getElementById('my-3').value);
         console.log(localStorage.getItem('Verify'));
         setTimeout(function(){
          if(localStorage.getItem('Verify') == document.getElementById('my-3').value){
            alert('I am Sorry But We can not add yourself');
            localStorage.removeItem('Inprocess');
           }else{
    
            alert('Processing We are checking if user exsists');
            var red = firebase.database().ref('Searched Box/').child(document.getElementById('my-3').value);
            red.once('value',function(get_info){
            var data = get_info.val();
            var NAME = data.NAME;
            var EMAIL1 = data.EMAIL;
            localStorage.setItem('person',NAME);
            var EMAIL   = EMAIL1.substring(0, EMAIL1.lastIndexOf("@"));
            localStorage.setItem('Searched',EMAIL);
            });
            setTimeout(function(){
            var xyz = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
            xyz.once('value',function(d){
             var data = d.val();
             var NAME = data.NAME;
             localStorage.setItem('Name',NAME);
             console.log(NAME);
            });
            setTimeout(function(){
             alert('Please Wait A While');
             if(localStorage.getItem('person') != null || localStorage.getItem('person') != undefined)
             {
    
               alert('User Found Wait For Some Min.');
               var lsname   = localStorage.getItem('person');
               var ref = firebase.database().ref('Image/').child(localStorage.getItem('information'));
               ref.once('value',function(ss){
              var data = ss.val();
              localStorage.setItem('FirstPerson',data.LINK);
               });
               var ref1 = firebase.database().ref('Image/').child(localStorage.getItem('Searched'));
               ref1.once('value',function(ssw){
              var data = ssw.val();
              localStorage.setItem('SecondPerson',data.LINK);
               });
    
               setTimeout(function(){
      alert('Almost Done');
      firebase.database().ref('SEARCHEDFOR/').child(localStorage.getItem('dbv')+document.getElementById('my-3').value).update({
        Y:document.getElementById('my-3').value
      });
      firebase.database().ref('SEARCHEDFOR/').child(document.getElementById('my-3').value + localStorage.getItem('dbv')).update({
        Y:localStorage.getItem('dbv')
      });
        firebase.database().ref('FOR/').child(lsname).update({
       
        });
        firebase.database().ref('FOR/').child(localStorage.getItem('Name')).update({
    
        });
        firebase.database().ref('FOR/').child(lsname).push({
        SEACHED_FOR : localStorage.getItem('Name'),
        IM:localStorage.getItem('FirstPerson')
        });
        firebase.database().ref('FOR/').child(localStorage.getItem('Name')).push({
         SEACHED_FOR : document.getElementById('my-3').value,
         IM:localStorage.getItem('SecondPerson')
       
         });
         alert('We added The Following user;')
         localStorage.removeItem('Inprocess');
       localStorage.removeItem('person');
       localStorage.removeItem('Name');
       localStorage.removeItem('Verify');
       localStorage.removeItem('FirstPerson');
       localStorage.removeItem('SecondPerson');
       localStorage.removeItem('Searched');
       localStorage.removeItem('Inprocess');
       document.getElementById('my-3').removeAttribute('readOnly');
                    },2000)
    
       
             }
             else
             {
              localStorage.removeItem('d');
              localStorage.removeItem('Inprocess');
               alert('USER DOSE NOT EXSIST');
               localStorage.removeItem('person');
               localStorage.removeItem('Name');
               localStorage.removeItem('Verify');
               document.getElementById('my-3').removeAttribute('readOnly');
             }
            },3000)
      
           
            },2000);
      
      
           }
      
         },5000)
    
          }else{
            localStorage.removeItem('Inprocess');
            alert('Some Strings Are Missings')
            localStorage.removeItem('d');
            
            localStorage.removeItem('person');
            localStorage.removeItem('Name');
            localStorage.removeItem('Verify');
            document.getElementById('my-3').removeAttribute('readOnly');
            return false;
          }
        }else{
          localStorage.removeItem('d');
          alert('User Is Already Added');
          localStorage.removeItem('Inprocess');
          localStorage.removeItem('person');
          localStorage.removeItem('Name');
          localStorage.removeItem('Verify');
          document.getElementById('my-3').removeAttribute('readOnly');
        }
      },3000);
        
        
      }else{
        return false
      }
   
      }
  
  });



  function getData() { 
    var ref = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
    ref.once('value',function(hf){
    var data = hf.val();
    var NAME = data.NAME;
    localStorage.setItem('dbv',NAME);
    console.log(NAME);
    });
    

    
  setTimeout(function(){
    firebase.database().ref("FOR/").child(localStorage.getItem('dbv')).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      console.log('Started');
        var firebase_message_id = childKey;
      var message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  var NAME = message_data['SEACHED_FOR'];
  var TYPE = message_data['TYPE'];
  var IMAGE = message_data['IMAGE'];
  var IM = message_data['IM'];
  if(TYPE == undefined && IMAGE == undefined){
  var a_part = "<a style='cursor:pointer;' class='list-group-item list-group-item-action border-0 bocx nhhh'>";
  var div_start = "<div class='d-flex align-items-start'>";
  var img_tag = '<img id='+NAME+"Hello"+'  src="'+IM+'" class="fa fa-circle mr-1" alt="FAILED" width="40" height="40">';
  var div_1_start = '<div id='+NAME+' onclick="display(this.id);" style="color: black;" class="flex-grow-1 ml-3">';
  var name2 = NAME;
  var mem_start1 = '<div  color: "black;" class="small"><span class="fa fa-circle fa fa-link dfdf"></span> USER OF MWORLD</div>'
  var div_1_end = '</div>';
  var div_end = '</div>';
  var a_end = '</a>';
  var hr = '<hr>';
  
  document.getElementById('output').innerHTML += a_part + div_start + img_tag + div_1_start + name2 + mem_start1 + div_1_end + div_end + a_end + hr;
  }else{
    var a_part = "<a style='cursor:pointer;'  class='list-group-item list-group-item-action border-0 bocx nhhh'>";
    var div_start = "<div class='d-flex align-items-start'>";
    var img_tag = '<img id='+NAME+"Hello"+'  src="'+IMAGE+'" class="fa fa-circle mr-1" alt="FAILED" width="40" height="40">';
    var div_1_start = '<div id='+NAME+' onclick="display69(this.id);" style="color: black;" class="flex-grow-1 ml-3">';
    var name2 = NAME;
    var mem_start1 = '<div  color:"black" class="small"><span class="fa fa-circle fa fa-link dfdf"></span> GROUP</div>'
    var div_1_end = '</div>';
    var div_end = '</div>';
    var a_end = '</a>';
    var hr = '<hr>';
    
    document.getElementById('output').innerHTML += a_part + div_start + img_tag + div_1_start + name2 + mem_start1 + div_1_end + div_end + a_end + hr;
  }
  

  //End code
   } });  });
  },3000);
  };

  getData();

 
 function removed()
 {


 }




function display69(dd)
{
  document.getElementById('Habibi').innerHTML = 'A GROUP MADE IN MWORLD';
  alert('You Clicked ' + dd);
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainss').style.display = 'block';
  document.getElementById('ssde').style.display = 'none';
 document.getElementById('ssdef').style.display = 'none';
  document.getElementById('seeker').style.display = 'none';
console.log( localStorage.getItem(dd+'Hello'));




document.getElementById('ssdsd').style.display = 'block';



  document.getElementById('profile').src = document.getElementById(dd+'Hello').src;






  document.getElementById('ssda').innerHTML = dd;
  localStorage.setItem('Chat',dd);
  if(document.getElementById('check69'+dd) == undefined || document.getElementById('check69'+dd) == null){
    function s() { 


      document.getElementById('sssa').innerHTML = '';
    
  
  
    firebase.database().ref("GroupChats/").child(document.getElementById('ssda').innerHTML).on('value', function(snapshot) { document.getElementById("sssa").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      console.log('Started');
        var firebase_message_id = childKey;
      var message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  var SENDER = message_data['NAME'];
  var MESSAGE = message_data['MESSAGE'];
  var IMG = message_data['IMG1'];
  var IMG1 = message_data['IMAGE'];
  var AUDIO = message_data['AUDIO']
  
  if (SENDER == localStorage.getItem('dbv')){
    if(MESSAGE == undefined && IMG != undefined)
    {
      var mm = '<div class="chat-message-right mb-4"><div><img src="'+IMG1+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
      document.getElementById("sssa").innerHTML += mm;
    }else if(MESSAGE == undefined && AUDIO != undefined){
     var mnh = '<div class="chat-message-right mb-4"><div><img src="'+IMG1+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
     document.getElementById("sssa").innerHTML += mnh;
    }else{
    var ss = '<div class="chat-message-right mb-4"><div><img src="'+IMG1+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div>'+MESSAGE+'</div></div>';
    document.getElementById("sssa").innerHTML += ss;
    }
  }else if(SENDER != localStorage.getItem('dbv')){
    if(MESSAGE == undefined && IMG != undefined )
    {
      var mmn = '<div class="chat-message-left mb-4"><div><img src="'+IMG1+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+SENDER+'</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
      document.getElementById("sssa").innerHTML += mmn;
  
  
    }else if(MESSAGE == undefined && AUDIO != undefined){
      var mnhk = '<div class="chat-message-left mb-4"><div><img src="'+IMG1+'" class="rounded-circle mr-1" alt="'+SENDER+'" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+SENDER+'</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
      document.getElementById("sssa").innerHTML += mnhk;
  
  
    }else{
    var ddfg = ' <div class="chat-message-left pb-4"><div>  <img src="'+IMG1+'" class="rounded-circle mr-1" alt="'+SENDER+'" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 bbc"><div class="font-weight-bold mb-1">'+SENDER+'</div>'+MESSAGE+'</div></div>';
    document.getElementById("sssa").innerHTML += ddfg;
  
    }
  
  }
  
  
  
  //End code
   } });  }); 
    
  };
  s();
    localStorage.removeItem('group');
  }else{
   localStorage.setItem('group','ok');
  }

}

function display(dd)
{
  document.getElementById('Habibi').innerHTML = "MEMBER OF ARKA's WORLD";
  alert('You Clicked ' + dd);
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainss').style.display = 'block';
  document.getElementById('ssde').style.display = 'none';
 document.getElementById('ssdef').style.display = 'none';
  document.getElementById('seeker').style.display = 'none';
  document.getElementById('ssdsd').style.display = 'none';
console.log( localStorage.getItem(dd+'Hello'));








  document.getElementById('profile').src = document.getElementById(dd+'Hello').src;






  document.getElementById('ssda').innerHTML = dd;
  localStorage.setItem('Chat',dd);
  if(document.getElementById('check69'+dd) == undefined || document.getElementById('check69'+dd) == null){
    function s() { 

      var ref = firebase.database().ref('Image/').child(localStorage.getItem('information'));
      ref.once('value',function(hf){
      var data = hf.val();
      var NAME = data.LINK;
      localStorage.setItem('SenderPhoto',NAME);
  
  
      });
      document.getElementById('sssa').innerHTML = '';
    
  
  
      firebase.database().ref("WhatsappChat/").child(localStorage.getItem('dbv')+dd).on('value', function(snapshot) { document.getElementById("sssa").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        console.log('Started');
          var firebase_message_id = childKey;
        var message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    var SENDER = message_data['SENDER'];
    var MESSAGE = message_data['MESSAGE'];
    var IMG = message_data['IMG'];
    var AUDIO = message_data['AUDIO']
    
    if (SENDER == localStorage.getItem('dbv')){
      if(MESSAGE == undefined && IMG != undefined)
      {
        var mm = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
        document.getElementById("sssa").innerHTML += mm;
      }else if(MESSAGE == undefined && AUDIO != undefined){
       var mnh = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
       document.getElementById("sssa").innerHTML += mnh;
      }else{
      var ss = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div>'+MESSAGE+'</div></div>';
      document.getElementById("sssa").innerHTML += ss;
      }
    }else if(SENDER != localStorage.getItem('dbv')){
      if(MESSAGE == undefined && IMG != undefined )
      {
        var mmn = '<div class="chat-message-left mb-4"><div><img src="'+document.getElementById(dd+'Hello').src+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+dd+'</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
        document.getElementById("sssa").innerHTML += mmn;
    
    
      }else if(MESSAGE == undefined && AUDIO != undefined){
        var mnhk = '<div class="chat-message-left mb-4"><div><img src="'+document.getElementById(dd+'Hello').src+'" class="rounded-circle mr-1" alt="'+dd+'" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+dd+'</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
        document.getElementById("sssa").innerHTML += mnhk;
    
    
      }else{
      var ddfg = ' <div class="chat-message-left pb-4"><div>  <img src="'+document.getElementById(dd+'Hello').src+'" class="rounded-circle mr-1" alt="'+dd+'" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 bbc"><div class="font-weight-bold mb-1">'+dd+'</div>'+MESSAGE+'</div></div>';
      document.getElementById("sssa").innerHTML += ddfg;
    
      }
    
    }
    
    
    
    //End code
     } });  }); 
    
  };
  s();
    localStorage.removeItem('group');
  }else{
   localStorage.setItem('group','ok');
  }

 
}




function dd(){
  alert('Welcome.');
  setTimeout(function(){
    getData();
  },5000)

} 
 






 function send(){
  if(document.getElementById('Habibi').innerHTML != 'A GROUP MADE IN MWORLD'){
    var input = document.getElementById('input').value;
    document.getElementById('input').innerHTML = '';
    console.log(input);
  
  if ( input != ''){
    if(document.getElementById('ssda').value != '')
    { 

        var get = localStorage.getItem('Chat');
        console.log(get);
        console.log(document.getElementById('ssda').value);
        console.log(localStorage.getItem('dbv'));
       firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({
    
       });
       firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({
    
       });
       firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
       SENDER:localStorage.getItem('dbv'),
       MESSAGE:input
       });
       firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
        SENDER:localStorage.getItem('dbv'),
        MESSAGE:input
       });
     
       input = '';
  
    }
    else{
      alert('We ran out of a error');
      window.location = 'index.html';
    }
  }
  else 
  {
    alert('Message Box Is Empty');
  }
  
  }else{
    var inputd = document.getElementById('input').value;
    var group_name = document.getElementById('ssda').innerHTML;
    if(document.getElementById('ssda').value != ''){

      if(inputd != ''){
        firebase.database().ref('GroupChats/').child(group_name).update({
       
        });
        firebase.database().ref('GroupChats/').child(group_name).push({
         NAME:localStorage.getItem('dbv'),
         IMAGE:localStorage.getItem('SenderPhotocf'),
         MESSAGE:inputd

        });

      }else{
        alert('MESSAGE BOX IS EMPTY.')
      }
    }else{
      alert('WE RAN OUT OF A ERROR.');
    }
  }

 }
 var ImgName , ImgUrl;
 var files = [];
 var reader = new FileReader();

function sendPhoto(e)
{
  if(document.getElementById('Habibi').innerHTML != 'A GROUP MADE IN MWORLD'){
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
   input.onchange = e => {
    var math_random = Math.floor(Math.random() * 100000000);
    console.log('working');
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function(){
        console.log(reader.result);
  
      }
      reader.readAsDataURL(files[0]);
      console.log(files[0]);
   
  
      var div_photo = '<div id="for_photo'+math_random+'" class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class=" flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div id="'+math_random+'" class="font-weight-bold mb-1"></div></div></div>';
      document.getElementById('sssa').innerHTML += div_photo;
       alert('Please Wait Procees Started');
      var UploadTask = firebase.storage().ref('ChatPhoto/'+math_random+'.png').put(files[0]);
      UploadTask.on('state_changed' , function(snapshot){
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log(math_random);
        document.getElementById(math_random).innerHTML = "YOUR IMAGE UPLOAD PERCENTAGE IS:- "+progress+"%";
     
      },
      function(error){
     confirm(error);
     localStorage.removeItem('PhotoSendId');
     alert('Unsuccesfull To Save.')
     window.location = 'index.html';
     document.getElementById('for_photo'+math_random).style.display = 'none';
      },
     
      function(){
       UploadTask.snapshot.ref.getDownloadURL().then(function(url){
        ImgUrl = url;
        localStorage.setItem('dd',url);
       });
     alert('Wait For Five Min.')
     setTimeout(function(){
      var get = localStorage.getItem('Chat');
      firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({
  
      });
      firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({
   
      });
      firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
      SENDER:localStorage.getItem('dbv'),
      IMG:localStorage.getItem('dd'),
      FNUM : math_random
      });
      firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
       SENDER:localStorage.getItem('dbv'),
       IMG:localStorage.getItem('dd'),
       FNUM : math_random
      });
          localStorage.removeItem('dd');
           
          document.getElementById('for_photo'+math_random).style.display = 'none';
  
     
       },5000);
      }
      );
  
   }
  input.click();
  }else{
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
   input.onchange = e => {
    var math_random = Math.floor(Math.random() * 100000000);
    console.log('working');
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function(){
        console.log(reader.result);
  
      }
      reader.readAsDataURL(files[0]);
      console.log(files[0]);
   
  
      var div_photo = '<div id="for_photo'+math_random+'" class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhotocf')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class=" flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div id="'+math_random+'" class="font-weight-bold mb-1"></div></div></div>';
      document.getElementById('sssa').innerHTML += div_photo;
      var UploadTask = firebase.storage().ref('GroupChatPhoto/'+math_random+'.png').put(files[0]);
      UploadTask.on('state_changed' , function(snapshot){
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log(math_random);
        document.getElementById(math_random).innerHTML = "YOUR IMAGE UPLOAD PERCENTAGE IS:- "+progress+"%";
     
      },
      function(error){
     confirm(error);
     localStorage.removeItem('PhotoSendId');
     alert('Unsuccesfull To Save.')
     window.location = 'index.html';
     document.getElementById('for_photo'+math_random).style.display = 'none';
      },
     
      function(){
       UploadTask.snapshot.ref.getDownloadURL().then(function(url){
        ImgUrl = url;
        localStorage.setItem('dd69',url);
       });
     alert('Wait For Five Min.')
     setTimeout(function(){
      
      firebase.database().ref('GroupChats/').child(document.getElementById('ssda').innerHTML).update({
  
      });
  
      firebase.database().ref('GroupChats/').child(document.getElementById('ssda').innerHTML).push({
       NAME:localStorage.getItem('dbv'),
       IMG1:localStorage.getItem('dd69'),
       IMAGE:localStorage.getItem('SenderPhotocf'),
       FNUM : math_random

      });
          localStorage.removeItem('dd');
           
          document.getElementById('for_photo'+math_random).style.display = 'none';
  
     
       },5000);
      }
      );
  
   }
  input.click();
  }
 

}
var ImgName , ImgUrl;
var files = [];
var reader = new FileReader();
function sendPhoto65(e)
{
  if(document.getElementById('Habibi').innerHTML != 'A GROUP MADE IN MWORLD'){
    var input1 = document.createElement('input');
    input1.type = 'file';
    input1.accept = 'audio/*';
   input1.onchange = e => {
  
    
    
      
     
      var math_random = Math.floor(Math.random() * 10000000);
      console.log('working');
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function(){
        console.log(reader.result);
  
      }
      reader.readAsDataURL(files[0]);
      console.log(files[0]);
      var div_photo = '<div id="for_photo'+math_random+'" class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class=" flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div id="'+math_random+'" class="font-weight-bold mb-1"></div></div></div>';
      document.getElementById('sssa').innerHTML += div_photo;
  
      var UploadTask = firebase.storage().ref('AudioChat/'+math_random+'.mp3').put(files[0]);
   UploadTask.on('state_changed' , function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById(math_random).innerHTML = "YOUR IMAGE UPLOAD PERCENTAGE IS:- "+progress+"%";
   },
   function(error){
  confirm(error);
  alert('Unsuccesfull To Save.')
  window.location = 'index.html';
  document.getElementById('for_photo'+math_random).style.display = 'none';
   },
  
   function(){
    UploadTask.snapshot.ref.getDownloadURL().then(function(url){
     ImgUrl = url;
     localStorage.setItem('ddg',url);
    });
  alert('Wait For Five Min.')
  setTimeout(function(){
    var get = localStorage.getItem('Chat');
    firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({
  
    });
    firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({
  
    });
    firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
    SENDER:localStorage.getItem('dbv'),
    AUDIO:localStorage.getItem('ddg'),
    NUM:math_random
    });
    firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
     SENDER:localStorage.getItem('dbv'),
     AUDIO:localStorage.getItem('ddg'),
     NUM:math_random
    });
       localStorage.removeItem('ddg');
       document.getElementById('for_photo'+math_random).style.display = 'none';
       
  
  
    },5000);
   }
   );
  }
   
   
   
  input1.click();
  }else{
    var input1 = document.createElement('input');
    input1.type = 'file';
    input1.accept = 'audio/*';
   input1.onchange = e => {
  
    
    
      
     
      var math_random = Math.floor(Math.random() * 10000000);
      console.log('working');
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function(){
        console.log(reader.result);
  
      }
      reader.readAsDataURL(files[0]);
      console.log(files[0]);
      var div_photo = '<div id="for_photo'+math_random+'" class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhotocf')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class=" flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div id="'+math_random+'" class="font-weight-bold mb-1"></div></div></div>';
      document.getElementById('sssa').innerHTML += div_photo;
  
      var UploadTask = firebase.storage().ref('GroupAudioChat/'+math_random+'.mp3').put(files[0]);
   UploadTask.on('state_changed' , function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById(math_random).innerHTML = "YOUR IMAGE UPLOAD PERCENTAGE IS:- "+progress+"%";
   },
   function(error){
  confirm(error);
  alert('Unsuccesfull To Save.')
  window.location = 'index.html';
  document.getElementById('for_photo'+math_random).style.display = 'none';
   },
  
   function(){
    UploadTask.snapshot.ref.getDownloadURL().then(function(url){
     ImgUrl = url;
     localStorage.setItem('ddg69',url);
    });
  alert('Wait For Five Min.')
  setTimeout(function(){

    firebase.database().ref('GroupChats/').child(document.getElementById('ssda').innerHTML).update({
  
    });

    firebase.database().ref('GroupChats/').child(document.getElementById('ssda').innerHTML).push({
    NAME:localStorage.getItem('dbv'),
    AUDIO:localStorage.getItem('ddg69'),
    IMAGE:localStorage.getItem('SenderPhotocf'),
    FNUM:math_random
    });

       localStorage.removeItem('ddg69');
       document.getElementById('for_photo'+math_random).style.display = 'none';
       
  
  
    },5000);
   }
   );
  }
   
   
   
  input1.click();
  }
 
}



function OPenCreate()
{
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainss').style.display = 'none';
  document.getElementById('ssde').style.display = 'block';
 document.getElementById('ssdef').style.display = 'none';
  document.getElementById('seeker').style.display = 'none';
  localStorage.removeItem('PhotoOfGroup');
  localStorage.removeItem('NAMEOg');


}

var filess = [];
var reader = new FileReader();
function previwdo()
{
  


  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
 input.onchange = e => {
  console.log('working');
    filess = e.target.files;
    reader = new FileReader();
    reader.onload = function(){
      var url = reader.result;
      document.getElementById('imagePreview').style.backgroundImage = `url(${url})`;
      console.log(reader.result);

    }
    reader.readAsDataURL(filess[0]);
    console.log(filess[0]+'This One');
 }
input.click();
}

function makeGroup(){
  alert('Please wait for 5 sec.')
  var get_group_name = document.getElementById('inputff').value;
  document.getElementById('inputff').setAttribute('readonly', true);
  if (get_group_name != '' && filess[0] != undefined ||filess[0] != null)

  {
    var ref = firebase.database().ref('GROUPCREATED/').child(get_group_name);
    ref.once('value',function(ddd){
     var data = ddd.val();
     localStorage.setItem('verify1',data.GROUP_CREATED);
    });
setTimeout(function(){
  if(localStorage.getItem('verify1') == undefined || localStorage.getItem('verify1') == null)
  {

    alert('Process is Starting Do not leave the page.');
    document.getElementById('asd').style.display = 'none';
    var UploadTask = firebase.storage().ref('GroupIcon/'+get_group_name+'.png').put(filess[0]);
   UploadTask.on('state_changed' , function(snapshot){
    document.getElementById('seeker').style.display = 'block';
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById('seeker').innerHTML = 'YOUR PROCESS OF UPLOADING THE GROUP ICON IS: '+progress+'%';
  
  
  
   },
   function(error){
    document.getElementById('inputff').removeAttribute('readonly');
  alert('Unsuccesfull To Save That is why we have to go to login page sorry.')
  window.location = 'index.html';
       document.getElementById('ssd').style.display = 'block';
       document.getElementById('mainss').style.display = 'none';
       document.getElementById('ssde').style.display = 'none';
       localStorage.removeItem('PhotoOfGroup');
       localStorage.removeItem('NAMEOg');
   },
  
   function(){
    UploadTask.snapshot.ref.getDownloadURL().then(function(url){
     ImgUrl = url;
     localStorage.setItem('dde',url);
    });
  alert('Icon Saved now We will save your group information.');
  var xyzd = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
  xyzd.once('value',function(d){
   var data = d.val();
   var NAME = data.NAME;
   localStorage.setItem('Name1',NAME);
   console.log(NAME);
  });
  setTimeout(function(){
    var math_random = Math.floor(Math.random() * 10000000);
    firebase.database().ref('GROUPCHECK/'+get_group_name).child(localStorage.getItem('information')).update({ 
      GROUP_NAME:get_group_name,
      ADMIN:'YES'
    });
    firebase.database().ref('GROUPCREATED').child(get_group_name).update({
      GROUP_CREATED:get_group_name
    });
    firebase.database().ref('HOWGROUPMEM/'+get_group_name+'/').update({
          
    });
    firebase.database().ref('HOWGROUPMEM/'+get_group_name+'/').push({
    NAME:localStorage.getItem('dbv'),
    Image:localStorage.getItem('SenderPhotocf'),
    });
      firebase.database().ref('FOR/').child(localStorage.getItem('Name1')).update({ 
   
       });
       setTimeout(function(){
        firebase.database().ref('FOR/').child(localStorage.getItem('Name1')).push({ 
          SEACHED_FOR: get_group_name,
          TYPE:'GROUP',
          IMAGE:localStorage.getItem('dde')
          ,CREATEDBY:localStorage.getItem('Information'),
          ADMIN:'YES',
          
           });
           localStorage.removeItem('dde');
           document.getElementById('inputff').removeAttribute('readonly');
          
           alert('GROUP CREATED SUCCESFULL; WE WILL RELOAD AFTER A GROUP CREATED');
           localStorage.setItem('information',localStorage.getItem('information'));
           window.location = 'index.html';
           
      
           document.getElementById('ssd').style.display = 'block';
           document.getElementById('mainss').style.display = 'none';
           document.getElementById('ssde').style.display = 'none';
           localStorage.removeItem('PhotoOfGroup');
           localStorage.removeItem('NAMEOg');
           localStorage.removeItem('verify1');
       },2000)

  
  
    },3000);
   }
   );
  }else{
    document.getElementById('inputff').removeAttribute('readonly');
    alert('SOME HAS ALREADY CREATE A GROUP WITH THIS NAME FOR SECURITY PLEASE CHAGE THE NAME.');
    document.getElementById('ssd').style.display = 'none';
    document.getElementById('mainss').style.display = 'none';
    document.getElementById('ssde').style.display = 'block';
    document.getElementById('asd').style.display = 'block';
    document.getElementById('seeker').style.display = 'none';
    localStorage.removeItem('PhotoOfGroup');
    localStorage.removeItem('NAMEOg');
    localStorage.removeItem('verify1');
  }
},4000);
   

  
  }else{
    document.getElementById('inputff').removeAttribute('readonly');
    alert('Please Give A Group Name First OR Give A Image Of The Group');
  }
}




function doit1()
{

  if(localStorage.getItem('Inprocess') == undefined || localStorage.getItem('Inprocess') != 'yes')
      {

        localStorage.setItem('Inprocess','yes');
        document.getElementById('my-3').setAttribute('readonly', true);
        console.log('Pass');
        alert('We have got your request now security check will be done');
      var ref =  firebase.database().ref('SEARCHEDFOR/').child(localStorage.getItem('dbv')+document.getElementById('my-3').value)
      ref.once('value',function(dsf){
      var data = dsf.val();
      localStorage.setItem('d',data.Y);
      });
      setTimeout(function(){
        if(localStorage.getItem('d') == undefined || localStorage.getItem('d') == null)
        {
          alert('Security Check Done.');
          if(document.getElementById('my-3').value != ''){
        
  
          
             
            
            localStorage.removeItem('d');
           
            alert('We Got Your Request Process Has Started.');
            localStorage.setItem('Inprocess','yes');
            var dd =  firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
         dd.once('value', function(sd){
         var data = sd.val();
         var name = data.NAME;
         localStorage.setItem('Verify',name);
         console.log(name + 'Add');
         }); 
         console.log(document.getElementById('my-3').value);
         console.log(localStorage.getItem('Verify'));
         setTimeout(function(){
          if(localStorage.getItem('Verify') == document.getElementById('my-3').value){
            alert('I am Sorry But We can not add yourself');
            localStorage.removeItem('Inprocess');
           }else{
    
            alert('Processing We are checking if user exsists');
            var red = firebase.database().ref('Searched Box/').child(document.getElementById('my-3').value);
            red.once('value',function(get_info){
            var data = get_info.val();
            var NAME = data.NAME;
            var EMAIL1 = data.EMAIL;
            localStorage.setItem('person',NAME);
            var EMAIL   = EMAIL1.substring(0, EMAIL1.lastIndexOf("@"));
            localStorage.setItem('Searched',EMAIL);
            });
            setTimeout(function(){
            var xyz = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
            xyz.once('value',function(d){
             var data = d.val();
             var NAME = data.NAME;
             localStorage.setItem('Name',NAME);
             console.log(NAME);
            });
            setTimeout(function(){
             alert('Please Wait A While');
             if(localStorage.getItem('person') != null || localStorage.getItem('person') != undefined)
             {
    
               alert('User Found Wait For Some Min.');
          
               var lsname   = localStorage.getItem('person');
               var ref = firebase.database().ref('Image/').child(localStorage.getItem('information'));
               ref.once('value',function(ss){
              var data = ss.val();
              localStorage.setItem('FirstPerson',data.LINK);
               });
               var ref1 = firebase.database().ref('Image/').child(localStorage.getItem('Searched'));
               ref1.once('value',function(ssw){
              var data = ssw.val();
              localStorage.setItem('SecondPerson',data.LINK);
               });
    
               setTimeout(function(){
      alert('Almost Done');
      firebase.database().ref('SEARCHEDFOR/').child(localStorage.getItem('dbv')+document.getElementById('my-3').value).update({
        Y:document.getElementById('my-3').value
      });
      firebase.database().ref('SEARCHEDFOR/').child(document.getElementById('my-3').value + localStorage.getItem('dbv')).update({
        Y:localStorage.getItem('dbv')
      });
        firebase.database().ref('FOR/').child(lsname).update({
       
        });
        firebase.database().ref('FOR/').child(localStorage.getItem('Name')).update({
    
        });
        firebase.database().ref('FOR/').child(lsname).push({
        SEACHED_FOR : localStorage.getItem('Name'),
        IM:localStorage.getItem('FirstPerson')
        });
        firebase.database().ref('FOR/').child(localStorage.getItem('Name')).push({
         SEACHED_FOR : document.getElementById('my-3').value,
         IM:localStorage.getItem('SecondPerson')
       
         });
         alert('We added The Following user;')
         localStorage.removeItem('Inprocess');
       localStorage.removeItem('person');
       localStorage.removeItem('Name');
       localStorage.removeItem('Verify');
       localStorage.removeItem('FirstPerson');
       localStorage.removeItem('SecondPerson');
       localStorage.removeItem('Searched');
       localStorage.removeItem('Inprocess');
       window.location('main.html');
       document.getElementById('my-3').removeAttribute('readOnly');
                    },2000)
    
       
             }
             else
             {
              localStorage.removeItem('d');
              localStorage.removeItem('Inprocess');
               alert('USER DOSE NOT EXSIST');
               localStorage.removeItem('person');
               localStorage.removeItem('Name');
               localStorage.removeItem('Verify');
               document.getElementById('my-3').removeAttribute('readOnly');
             }
            },3000)
      
           
            },2000);
      
      
           }
      
         },5000)
    
          }else{
            alert('Some Strings Are Missings')
            localStorage.removeItem('d');
            localStorage.removeItem('Inprocess');
            document.getElementById('my-3').removeAttribute('readOnly');
            return false;
          }
        }else{
          localStorage.removeItem('d');
          alert('User Is Already Added');
          localStorage.removeItem('Inprocess');
          document.getElementById('my-3').removeAttribute('readOnly');
        }
      },3000);
        
        
      }else{
        return false
      }
  
}

function addMember()
{
  localStorage.setItem('PhotoOfGroup',document.getElementById('profile').src);
  localStorage.setItem('NAMEOg',document.getElementById('ssda').innerHTML);
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainss').style.display = 'none';
  document.getElementById('ssde').style.display = 'none';
 document.getElementById('ssdef').style.display = 'block';
  document.getElementById('seeker').style.display = 'none';

  firebase.database().ref("HOWGROUPMEM/").child(document.getElementById('ssda').innerHTML).on('value', function(snapshot) { document.getElementById("foreveryone").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    console.log('Started');
      var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

var member = message_data['NAME'];
var Image = message_data['Image'];



  
    var xyzxyz = "<a id='color"+member+"' style='cursor:pointer;' class='list-group-item list-group-item-action border-0 bocx sss'><div  class='d-flex align-items-start'>"+'<img src="'+Image+'" class="fa fa-circle mr-1" alt="FAILED" width="40" height="40"><div id='+member+'  onmousemove="ifadmin(this.id)"  style="color: black;" class="flex-grow-1 ml-3">'+member+'<br><div id="text'+member+'" class="small"> MEMBER OF THIS GROUP</div></div></div><a><hr width="2px" >';
    document.getElementById('foreveryone').innerHTML += xyzxyz;






//End code
 } });  }); 

var get = firebase.database().ref('GROUPCHECK/'+document.getElementById('ssda').innerHTML+'/').child(localStorage.getItem('information'));   
get.once('value',function(dfdfg){
var data = dfdfg.val();
localStorage.setItem('AdminGroupCheck',data.ADMIN);

});
setTimeout(function(){
 if(localStorage.getItem('AdminGroupCheck') != null || localStorage.getItem('AdminGroupCheck') != undefined ){
  if(localStorage.getItem('AdminGroupCheck') == 'YES'){
    document.getElementById('ifaadmin').style.display = 'block';
  }else{
  return false;
  }
 
 

 }else{

  return false

 }
},2000)
}

function ifadmin(get_member)
{
console.log(get_member);
 var hdg= firebase.database().ref('Searched Box/').child(get_member);
 hdg.once('value',function(lol){
 data = lol.val();
 var semail = data.EMAIL;
 var sname   = semail.substring(0, semail.lastIndexOf("@"));

  var ref9 = firebase.database().ref('GROUPCHECK/'+document.getElementById('ssda').innerHTML+'/').child(sname);
  ref9.once('value',function(get_the){
  var data = get_the.val();
   if(data.ADMIN == 'YES'){
    document.getElementById('color'+get_member).style.backgroundColor = 'red';
    document.getElementById('color'+get_member).style.color = 'white';
    document.getElementById('text'+get_member).innerHTML = 'ADMIN OF THIS GROUP.';
    document.getElementById('text'+get_member).style.color = 'white';

   }else{
     return false
   }
  });


 });


}




function addthemember()
{
  alert('We will start the process shortly.');
  var get_nm = document.getElementById('addmem').value;
  document.getElementById('addmem').setAttribute('readonly',true);
  if(get_nm != ''){
  var xss =  firebase.database().ref('Searched Box/').child(get_nm);
  xss.once('value',function(sdfs){
  var data = sdfs.val();
  localStorage.setItem('VerifyIDK',data.EMAIL);
  
  });
  setTimeout(function(){

    if(localStorage.getItem('VerifyIDK') == undefined || localStorage.getItem('VerifyIDK') == null){
      alert('THE USER DOSE NOT EXSISTS.');
      document.getElementById('addmem').removeAttribute('readonly');
      localStorage.removeItem('PhotoOfGroup');
      localStorage.removeItem('NAMEOg');
     }else{

      alert('WE FOUND THAT THE USER EXSISTS.NOW WE WILL START THE ADDING PROCESS.');
      var semail = localStorage.getItem('VerifyIDK');
      var sname   = semail.substring(0, semail.lastIndexOf("@"));
      var dhgi = firebase.database().ref('GROUPCHECK/'+localStorage.getItem('NAMEOg')+'/').child(sname);
      dhgi.once('value',function(df){
     var data = df.val();
      localStorage.setItem('ewjh',data.ADMIN);
     
      });
      setTimeout(function(){
        if(localStorage.getItem('ewjh') == null || localStorage.getItem('ewjh') == undefined){
          firebase.database().ref('GROUPCHECK/'+localStorage.getItem('NAMEOg')+'/').child(sname).update({
          ADMIN:"NO",
          GROUP_NAME:localStorage.getItem('NAMEOg')
          });
          firebase.database().ref('HOWGROUPMEM/'+localStorage.getItem('NAMEOg')+'/').update({
          
          });
          var getABc = firebase.database().ref('Image/').child(sname);
          getABc.once('value',function(get_the){
          var data = get_the.val();
          localStorage.setItem('XYZY',data.LINK);
          });

          setTimeout(function(){
          firebase.database().ref('HOWGROUPMEM/'+localStorage.getItem('NAMEOg')+'/').push({
          NAME:get_nm,
          Image:localStorage.getItem('XYZY')
          });

            firebase.database().ref('FOR/').child(get_nm).update({
           
            });



          
              firebase.database().ref('FOR/').child(get_nm).push({
                IMAGE:localStorage.getItem('PhotoOfGroup'),
                SEACHED_FOR : localStorage.getItem('NAMEOg'),
                TYPE:'GROUP',
              
            
            
              });
              localStorage.removeItem('XYZY');
              alert('THE MEMBER IS SUCCESFULLY ADDED TO YOUR GROUP');
              display69(localStorage.getItem('NAMEOg'))
              localStorage.removeItem('PhotoOfGroup');
              localStorage.removeItem('NAMEOg');
              document.getElementById('addmem').removeAttribute('readonly');
            },3000);
  
          
    
          }else{
            alert('MEMBER IS ALREADY THERE');
            display69(localStorage.getItem('NAMEOg'))
            localStorage.removeItem('PhotoOfGroup');
            localStorage.removeItem('NAMEOg');
            localStorage.removeItem('ewjh');
            document.getElementById('addmem').removeAttribute('readonly');
           
          }
      },2000)
      

    
     }
   },5000)
 
  }else{
    display69(localStorage.getItem('NAMEOg'))
    localStorage.removeItem('PhotoOfGroup');
    localStorage.removeItem('NAMEOg');
    alert('PLEASE GIVE THE NAME OF THE GROUP MEMBER')
    document.getElementById('addmem').removeAttribute('readonly');

  }
}

