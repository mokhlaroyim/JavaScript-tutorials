function checkCashRegister(price, cash, cid) {
  var change = [];
  var close_arr = []
  var arr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
   var retVal = cash-price

    for(let i=cid.length-1; i>=0; i--){
     if(cid[i][1] != 0){
        var check = retVal/cid[i][1]
        if(check>=1){       
          retVal = (retVal*100 - cid[i][1]*100)/100
            if(cid[i][1]>=retVal){
              change.push([arr[i][0], cid[i][1]])
              close_arr.unshift([arr[i][0], cid[i][1]])
              cid[i][1] = 0
            }      
        }
        else if(check<1){
          if(retVal/arr[i][1]>=1){
            var arg = Math.floor(retVal/arr[i][1])
            retVal = (retVal*1000 - arg*arr[i][1]*1000)/1000
            if(cid[i][1]>=retVal){ 
              change.push([arr[i][0], arg*arr[i][1]]) 
              close_arr.unshift([arr[i][0], arg*arr[i][1]])
              cid[i][1]=(cid[i][1]*1000 - arg*arr[i][1]*1000)/1000
            }
          }
        }
        else {
          // close_arr.push([arr[i][0], cid[i][1]])
          continue
        }
     }
     else 
        close_arr.unshift([arr[i][0], cid[i][1]])

  }

  var bool = 1
  for(let i=0; i<cid.length; i++){
    if(cid[i][1] != 0){
      bool = 0
      break
    }
  }
// console.log(close_arr)
  var open = {status: "OPEN",change}
  var insuf = {status: "INSUFFICIENT_FUNDS",change}
  var close = {status: "CLOSED", change: close_arr}
  if (change === undefined || change.length == 0)
   return insuf
  else if(!bool)
    return open
  else
  return close
} 

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
