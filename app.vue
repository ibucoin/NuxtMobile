<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <div>
    <RouterView />

    {{ $t('hello') }}
  </div>
</template>
