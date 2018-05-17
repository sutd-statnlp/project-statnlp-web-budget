<template>
  <div class="modal fade" id="mDescriptionDialog" tabindex="-1" role="dialog" aria-labelledby="mDescriptionDialogLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mDescriptionDialogLabel">Usage Description</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          {{description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionDialog',
  props: {
    description: {
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
