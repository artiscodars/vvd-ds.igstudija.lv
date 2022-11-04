<?php
$json = file_get_contents('settings/' . $table_id . '.json');
$items = json_decode($json, JSON_NUMERIC_CHECK);

//echo "<pre>";
//print_r($items);
//echo "</pre>";

$table_cols = $items["columns"];
$table_nested_cols = $items["nested-columns"];
$table_defs = $items["tabledef"];

$nested_table_defs = $items["nested-tabledef"];

$table_data = $items["data"];
?>

<?php if ($table_defs['form']) { ?>
    <div class="pt-3 pb-2">
        <?php form('atkritumu-savaksana', 'table'); ?>
    </div>
<?php } ?>

<table class="<?php echo $table_defs['class']; ?>">

    <tr>

        <?php if ($table_defs["collapse"] == true) { ?>
            <th width="60" class="<?php echo $col['class']; ?>">

            </th>
        <?php } ?>


        <?php foreach ($table_cols as $col) { ?>
            <th width="<?php echo $col['width']; ?>" class="<?php echo $col['class']; ?>">
                <?php echo $col['title']; ?>
            </th>
        <?php } ?>
    </tr>
    <?php
    $c = 0;
    foreach ($table_data as $row) {
        ?>

        <tr>

    <?php if ($table_defs["collapse"] == true) { ?>
                <td class="<?php echo $col['class']; ?>">
                    <button class="position-relative btn btn-outline-primary btn-sm" data-bs-toggle="collapse" data-bs-target="#nested-row-<?php echo $c; ?>" aria-expanded="false">
                        <i class="fa-sharp fa-solid fa-caret-right"></i><?php if (!empty($row['nested-data'])) { ?><span class="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-primary"><?php echo count($row['nested-data']); ?></span><?php } ?>
                    </button>
                </td>
            <?php } ?>

                <?php foreach ($table_cols as $col) { ?>
                <td class="<?php echo $col['class']; ?>">
                    <?php
                    if (isset($row[$col['field']])) {
                        $value = $row[$col['field']];

                        if (is_array($value)) {



                            foreach ($value as $v) {

                                form_field($v['type'], $v['field_elements']);
                            }
                        } else {
                            echo $row[$col['field']];
                        }
                    }
                    ?>
                </td>
    <?php } ?>

        </tr>

        <?php if (array_key_exists('nested-data', $row)) { ?>

            <tr id="nested-row-<?php echo $c; ?>" class="collapse">
                <td colspan="<?php echo count($table_cols); ?>">


        <?php if ($nested_table_defs['form']) { ?>
                        <div class="">
                        <?php form('atkritumu-savaksana', 'nested-table'); ?>
                        </div>
                        <?php } ?>

                    <?php if (!empty($row['nested-data'])) { ?>

                        <table class="<?php echo $nested_table_defs['class']; ?>">

                            <tr>
            <?php foreach ($table_nested_cols as $ncol) { ?>
                                    <th width="<?php echo $ncol['width']; ?>" class="<?php echo $ncol['class']; ?>">
                                    <?php echo $ncol['title']; ?>
                                    </th>
                                    <?php } ?>
                            </tr>


            <?php foreach ($row['nested-data'] as $nrow) { ?>

                                <tr>

                <?php foreach ($table_nested_cols as $ncol) { ?>
                                        <td class="<?php echo $ncol['class']; ?>">
                                        <?php
                                        if (isset($nrow[$ncol['field']])) {
                                            $nvalue = $nrow[$ncol['field']];
                                            if (is_array($nvalue)) {

                                                foreach ($nvalue as $nv) {

                                                    form_field($nv['type'], $nv['field_elements']);
                                                }
                                            } else {
                                                echo $nrow[$ncol['field']];
                                            }
                                        }
                                        ?>
                                        </td>
                                        <?php } ?>

                                </tr>


            <?php } ?>





                        </table>

        <?php } ?>


                </td>
            </tr>


    <?php } ?>


    <?php $c++;
} ?>
</table>