//jais code!
// individual header is stored as a key/value pair inside an object
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   //will be sent as text - convert to string
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };
// //stringify = converting objects to strings
// fetch("http://localhost:3000/dogs", configurationObject);
//
//
//====================================================================================
//const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   //will be sent as text - convert to string
//   body: JSON.stringify({
//     catName: "Panda",
//     catBreed: "Mix",
//   }),
// };
//fetch("http://localhost:3000/cats")
function submitData(name, email) {
  return (
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
      }),
      //in case I forget - steve isn't just a random - check indexTest.js
    })
      .then((response) => response.json())
      //arrow functions still confuse me
      .then((data) => document.body.append(data.id))
      //new id and appends to dom yayyyyy had to read outside of our canvas
      .catch((message) => document.body.append(message))
    //catches failed post appends the message to the DOM yay
  );
}
