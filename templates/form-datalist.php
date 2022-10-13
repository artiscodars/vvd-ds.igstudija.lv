
<div class="form-element">
    <label for="<?php echo $field_id; ?>"><?php echo $field_label; ?></label>
    <input class="form-control datalist" list="<?php echo $field_id; ?>_options" name="<?php echo $field_label; ?>" id="<?php echo $field_id; ?>" placeholder="<?php echo $field_placeholder; ?>">
    <datalist id="<?php echo $field_id; ?>_options">

        <?php foreach ($options as $key => $option) { ?>
        <option data-value="<?php echo $key; ?>" value="<?php echo $option; ?>">
        <?php } ?>

    </datalist>
</div>
