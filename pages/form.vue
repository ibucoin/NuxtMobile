<script setup>
const checked = ref(false)
const show = ref(false)
</script>

<template>
  <div class="p-4">
    <max-form>
      <max-form-item label="Email">
        <max-input disabled placeholder="Email" />
      </max-form-item>

      <max-form-item label="Password">
        <max-input placeholder="Password" />
      </max-form-item>

      <max-checkbox v-model="checked" @change="console.log(checked)" />
    </max-form>

    <div :class="checked && show === true ? 'bg-primary/50' : ''" />
  </div>
</template>
