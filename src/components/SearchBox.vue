<template>
  <div class="form-group">
    <div class="has-clearable">
      <button v-show="!!query" type="button" class="close show" @click="query = ''">
        <span>
          <font-awesome-icon icon="times-circle" />
        </span>
      </button>
      <input v-model="query" type="text" class="form-control form-control-lg" id="search-box" placeholder="Search for ..." />
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['change'])

import { watch } from 'vue'
import { useDebouncedRef } from '../hooks/useDebouncedRef'

const query = useDebouncedRef('', 500)

watch(
  () => query.value,
  to => {
    emits('change', to)
  }
)
</script>

<style scoped>
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #888c9b;
  text-shadow: none;
  opacity: 0.5;
}

.close:hover {
  color: #888c9b;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):focus,
.close:not(:disabled):not(.disabled):hover {
  opacity: 0.75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}

.has-clearable {
  position: relative;
}

.has-clearable.input-group > .close.show ~ .input-group-append {
  margin-right: 1.875rem;
}

.has-clearable .form-control {
  padding-right: 30px;
}

.has-clearable .close {
  display: none;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1;
  color: #888c9b;
  z-index: 4;
  transform: translate3d(0, -50%, 0);
}

.has-clearable .close:hover {
  color: #363642;
}

.has-clearable .close.show {
  display: block;
}
</style>
