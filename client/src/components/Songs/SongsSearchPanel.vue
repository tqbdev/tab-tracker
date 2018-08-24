<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: null
    }
  },
  watch: {
    search: _.debounce(async function (val) {
      const route = {
        name: 'songs'
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }

      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (val) {
        this.search = val
      }
    }
  }
}
</script>

<style scoped>

</style>
