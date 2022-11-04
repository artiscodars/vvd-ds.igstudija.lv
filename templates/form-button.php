
<button 
    type="submit" 
    
    id="<?php echo $field_id; ?>"  
    value="<?php echo $field_value; ?>" 
   <?php atributes(['type','class','value', 'id','data-bs-toggle','data-bs-target'],$field);?>
    >
    <?php if($field_icon){ ?>
    <i class="<?php echo $field_icon; ?>"></i>
    <?php } ?>
    <?php echo $field_name; ?>
</button>



