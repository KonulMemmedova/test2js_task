// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'


// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

/*const SET = 'SET_DATA';
const GET = 'GET_DATA'
const DELETE = 'DELETE_DATA'

function Datatype(type) {
  switch (type) {
    case SET:
      console.log('SET');
      break;
    case GET:
      console.log('GET');
      break;
    case DELETE:
      console.log('DELETE');
      break;
    default:
  }
}

Datatype(SET); 
Datatype(GET); 
Datatype(DELETE);*/




// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin
/*const SET = 'SET_DATA';
const GET = 'GET_DATA'
const DELETE = 'DELETE_DATA'

let matharray = [1,2,6,7];
function Datatype(type) {
  switch (type) {
    case SET:
      console.log('SET');
      matharray.push(Math.floor(Math.random() * 10) + 1);
      console.log(matharray)
      break;
    case GET:
      console.log('GET');
      break;
    case DELETE:
      console.log('DELETE');
      break;
    default:
  }
}
Datatype(SET);*/


// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.
/*const SET = 'SET_DATA';
const GET = 'GET_DATA'
const DELETE = 'DELETE_DATA'
let mathArray = [1,2,6,7];

function Datatype(type) {
  switch (type) {
    case SET:
      console.log('SET');
      mathArray.push(Math.floor(Math.random() * 10) + 1);
      console.log(mathArray);
      break;
    case GET:
      console.log('GET');
      break;
    case DELETE:
      console.log('DELETE');
      if (mathArray.length === 0) {
        console.error('Silinecek data tapilmadi');
      } else {
        mathArray.pop();
      }
      break;
    default:
     
  }
  console.log(mathArray);
}

 Datatype(DELETE);*/


//////////////////////////////////1.4////////////////////////////////////////

 // 1.4  Case - 'GET' oldugu halda ise sadece array consolda gorunsun
/*const SET = 'SET_DATA';
const GET = 'GET_DATA'
const DELETE = 'DELETE_DATA'
let mathArray = [1,2,6,7];

function Datatype(type) {
  switch (type) {
    case SET:
      console.log('SET');
      mathArray.push(Math.floor(Math.random() * 10) + 1);
      console.log(mathArray);
      break;
    case GET:
      console.log(GET);
      console.log(mathArray);

      break;
    case DELETE:
      console.log('DELETE');
      if (mathArray.length === 0) {
        console.error('Silinecek data tapilmadi');
      } else {
        mathArray.pop();
      }
      break;
    default:
     
  }
  
}
Datatype(GET);*/
/////////////////////////////////////////////////////////////

/////////
// // 2)ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// let fullNameK = 'Konul Memmedova';
// let chars = fullNameK.split('');
// let result1 = [ 
//   [chars[0], 'M'],
//   [chars[1], chars[chars.length - 8]],
//   [chars[2], chars[chars.length - 7]],
//   [chars[3], chars[chars.length - 6]],
//   [chars[4], chars[chars.length - 5]],
 
//   ['X', 'd'],
//   ['X', 'o'],
//   ['X', 'v'],
//   ['X', 'a']
// ];
// console.log (result1);

// /////////////////////2ci versiya     /////////////////////////////////////////

// let fullName = 'Konul Memmedova';
// let firstName = fullName.split(' ')[0].toUpperCase();
// let lastName = fullName.split(' ')[1].toUpperCase();

// let maxLength = Math.max(firstName.length, lastName.length);
// firstName = firstName.padEnd(maxLength, 'X');
// lastName = lastName.padEnd(maxLength, 'X');

// let result2 = firstName.split('').map((a, index) => [a, lastName[index]]);

// console.log(result2);

///////////////////////////////////////////////////


