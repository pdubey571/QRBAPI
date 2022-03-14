-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 29, 2021 at 06:18 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qrbee`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `item_description` text NOT NULL,
  `status` int(1) NOT NULL,
  `price` float NOT NULL,
  `create_ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_ts` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `restaurant_id`, `category`, `item_description`, `status`, `price`, `create_ts`, `update_ts`) VALUES
(1, 'Chicken', 1, 1, 'test', 1, 10, '2021-12-14 18:14:38', '2021-12-14 18:14:38'),
(2, 'Chicke1n', 1, 1, 'test', 1, 10, '2021-12-14 18:26:19', '2021-12-14 18:26:19'),
(3, 'Chicke1sn', 1, 1, 'test', 1, 10, '2021-12-14 18:31:44', '2021-12-14 18:31:44'),
(4, 'Chicke2n', 1, 1, 'test', 1, 10, '2021-12-17 04:50:58', '2021-12-17 04:50:58'),
(5, 'Chicke3n', 1, 1, 'test', 1, 10, '2021-12-17 04:55:32', '2021-12-17 04:55:32'),
(6, 'Chicke4n', 1, 1, 'test', 1, 10, '2021-12-17 04:58:44', '2021-12-17 04:58:44'),
(7, 'Chicke5n', 1, 1, 'test', 1, 10, '2021-12-17 05:02:11', '2021-12-17 05:02:11'),
(8, 'Chicke6n', 1, 1, 'test', 1, 10, '2021-12-17 05:14:29', '2021-12-17 05:14:29'),
(9, 'Chicke7n', 1, 1, 'test', 1, 10, '2021-12-17 05:16:06', '2021-12-17 05:16:06'),
(10, 'Chicke8n', 1, 1, 'test', 1, 10, '2021-12-17 05:19:12', '2021-12-17 05:19:12'),
(11, 'Chicke9n', 1, 1, 'test', 1, 10, '2021-12-17 05:20:04', '2021-12-17 05:20:04'),
(12, 'Chicke10n', 1, 1, 'test', 1, 10, '2021-12-17 05:21:07', '2021-12-17 05:21:07'),
(13, 'Chicke11n', 1, 1, 'test', 1, 10, '2021-12-17 05:21:39', '2021-12-17 05:21:39'),
(14, 'Chicke112', 1, 1, 'test', 1, 10, '2021-12-17 05:25:06', '2021-12-17 05:25:06'),
(15, 'Chicke102', 1, 1, 'test', 1, 10, '2021-12-17 05:26:46', '2021-12-17 05:26:46'),
(16, 'Chicke21', 1, 1, 'test', 1, 10, '2021-12-17 05:27:38', '2021-12-17 05:27:38'),
(17, 'Chicke22', 1, 1, 'test', 1, 10, '2021-12-17 05:28:20', '2021-12-17 05:28:20'),
(18, 'Chicke24', 1, 1, 'test', 1, 10, '2021-12-17 05:30:27', '2021-12-17 05:30:27'),
(19, 'Item1_test', 1, 1, 'test', 1, 10, '2021-12-17 18:23:22', '2021-12-17 18:23:22'),
(20, 'Item11_test', 1, 1, 'test', 1, 10, '2021-12-19 04:49:43', '2021-12-19 04:49:43'),
(21, 'Item1111_test', 1, 1, 'test', 1, 10, '2021-12-19 04:51:01', '2021-12-19 04:51:01'),
(22, 'Item11111_test', 1, 1, 'test', 1, 10, '2021-12-19 04:51:58', '2021-12-19 04:51:58'),
(23, 'Item1111111_test', 1, 1, 'test', 1, 10, '2021-12-19 04:53:57', '2021-12-19 04:53:57'),
(24, 'Item111111ww1_test', 1, 1, 'test', 1, 10, '2021-12-19 04:56:21', '2021-12-19 04:56:21'),
(25, 'Item11111wew1ww1_test', 1, 1, 'test', 1, 10, '2021-12-19 04:58:23', '2021-12-19 04:58:23');

-- --------------------------------------------------------

--
-- Table structure for table `item_categories`
--

CREATE TABLE `item_categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` text NOT NULL,
  `parent_category` int(11) NOT NULL DEFAULT 0,
  `status` int(1) NOT NULL,
  `create_ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_ts` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_categories`
--

