-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: dados212d
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'I','Fernando Chinaglia','Fernando','M','11-5205-4907',''),(2,'A','Aguinaldo Aragon Fernandes','Aguinaldo','M','21-2568-1507',''),(3,'A','Vladimir Ferraz de Abreu','Vladimir','M','11-2148-1437',''),(4,'A','Willian Stallings','Stallings','M','','email@gmail.com'),(5,'A','Costinha','Costinha','M','1191551088','Costinha@gmail.com'),(6,'A','Magali','Ma','F','16','Ma@gmail.com');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `editoras`
--

LOCK TABLES `editoras` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `editoras` VALUES (1,'A','BRASPORT Livros e Multimídia Ltda','Rio de Janeiro','20270-280','RJ','editorial@brasport.com.br','21-2568-1415'),(2,'A','Pearson Education do Brasil','São Paulo','02712-100','SP','vendas@pearson.com','11-2178-8688'),(3,'A','Editoria Makron Books','São Paulo','05083-130','SP','editorial@mbooks.com.br','11-3641-5314'),(4,'I','Editora Ano Zero Ltda','Rio de Janeiro','22210-010','RJ','editorial@editoraanozero.com.br','11-205-4907');
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (1,'I','Fernando Chinaglia','atendente','fiscal','295'),(2,'A','Aguinaldo A Fernandes','chefe','obras','376'),(3,'A','Vladimir F de Abreu','Diretor','saude','1342'),(4,'A','Willian Stallings','chefe','juridico','555'),(5,'A','Alessandra Antonelli','Secretaria ','Educação','1088'),(6,'A','Fernanda O de Souza','faxineira','camara','1611');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,'Dominando o Delphi 7 - A Biblia','1ª Edição','853-46-1408-3',2001,3,1,'A'),(2,'Arquitetura e Organização de Computadores ','8ª Edição','978-85-7605-564-8',2010,2,1,'A'),(3,'Implantando a Governança de TI','4ª Edição','978-85-7452-658-4',2014,1,2,'A'),(4,'dBase III Plus - Master Informática','1ª Edição','84-88094-03-05',1992,4,1,'A'),(5,'Guia Mangá - Microprocessadores','1ª Edição','987-321',2016,2,3,'A'),(6,'O Amigo','23ª Edição','103-8-3762-18',2011,1,3,'I'),(7,'Manual NodeJS','1ª Edição','987-32-1008',2016,2,3,'A'),(8,'Eletrônica Digital','3a Ed','54553334',2008,3,2,'A');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `prefeituras`
--

LOCK TABLES `prefeituras` WRITE;
/*!40000 ALTER TABLE `prefeituras` DISABLE KEYS */;
INSERT INTO `prefeituras` VALUES (1,'A','Alexandre Ferreira','MDB','Franca','SP',350000,'28-NOV'),(2,'A','Katiuscia P L Mendes','PSD','Cristais Paulista','SP',9000,'28-JUL'),(3,'A','Duarte Nogueira','PSDB','Ribeirão Preto','SP',712000,'19-JUN'),(4,'A','Luiz Gonzaga Cintra','Avante','Claraval','MG',5000,'12-DEZ');
/*!40000 ALTER TABLE `prefeituras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Antonio','Neto','1234','acneto','acneto.frc@hotmail.com','16999671440'),(2,'Maria Madalena','Maria','123','mariagc','mariamada@hotmail.com','16999671525');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 19:24:40
