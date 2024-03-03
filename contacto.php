<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contactoweb";
$port = 3306; // Añade el puerto aquí

// Crear conexión
$conn = mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

// Verificar que todos los campos están presentes
if(isset($_POST['name'], $_POST['email'], $_POST['cellphone'], $_POST['message'])) {
    // Limpiar los datos para evitar inyecciones SQL
    $nombre = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $celular = $conn->real_escape_string($_POST['cellphone']);
    $mensaje = $conn->real_escape_string($_POST['message']);

    // Verificar el formato del celular
    if(preg_match("/^[0-9]{10}$/", $celular)) {
        // Preparar y vincular
        $stmt = $conn->prepare("INSERT INTO contactos (nombre, email, celular, mensaje) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $nombre, $email, $celular, $mensaje);

        // Ejecutar
        if($stmt->execute()) {
            echo "Mensaje enviado con éxito.";
        } else {
            echo "Error al enviar el mensaje: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "El formato del número de celular no es válido.";
    }
} else {
    echo "Por favor, completa todos los campos.";
}

$conn->close();
?>
