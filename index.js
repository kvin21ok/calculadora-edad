/**
  * @challenge: Entrega final.
  * 
  * @version: v1.0.0
  * @author: Kevin Gastaldello
  * @fecha: 04/02/2022
  * 
  * History:
  *     - v1.0.0 - Primera Entrega.
  */

function age(){
    let d1 = document.getElementById(`date`).value;
    let m1 = document.getElementById(`month`).value;
    let a1 = document.getElementById(`year`).value;
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1+date.getMonth();
    let a2 = date.getFullYear();
    const month = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    if (d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        a2 = a2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let a = a2 - a1;
    
   $(`form`).prepend('<div id="age">Tu edad es de '+a+' años, '+m+' meses y '+d+' dias</div>');
    $(`#age`).fadeIn(`slow`, function(){
        $(`#age`).fadeOut(6000);
    });
}