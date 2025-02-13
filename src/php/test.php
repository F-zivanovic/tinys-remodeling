<?php
$to = 'filip.zivanovic1999@gmail.com';  // Adresa na koju šaljete test
$subject = 'PHP mail() Test';  // Predmet
$message = 'Ovo je testni e-mail poslat putem PHP mail() funkcije.';  // Telo e-maila
$headers = 'From: sender@example.com' . "\r\n";  // Pošiljalac

// Pokušajte da pošaljete e-mail
if(mail($to, $subject, $message, $headers)) {
    echo 'E-mail je uspešno poslat!';
} else {
    echo 'Greška pri slanju e-maila.';
}
?>
