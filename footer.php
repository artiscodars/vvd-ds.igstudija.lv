
  </div><!-- wrapper END --> 
  
  <div class="footer">
      Valsts Vides Dienests, 2022<br>
      Tālrunis: <a href='tel:+37167084200'>+371 67084200</a>, E-pasts: <a href='mailto:atbalsts@vvd.gov.lv'>atbalsts@vvd.gov.lv</a>
  </div>
  
  
  <?php include("templates/help-sidebar.php");?>

    
     <?php $jstime = date("YmdHi", filemtime($_SERVER['DOCUMENT_ROOT'] . "/js/scripts.js")); ?>
     <script src="js/scripts.js?v=<?php echo $jstime; ?>"></script>
  </body>
</html>