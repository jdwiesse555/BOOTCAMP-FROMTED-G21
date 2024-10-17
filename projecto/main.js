import tanque from "./tanques.json";

console.log(tanque)

   function encontrar_tk(id1) {
    return this.tanque.filter(function(tanque){
        return tanque.codigo === id1
    })
} 


function salir(){
    window.location.replace("./login.html");
}

function ShowSelected() {
    let combo = document.getElementById("tk");
    let selected = combo.options[combo.selectedIndex].text;
    //alert(selected);
    document.getElementById('textoSalida').innerText = selected;
    let datos = obj_tanques.encontrar_tk(selected);
  
    document.getElementById("codigo").innerText = datos[0].codigo;
    document.getElementById("metrica").innerText = datos[0].metrica;
    document.getElementById("capacidad").innerText = datos[0].capacidad;
    document.getElementById("altura").innerText = datos[0].HEIGHT_PIES;
} 

function altura() {
    let altura_agua = 70+"px"
    let altura_crudo = 40+"px"
document.getElementById("agua").style.height = 0 ;
document.getElementById("crudo").style.height = 0;
document.getElementById("crudo").style.bottom = 0 ;

}


function calcular () {
    ///maxima altura 220
    let alturaagua = document.getElementById("agua_pies");
    let alturacrudo = document.getElementById("crudo_pies");
    let alturaaguap = document.getElementById("agua_pulgadas");
    let alturacrudop = document.getElementById("crudo_pulgadas");
    let metricatk =document.getElementById("metrica");
    let altura = document.getElementById("altura");
    let pies_t = parseInt(alturaaguap.value) + parseInt(alturacrudop.value);



    let alturatot = parseInt(alturaagua.value+"00") + parseInt(alturacrudo.value+"00") 
    
     if (pies_t>11)  {

        alturatot += 100 +  pies_t - 12 ;

     } else {

        alturatot +=   pies_t;
     }

     
    console.log("altura" + alturatot)

    let medidas = obj_tanques.encontrar_medida(metricatk.innerText,alturatot);

    if (parseInt(alturacrudop.value)<0 || parseInt(alturacrudop.value)>11)  {
        window.alert("Error : la max cantidad es 11 en pulgadas   "  );
        document.getElementById("crudo_pulgadas").value = 0
        return 

    }
    if (parseInt(alturaaguap.value)<0 || parseInt(alturaaguap.value)>11)  {
        window.alert("Error : la max cantidad es 11 en pulgadas   "  );
        document.getElementById("agua_pulgadas").value = 0
        return 

    }

    if (alturatot>parseInt(altura.innerText)) {
        window.alert("La atura en Pies no puede exeder a la altura del TK  " + altura.innerText );
        document.getElementById("agua_pies").value = 0
        document.getElementById("crudo_pies").value = 0
        document.getElementById("agua").style.height = 0+"px";
        document.getElementById("crudo").style.height = 0+"px";
        document.getElementById("crudo").style.bottom = 0+"px";

    } else {
        console.log("agua" + alturaagua.value+alturaaguap.value)
        console.log("crudo" + alturacrudo.value+alturacrudop.value)

    let alturaaguatk =  parseInt(alturaagua.value+alturaaguap.value) * 270 /  parseInt(altura.innerText) 
    let alturacrudotk =  parseInt(alturacrudo.value+alturacrudop.value) * 270 /  parseInt(altura.innerText) 
    document.getElementById("agua").style.height = alturaaguatk+"px";
    document.getElementById("crudo").style.height = alturacrudotk+"px";
    document.getElementById("crudo").style.bottom = alturaaguatk+"px";
    document.getElementById("stoptk").innerText = medidas[0].vol_bbls;

    }



}





