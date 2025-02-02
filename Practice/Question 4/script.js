let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let delItem = companies.shift();
console.log("deleted item =", delItem);
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);