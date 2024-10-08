interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

function greet(user: User) {
  const addressInfo = user.address
    ? `${user.address.city}, ${user.address.country}`
    : "No address provided";
  console.log(`Hello, ${user.name} ${user.age} ${user.email} ${addressInfo}`);
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

greet(mango);
greet(poly);

console.log(mango);
console.log(poly);
