<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "camwpedro@gmail.com";
    $subject = "Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message";

    // You can add additional headers if needed
    $headers = "From: webmaster@example.com";

    // Send the email
    mail($to, $subject, $email_content, $headers);

    // Redirect back to the form or a thank you page
    header("Location: thank_you.html");
    exit();
}
?>
