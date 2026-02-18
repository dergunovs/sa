<template>
  <div class="task-item">
    <header>
      <div><b>{{ props.task.title }}</b></div>
    </header>
    <main>
      <div>{{ props.task.text }}</div>
    </main>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  task: { id: string; title: string; text: string };
}>();
</script>

<style>
.task-item {
  display: flex;
  gap: 8px;
  flex-direction: column;
  border: 1px solid #555;
  padding: 16px;
  border-radius: 8px;
  background-color: #2a2a2a;
  margin-bottom: 12px;
  text-align: center;
}

.task-item header {
  font-size: 1.2em;
  color: white;
}

.task-item main {
  color: white;
  line-height: 1.4;
}
</style>
