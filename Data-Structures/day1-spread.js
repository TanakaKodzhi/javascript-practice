const user ={
    name: "Ivan",
    role: "Admin"
}
const fullUser = {...user, isOnline: true }

const car = {
    brand: "Toyota",
    color: "red"
}
const myCar = { ...car, color: "white"}

const incomingLead = {
  name: "Артур",
  phone: "+79991234567",
  utm_source: "vk",
  utm_campaign: "promo_autumn",
  city: "Хабаровск",
  comment: "Хочу скидку"
}
const client = { ...incomingLead}
console.log(fullUser)
console.log(myCar)
console.log(client)
