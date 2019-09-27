<template>
  <div>
    <el-collapse>
      <el-collapse-item>
        <ul>
          <li>列表一</li>
          <li>列表二</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import elCollapse from "@/components/el-collapse.vue";
import elCollapseItem from "@/components/el-collapse-item.vue";
export default {
  components: {
    elCollapse,
    elCollapseItem
  }
};
</script>

<style>
</style>