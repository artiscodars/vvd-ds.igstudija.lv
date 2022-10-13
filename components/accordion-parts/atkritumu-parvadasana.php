<?php $s = $_GET['s'];?>

<?php if ($s == "b"){?>
    
    <?php form_field('textarea',array('label'=>'Ja tiek veikts pašpārvadājums – pašpārvadājuma sertifikāta numurs, derīguma termiņš, institūcija, kas to izdevusi','disabled'=>'disabled','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<?php form_field('textarea',array('label'=>'Ja tiek veikts komercpārvadājums ar autotransporta līdzekli – dokuments, kas apliecina pārvadātāja pielaidi komercpārvadājumiem, numurs, derīguma termiņš un institūcija, kas to izdevusi','disabled'=>'disabled','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<?php form_field('textarea',array('label'=>'Ja atļauja nepieciešama bīstamo atkritumu pārvadāšanai','disabled'=>'disabled','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. '));?>
<hr>
<?php table('atkritumu-parvadasana');?>

<?php } elseif($s == "p"){?>

<h3>Ja tiek veikts pašpārvadājums – pašpārvadājuma sertifikāta numurs, derīguma termiņš, institūcija, kas to izdevusi (ja saskaņā ar normatīvajiem aktiem par autopārvadājumiem šāds sertifikāts ir nepieciešams)</h3>
    <?php form_field('textarea',array('class'=>'tiny-mce','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>

<h3>Ja tiek veikts komercpārvadājums ar autotransporta līdzekli – dokuments, kas apliecina pārvadātāja pielaidi komercpārvadājumiem, numurs, derīguma termiņš un institūcija, kas to izdevusi</h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. Pellentesque ac tristique est, ut venenatis felis. Quisque gravida pellentesque arcu, sit amet tincidunt dui posuere eget. Maecenas vitae viverra elit. Morbi dolor odio, rutrum a aliquam ut, egestas a ex. Nunc in tellus at justo sagittis iaculis. Nam nec lectus dignissim, rutrum erat accumsan, varius justo. Vestibulum consectetur ultrices turpis.'));?>
<h3>Ja atļauja nepieciešama bīstamo atkritumu pārvadāšanai - dokumenti, kas apliecina pārvadātāja pielaidi komercpārvadājumiem, numurs, derīguma termiņš un institūcija, kas to izdevusi</h3>
<?php form_field('textarea',array('class'=>'tiny-mce','value'=>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia pellentesque sem a rutrum. Sed finibus arcu nisl, non faucibus ipsum egestas nec. '));?>


<h3>Plānotie pārvadājamo bīstamo atkritumu veidi un apjoms  kalendāra gadā</h3>
(Atbilstoši normatīvajiem aktiem par atkritumu klasifikatoru un īpašībām, kas padara atkritumus bīstamus)
<div class="pt-3 pb-2">
    <?php form_field('button', array('name'=>"Pievienot", "class"=>"btn btn-success"));?>
</div>
<?php table('atkritumu-parvadasana');?>

<?php } ?>


