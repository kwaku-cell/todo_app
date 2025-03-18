-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2025 at 12:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_register`
--

CREATE TABLE `tbl_register` (
  `email` varchar(35) NOT NULL,
  `password` varchar(56) NOT NULL,
  `otp` varchar(6) NOT NULL,
  `is_verified` tinyint(4) NOT NULL,
  `otp_expiry` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_register`
--

INSERT INTO `tbl_register` (`email`, `password`, `otp`, `is_verified`, `otp_expiry`) VALUES
('milesmorales.batz@gmail.com', '$2y$10$evyTa7/K41A.Jp5Yp8gKge8p8IAlEzB9ZI/2kzphlSW4SC6h3', '097336', 0, '2025-03-18 06:44:09'),
('felicmonroe@gmail.com', '$2y$10$wUzkiMCX5.d5pxM.DfWhUeELHAxVjYb0D2nWOqe/TNQvHI9PK', '372256', 0, '2025-03-18 07:04:26'),
('attagyimahkwakye@gmail.com', '$2y$10$dR1OgnIfkzJ1RxFDaCwL3.jOlWitSr0aupVDcKKyqnLqLlbfw', '712609', 0, '2025-03-18 07:17:38'),
('brucewayne@gmail.com', '$2y$10$goeI.qjJvVdsuXucGDZ63ul9fqY6A1x9LnxqWgGzi.T3TUDNy', '096491', 0, '2025-03-18 11:54:50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
