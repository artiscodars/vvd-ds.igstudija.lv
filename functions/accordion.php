<?php

function accordion($page) {

        $xml = file_get_contents('settings/' . $page . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $accordions = $items["accordion"];

        include('templates/accordion.php');
    
}