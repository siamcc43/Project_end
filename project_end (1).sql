-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 05:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_end`
--

-- --------------------------------------------------------

--
-- Table structure for table `d1_staff_tech`
--

CREATE TABLE `d1_staff_tech` (
  `staff_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `title_name` varchar(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `phonenumber` varchar(12) NOT NULL,
  `status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `d2_staff_com`
--

CREATE TABLE `d2_staff_com` (
  `staff_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `title_name` varchar(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `phonenumber` varchar(12) NOT NULL,
  `status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `d2_staff_com`
--

INSERT INTO `d2_staff_com` (`staff_id`, `email`, `password`, `title_name`, `firstname`, `lastname`, `phonenumber`, `status`) VALUES
(136, 'staff_com@lru.ac.th', '$2b$10$wvl14hdP3HhA2xH/iUgNCe7zfsmfz1U.OlhsNSnMmNcxpoLlNyPUO', 'นาย', 'ชัชชัย', 'ศรีสวัสดิ์', '0981817713', '0');

-- --------------------------------------------------------

--
-- Table structure for table `d3_manager`
--

CREATE TABLE `d3_manager` (
  `manager_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `title_name` varchar(10) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `phonenumber` varchar(12) NOT NULL,
  `job_position` varchar(50) NOT NULL,
  `status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `d3_manager`
--

INSERT INTO `d3_manager` (`manager_id`, `email`, `password`, `title_name`, `firstname`, `lastname`, `phonenumber`, `job_position`, `status`) VALUES
(15, 'admin@lru.ac.th', '$2b$10$5CAal14gcBHYPaqaX8ItpuZ5UVFuNZ/nkTZgMiMLx8auSFqNuWxNO', 'นาย', 'ชัชชัย', 'ศรีสวัสดิ์', '0981817713', 'ผู้อำนวยการศูนย์คอมพิวเตอร์', '0');

-- --------------------------------------------------------

--
-- Table structure for table `d4_users`
--

CREATE TABLE `d4_users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status_users` varchar(10) NOT NULL,
  `title_name` varchar(20) NOT NULL,
  `id_population` varchar(15) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `major` varchar(50) NOT NULL,
  `faculty` varchar(50) NOT NULL,
  `phonenumber` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `d4_users`
--

INSERT INTO `d4_users` (`id`, `email`, `password`, `status_users`, `title_name`, `id_population`, `firstname`, `lastname`, `major`, `faculty`, `phonenumber`) VALUES
(14, 'sb6240248104@lru.ac.th', '$2b$10$yaruZ416cWHiaf4YZEiZ/Okld897YZIIXoosf.9YyfTW9LcBuWG2S', 'นักศึกษา', 'นาย', '1420800076316', 'ชัชชัย', 'ศรีสวัสดิ์', 'วิทยาการคอมพิวเตอร์', 'คณะวิทยาศาสตร์และเทคโนโลยี', '0981817713'),
(16, 'sb6240248105@lru.ac.th', '$2b$10$uU52OhIrcKq/7K47nMmwsuAUMrsUvPL/N5xvvVSQEhOvrQOYQQdtO', 'นักศึกษา', 'นาย', '1424242424', 'ชัชชัย', 'ศรีสวัสดิ์', 'วิทยาการคอมพิวเตอร์', 'ครุศาสตร์', '0981817713');

-- --------------------------------------------------------

--
-- Table structure for table `d7_passmail_lru`
--

CREATE TABLE `d7_passmail_lru` (
  `passmail_id` int(11) NOT NULL,
  `id_card` int(50) NOT NULL,
  `major` varchar(100) NOT NULL,
  `faculty` varchar(100) NOT NULL,
  `study_group` varchar(50) NOT NULL,
  `name_passmail` varchar(50) NOT NULL,
  `new_passmail` varchar(50) NOT NULL,
  `confirm` varchar(15) NOT NULL,
  `request_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `d7_passmail_lru`
--

INSERT INTO `d7_passmail_lru` (`passmail_id`, `id_card`, `major`, `faculty`, `study_group`, `name_passmail`, `new_passmail`, `confirm`, `request_date`) VALUES
(33, 2147483647, 'วิทยาการคอมพิวเตอร์', 'คณะวิทยาศาสตร์และเทคโนโลยี', 'ว.6205', 'เรื่อง ขอรับรหัสผ่านใหม่', '29704326', 'ส่งเรียบร้อย', '0000-00-00'),
(34, 2147483647, 'วิทยาการคอมพิวเตอร์', 'คณะวิทยาศาสตร์และเทคโนโลยี', 'ว.6205', 'เรื่อง ขอรับรหัสผ่านใหม่', '29704326', 'ส่งเรียบร้อย', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `d12_admin`
--

CREATE TABLE `d12_admin` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `phonenumber` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `d12_admin`
--

INSERT INTO `d12_admin` (`id`, `email`, `password`, `firstname`, `lastname`, `phonenumber`) VALUES
(19, 'admin@lru.ac.th', '$2b$10$z4Q6V5LTiY1zhw2DhY1x7eOhLPMRrSWT2PZ2Smz1mpXoE9jYcavUq', 'ชัชชัย', 'ศรีสวัสดิ์', '0981817713');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `d1_staff_tech`
--
ALTER TABLE `d1_staff_tech`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `d2_staff_com`
--
ALTER TABLE `d2_staff_com`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `d3_manager`
--
ALTER TABLE `d3_manager`
  ADD PRIMARY KEY (`manager_id`);

--
-- Indexes for table `d4_users`
--
ALTER TABLE `d4_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `d7_passmail_lru`
--
ALTER TABLE `d7_passmail_lru`
  ADD PRIMARY KEY (`passmail_id`);

--
-- Indexes for table `d12_admin`
--
ALTER TABLE `d12_admin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `d1_staff_tech`
--
ALTER TABLE `d1_staff_tech`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `d2_staff_com`
--
ALTER TABLE `d2_staff_com`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `d3_manager`
--
ALTER TABLE `d3_manager`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `d4_users`
--
ALTER TABLE `d4_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `d7_passmail_lru`
--
ALTER TABLE `d7_passmail_lru`
  MODIFY `passmail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `d12_admin`
--
ALTER TABLE `d12_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
