<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

include('connection.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'C:/xampp/htdocs/Todo_app/PHPMailer-6.9.3/src/Exception.php';
require 'C:/xampp/htdocs/Todo_app/PHPMailer-6.9.3/src/PHPMailer.php';
require 'C:/xampp/htdocs/Todo_app/PHPMailer-6.9.3/src/SMTP.php';

function generateOTP() {
    return sprintf("%06d", mt_rand(0, 999999));
}

function sendVerificationEmail($email, $otp) {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'f4b621e0683508';
        $mail->Password = '2a35bda9454096';
        $mail->Port = 2525;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        $mail->setFrom('noreply@todo_app.com', 'Todo_App');
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'OTP Verification';
        $mail->Body = "Your OTP is: $otp";

        $mail->send();
        echo 'OTP has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action === 'send_otp') {
        $email = isset($_POST['email']) ? trim($_POST['email']) : null;
        if (!$email) {
            echo "Error: Missing email!";
            exit();
        }

        $otp = generateOTP();
        $_SESSION['otp'] = $otp;
        $_SESSION['email'] = $email;

        sendVerificationEmail($email, $otp);
        echo "OTP sent successfully.";
        exit();
    } elseif ($action === 'verify') {
        $email = isset($_POST['email']) ? trim($_POST['email']) : null;
        $otp = isset($_POST['otp']) ? trim($_POST['otp']) : null;

        if (!$email || !$otp) {
            echo "Error: Missing email or OTP!";
            exit();
        }

        $stored_otp = $_SESSION['otp'] ?? null;
        $stored_email = $_SESSION['email'] ?? null;

        if ($stored_otp && $stored_email && $email === $stored_email && $otp === $stored_otp) {
            unset($_SESSION['otp']);
            echo "OTP Verified Successfully!";
            exit();
        } else {
            echo "Error: Incorrect OTP or Email!";
            exit();
        }
    }
}
?>
