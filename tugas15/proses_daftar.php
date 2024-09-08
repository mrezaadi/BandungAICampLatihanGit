<?php
// Menghubungkan ke database MySQL

$host = '127.0.0.1:3307';
$dbname = 'pasar_kita'; // Nama database yang Anda buat sebelumnya
$username = 'root'; // Ubah sesuai dengan username database Anda
$password = '481928'; // Ubah sesuai dengan password database Anda

// Buat koneksi
$conn = new mysqli($host, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Cek apakah password dan konfirmasi password sesuai
if ($password !== $confirm_password) {
    echo "<script>alert('Password dan Konfirmasi Password tidak sama!'); window.location='daftar.html';</script>";
    exit();
}

// Hash password sebelum disimpan
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Cek apakah email sudah terdaftar
$sql_check = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql_check);

if ($result->num_rows > 0) {
    // Jika email sudah ada, tampilkan alert dan kembalikan ke halaman daftar
    echo "<script>alert('Email sudah terdaftar! Silakan gunakan email lain.'); window.location='daftar.html';</script>";
    exit();
}

// Jika email belum terdaftar, masukkan data ke database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Pendaftaran berhasil!'); window.location='masuk.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>