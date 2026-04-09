
    
    
    
    function boasVindas(nome,hora){

         const n = nome;
       
        if(hora >= 5 && hora <=12){
         console.log("Bom dia! " + n);
    } else if(hora>12 & hora <=18){
        console.log("Boa tarde! " + n)
        } else{
            console.log("Boa noite! " + n)
        }
    }

    boasVindas("taina",2); 