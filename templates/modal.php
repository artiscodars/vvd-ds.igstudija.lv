<!-- Modal -->
<div id="<?php echo $modal_id; ?>" class="modal fade" tabindex="-1" aria-labelledby="<?php echo $modal_title; ?>" aria-hidden="true">
   <div class="modal-dialog <?php echo $modal_size; ?>">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><?php echo $modal_title; ?></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <?php include('components/modals/'.$modal_id.'.php');?>
      </div>
      
    </div>
  </div>
</div>

