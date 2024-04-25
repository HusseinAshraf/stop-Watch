let min = 00 ;
let sec = 00 ;
let tens = 00 ;
 let getMin = document.querySelector('.min');
 let getSec = document.querySelector('.sec');
 let getTens = document.querySelector('.tens');
 let btnStart =  document.querySelector('.btn-start');
 let btnStop =  document.querySelector('.btn-stop');
 let btnReset =  document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click', ()=>{
    clearInterval(interval);
    interval= setInterval (startTimer , 10);
})
btnStop.addEventListener('click' , ()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click' , ()=>{
    setInterval(interval);
    min = '00' ;
    sec = '00' ;
    tens = '00' ;
    getMin.innerHTML= min ;
    getSec.innerHTML =sec ;
    getTens.innerHTML = tens;
})

function startTimer() {
  tens ++ ;
  if (tens <=9) {
     getTens.innerHTML ='0' + tens ;
  }
  if (tens > 9) {
     getTens.innerHTML = tens ;
  }
  if (tens > 99) {
     sec ++ ;
     getSec.innerHTML= '0' + sec;
     tens = 0 ;
     getTens.innerHTML= '0' + 0 ;
  }
  if (sec > 9) {
    getSec.innerHTML = sec;
  }
  if (sec >59) {
     min ++ ;
     getMin.innerHTML= '0' + min;
     sec = 0 ;
     getSec.innerHTML= '0' + 0 ;
  }

  if (min > 9) {
    getMin.innerHTML = min ;
  }


}
