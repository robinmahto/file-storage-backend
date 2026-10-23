(function (exports, require, moudle, __dirname, __filename) {
  const sum = require("./app.js");

  console.log(sum);

  // console.log(module.exports === exports)

  let users = {
    name: "robin",
    age: 27,
    address: {
      pincode: 400103,
      city: "mumbai",
    },
  };

  let address = users.address;

  address = {
    pincode: 400068,
    city: "dahisar",
  };

  // console.log(address === users.address)
  // console.log(address);
  // console.log(users.address);
})(exports, require, moudle, __dirname, __filename); // module wrapper functions
