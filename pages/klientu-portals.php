
<div class="alert alert-warning d-flex align-items-center" role="alert">

    <span class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2">
        <i class="fa-solid fa-triangle-exclamation"></i>
    </span>

    <div>
        Drīz beidzas Atļaujas Nr.7656484 termiņš
    </div>
</div>

<div class="row">
    <div class="col mb-3">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-file-signature"></i> Ziņojumi</h5>
            <div class="card-body">

                <?php table('zinojumi', '', 1); ?>

            </div>
        </div>

    </div>
</div>

<div class="row">
    <div class="col-4 mb-3">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-file-signature"></i> Iesniegumi</h5>
            <div class="card-body">

                <?php table('sakums-iesniegumi-co', '', 1); ?>

            </div>
        </div>

    </div>

    <div class="col-4 mb-3">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-award"></i> Manas atļaujas</h5>
            <div class="card-body">

                <?php table('sakums-atlaujas-co', '', 1); ?>
            </div>
        </div>

    </div>

    <div class="col-4 mb-3">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-list-check"></i> Pārskati</h5>
            <div class="card-body">
                <?php table('sakums-parskati-co', '', 1); ?>
            </div>
        </div>

    </div>

</div>