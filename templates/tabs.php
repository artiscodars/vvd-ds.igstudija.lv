<ul class="tab-list d-flex flex-wrap">
  
  <li <?php if($_GET['p']=='atkritumu-atlaujas-iesniegums'){echo 'class="active"';}?>>
    <a href="/?s=b&p=atkritumu-atlaujas-iesniegums"><i class="fa-solid fa-file-signature"></i> Atkritumu atļaujas iesniegums<i class="fa-solid fa-xmark close"></i></a>
  </li>

  <li <?php if($_GET['p']=='kontroles-zinojums'){echo 'class="active"';}?>>
    <a href="/?s=b&p=kontroles-zinojums"><i class="fa-solid fa-check-to-slot"></i> Kontroles ziņojums<i class="fa-solid fa-xmark close"></i></a>
  </li>
   <li <?php if($_GET['p']=='ras-parskats'){echo 'class="active"';}?>>
    <a href="/?s=b&p=ras-parskats"><i class="fa-solid fa-list-check"></i> RAS - IP pārskats, #123<i class="fa-solid fa-xmark close"></i></a>
  </li>
  <li class="close-all">
    <a href="/?s=b&p=ras-parskats"><i class="fa-solid fa-xmark close"></i></a>
  </li>
</ul>


<hr>