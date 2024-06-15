<?php
header("Content-Type: application/json");

// Get the JSON data from the request
$data = file_get_contents("php://input");

if ($data) {
    // Define the file path where the JSON data will be saved
    $file = 'foods.json';

    // Attempt to save the JSON data to the file
    if (file_put_contents($file, $data)) {
        // Respond with a success message
        echo json_encode(['status' => 'success', 'message' => 'File saved successfully']);
    } else {
        // Respond with an error message if the file could not be saved
        echo json_encode(['status' => 'error', 'message' => 'Error saving file']);
    }
} else {
    // Respond with an error message if no data was received
    echo json_encode(['status' => 'error', 'message' => 'No data received']);
}
?>
