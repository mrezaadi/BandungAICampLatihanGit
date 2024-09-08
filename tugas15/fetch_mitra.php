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


// Query untuk mengambil data dari tabel mitra
$sql = "SELECT * FROM mitra";
$result = $conn->query($sql);

// Jika ada data, tampilkan dalam bentuk tabel
if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Kode Pasar</th>
                <th>Nama Pasar</th>
                <th>Alamat Lengkap</th>
                <th>Jenis Pasar</th>
                <th>Level Pasar</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['kode_pasar'] . "</td>
                <td>" . $row['nama_pasar'] . "</td>
                <td>" . $row['alamat_lengkap'] . "</td>
                <td>" . $row['jenis_pasar'] . "</td>
                <td>" . $row['level_pasar'] . "</td>
            </tr>";
    }
    echo "</table>";
} else {
    echo "Tidak ada data pasar yang tersedia.";
}

$conn->close();
?>