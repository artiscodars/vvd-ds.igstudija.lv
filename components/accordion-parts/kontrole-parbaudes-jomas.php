<div class="row">
    <div class="col">
        <?php form_field('datalist',  array('label'=>'Pārbaudes joma','placeholder'=>'Izvēlies vai raksti'), array(
                    'lv' => 'Sadzīves atkritumu apsaimniekošana',
                    'lt' => 'Lauksaimniecības uzņēmumi C kategorijas dzivnieku novietnes'
                )); ?>
    </div>
    <div class="col">
        
<?php form_field('datalist-group',  array('label'=>'Apakšjoma','placeholder'=>'Izvēlies vai raksti','button'=>'Pievienot','id'=>'abde'), array(
                    'lv' => 'Sadzīves atkritumi',
                    'lt' => 'citi atkritumi'
                )); ?>
    </div>
</div> 





<hr>

<?php table('parbaudes-jomas');?>