//add function here

const user = {
  firstName: "West",
  lastName: "Cliff",
};
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
