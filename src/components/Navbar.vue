<template>
  <div>
    <div class="header py-4">
      <div class="container">
        <div class="d-flex">
          <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
            <span class="header-toggler-icon"></span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  mounted () {
    $('.nav li a').on('click', function () {
      $('.collapse').collapse('hide')
    })
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  methods: {
    submitSearch () {

    }
  }
}
</script>

<style scoped>

</style>
