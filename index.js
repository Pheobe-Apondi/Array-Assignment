//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
let lastElement =arr1[arr1.length-1];
console.log(lastElement);

let arr2=[true,"green","where",12,56];
let lastItem= arr2[arr2.length-1];
console.log(lastItem);

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let ourPets = myPets.toString();
console.log({ourPets});

//Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort((y,z)  => y-z);
console.log({arr3});
console.log(typeof arr3);

//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let noDuplicates =[...new Set(arr)];
console.log({noDuplicates})


//Write a JS script to search for the following word in the array."food"
// If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
 function search(word){

 }

 //Write a JS script to sort the following string:let word = "renniw"
    let word = "renniw";
     let newWord =word.split()
       console.log(newWord)
      newWord = newWord.sort()
      console.log(newWord)
     let  stringWord = newWord.toString()
      console.log({stringWord})


 //Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
  let fruits = ["Mangoes","Apples","Oranges","Pineapple","citrus","Pears","Bananas","Watermelon","Avocado"]
  const index = 5;
  const element = "Tomato";
  fruits.splice(index,0,element);
  console.log({fruits})
   
    

 