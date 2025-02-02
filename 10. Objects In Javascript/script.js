let arr = [0, 1, 2];
console.log(typeof(arr));


// Arrays in Onjects
let dog = { dogName: "JavaScript", 
    weight: 2.4, 
    color: "brown", 
    breed: "chihuahua", 
    age: 3, 
    burglarBiter: true,
    qualities: ["loyal", "cute", "playful"],
};

dog.dogName = "Java";

console.log(dog["dogName"], " is same as ", dog.dogName);

dog.qualities[1] = "adorable";
console.log(dog.qualities, "and best quality is ", dog.qualities[1]);


// Objects in Objects
let company = { companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida"
    },
    yearOfEstablishment: 2021 
};

company.address.zipcode = "33117";       // Changing the value of zipcode
company["address"]["number"] = "100";    // Changing the value of number, but above one and this one both are same ways of changing the value
console.log(company.address.zipcode, company["address"]["number"]);


// Objects in Arrays
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }
];
console.log(addresses[0].city, addresses[1].state);  // Miami Texas


