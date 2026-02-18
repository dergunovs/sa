<template>
  <div>
    <h1>Список дел</h1>
    <p>Всего дел: {{ tasks.length }}</p>
    <div class="tasks">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TaskItem from "./components/TaskItem.vue";

const tasks = ref([
  { 
    id: "1", 
    title: "Купить продукты", 
    text: "Молоко, хлеб, яйца, овощи для ужина" 
  },
  { 
    id: "2", 
    title: "Записаться к врачу", 
    text: "Плановый осмотр у терапевта на следующей неделе" 
  },
  { 
    id: "3", 
    title: "Подготовить презентацию", 
    text: "Создать слайды для встречи с клиентом в пятницу" 
  },
  { 
    id: "4", 
    title: "Позвонить родителям", 
    text: "Узнать как дела и договориться о встрече" 
  },
  { 
    id: "5", 
    title: "Записаться на курсы", 
    text: "Изучить Vue.js - записаться на онлайн курс" 
  }
]);
</script>

<style>
.tasks {
  display: flex;
  gap: 16px;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

p {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
</style>
