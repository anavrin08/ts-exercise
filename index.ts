export const testFunction = () => {
    console.log("Hello Cold World")

}

//NUMBER 1
var cityDirectory:string[] = [];

export const addCity = (city:string) => {
    cityDirectory.push(city);
    displayDirectory();
}

export const displayDirectory = () => {
    let list = document.getElementById('cityDirectory');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    cityDirectory.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}

//NUMBER 2
var isbn:string = "";

export const isValid = (isbn:string) => {
    
    var digits = isbn.split('');
    let sum = 0;

    for(let i=0; i < digits.length; i++){
       if(digits[digits.length-1]==='X'){
            sum += 10 * (i+1);
       } else{
            sum += Number(digits[i]) * (i+1);       
       }
    }

    if(sum%11==0 && digits.length<11){
        console.log(true)
    } else{
        console.log(false)
    }
    
  
}

isValid("1112223339");  //1. true
isValid("111222333");   //2. false
isValid("1112223339X"); //3. false
isValid("1234554321");  //4. true
isValid("1234512345");  //5. false
isValid("048665088X");  //6. true
isValid("X123456788");  //7. false

//NUMBER 3
var str:string = "cat30";
console.log(str)

export const replace = (str:string) =>{

    var newStr1 = str.replace(/[a-z]/gi, function(c) {
        switch (c) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });

    var newStr2 = newStr1.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
    console.log(newStr2)
 
}

replace(str);

//NUMBER 4
var numList:(string|number|boolean)[] = [];

numList.push(false,1,0,1,2,0,1,3,"a");
console.log(numList)

export const moveZeroes = (numList:(string|number|boolean)[])=>{
   
    for(let i=0; i < numList.length; i++){

        if (numList[i]==0 && typeof numList[i] === 'number') {
            numList.splice(numList.length-1, 0, numList.splice(i, 1)[0]);
        }
               
    }
    console.log(numList)
}
moveZeroes(numList);

testFunction();