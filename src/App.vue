<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>{{ TaskStore.name }}</h1>
    </header>

    <div class="task-list">
      <div v-for="task in TaskStore.tasks" :key="task">
        <p>{{ task }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./store/TaskStore";
export default {
  setup() {
    const TaskStore = useTaskStore();
    return { TaskStore };
  },
};
</script>