INSERT INTO `item_categories` (`id`, `category_name`, `category_description`, `parent_category`, `status`, `create_ts`, `update_ts`) VALUES
(3, 'Drinks', '', 0, 1, '2021-12-12 06:41:08', '2021-12-12 12:11:08'),
(4, 'Soda', '', 1, 1, '2021-12-12 06:41:08', '2021-12-12 12:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `item_custmizations`
--

CREATE TABLE `item_custmizations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `item_id` int(11) NOT NULL,
  `detail` text NOT NULL,
  `create_ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_ts` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_custmizations`
--

INSERT INTO `item_custmizations` (`id`, `title`, `item_id`, `detail`, `create_ts`, `update_ts`) VALUES
(1, 'quantity', 12, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:21:07', '2021-12-17 05:21:07'),
(2, 'milk_options', 12, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:21:07', '2021-12-17 05:21:07'),
(3, 'quantity', 13, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:21:39', '2021-12-17 05:21:39'),
(4, 'milk_options', 13, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:21:39', '2021-12-17 05:21:39'),
(5, 'quantity', 14, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:25:06', '2021-12-17 05:25:06'),
(6, 'milk_options', 14, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:25:06', '2021-12-17 05:25:06'),
(7, 'quantity', 15, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:26:46', '2021-12-17 05:26:46'),
(8, 'milk_options', 15, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:26:46', '2021-12-17 05:26:46'),
(9, 'quantity', 16, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:27:39', '2021-12-17 05:27:39'),
(10, 'milk_options', 16, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:27:39', '2021-12-17 05:27:39'),
(11, 'quantity', 17, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:28:21', '2021-12-17 05:28:21'),
(12, 'milk_options', 17, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:28:21', '2021-12-17 05:28:21'),
(13, 'quantity', 18, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 05:30:27', '2021-12-17 05:30:27'),
(14, 'milk_options', 18, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 05:30:27', '2021-12-17 05:30:27'),
(15, 'quantity', 19, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-17 18:23:23', '2021-12-17 18:23:23'),
(16, 'milk_options', 19, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-17 18:23:23', '2021-12-17 18:23:23'),
(17, 'quantity', 20, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:49:44', '2021-12-19 04:49:44'),
(18, 'milk_options', 20, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:49:44', '2021-12-19 04:49:44'),
(19, 'quantity', 21, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:51:01', '2021-12-19 04:51:01'),
(20, 'milk_options', 21, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:51:01', '2021-12-19 04:51:01'),
(21, 'quantity', 22, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:51:58', '2021-12-19 04:51:58'),
(22, 'milk_options', 22, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:51:58', '2021-12-19 04:51:58'),
(23, 'quantity', 23, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:53:57', '2021-12-19 04:53:57'),
(24, 'milk_options', 23, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:53:57', '2021-12-19 04:53:57'),
(25, 'quantity', 24, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:56:21', '2021-12-19 04:56:21'),
(26, 'milk_options', 24, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:56:21', '2021-12-19 04:56:21'),
(27, 'quantity', 25, '[{\"name\":\"quarter\",\"price\":\"12\",\"satus\":\"1\"},{\"name\":\"half\",\"price\":\"11\",\"satus\":\"1\"}]', '2021-12-19 04:58:23', '2021-12-19 04:58:23'),
(28, 'milk_options', 25, '[{\"name\":\"regular\",\"price\":\"14\",\"satus\":\"1\"},{\"name\":\"coconut\",\"price\":\"15\",\"satus\":\"1\"}]', '2021-12-19 04:58:23', '2021-12-19 04:58:23');

-- --------------------------------------------------------

--
-- Table structure for table `item_images`
--

CREATE TABLE `item_images` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `type` int(1) NOT NULL COMMENT '1=>Image, 2=>Video',
  `create_ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_ts` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone_number` varchar(20) NOT NULL,
  `status` int(1) NOT NULL DEFAULT 1,
  `business_name` varchar(50) NOT NULL,
  `business_location` varchar(255) NOT NULL,
  `business_description` text NOT NULL,
  `user_type` enum('1','2','3') NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `create_ts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_ts` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `status`, `business_name`, `business_location`, `business_description`, `user_type`, `logo`, `create_ts`, `updated_ts`) VALUES
(1, NULL, NULL, 'joshi.rakesh2007@gmail.com', NULL, '99999999', 0, 'Testing organization', 'testing site', 'Testing site is tthe best restaurant in the town', '1', NULL, '2021-12-11 17:40:21', '2021-12-11 17:30:26'),
(2, NULL, NULL, 'joshi.rakesh2009@gmail.com', NULL, '9977799', 0, 'Testing organization', 'testing site', 'Testing site is tthe best restaurant in the town', '1', NULL, '2021-12-11 17:33:32', '2021-12-11 17:33:32'),
(3, NULL, NULL, 'test@testl.com', NULL, '84472336474', 0, 'Testing organization', 'testing site', 'Testing site is tthe best restaurant in the town', '1', NULL, '2021-12-17 18:10:59', '2021-12-17 18:10:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_categories`
--
ALTER TABLE `item_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_custmizations`
--
ALTER TABLE `item_custmizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_images`
--
ALTER TABLE `item_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `item_categories`
--
ALTER TABLE `item_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `item_custmizations`
--
ALTER TABLE `item_custmizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `item_images`
--
ALTER TABLE `item_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
