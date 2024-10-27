<template>
  <div v-if="data.length">
    <h5 class="mb-4" v-html="resultMsg"></h5>
    <div v-for="item in data" class="d-flex flex-column mb-3 pb-3 border-bottom" :key="item.id">
      <h3 v-html="getHighlightedText(item.title)"></h3>
      <div class="col-12 my-2">
        <i>{{ useFormattedDate(item.date) }}</i>
      </div>
      <div v-html="getHighlightedText(item.description)"></div>
    </div>
  </div>
  <div v-else>No result found</div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useFormattedDate } from '../hooks/useFormattedDate'
import { TListItem } from '../meta/type/list-item-type'
import { mockData } from '../meta/data/mock'
import { sanitizeHTML } from '../meta/helper/shared'

const props = defineProps<{ query: string }>()

const { query } = toRefs(props)

const resultMsg = computed((): string => (data.value.length == 1 ? `<b>${data.value.length} post</b> was found.` : `<b>${data.value.length} posts</b> were found.`))

const data = computed((): TListItem[] =>
  query.value ? mockData.filter(item => item.title.toLowerCase().includes(query.value) || item.description.toLowerCase().includes(query.value.toLowerCase())) : mockData
)

const getHighlightedText = (item: any): string => {
  const q = sanitizeHTML(query.value)
  const text = sanitizeHTML(item)
  return q ? text.replace(new RegExp(`${q}`, 'gi'), `<span class="bg-warning">${q}</span>`) : text
}
</script>
