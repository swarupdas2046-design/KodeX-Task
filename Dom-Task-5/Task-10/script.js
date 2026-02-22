// 10. Create an object representing a user. Write a function that **clones the object without using spread**, updates one property, and returns the new object.

let obj = {
  user: "Swarup Das",
  Age: 22,
  address: {
    city: "manbazar",
    area: "Indkuri",
    district: "purulia",
  },
  Skill: [
    "c",
    "js",
    "Tailwind",
    "React",
    "SCSS",
    "Node.js",
    "mongoDB",
    "Typescript",
    "Next.js",
  ],
};

let NewMold = (value) => {
  let obj2 = JSON.parse(JSON.stringify(value));

  obj2.address.area = "BusStand";
  return obj2
};
console.log(NewMold(obj))

