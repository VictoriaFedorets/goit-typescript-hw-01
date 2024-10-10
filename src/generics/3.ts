// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// const obj1 = { name: "Anastasia", age: 25 };
// const obj2 = { borderColor: "green", height: 40 };

// const mergeObj = merge(obj1, obj2);

// console.log(mergeObj);
