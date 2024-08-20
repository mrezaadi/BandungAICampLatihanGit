// Latihan 1
window.onload = function () {
  document.querySelector("h1").innerText = "Latihan JavaScript Selesai";
};

// Latihan 2
function showOutput() {
  // Deklarasikan variabel
  let name = "John";
  const age = 30;

  // Tampilkan nama dan umur di dalam div dengan ID "output"
  let output = "Name: " + name + "<br>Age: " + age + "<br>";

  // Buat array fruits dan tampilkan semua buah di div tersebut menggunakan perulangan for
  let fruits = ["Apple", "Banana", "Mango"];
  output += "<br>Fruits:<br>";
  for (let i = 0; i < fruits.length; i++) {
    output += fruits[i] + "<br>";
  }

  // Buat objek person dan tampilkan properti firstName dan lastName di div tersebut
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  output += "<br>Person:<br>" + person.firstName + " " + person.lastName;

  // Tampilkan semua output di dalam div dengan ID "output"
  document.getElementById("output").innerHTML = output;
}

// Latihan 3
function checkValueAndDisplay() {
  // Mendapatkan elemen input dan output
  const userInput = document.getElementById("userInput");
  const outputDiv = document.getElementById("output");

  // Mendapatkan nilai dari input pengguna
  const userValue = parseInt(userInput.value);

  // Mengecek apakah nilai valid
  if (isNaN(userValue)) {
    outputDiv.innerHTML = "Tolong masukkan angka yang valid.";
    return;
  }

  // Menghapus konten output sebelumnya
  outputDiv.innerHTML = "";

  // Memeriksa nilai apakah lebih besar, sama, atau kurang dari 10
  if (userValue > 10) {
    outputDiv.innerHTML += "<p>Nilai lebih besar dari 10.</p>";
  } else if (userValue === 10) {
    outputDiv.innerHTML += "<p>Nilai sama dengan 10.</p>";
  } else {
    outputDiv.innerHTML += "<p>Nilai kurang dari 10.</p>";
  }

  // Menggunakan perulangan for untuk menampilkan angka dari 1 hingga nilai yang dimasukkan pengguna
  for (let i = 1; i <= userValue; i++) {
    outputDiv.innerHTML += `<p>${i}</p>`;
  }
}

// Menambahkan event listener ke tombol setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkButton").addEventListener("click", checkValueAndDisplay);
});

// Latihan 4
function greet(name) {
  return "Hello, " + name;
}

function greetUser() {
  // Ambil nilai dari input dengan id 'greetInput'
  const nameInput = document.getElementById("greetInput").value;

  // Panggil fungsi greet() dengan nilai input
  const greetMessage = greet(nameInput);

  // Tampilkan hasil di div dengan id 'output'
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.innerHTML = "<p> " + greetMessage;
}

function calculateSquare(number) {
  let calculation = number * number;
  return calculation;
}

function calculation() {
  const calculateInput = document.getElementById("calculateInput").value;
  const intInput = parseInt(calculateInput);

  let value = calculateSquare(intInput);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.innerHTML = "<p> " + value;
}

// Latihan 5

// Function untuk menampilkan daftar siswa
function displayStudents() {
  // 1. Membuat array students
  let students = ["Alice", "Bob", "Charlie"];

  // 2. Menambahkan satu nama lagi ke array menggunakan metode push()
  students.push("David");

  // 3. Menggunakan forEach() untuk menampilkan semua nama siswa di div "output"
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.innerHTML += "<h3>Daftar Siswa:</h3>";
  students.forEach(function (student) {
    outputDiv.innerHTML += student + "<br>";
  });
}

// Function untuk menampilkan informasi mobil
function displayCars() {
  // 4. Membuat objek car
  let car = { brand: "Toyota", model: "Corolla", year: 2020 };

  // 5. Menggunakan for...in loop untuk menampilkan semua properti dari objek car
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.innerHTML += "<h3>Properti Mobil:</h3>";
  for (let key in car) {
    outputDiv.innerHTML += key + ": " + car[key] + "<br>";
  }

  // 6. Membuat array objek untuk menyimpan data beberapa mobil
  let cars = [
    { brand: "Honda", model: "Civic", year: 2018 },
    { brand: "Ford", model: "Mustang", year: 2019 },
    { brand: "Tesla", model: "Model 3", year: 2021 },
  ];

  // 7. Menggunakan forEach() untuk menampilkan informasi setiap mobil di div "output"
  outputDiv.innerHTML += "<h3>Daftar Mobil:</h3>";
  cars.forEach(function (car) {
    outputDiv.innerHTML += car.brand + " " + car.model + " (" + car.year + ")" + "<br>";
  });
}
