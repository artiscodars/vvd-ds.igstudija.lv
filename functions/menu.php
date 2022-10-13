<?php

function menu() {

    if (isset($_GET['s'])) {
        $s = $_GET['s'];
    } else {
       $s = 'd';
    }

    $xml = file_get_contents('settings/menu-' . $s . '.json');
    $items = json_decode($xml, JSON_NUMERIC_CHECK);
    $menuitems = $items["menuitem"];
    include('templates/menu.php');
}
