<?php
if(isset($_POST['submit'])){
    $to = "empfaenger@example.com"; //Empfänger-E-Mail-Adresse
    $subject = "Neue Formularanfrage";
    $name = $_POST['name']; //Name aus dem Formular
    $email = $_POST['email']; //E-Mail aus dem Formular
    $message = $_POST['message']; //Nachricht aus dem Formular
    $headers = "From: " . $name . "<" . $email . ">"; //Header mit Absender-E-Mail-Adresse
    
    mail($to, $subject, $message, $headers); //sende die E-Mail
}
?>