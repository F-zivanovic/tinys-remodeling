<?php
session_start(); // Start session if not already started

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tinys";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    // Honeypot field
    if (!empty($_POST["honeypot"])) {
        // Bot detected, do not proceed
        echo "Oops! Something went wrong.";
        exit;
    }

    // Check if all fields are filled
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        // If any field is empty, display message and do not proceed
        echo "Molimo popunite sva polja.";
        exit;
    }

    // Insert data into database
    $sql = "INSERT INTO contact (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
    if ($conn->query($sql) === TRUE) {
        $_SESSION['feedback_message'] = "Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti.";

        // Send email notification
        $to = "contact@webfax.rs";
        $subject = "Novi upit putem forme za individualne obuke";
        $message_body = "Stigao je novi upit putem individualne obuke:\n\n";
        $message_body .= "Ime i prezime: $name\n";
        $message_body .= "Email: $email\n";
        $message_body .= "Telefon: $phone\n";
        $message_body .= "Poruka: $message";
        $headers = "From: no-reply@webfax.rs\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
        mail($to, $subject, $message_body, $headers);

        echo "Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti.";
    } else {
        $_SESSION['feedback_message'] = "Došlo je do greške prilikom slanja vaše poruke. Molimo pokušajte kasnije.";
        echo "Došlo je do greške prilikom slanja vaše poruke. Molimo pokušajte kasnije.";
    }
} else {
    // If not a POST request, do nothing (or handle error)
    echo "Oops! Something went wrong.";
}

$conn->close(); // Close database connection
?>