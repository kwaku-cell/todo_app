<?php
session_start(); // Start the session

// Destroy the session and log out the user
session_unset();
session_destroy();

// Redirect to login or home page
header("Location: login.php"); // Change 'login.php' to the appropriate page
exit();
?>
