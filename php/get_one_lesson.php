<?php
header("Access-Control-Allow-Origin: *");

$host = "localhost";
$user = "ifureniturelao_souk";
$password = "12345678";
$dbname = "ifureniturelao_lessson_db";

$con = mysqli_connect($host, $user, $password, $dbname);

// if ($con) {
//     echo "<h1>success 1111</h1>";
// } else{
//      echo "<h1>fail</h1>";
// }

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Change character set to utf8
mysqli_set_charset($con, "utf8");

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM lesson WHERE name='" . $_GET["name"] . "'";
        break;
}

$result = mysqli_query($con, $sql);

if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
} else {
    echo mysqli_affected_rows($con);
}

$con->close();
