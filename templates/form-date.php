
<?php if (!$field_disabled){?>
<div class="form-element">
    <label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label>
    <input type="date" class="form-control" id="<?php echo $field_id; ?>" name="<?php echo $field_name; ?>" placeholder="<?php echo $field_placeholder; ?>" <?php echo $field_disabled; ?>>
</div>


<?php } else { ?>
   <div class="form-element disabled">
    <label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label>
    <div><?php echo $field_value; ?></div> 
</div>
<?php } ?>
