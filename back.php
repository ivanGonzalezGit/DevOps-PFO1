<?php

    $usuario = "admin";
    $pass = "1234";

    if($usuario==$_POST['usuario'] && $pass ==$_POST['pass']){
        echo "ok";
    }else{
        echo "error";
        }
?>