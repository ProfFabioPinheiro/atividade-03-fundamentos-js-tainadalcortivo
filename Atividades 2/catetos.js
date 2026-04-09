
   //h^2 =c^2 * c^2
   
   function calcularHipotenusa(cat1,cat2){
    const hip = (cat1*cat1) + (cat2*cat2);
    const hipotenusa = Math.sqrt(hip); 

    console.log("Cateto 1 = " + cat1 + " Cateto 2 = " + cat2)
    console.log("A hipotenusa é = " + hipotenusa)

    }

    calcularHipotenusa(12,16)

