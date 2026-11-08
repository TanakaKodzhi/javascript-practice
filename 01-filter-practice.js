const users =[
{
    name: "Ivan",
    age: 36,
    status_in_app: "VIP",
},
{
    name: "Maria",
    age: 18, 
    status_in_app: "Basic",
},
{
    name: "Vasiliy",
    age: 15, 
    status_in_app: "VIP",
},
]

console.log(users.filter((f) => f.status_in_app === "Basic"))

