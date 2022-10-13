
<?php if (!$field_disabled){?>
<div class="form-element">
   <?php if($field_label) {?><label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label><?php } ?>
    <input type="text" class="form-control" id="<?php echo $field_id; ?>" name="<?php echo $field_name; ?>" placeholder="<?php echo $field_placeholder; ?>" value="<?php echo $field_value; ?>" > 
</div>

<?php } else { ?>
   <div class="form-element disabled">
    <?php if($field_label) {?><label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label><?php } ?>
    <div><?php echo $field_value; ?></div> 
</div>
<?php } ?>