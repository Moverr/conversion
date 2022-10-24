<?php

$api_url = 'https://api.newvisionapp.com/v1/Articles?limit=6&publication=newvision';

// Read JSON file
$json_data = file_get_contents($api_url);
$json_data = json_decode($json_data);
$home = array_slice($json_data, 0, 1);

// Traverse array and display user data
foreach ($home as $user) {
	echo $user->title;
}

?>