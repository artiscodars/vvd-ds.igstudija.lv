<?php

function table($table_id,$table_type=NULL) {

       /* $json = file_get_contents('table-data/' . $table_id . '.js');
        $items = json_decode($json, JSON_NUMERIC_CHECK);

        $table_cols = $items["columns"];
        $table_defs = $items["tabledef"];
        
        if(array_key_exists('data', $items)){
        $table_data = 'data:'.json_encode($items["data"]);
        }*/
        
        include('templates/table.php');
    
}