//let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.
/*let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for (let i = 0; i < mL.length; i++) {
  let month = mL[i];
  switch (month) {
    case "January":
   case "March":
   case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(month + " - 31 days");
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(month + " - 30 days");
      break;
    case "February":
      console.log(month + " - 28 or 29 days");
      break;
    default:
      break;
  }
}*/

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin
/*let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();

let currentDay = currentDate.getDate();

switch (currentMonth) {
  case 0:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Yanvarda 31 gün var.`);
    break;
  case 1:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Fevralda 28 gün var, lakin bəzən 29 gün olur.`);
    break;
  case 2:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Martda 31 gün var.`);
    break;
  case 3:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Apreldə 30 gün var.`);
    break;
  case 4:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Mayda 31 gün var.`);
    break;
  case 5:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. İyunda 30 gün var.`);
    break;
  case 6:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. İyulda 31 gün var.`);
    break;
  case 7:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Avqustda 31 gün var.`);
    break;
  case 8:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Sentyabrda 30 gün var.`);
    break;
  case 9:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Oktyabrda 31 gün var.`);
    break;
  case 10:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Noyabrda 30 gün var.`);
    break;
  case 11:
    console.log(`Today is ${mL[currentMonth]} ${currentDay}. Dekabrda 31 gün var`);
    break;
  default:
    console.log("Error: Invalid month.");
    break;
}*/

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

//1-ci üsul

// const nowDate = new Date();
// const nowMonthNum = nowDate.getMonth();
// const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const nowMonth = mL[nowMonthNum];

// let halfOfYear;

// switch (nowMonth) {
//   case "January":
//   case "February":
//   case "March":
//   case "April":
//   case "May":
//   case "June":
//     halfOfYear = "Hazırki ay ilin birinci yarısına aiddir";
//     break;
//   case "July":
//   case "August":
//   case "September":
//   case "October":
//   case "November":
//   case "December":
//     halfOfYear = "Hazırki ay ilin ikinci yarısına aiddir";
//     break;
//   default:
//     halfOfYear = "Daxil etdiyiniz ay yanlışdır.";
//     break;
// }

// console.log(`${nowMonth} ${halfOfYear}`);


//2-ci üsul

// const nowDate = new Date();
// const nowMonth = nowDate.getMonth();

// let halfOfYear;

// switch (nowMonth) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     halfOfYear = "Hazırki ay ilin birinci yarısına aiddir";
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     halfOfYear = "Hazırki ay ilin ikinci yarısına aiddir";
//     break;
//   default:
//     break;
// }

// console.log(`${nowDate}. ${halfOfYear}`);


// 5) 4 cu taski heftenin gunleri ile yoxlayin

//1-ci üsul

// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const nowDate = new Date();
// const nowDay = dayNames[nowDate.getDay()];

// let halfOfWeek;

// switch (nowDay) {
//   case "Sunday":
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//     halfOfWeek = "Bugün həftənin ilk yarısına aiddir.";
//     break;
//   case "Thursday":
//   case "Friday":
//   case "Saturday":
//     halfOfWeek = "Bugün həftənın ikinci yarısına aiddir.";
//     break;
//   default:
//     break;
// }

// console.log(`${nowDate.toDateString()}. ${halfOfWeek}`);

//2-ci üsul

// const today = new Date();
// const dayOfWeek = today.getDay();


// let halfofweek;

// switch (dayOfWeek) {
//   case 0:
//   case 6:
//     halfofweek = "Həftəsonu";
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     halfofweek = "Həftəiçi";
//     break;
//   default:
//     break;
// }

// console.log(`${dayOfWeek}. ${halfofweek}.`);


// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun
// function monthweekfind() {
//   let date = new Date();
//   let nowMonth = date.getMonth();
//   let nowDate = date.getDate();
//   let firstDayOfMonth = new Date(date.getFullYear(), nowMonth, 1).getDate();
//   let weekOfMonth = Math.ceil((nowDate - firstDayOfMonth + 1) / 7);
//   console.log(weekOfMonth);
// }
// monthweekfind();

///////////////////////////////////////////////////////////////////////////////////////////

// 7) verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//   key1: 0,
//   key2: 3,
//   key3: 2,
//   key4: 4,
//   key5: 53,
//   key7: 7,
//   key8: 8,
//   key9: 91,
// };

// function findsamevalue(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key) && key[key.length - 1] == obj[key]) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(findsamevalue(obj));

////////////////////////////////////////////////////////////////////////////////////////////////

