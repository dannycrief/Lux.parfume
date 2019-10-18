<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mail</title>
</head>
<body>
	<?php
		$to = $_POST['email']; // емайл получателя данных из формы
		$tema = "Форма обратной связи на PHP"; // тема полученного емайла
		$message = "Ваше имя: ".$_POST['username']."<br>";//присвоить переменной значение, полученное из формы name=name
		$message .= "E-mail: ".$_POST['useremail']."<br>"; //полученное из формы name=email
		$message .= "Номер телефона: ".$_POST['userphonenumber']."<br>"; //полученное из формы name=phone
		$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
		mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>
</body>
</html>