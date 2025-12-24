import fs from "fs/promises";

export async function readTasks() {
  const data = await fs.readFile("data/tasks.json", "utf-8");
  return JSON.parse(data);
}

export async function writeTasks(tasks) {
  await fs.writeFile("data/tasks.json", JSON.stringify(tasks, null, 2));
}
