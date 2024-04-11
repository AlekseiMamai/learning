<?php
$_POST = json_decode(file_get_contents("php://input"), true); //для работы с json при конвертации из formData
echo var_dump($_POST);
