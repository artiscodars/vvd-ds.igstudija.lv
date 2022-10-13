<div class="dropdown">
  <button class="<?php echo $field_class; ?>" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <?php echo $field_name; ?>
  </button>
  <ul class="dropdown-menu">
      <?php foreach ($options as $key => $option) { ?>
    <li>
        <a class="dropdown-item" href="#">
        <?php if($option['icon']){ ?>
    <i class="<?php echo $option['icon']; ?>"></i><?php } ?> 
        <?php echo $option['name']; ?>
        </a>
    </li>
     <?php } ?>
  </ul>
</div>