// Четыре вида функции

// function sum(num1, num2) {
//   return num1+num2;
// }
// const a = sum(10,8);
// console.log(a);

// const summa = function(num1, num2) {
//   return num1+num2;
// }
// const a = summa(10,8);
// console.log(a);

// const sum = (num1, num2) => num1 + num2;
// const a = sum (5,3);
// console.log(a);

// (function(num1, num2) {
//   console.log(num1 + num2);
// })(10, 20);

//8.Исправление ошибки в функции:

function greetWithError(name) {
  return `Hello, ${name}!`;
}

console.log(greetWithError("Anton"));


function getMaxNumberWithError(a, b) {
  if (a < b) {
    return b;
  } else {
     return a;
   }
}



// 1. Сумма, разница, произведение и частное
function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function quotient(num1, num2) {
  return num1 / num2;
}

const num1 = parseFloat(prompt("Введите первое число"));
const num2 = parseFloat(prompt("Введите второе число"));

console.log(`Сумма: ${sum(num1, num2)}`);
console.log(`Разность: ${difference(num1, num2)}`);
console.log(`Произведение: ${product(num1, num2)}`);
console.log(`Частное: ${quotient(num1, num2)}`);

// 2. Четное или нечетное
function isEven(num) {
  return num % 2 === 0;
}

const num = prompt("Введите число:");

if (isEven(num)) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

// 3. FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}

fizzBuzz();

// 4. Работа с объектами
const user = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

function changeAge(newAge) {
  user.age = newAge;
}

changeAge(35);
console.log(`Новый возраст: ${user.age}`);

function addEmail(email) {
  user.email = email;
}

addEmail("johndoe@example.com");
console.log(`Новый email: ${user.email}`);

function removeCountry() {
  delete user.address.country;
}

removeCountry();
console.log(`Объект user: ${JSON.stringify(user)}`);

function printUserInfo() {
  console.log(
    `Имя: ${user.name}, Возраст: ${user.age}, Город: ${user.address.city}`
  );
}

printUserInfo();

// 5. Мгновенный вывод текста
const inputText = document.getElementById("inputText");
const output = document.getElementById("output");

inputText.addEventListener("input", function () {
  output.textContent = inputText.value;
});

// 6. Изменение заголовка страницы
window.addEventListener("focus", () => {
  document.title = "Hello";
});

window.addEventListener("blur", () => {
  document.title = "Come back!";
});
