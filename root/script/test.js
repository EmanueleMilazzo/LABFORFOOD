document.addEventListener("DOMContentLoaded",function(){

    var modulo=document.getElementById("log_in");
    var paragrafo=document.getElementById("messaggio");
    
    modulo.onsubmit=function(e){
        e.preventDefault();
        
        var inputs=document.querySelectorAll("#log_in input");
        console.log(inputs);
        
        for(i=0;i<inputs.length;i++)
        {
            console.log(inputVuoto(inputs[i].value,3)); 
            
            if(inputVuoto(inputs[i].value, inputs[i].getAttribute("data-min")))
            {
                console.log(inputs[i].value+ " è corretto");
                inputs[i].classList.add("ok");
                inputs[i].classList.remove("ko");
            }
            else{
                console.log(inputs[i].value+ " è sbagliato");
                inputs[i].classList.add("ko");
                inputs[i].classList.remove("ok");
            }
        }
            
        
        var ko=document.querySelectorAll("#log_in .ko").length;
        console.log(ko);
        
        if(ko==0){
            paragrafo.innerHTML="Puoi spedire i dati";
            modulo.submit();
        }
        else{
            paragrafo.innerHTML="Correggi gli errori";
        }
        
    }
    
}); //DOMContentLoaded



function inputVuoto(parametro1,min,max){

    
    if(parametro1.trim().length>=min){        
        return true;
    }
    else{
        return false;
    }
    
 

}
