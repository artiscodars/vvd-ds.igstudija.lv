<?php 
$t = NULL;
$t=isset($_GET['t']);


if ($t!=1){?>



<div id="<?php echo $table_id; ?>-table"></div>

 <?php $jstime = date("YmdHi", filemtime($_SERVER['DOCUMENT_ROOT'] . "/table-data/".$table_id.".js")); ?>
     <script src="table-data/<?php echo $table_id; ?>.js?v=<?php echo $jstime; ?>"></script>


<?php } else {?>
     
     
     <table class="table table-hover mb-3 w-100" id="<?php echo $table_id; ?>-table">
    <thead>
        <tr>
            <?php foreach ($table_cols as $table_col) { ?>
                <th scope="col"><?php echo $table_col['title']; ?></th>
            <?php } ?>
        </tr>
    </thead>
    <?php
    if ($table_type == 'form') {
        $table_data = file_get_contents('table-data/' . $table_id . '.json');
        $data_items = json_decode($table_data, JSON_NUMERIC_CHECK);
        $rows = $data_items['data'];
        ?>



        <?php foreach ($rows as $rowkey => $row) { ?>
            <tr>

                <?php foreach ($table_cols as $table_col) { ?>
                    <td>
                        <?php if (array_key_exists('type', $table_col)) { ?>

                            <?php
                            if (array_key_exists('placeholder', $table_col['field_elements'])) {
                                $placeholder = $table_col['field_elements']['placeholder'];
                            } else {
                                $placeholder = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('id', $rows)) {
                                $id = $row['id'];
                            } else {
                                $id = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('options', $table_col)) {
                                $options = array($row['id'] => $table_col['options']);
                            } else {
                                $options = NULL;
                            }
                            ?>

                        <?php form_field($table_col['type'], array("name" => $table_col['field_elements']['name'], "placeholder" => $placeholder, "id" => $row['id'], "value" => $row[$table_col['slug']]), $options); ?>

                <?php } else { ?>
                    <?php echo $row[$table_col['slug']]; ?>
                <?php } ?>
                    </td>
        <?php } ?>

            </tr>
    <?php } ?>

<?php } ?>
</table> 
     
<?php } ?>
