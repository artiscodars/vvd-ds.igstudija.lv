<div class="accordion accordion-flush" id="accordion-<?php echo $page; ?>">

    <?php foreach ($accordions as $accordion_item) { ?> 
        <div class="accordion-item">
            <h2 class="accordion-header" id="<?php echo $accordion_item["section"]; ?>">
                <button 
                    class="accordion-button <?php echo $accordion_item["collapsed"]; ?>" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#id-<?php echo $accordion_item["section"]; ?>" 
                    aria-expanded="false" 
                    aria-controls="id-<?php echo $accordion_item["section"]; ?>"
                    >
                        <?php echo $accordion_item["title"]; ?>

                    <?php if (isset($accordion_item["comments"])) { ?>
                        <span class="comments"><i class="fa-solid fa-comment"></i><?php echo $accordion_item["comments"]; ?></span>
                    <?php } ?>
                    <?php if (isset($accordion_item["status"]) == "ok") { ?>
                        <span class="status"><i class="fa-solid fa-circle-check"></i></span>
                    <?php } ?>

                </button>
            </h2>
            <div 
                id="id-<?php echo $accordion_item["section"]; ?>" 
                class="accordion-collapse collapse <?php echo $accordion_item["show"]; ?>" 
                aria-labelledby="heading-<?php echo $accordion_item["section"]; ?>" 
                <?php /* data-bs-parent="#accordion-<?php echo $accordion; ?>" */ ?>
                >
                <div class="accordion-body">


                    <?php
                    if (isset($accordion_item["content_block"])) {
                        $content_blocks = $accordion_item["content_block"];

                        ?>
                       
                        <?php
                        foreach ($content_blocks as $content_block) {
                            if ($content_block['type'] == 'table'){
                                table($content_block['data']);
                            }
                            if ($content_block['type'] == 'form'){
                               form($page,'accordion',$accordion_item["section"]);
                            }
                            
                        }
                        ?>

                    <?php } else { ?>



                        <?php
                        if (file_exists('components/accordion-parts/' . $accordion_item["section"] . '.php')) {
                            include('components/accordion-parts/' . $accordion_item["section"] . '.php');
                        }
                        ?>

                    <?php } ?>



                    <?php if (isset($accordion_item["comments"])) { 
                        
                        include('templates/comments.php');
                        
                      } ?>

                    <?php if (isset($accordion_item["status"])) { ?>
                        <hr>
                        <div class="row justify-content-md-center">
                            <div class="col-auto">
                                <?php form_field('checkbox', array('label' => 'Apstiprinu', 'id' => 'apstiprinu', 'checked' => 'checked')); ?>
                            </div>

                        </div>

                    <?php } ?>

                </div>
            </div>
        </div>
    <?php } ?>

</div>