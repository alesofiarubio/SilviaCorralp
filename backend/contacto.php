<?php

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'ok' => false,
        'mensaje' => 'Método no permitido'
    ]);
    exit;
}

$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

if ($nombre === '' || $email === '' || $mensaje === '') {
    echo json_encode([
        'ok' => false,
        'mensaje' => 'Faltan campos obligatorios'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'ok' => false,
        'mensaje' => 'El email no es válido'
    ]);
    exit;
}

try {

    // =========================
    // 1. GUARDAR EN SQLITE
    // =========================

    $sql = "
        INSERT INTO contactos
        (nombre, email, telefono, mensaje)
        VALUES
        (:nombre, :email, :telefono, :mensaje)
    ";

    $stmt = $db->prepare($sql);

    $stmt->execute([
        ':nombre' => $nombre,
        ':email' => $email,
        ':telefono' => $telefono,
        ':mensaje' => $mensaje
    ]);


    // =========================
    // 2. PREPARAR EMAIL
    // =========================

    $mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = $_ENV['SMTP_USER'];
$mail->Password = $_ENV['SMTP_PASSWORD'];
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

    $mail->setFrom($_ENV['SMTP_USER'], $_ENV['SMTP_FROM_NAME']);
    $mail->addAddress($_ENV['SMTP_USER']); 

    $mail->Subject = 'Nuevo mensaje desde la web';

    $mail->Body = "
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> {$nombre}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Teléfono:</strong> {$telefono}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{$mensaje}</p>
";

$mail->isHTML(true);
$mail->send();
    // Más adelante configuraremos aquí el SMTP real.
    // Por ahora NO ponemos ninguna contraseña.

    echo json_encode([
        'ok' => true,
        'mensaje' => 'Mensaje guardado correctamente'
    ]);

} catch (PDOException $e) {

    echo json_encode([
        'ok' => false,
        'mensaje' => 'No se ha podido guardar el mensaje'
    ]);

} catch (Exception $e) {

    echo json_encode([
        'ok' => false,
        'mensaje' => 'Error de PHPMailer: ' . $e->getMessage()
    ]);
}