<script setup>
import { ref } from 'vue'

const checkedNames = ref([])
</script>

<template>
  <div>Checked names: {{ checkedNames }}</div>
<div class="contentCheck">
  <input class="checkSquare" type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
 
  <input class="checkSquare" type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
 
  <input class="checkSquare" type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
</div>

<div class="contentCheck">
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
</div>
</template>

<style  lang="scss" scoped>
@import '../../assets/variables.scss';
.contentCheck {
  color: $primary-color;
  font-size: 20px;
}

.checkSquare {
  margin-right: 10px;
  margin-left: 10px;
  color: blueviolet;
}
.checkbox {
  color: blueviolet;
}

</style>
