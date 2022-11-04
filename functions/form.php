<?php

function form(
        $page, 
        $block=NULL, 
        $section = NULL
        ) {

  
        $json = file_get_contents('settings/' . $page . '.json');
        $items = json_decode($json, JSON_NUMERIC_CHECK);

        if($block == 'accordion'){
           // echo $section;
            $accordions = $items['accordion'];
            foreach ($accordions as $accordion) {
                if ($accordion['section']== $section) {
                       
                    foreach ( $accordion["content_block"] as $content_block) {
                        if ($content_block['type']== 'form') {
                             $form_fields = $content_block["data"];
                             
                        }
                    }
            }
            }
        }elseif($block == NULL || $block == 'form') {
             $form_fields = $items["form"];     
             
          
        } elseif($block == 'tools') {
             $form_fields = $items["tools"];     
             
          
        } elseif($block == 'table') {
             $form_fields = $items["tabledef"]["form"];     
        } elseif($block == 'nested-table') {
             $form_fields = $items["nested-tabledef"]["form"];     
        }
       
        
       //print_r($form_fields);

        include('templates/form.php');
    
}