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
$lang = strtolower(trim($_POST['lang'] ?? 'es'));
$locale = in_array($lang, ['es', 'en', 'pt'], true) ? $lang : 'es';

$confirmationEmail = [
    'es' => [
        'subject' => 'Solicitud de información recibida',
        'body' => "<h2>Solicitud de información recibida</h2>
        <p>Estimado/a {$nombre},</p>
        <p>Muchas gracias por ponerse en contacto con Silvia Corral Propiedades. Hemos recibido su solicitud de información y nos pondremos en contacto con usted en breve.</p>
        <p>Por favor, no responda a este correo, ya que se trata de un mensaje automático.</p>
        <p>Atentamente,<br>Silvia Corral Propiedades</p>"
    ],
    'en' => [
        'subject' => 'Information request received',
        'body' => "<h2>Information request received</h2>
        <p>Dear {$nombre},</p>
        <p>Thank you for contacting Silvia Corral Properties. We have received your information request and will get in touch with you shortly.</p>
        <p>Please do not reply to this email, as it is an automated message.</p>
        <p>Kind regards,<br>Silvia Corral Properties</p>"
    ],
    'pt' => [
        'subject' => 'Solicitação de informação recebida',
        'body' => "<h2>Solicitação de informação recebida</h2>
        <p>Estimado(a) {$nombre},</p>
        <p>Obrigado por entrar em contacto com a Silvia Corral Propriedades. Recebemos a sua solicitação de informação e entraremos em contacto consigo em breve.</p>
        <p>Por favor, não responda a este e-mail, pois trata-se de uma mensagem automática.</p>
        <p>Atenciosamente,<br>Silvia Corral Propriedades</p>"
    ],
];

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
    // 2. PREPARAR EMAILS
    // =========================

    $createMailer = function () {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USER'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';
        $mail->setFrom($_ENV['SMTP_USER'], $_ENV['SMTP_FROM_NAME'] ?? 'Silvia Corral Propiedades');

        return $mail;
    };

    $mailSilvia = $createMailer();
    $mailSilvia->addAddress($_ENV['SMTP_USER']);
    $mailSilvia->Subject = 'Nuevo mensaje desde la web';
    $mailSilvia->isHTML(true);
    $mailSilvia->Body = "
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Teléfono:</strong> {$telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>{$mensaje}</p>
    ";
    $mailSilvia->send();

    $mailUsuario = $createMailer();
    $mailUsuario->addAddress($email, $nombre);
    $mailUsuario->Subject = $confirmationEmail[$locale]['subject'];
    $mailUsuario->isHTML(true);
    $mailUsuario->Body = $confirmationEmail[$locale]['body'];
    $mailUsuario->send();

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