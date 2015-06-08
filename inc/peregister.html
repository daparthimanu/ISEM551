<?php
/*
 * NAME: peregister.php for jQ Photographer's Exchange
 * AUTHOR: Jay Blanchard
 * DATE: 2011-03-12
 * BUSINESS RULE:   <if applicable>
 *
 * REVISION:    a20110312jb
 * STATUS:      open
 * USAGE:       call with jQuery AJAX                        
 *
 * NOTES:        
 *
 * REVISION HISTORY:
 * 
 * a20110312jb  - create
 *
 */

/* database connection */
if(!$dbc = mysql_connect('localhost', 'photoexchange', 'cam3rafan')){
	echo mysql_error() . "\n";
	exit();
}


/* case to determine which form is being used */
switch($_POST['formName']) {
	case 'register':
		/* if the registration form has a valid username & password insert the data */
		if(isset($_POST['penewuser']) && isset($_POST['penewpass'])) {
			/* insert new user */
	        $peuserInsert = "INSERT INTO `photoex`.`peuser` ";
	        $peuserInsert .= "(`username`, `userpass`, `userfirst`, `userlast`, `useremail`,";
	        /* handle interests array */
	        if(isset($_POST['interests'])){
	        	for($i = 0; $i < count($_POST['interests']); $i++){
	        	   if($i == (count($_POST['interests']) - 1)){
	        	       $peuserInsert .= "`".$_POST['interests'][$i]."`";	
	        	   } else {
	        	   	   $peuserInsert .= "`".$_POST['interests'][$i]."`, ";
	        	   }	
	        	}
	        }
	        $peuserInsert .=")";
	        $peuserInsert .= "VALUES (";
	        $peuserInsert .= "'".$_POST['penewuser']."', ";
	        $peuserInsert .= "'".$_POST['penewpass']."', ";
	        $peuserInsert .= "'".$_POST['pefirstname']."', ";
	        $peuserInsert .= "'".$_POST['pelastname']."', ";
	        $peuserInsert .= "'".$_POST['email']."', ";
	        /* handle interests array values */
	        if(isset($_POST['interests'])){
	            for($i = 0; $i < count($_POST['interests']); $i++){
	               if($i == (count($_POST['interests']) - 1)){
	                   $peuserInsert .= "'yes'";    
	               } else {
	                   $peuserInsert .= "'yes', ";
	               }    
	            }
	        }
	        $peuserInsert .=")";
	        if(!($peuInsert = mysql_query($peuserInsert, $dbc))){
	        	echo mysql_error();
	        	echo mysql_errno();
	        	exit();
	        } 
		} else {
			/* we are just checking the username */
			$peCheckUser = "SELECT `username` ";
			$peCheckUser .= "FROM `photoex`.`peuser` ";
			$peCheckUser .= "WHERE `username` = '".$_POST['penewuser']."' ";
			if(!($peuCheck = mysql_query($peCheckUser, $dbc))){
				echo mysql_error();
				exit();
			}
			$userCount = mysql_num_rows($peuCheck);
			echo $userCount;
		}
		break;
		
	case 'login':
		
		break;
}


?>