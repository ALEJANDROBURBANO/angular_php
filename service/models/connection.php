<?php

/**
 * 
 */
class Connection
{

	/*==============================
	Información de la base de datos
	==============================*/
	
	static public function infoDatabase()
	{
		$infoDB = array(
			"database" => "contable",
			"user" => "root",
			"password" => ""
		);

		return $infoDB;

	}


	/*==============================
	Conexión a la base de datos
	==============================*/

	static public function connect(){
		try {

			$link = new PDO(
				"mysql:host=localhost;dbname=".Connection::infoDatabase()["database"],
				Connection::infoDatabase()["user"],
				Connection::infoDatabase()["password"],
			);

			$link->exec("set names utf8");
			
		} catch (Exception $e) {

			die("Error: ".$e->getMessage());
			
		}

		return $link;
	}
}