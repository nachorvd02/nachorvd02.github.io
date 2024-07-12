<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $topic = $_POST['topic'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'yourgmail@gmail.com'; // Replace with your Gmail address
    $subject = 'Message from Contact Form';
    $body = "Topic: $topic\n\nMessage:\n$message";

    // Set headers
    $headers = "From: contact@yourwebsite.com"; // Replace with your website's email address
    $headers .= "\r\nReply-To: contact@yourwebsite.com"; // Replace with your website's email address

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['message' => 'Email sent successfully.']);
    } else {
        http_response_code(500); // Server error
        echo json_encode(['error' => 'Failed to send email.']);
    }
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(['error' => 'Method not allowed.']);
}
?>
