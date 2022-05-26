<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

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

// Change character set to utf8
mysqli_set_charset($con, "utf8");

// Condition
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents("php://input", true));
    $name = htmlentities($data->name);
    $password = htmlentities($data->password);

    // echo "name: " . $name . " \n password: " . $password;

    $sql = "SELECT * FROM users WHERE name='" . $name . "' AND password='" . $password . "'";

    $result = mysqli_query($con, $sql);

    if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
        echo json_encode([
            'status' => false,
            'message' => 'Please, try again later',
        ]);
    }

    if ($result) {

        // for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        // echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
        // }

        while ($obj = $result->fetch_object()) {
            echo json_encode([
                'status' => true,
                'message' => 'Success',
                'name' => $obj->name,
            ]);
            // printf("%s (%s)\n", $obj->name, $obj->password);
        }
    }
} else {
    echo json_encode([
        'status' => false,
        'message' => 'Access Denied',
    ]);
}

$con->close();
