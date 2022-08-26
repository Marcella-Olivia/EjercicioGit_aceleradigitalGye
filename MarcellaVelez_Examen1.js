//condicionales
// function pagosemanal (numhoras) {
//     let numhoras= 0;
//     let x= 265;
//     let y= 350;
    
//     if (numhoras <= 40) {
//         return x * numhoras
        
//     }
//     else {return y * numhoras }
//     }
    
//     console.log(pagosemanal(50));
    
// 
function pagosemanal (totalhoras) {
    
    let extraordinarias=(totalhoras -40);
    
    if (totalhoras <= 40) {
        console.log("El total a pagar por "+ totalhoras+ " es"+ totalhoras * 265);
    }
      else { console.log("El total a pagar por " + 40 + " horas es "+ 40 * 265 + " y por " +
      extraordinarias +" horas extras es " + extraordinarias *350 )
    }
}
        
 console.log(pagosemanal(50));


    