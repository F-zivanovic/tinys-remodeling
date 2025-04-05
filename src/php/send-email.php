<?php
require './bundles/phpmailer/src/PHPMailer.php';
require './bundles/phpmailer/src/SMTP.php';
require './bundles/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars(strip_tags($_POST['name']));
    $lastName = htmlspecialchars(strip_tags($_POST['lastName']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags($_POST['message']));

    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        die("Error: All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: Invalid email format.");
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'tinysremodeling.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contact@tinysremodeling.com';
        $mail->Password   = 'tinysremodeling!';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        $mail->setFrom('contact@tinysremodeling.com', 'Tinys Remodeling');
        $mail->addAddress('contact@tinysremodeling.com', 'Tinys Remodeling');

        $mail->isHTML(true);
        $mail->Subject = "$firstName submitted a contact form";
        $mail->Body    = "Name: $firstName $lastName<br>Email: $email<br>Message:<br>$message";

        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
