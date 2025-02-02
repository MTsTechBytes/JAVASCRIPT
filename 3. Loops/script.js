// for-of Loop is used for strings and arrays

let str = "Javascript";

let size = 0;
 for (let val of str)
 {
    console.log("val = ", val)
    size++;
 }

 console.log("string size = ", size);

 //for-in Loop is used for objects and arryas

 let student = {
     name: "Muhammad Ali",
     age: 20,
     cgpa: 7.5,
     isPass: true,
};

for (let key in student)
{
   console.log("key = ", key, "value = ", student[key] ); 
}    