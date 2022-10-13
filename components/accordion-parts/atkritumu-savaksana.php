<?php $s = $_GET['s'];?>

<?php if ($s == "b"){?>
<?php form_field('textarea',array('label'=>'Plānotais atkritumu savākšanas sistēmas veids','disabled'=>'disabled','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<?php form_field('textarea',array('label'=>'Atkritumu savākšanā izmantojamo spec.transp.','disabled'=>'disabled','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<?php form_field('textarea',array('label'=>'Apraksts par tehniskajām iespējām veikt konteineru apkopi','disabled'=>'disabled','value'=>'Nav'));?>
<?php form_field('textarea',array('label'=>'Sadzīves atkritumu dalītās savākšanas punktu','disabled'=>'disabled','value'=>'Nav'));?>
<hr>
<?php table('atkritumu-savaksana');?>

<?php } elseif($s == "p"){?>

<h3>Plānotais atkritumu savākšanas sistēmas veids (piemēram, dalītā atkritumu vākšana, atkritumu šķirošana, atkritumu vākšana no konteineriem, dalītās savākšanas punktos vai savākšanas laukumos) un tās apraksts </h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>

<h3>Atkritumu savākšanā izmantojamo specializēto transportlīdzekļu, iekārtu un inventāra apraksts, iekļaujot arī atkritumu konteineru aprakstu</h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<h3>Apraksts par tehniskajām iespējām veikt konteineru apkopi, tajā skaitā mazgāšanu un dezinficēšanu </h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>''));?>
<h3>Sadzīves atkritumu dalītās savākšanas punktu, šķiroto atkritumu savākšanas laukumu, atsevišķu veidu bīstamo atkritumu vai ražošanas atkritumu savākšanas punktu, izlietotāiepakojuma pieņemšanas punktu un videi kaitīgo preču atkritumu savākšanas punktu adreses un apraksts, norādot to atbilstību normatīvajos aktos par atkritumu savākšanas vietu ierīkošanu un apsaimniekošanu izvirzītajām prasībām (katrai savākšanas vietai) </h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>''));?>
<br>
<h3>Plānotie savācamo bīstamo atkritumu veidi un apjoms  kalendāra gadā</h3>
(Norāda katrai savākšanas vietai atseviški atbilstoši normatīvajiem aktiem par atkritumu klasifikatoru un īpašībām, kas padara atkritumus bīstamus)
<div class="pt-3 pb-2">
    <?php form_field('button', array('name'=>"Pievienot", "class"=>"btn btn-success"));?>
</div>
<?php table('atkritumu-savaksana');?>

<?php } ?>
