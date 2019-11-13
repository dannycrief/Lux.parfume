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
	//email to send
	$address = "step.kozbvb@gmail.com";
	$phone_number = $userphonenumber;
	if (isset($username)) {
		mail($address, "New user wrote!", $phone_number, "Content-type: text/lain; widows:-1251");
		echo "<p>Your email was sent</p>";
	}

	?>
</body>
</html>