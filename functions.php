<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$_dirs = array(
    'functions/*.php'
);
foreach ($_dirs as $_dir) {
    foreach (glob($_dir) as $_file) {
        require_once $_file;
    }
}
