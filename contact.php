<?php
$to      = 'zma@federal24.com';
$subject = 'Заказали звонок от "Зарубин и Партнеры"';

$name = $_POST['name'];
$phone = $_POST['phone'];

mail(
    $to,
    $subject,
    'Имя потенциального клиента: '.$name.
    '. Его номер: +'.$phone
);
?>