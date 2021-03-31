<template>
  <q-card >
      <div class="my-card" style="position:relative;" @mouseenter="hover=true" @mouseleave="hover=false">
        <q-card-section horizontal>
          <q-img
            class="col-5"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-card-section>
            afafafaf<br/>afafafafefaefeafefeaf
          </q-card-section>
        </q-card-section>
        <div v-show="hover==true" class="my-card" style="position:absolute;left:0;top:0;background:rgba(250, 250, 0, 0.8)">
          eeeeeegggggggsfafjladjfladjfaljflafaj
        </div>
      </div>
    </q-card>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 150px

</style>
