<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Thanks page</title>
</head>
<body>
	<?php
	
	if (isset($_POST['username'])) {
		$username = $_POST['username'];
		if ($username == '') {
			unset($username);
		}
	}
	if (isset($_POST['usersurname'])) {
		$usersurname = $_POST['usersurname'];
		if ($usersurname == '') {
			unset($usersurname);
		}
	}
	if (isset($_POST['userEmail'])) {
		$userEmail = $_POST['userEmail'];
		if ($userEmail == '') {
			unset($userEmail);
		}
	}
	if (isset($_POST['userphonenumber'])) {
		$userphonenumber = $_POST['userphonenumber'];
		if ($userphonenumber == '') {
			unset($userphonenumber);
		}
	}
	if (isset($_POST['item'])) {
		$item = $_POST['item'];
		if ($item == '') {
			unset($item);
		}
	}


	if (isset($username)) {
		$username = stripslashes($username);
		$username = htmlspecialchars($username);
	}
	if (isset($userEmail)) {
		$userEmail = stripslashes($userEmail);
		$userEmail = htmlspecialchars($userEmail);
	}
	if (isset($userphonenumber)) {
		$userphonenumber = stripslashes($userphonenumber);
		$userphonenumber = htmlspecialchars($userphonenumber);
	}
	if (isset($item)) {
		$item = stripslashes($item);
		$item = htmlspecialchars($item);
	}
	//email to send
	$address = "step.kozbvb@gmail.com";
	$note_text = "Тема:  New user wrote!\r\nName: $username\r\nSurname: $usersurname\r\nEmail: $userEmail\r\nPhone number: $userphonenumber\r\nНазвание товара: $item";
	if (isset($username)) {
		mail($address, "New user wrote!", $note_text);
		echo '<script type="text/JavaScript">
             prompt("GeeksForGeeks");
             </script>'
        ;
		echo echo "<script type='text/javascript'>alert('Your email was sent');</script>";
	}
	?>
</body>
</html>