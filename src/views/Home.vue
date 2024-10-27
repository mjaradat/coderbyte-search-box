<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-8">
        <h1 class="mt-4 mb-5">Search</h1>
        <search-box class="mb-5" @change="value => (query = value)" />
        <list-items :query="query" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const query = ref('')

const SearchBox = defineAsyncComponent(() => import('../components/SearchBox.vue'))
const ListItems = defineAsyncComponent(() => import('../components/ListItems.vue'))
</script>
