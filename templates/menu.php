
<div class="menu">


    <div class="logo">
        <a href="/">
            <img src="images/logo.png">
        </a>

    </div>

    <ul class="mainmenu">

        <?php foreach ($menuitems as $item) { ?>

            <li>
                <a href="<?php echo $item['link']; ?>" >
                    <i class="<?php echo $item['icon']; ?>"></i>
                    <?php echo $item['name']; ?>
                </a>

                <?php if (array_key_exists('submenu', $item)) { ?>
                    <ul class='submenu'>
                        <?php foreach ($item['submenu'] as $submenu_item) { ?>
                            <li>
                                <a href="<?php echo $submenu_item['link']; ?>" <?php if(isset($submenu_item['target'])) { echo 'target="'.$submenu_item['target'].'"';} ?>>
                                    <?php echo $submenu_item['name']; ?>
                                </a>
                            </li>
                        <?php } ?>
                    </ul>
                <?php } ?>


            </li>

        <?php } ?>
    </ul>


    <div class="collapse-menu">
        <i class="fa-solid fa-circle-chevron-left"></i> Sakļaut</div>  

</div>

