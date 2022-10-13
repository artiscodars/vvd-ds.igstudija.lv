<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <?php foreach ($options[$field_elements['id']] as $k => $option) { ?>
        <input type="radio" class="btn-check" name="<?php echo $field_name . $field_elements['id']; ?>" id="id-<?php echo $option['id'] . $field_elements['id']; ?>" autocomplete="off" <?php if ($field_elements['value'] == $k) { ?>checked<?php } ?> >
        <label class="btn btn-outline-dark" for="id-<?php echo $option['id'] . $field_elements['id']; ?>"><?php echo $option['name']; ?></label>
    <?php } ?>
</div>