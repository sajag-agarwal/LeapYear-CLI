var chalk = require('chalk');
var i, j;
var star = '*';
for(i=1;i<=5;i++){
  var reqstar = '';
  for(j=0;j<i;j++){
    reqstar = reqstar + star;
  }
  console.log(chalk.red(reqstar));
}

for(i=5;i>0;i--){
  var reqstar = '';
  for(j=0;j<i;j++){
    reqstar = reqstar + star;
  }
  console.log(chalk.yellow(reqstar));
}

console.log("....................");

var readlineSync = require("readline-sync");
var name = readlineSync.question(chalk.blue("Please enter your name: "));
console.log("Welcome " + chalk.red.bgYellowBright.bold(name));
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var days = [31,28,31,30,31,30,31,31,30,31,30,31];
function checkbirthdate(bday){
  var splitBday = bday.split('/');
  if(splitBday.length===3){
    var day = splitBday[0];
    var mon = splitBday[1];
    var yr = splitBday[2];
    if(mon>12 || mon<0){
      return false;
    }
    else{
      if(yr<0){
        return false;
      }
      else{
        if(mon === "2"){
          if(yr%4===0){
            
            if(day>29 || day <1){
              return false;
            }
            return true;
          }
          else{
            if(day>28 || day < 1){
              return false;
            }
            else{
              return true;
            }
          }
        }
        else if(day > days[mon - 1] || day < 1){
          return false;
        }
        else{
          return true;
        }
      }
    }
  }
  else{
    return false;
  }
  return true;
}

function extractyear(bday){
  var year = bday.split("/")[2];
  return year;
}

function birthdate(){
  var bday = readlineSync.question(chalk.blue("Please enter your birth date (in dd/mm/yyyy): "));
  var flag = true;
  flag = checkbirthdate(bday);
  if(flag){
    var year = extractyear(bday);
    if(year%4===0){
      console.log(chalk.green("Congratulations! You were born in a leap year"));
      return;
    }
    else{
      console.log(chalk.red("Oops! Seems like you were not born in a leap year"));
      return;
    }
  }
  else{
    console.log(chalk.red.bgYellowBright.bold("You entered wrong date! Please try again."));
    birthdate();
    return;
  }
}
birthdate();