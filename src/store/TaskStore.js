import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "Munna",
    tasks: [
      {
        id: 1,
        title: "buy milk shade",
        isFav: false,
      },
    ],
  }),
});
