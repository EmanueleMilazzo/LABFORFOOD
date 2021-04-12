$(document).ready(function () {
//slideshow
          
    
     function Divs() {
        var divs= $('#slide_contenitore div'),                   //creo un nodo contenente i div-slide
            now = divs.filter(':visible'),                      //filtro per visibilitá il nodo creato
            next = now.next().length ? now.next() : divs.first(),//assegno un valore tramite un operatore ternario alla
                                                                 //var next che é uguale al primo div se la cond. é falsa
                                                                 //ed é uguale al successivo se la condizione é vera
            speed = 1000;                                         //assegno la velocitá del fadeOut/IN ad una variabile
    
        now.fadeOut(speed); 
        next.fadeIn(speed);
        }
    
    $(function(){
        setInterval(Divs, 3400); //ripeto la funzione ogni 3.4sec
     });
    


//logo

  $("#img_logo").css("transform", "translate(0%, 0)");

    
    //ham munu
    
    
  var menu = document.querySelector(".menu");
  var ham = document.querySelector(".ham");
  var xIcon = document.querySelector(".xIcon");
  var menuIcon = document.querySelector(".menuIcon");

  ham.addEventListener("click", attivaMenu);

      function attivaMenu() {
        if (menu.classList.contains("showMenu")) {
          menu.classList.remove("showMenu");
          xIcon.style.display = "none";
          menuIcon.style.display = "block";
        } else {
          menu.classList.add("showMenu");
          xIcon.style.display = "block";
          menuIcon.style.display = "none";
        }
    }

  var menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", attivaMenu);
  });
  //ham menu
    
    
        //-----------primo pop_up

    
 $('.call_first_p').click(function(){    
     $('#pirmo_popup').show();
 })
 
    //-----------secondo pop_up
 
 $('#crea_account').click(function(){    
     $('#secondo_popup').show();

 })
 
        
   
  //validazione primo popup  
       
    var modulo=document.getElementById('log_in');
    var paragrafo_ok=document.getElementById("messaggio_ok");
    var paragrafo_ko=document.getElementById("messaggio_ko");
    
    
    modulo.onsubmit=function(e){
        e.preventDefault();
    
        var inputs=document.querySelectorAll('#log_in input');
            
        
            for (i=0; i<inputs.length; i++){
                if(inputVuoto(inputs[i].value,5))
                {
                    inputs[i].classList.add("ok");
                    inputs[i].classList.remove("ko");
                }
                else{
                    inputs[i].classList.add("ko");
                    inputs[i].classList.remove("ok");
                }
            }
            
        
        var ko=document.querySelectorAll("#log_in .ko").length;
      
            if(ko==0){
                paragrafo_ok.innerHTML="Iscrizione completata";
                document.getElementById('messaggio_ko').style.display='none';
                modulo.submit();
                }
                else{
                    paragrafo_ko.innerHTML="Non hai inserito i dati correttamente";
                }
            }

   

 /*   })///onsubmit*/
    
    

   //validazione secondo popup 

    var second_form = document.getElementById('sign_up');
    var inputs_second_form = document.querySelectorAll('#sign_up input')
    var count = 0;

    
    second_form.onsubmit = function(event){
        event.preventDefault();
        

        var email_sign_up = document.getElementById('email_sign_up').value;
        var password_sign_up = document.getElementById('password_sign_up').value;
        var confirm_password =document.getElementById('confirm_password').value;
        var informative_yes = document.getElementById('informative_yes');
        var wrong_password = document.getElementById('wrong_password');


             for (g = 0; g < inputs_second_form.length; g++) {
                
                if(inputVuoto(inputs_second_form[g].value , 5)){
                    
                    inputs_second_form[g].classList.add("ok");
                    inputs_second_form[g].classList.remove("ko");
                    
                } else {
                    inputs_second_form[g].classList.add("ko");
                    inputs_second_form[g].classList.remove("ok");
                   
                  }
           

                if (email_sign_up == '' || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_sign_up)) ) {
                    wrong_password.style.display='block';
                    wrong_password.innerHTML ='I dati non sono inseriti corretamente'
                } else {
                    wrong_password.style.display='none';
                }
    


                if   (password_sign_up !== confirm_password || password_sign_up < 5 ) {

                        wrong_password.style.display='block';
                        wrong_password.innerHTML ="I dati non sono inseriti corretamente";
                        
                    } else {
                        wrong_password.style.display='none';
                    }
                    

                if( informative_yes.checked ) {
                   
                    sign_up.submit();
                }
            }     
               
    }
    
            
    function inputVuoto(parametro1,min){
    
        if(parametro1.length>=min){        
            return true;
            }
            else{
                return false;
            }   
    };   
        
    

}); //ready




var address = document.getElementById('address');
    var citta = document.getElementById('citta');
    var via = document.getElementById('via');
    var numero_c = document.getElementById('numero_c');
    var check = /^[0-9]+$/; 
    
    
    address.onsubmit = function(ev){
        ev.preventDefault();

        let y = 0;

       

       
        if (citta.value === "") {
            document.getElementById('citta').classList.add('ko');
            document.getElementById('citta').classList.remove('ok');
        } else{
            document.getElementById('citta').classList.add('ok');
            document.getElementById('citta').classList.remove('ko');
            y++;
            console.log(y)
        }


        if (via.value  !== "" ){
            document.getElementById('via').classList.add('ok');
            document.getElementById('via').classList.remove('ko');
            y++;
            console.log(y)
        } else {
            document.getElementById('via').classList.add('ko');
            document.getElementById('via').classList.remove('ok');
        }

        if (numero_c.value > 0 ){
            document.getElementById('numero_c').classList.add('ok');
            document.getElementById('numero_c').classList.remove('ko');
            y++;
            console.log(y)
        } else {
            document.getElementById('numero_c').classList.add('ko');
            document.getElementById('numero_c').classList.remove('ok');
        }
        
        if (y==3){
            window.location.href = "../labforfood-restaurant.html"
            //address.submit();
        }

        

    }

