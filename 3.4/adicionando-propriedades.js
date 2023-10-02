const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Software Engineer",
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined") {
    object[key] = value;
  }
};

addProperty(customer, "email", "RobertoDev@gmail.com");
addProperty(customer, "fone", "+55 (35) 1234566789")
addProperty(customer, "userGithub", "RobertoDev")
addProperty(customer, "linkedIn", "Roberto Souza")
console.log(customer);
