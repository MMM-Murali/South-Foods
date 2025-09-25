
// destruchering method in Arry and objects

/*const fruits=["apple","banana","orange","guava","pineapple","straberry"];

let [firstfruit,secondfruit, thirdfruit,...lastfruit]=fruits
console.log(firstfruit)
console.log(secondfruit)
console.log(thirdfruit)
console.log(lastfruit)
const pesron1= {
    EmpId:"123",
    Name: "Kamal",
    Job:"FrontEnd coder",
    Age: 26,
    country: "Ind",
}
const pesron2= {
    EmpId:"456",
    Name: "Rajini",
    Job:"BackEnd coder",
    Age: 36,
}
const {EmpId,Name, Job, Age,country="Ind"}=pesron2;
console.log(EmpId);
console.log(Age);
console.log(Job);
console.log(country);*/

console.log(" Working on Fetch method")
fetch("https://jsonplaceholder.typicode.com/users")
  .then ((res) => res.json())
  .then((data) => console.log(data));
const data= {
    title: "This is title",
    body: "This Post Body",
    userId: 2
}
fetch("https://jsonplaceholder.typicode.com/posts" ,{
   method: "POST",
   body: JSON.stringify(data),
   headers: {
    "content-type" : "application/Json",
   },
})
.then((res) => res.json()) 
.then((data) => console.log(data));
   

