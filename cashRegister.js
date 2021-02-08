/*
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
   payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  var change = cash - price;  
  // HUNDRED - TWENTY - TEN - FIVE - DOLLAR - QUARTER - DIME - NICKEL - PENNY
  var coinsBills = [100, 20, 10, 5, 1, .25, .1, .05, .01];
  var needed = []; // number of coins and bills needed
  cid.reverse();
  
  // checks if there is enough money in the cash register to fill the change
  function enoughMoney(change, cid) {
    let total = 0;
    for (let i=0; i<cid.length; i++) {
      total += cid[i][1];
    }
    return (total >= change);
  }

  if (!enoughMoney(change, cid))
    return { status: "INSUFFICIENT_FUNDS", change: [] };

  let empty = true; // we assume that all drawers are empty
  for (let i=0; i<9; i++) { // 9 types of coins/bills
  
    let need = Math.floor(change/coinsBills[i]);
    let owed = need * coinsBills[i];
    // if the number of coins/bills in the drawer arent sufficient give what you can
    while (owed > cid[i][1])
      owed = --need * coinsBills[i];
    needed.push([cid[i][0], owed]);
    
    // rest
    change -= owed;
    
    // correct the rounding when we have a .9999...
    change = Math.round(change * 100.0) /100.0;
      
    cid[i][1] -= owed; // update value in register
    if (cid[i][1] != 0) empty = false;
    
  }

  // money in the cash register wasn't sufficient to fill all the necessary change
  if (change > 0)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  
  // if all drawers become empty than the cash register must close
  if (empty)
    return { status: "CLOSED", change: needed.reverse() };

  // return only the coins/bills used
  needed = needed.filter(elem => elem[1] != 0);
  return { status: "OPEN", change: needed };

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
            ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
