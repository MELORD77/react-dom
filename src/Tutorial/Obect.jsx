const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
//  Funcksiya  ichadiga opekdan foydalaniasni yangi usuli
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// } 

// myVehicle(vehicleOne);

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
// }