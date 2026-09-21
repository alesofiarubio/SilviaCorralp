<?php

$db = new PDO('sqlite:' . __DIR__ . '/contactos.sqlite');

$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec("
    CREATE TABLE IF NOT EXISTS contactos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        telefono TEXT,
        mensaje TEXT NOT NULL,
        fecha DATETIME DEFAULT CURRENT_TIMESTAMP
    )
");