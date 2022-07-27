<?php


$routesArray = explode("/", $_SERVER['REQUEST_URI']);
$routesArray = array_filter($routesArray);

if (count($routesArray)==0) {
	
	$json = array(
		'status' => 404,
		'result' => 'Not found'
	);

	echo json_encode($json, http_response_code($json["status"]));

	return;

}


if (count($routesArray) == 1 && isset($_SERVER['REQUEST_METHOD'])) {

	/*=========================
	Peticiones GET 
	=========================*/

	if ($_SERVER['REQUEST_METHOD'] == "GET") {

		include "services/get.php";

	}

	/*=========================
	Peticiones POST 
	=========================*/

	if ($_SERVER['REQUEST_METHOD'] == "POST") {

		$json = array(
			'status' => 200,
			'result' => 'Solicitud POST'
		);

	}

	/*=========================
	Peticiones PUT 
	=========================*/

	if ($_SERVER['REQUEST_METHOD'] == "PUT") {

		$json = array(
			'status' => 200,
			'result' => 'Solicitud PUT'
		);

	}

	/*=========================
	Peticiones DELETE 
	=========================*/

	if ($_SERVER['REQUEST_METHOD'] == "DELETE") {

		$json = array(
			'status' => 200,
			'result' => 'Solicitud DELETE'
		);

	}



	
}


