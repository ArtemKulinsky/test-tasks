<?php

   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $product = $_POST['product'];

   $mes = "Имя: $name \nНомер: $phone \nE-mail: $email \nТовар: $product";

   $send = mail($email, 'Заявка на сайте', $mes, "Content-type:text/plain; charset = UTF-8\r\n");

   if($send == 'true') {echo "Сообщение отправлено";}
   else {echo "Ошибка";}
?>