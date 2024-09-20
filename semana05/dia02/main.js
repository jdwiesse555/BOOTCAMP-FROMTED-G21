function vuelto(monto){
    // de 50 
    let cant=[0,0,0,0,0]; 
    cant[5]= Math.trunc(monto/50);
    monto = monto - (cant[5]*50);
    cant[4]= Math.trunc(monto/20);
    monto = monto - (cant[4]*20);
    cant[3]= Math.trunc(monto/10);
    monto = monto - (cant[3]*10);
    cant[2]= Math.trunc(monto/5);
 
    monto = monto - (cant[2]*5);
    cant[1]= Math.trunc(monto/2); 
    monto = monto - (cant[1]*2);
    cant[0]= Math.trunc(monto/1);    


    return cant;  
  }
  
  let valor=vuelto(123);
  console.log("de 50 centimos :" +valor[5]);
  console.log("de 20 centimos :" +valor[4]);
  console.log("de 10 centimos :" +valor[3]);
  console.log("de 5 centimos :" +valor[2]);
  console.log("de 2 centimos :" +valor[1]);
  console.log("de 1 centimos :" +valor[0]);


  /*function manufacture(gifts,materials) {
    let jugete=true;
    let jugetes;
    console.log(gifts.length);
    for(i=0;i<gifts.length;i++) {
       
        
        for (j=0;j<gifts[i].length;j++) {
        
            dato = gifts[i];
            console.log(materials.includes(dato[j]));  
        if (materials.includes(dato[j])) 
            {jugete=true;
                console.log(jugete);
            }
        else {jugete=false;
            console.log(jugete);
        }}
        console.log(jugete);
        if (jugete) jugetes[i] = gifts[i];
    }
    return jugetes;
  }

  const gifts = ['tren','oso','pelote'];
  const materials =['tronesa'];
  console.log(manufacture(gifts,materials));*/

  function manufacture(gifts, materials) {
    return gifts.filter(function (gift) {
      const copyGift = [...gift]
  
      return copyGift.every(function (giftLetter) {
        return materials.includes(giftLetter)
      })
    })
  }
  
  const gifts1 = ['tren', 'oso', 'pelota']
  const materials1 = 'tronesa'

  console.log(manufacture(gifts1, materials1))
