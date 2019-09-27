<template>
  <div>
    评价
    <button @click="change">点击</button>
    <Dialog v-if="show">
      <template v-slot:footer>
        <div class="dialog-footer">
          <span @click="sure">确定</span>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/dialog.vue";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    Dialog
  },
  methods: {
    change() {
      console.log(9090);
      this.show = true;
    },
    sure(){
      this.show = false;
    }
  }
};
</script>

<style>
</style>