<?php

function page() {

    if (isset($_GET['p'])) {

        $p = $_GET['p'];

        $xml = file_get_contents('settings/' . $p . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $accordions = NULL;
        if (array_key_exists("accordion", $items)) {
            $accordions = $items["accordion"];
        }

        $page = NULL;
        if (array_key_exists("page", $items)) {
            $page = $items["page"];
        }

        $tools = NULL;
        if (array_key_exists("tools", $items)) {
            $tools = $items["tools"];
        }

        $system = NULL;
        if (array_key_exists("system", $items)) {
            $system = $items["system"];
        }

        $page_title = NULL;
        if (array_key_exists("title", $items)) {
            $page_title = $items["title"];
        }


        $tabs = NULL;
        if (array_key_exists("tabs", $items)) {
            $tabs = $items["tabs"];
        }

        $form_fields = NULL;
        if (array_key_exists("form", $items)) {
            $form_fields = $items["form"];
        }


        $payment = NULL;
        if (array_key_exists("payment", $items)) {
            $payment = $items["payment"];
        }


        $breadcrumb = NULL;
        if (array_key_exists("breadcrumb", $items)) {
            $breadcrumb = $items["breadcrumb"];
        }


        $form = NULL;
        if (array_key_exists("form", $items)) {
            $form = $items["form"];
        }
        ?>


        <?php include("templates/header.php"); ?>


        <?php
        if ($tabs == 'show') {
            include("templates/tabs.php");
        }
        ?>

        <?php
        if ($breadcrumb == 'true') {
            include("templates/breadcrumb.php");
        }
        ?>

        <?php
        if ($page_title != '') {
            include("templates/title.php");
        }
        ?>

        <?php 
     
        
        if (isset($tools)) { ?>
            <div class="tools">
                <?php form($p, 'tools'); ?>
            </div>
        <?php }
        ?>


        <?php if (isset($form_fields)) { ?>
            <div class="card mt-3 mb-3">
                <div class="card-body pt-1">
                    <?php form($p, 'form'); ?>
                </div>
            </div>
        <?php } ?>

        <?php
        if (isset($page)) {
            include("pages/" . $p . ".php");
        }
        ?>

        <?php
        if (isset($accordions)) {
            accordion($p);
        }
        ?>

        <?php
        if (isset($payment)) {
            include("components/payment.php");
        }
        ?>     




        <?php
    }
}
