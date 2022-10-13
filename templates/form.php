
<div class="row"> 
    <?php foreach ($form_fields as $key => $form_field) { ?> 
        <div class="<?php echo $form_field["col"]; ?>">
            <?php
            if ($form_field["type"] == 'select' || $form_field["type"] == 'datalist' || $form_field["type"] == 'datalist-group' || $form_field["type"] == 'dropdown') {
                form_field($form_field["type"], $form_field["field_elements"], $form_field["options"]);
            } else {
                form_field($form_field["type"], $form_field["field_elements"]);
            }
            ?> 
        </div>
    <?php } ?>
</div>

