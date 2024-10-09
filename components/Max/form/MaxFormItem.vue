<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {{ label }}
    </label>
    <div class="mt-1">
      <slot />
    </div>
  </div>
</template>
