<?php 

if (isset($_GET['s'])== false) {
    header("Location: https://vvd-ds.igstudija.lv/?s=d&p=ievads");
die();
}


include("header.php"); ?>

<?php page();?>

<?php include("footer.php");?>