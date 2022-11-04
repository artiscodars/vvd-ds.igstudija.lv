<?php

function table($table_id, $table_type = NULL) {

    if ($table_type == "html") {
        include('templates/table-html.php');
    } else {
        include('templates/table-js.php');
    }
}
