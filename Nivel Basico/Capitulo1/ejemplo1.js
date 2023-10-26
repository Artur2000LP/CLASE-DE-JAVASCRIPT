dineroCofla = prompt("cuanto dinero tienes cofla ");
dineroRoberto = prompt("cuanto dinero tienes Roberto ");
dineroPedro = prompt("cuanto dinero tienes Pedro ");
//combirtiendo string a entero 
dineroCofla = parseInt(dineroCofla) // "3" = 3
dineroRoberto = parseInt(dineroRoberto) // "4" = 4
dineroPedro = parseInt(dineroPedro) // "5" = 5
//dinero cofla
if(dineroCofla>=0.6 && dineroCofla<1){
    alert("Cofla, Comprate elado de agua");
    alert("te sobran "+ (dineroCofla-0.6));//el parentesis dentro del string lo diferenci que es un numero
}
else if(dineroCofla>=1 && dineroCofla<1.6){
    alert("Cofla, Comprate el elado de crema ");
    alert("te sobran "+ (dineroCofla-1));
}
else if(dineroCofla>=1.6 && dineroCofla<1.7){
    alert(" Cofla, Comprate el eladod e heladix")
    alert("te sobran "+ (dineroCofla-1.6));
}
else if(dineroCofla>=1.7 && dineroCofla<1.8){
    alert("Cofla, Comprate el elado de heladovich ");
    alert("te sobran "+ (dineroCofla-1.7));
}
else if(dineroCofla>=1.8 && dineroCofla<2.9){
    alert("Cofla, comprate el eladod hela")
    alert("te sobran "+ (dineroCofla-1.8));
}
else if(dineroCofla>=2.9){
    alert("Cofla, Comprate el elado de confites o el pote de 1/4 kg");
    alert("te sobran "+ (dineroCofla-2.9));
}
else{
    alert("lo siento Cofla, pobre de mierda, no te alcanza para pagar  ");
}
//dinero Roberto

if(dineroRoberto>=0.6 && dineroRoberto<1){
    alert("Roberto Comprate elado de agua");
    alert("te sobran "+ (dineroRoberto-0.6));
}
else if(dineroRoberto>=1 && dineroRoberto<1.6){
    alert(" Roberto Comprate el elado de crema ");
    alert("te sobran "+ (dineroRoberto-1));
}
else if(dineroRoberto>=1.6 && dineroRoberto<1.7){
    alert(" Roberto Comprate el eladod e heladix")
    alert("te sobran "+ (dineroRoberto-1.6));
}
else if(dineroRoberto>=1.7 && dineroRoberto<1.8){
    alert("Roberto Comprate el elado de heladovich ");
    alert("te sobran "+ (dineroRoberto-1.7));
}
else if(dineroRoberto>=1.8 && dineroRoberto<2.9){
    alert("Roberto comprate el eladod hela")
    alert("te sobran "+ (dineroRoberto-1.8));
}
else if(dineroRoberto>=2.9){
    alert("Roberto Comprate el elado de confites o el pote de 1/4 kg");
    alert("te sobran "+ (dineroCofla-2.9));
}
else{
    alert("lo siento Roberto, pobre de mierda, no te alcanza para pagar  ");
}

//donero pedro

if(dineroPedro>=0.6 && dineroPedro<1){
    alert("pedro Comprate elado de agua");
    alert("te sobran "+ (dineroPedro-0.6));
}
else if(dineroPedro>=1 && dineroPedro<1.6){
    alert("pedro Comprate el elado de crema ");
    alert("te sobran "+ (dineroPedro-1));
}
else if(dineroPedro>=1.6 && dineroPedro<1.7){
    alert("pedro Comprate el eladod e heladix")
    alert("te sobran "+ (dineroPedro-1.6));
}
else if(dineroPedro>=1.7 && dineroPedro<1.8){
    alert("pedro Comprate el elado de heladovich ");
    alert("te sobran "+ (dineroPedro-1.7));
}
else if(dineroPedro>=1.8 && dineroPedro<2.9){
    alert("pedro comprate el eladod hela")
    alert("te sobran "+ ( dineroPedro-1.8));
}
else if(dineroPedro>=2.9){
    alert("pedro Comprate el elado de confites o el pote de 1/4 kg");
    alert("te sobran "+ (dineroPedro-2.9));
}
else{
    alert("lo siento pedro , pobre de mierda, no te alcanza para pagar  ");
}
