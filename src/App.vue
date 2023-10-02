<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>{{ TaskStore.name }}</h1>
    </header>

    <div class="new-task-form">
      <task-form></task-form>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <div class="loading" v-if="isLoading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have Total ({{ totalCount }}) to do</p>
      <div v-for="task in tasks" :key="task">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Favs Tasks ({{ favCount }})</p>
      <div v-for="task in favs" :key="task">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="" style="text-align: center">
      <button @click="TaskStore.$reset">Reset</button>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./store/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const TaskStore = useTaskStore();
    const { tasks, isLoading, favs, totalCount, favCount } =
      storeToRefs(TaskStore);

    TaskStore.getTasks();

    const filter = ref("all");
    return { TaskStore, filter, tasks, isLoading, favs, totalCount, favCount };
  },
};
</script>