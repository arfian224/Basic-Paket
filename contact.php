<?php
// ===== CEK METHOD =====
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

// ===== AMBIL DATA =====
$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

// ===== VALIDASI =====
if ($name === "" || $email === "" || $message === "") {
    echo "Semua field wajib diisi.";
    exit;
}

// ===== AMANKAN INPUT =====
$name    = htmlspecialchars($name);
$email   = htmlspecialchars($email);
$message = htmlspecialchars($message);

// ===== FORMAT PESAN =====
$data = "Nama    : $name\n";
$data .= "Email   : $email\n";
$data .= "Pesan   : $message\n";
$data .= "Waktu   : " . date("Y-m-d H:i:s") . "\n";
$data .= "--------------------------\n";

// ===== SIMPAN KE FILE =====
$file = "../data/messages.txt";
file_put_contents($file, $data, FILE_APPEND);

// ===== REDIRECT KEMBALI =====
header("Location: ../index.html?status=success");
exit;
