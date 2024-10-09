<script setup>
const props = defineProps({
  route: '',
})

const tabs = [
  { icon: 'i-material-symbols-light-home', label: '首页', url: '/' },
  { icon: 'i-ph-user-circle', label: '我的', url: '/user' },
]

function active(path) {
  return props.route === path
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 flex bg-white shadow-md border-t text-gray-600">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="tab"
      :class="active(item.url) ? 'active' : ''"
      @click="$router.replace(item.url)"
    >
      <i class="text-2xl mb-1" :class="[item.icon]" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style>
.tab {
    @apply flex-1 flex flex-col items-center justify-center py-2 text-sm cursor-pointer transition-colors duration-200;
}
.active {
    @apply text-blue-500;
}
</style>
