import { Person } from "../api/person";

export const sendBirthToWorker = (age: Date) => {
  const controller = navigator.serviceWorker.controller;
  if (controller) {
    controller.postMessage({
      type: "BIRTH",
      age
    });
  }
};

export const sendDatabaseToWorker = (database: Person[]) => {
  const controller = navigator.serviceWorker.controller;
  if (controller) {
    controller.postMessage({
      type: "DATABASE",
      database
    });
  }
};
