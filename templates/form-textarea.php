
<?php if (!$field_disabled){?>
<div class="form-element  <?php if(!$field_label){ ?>pt-1<?php } ?>">
    <?php if($field_label){ ?><label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label><?php } ?>
    <textarea class="form-control auto-resize <?php echo $field_class; ?>" placeholder="<?php echo $field_placeholder; ?>" id="<?php echo $field_id; ?>" name="<?php echo $field_name; ?>"><?php echo $field_value; ?></textarea>
</div>

<?php } else { ?>
   <div class="form-element disabled ">
   <?php if($field_label){ ?><label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label><?php } ?>
    <div><?php echo $field_value; ?></div> 
</div>
<?php } ?>