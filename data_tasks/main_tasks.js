import express from "express";
import { readTasks, writeTasks } from "./utils/server.js";

const app = express();
const PORT = 8000;

app.use(express.json());

// app.get("/tasks", async (req, res) => {
//   try {
//     const data = await readTasks();
//     console.log(data);

//     res.status(200).json({ status: "sucssefoly", data: data });
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });

// app.get("/tasks/:id", async (req, res) => {
//   try {
//     const data = await readTasks();
//     const { id } = req.params;
//     for (let index = 0; index < data.length; index++) {
//       if (data[index].id == id) {
//         res.status(200).json({ status: "sucssefoly", data: data[index] });
//       }
//     }

//     res.status(404).json({ status: "id not found" });
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });

// app.get("/tasks/filter", async (req, res) => {
//   try {
//     const data = await readTasks();

//     const { completed } = req.query;

//     const filterData = data.filter((f) => String(f.completed) === completed);

//     if (!filterData) {
//       res.status(404).json({ status: " data not found" });
//     }
//     res.status(200).json({ status: "sucssefoly", data: filterData });
//   } catch (error) {}
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// app.get("/tasks/filter", async (req, res) => {
//   try {
//     const data = await readTasks();

//     const { priority } = req.query;

//     const filterData = data.filter((f) => String(f.priority) === priority);

//     if (!filterData) {
//       res.status(404).json({ status: " data not found" });
//     }
//     res.status(200).json({ status: "sucssefoly", data: filterData });
//   } catch (error) {}
// });

// app.post("/tasks", async (req, res) => {
//   try {
//     const data = await readTasks();
//     const { body } = req;
//     if (data[data.length - 1].id <= body.id) {
//       res.status(404).json({ status: "id out of range" });
//     }
//     data.push(body);
//     writeTasks(data);
//     res.status(200).json({ status: "sucssefoly", data: filterData });
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });

// app.put("/tasks/:id", async (req, res) => {
//   try {
//     const data = await readTasks();
//     const { body } = req;
//     const { id } = req.params;
//     for (let index = 0; index < data.length; index++) {
//       if (data[index].id == id) {
//         data[index].completed = body.completed;
//         data[index].title = body.title;
//         data[index].priority = body.priority;
//         res.status(200).json({ status: "sucssefoly", data: data });
//         writeTasks(data);
//       }
//       res.status(404).json({ status: "id out of range" });
//     }
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });

// app.patch("/tasks/:id/toggle", async (req, res) => {
//   try {
//     const data = await readTasks();
//     const { body } = req;
//     const { id } = req.params;
//     for (let index = 0; index < data.length; index++) {
//       if (data[index].id == id) {
//         data[index].completed = body.completed;
//         res.status(200).json({ status: "sucssefoly", data: data });
//         writeTasks(data);
//       }
//       res.status(404).json({ status: "id out of range" });
//     }
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });

// app.delete("/tasks/:id", async (req, res) => {
//   try {
//     const data = await readTasks();
//     const { id } = req.params;
//     for (let index = 0; index < data.length; index++) {
//       if (data[index].id == id) {
//         const filterData = data.filter((data) => data.id != id);
//         res.status(200).json({ status: "sucssefoly", data: data });
//         writeTasks(filterData);
//       }
//     }
//     res.status(404).json({ status: "id not found" });
//   } catch (error) {
//     res.status(500).json({ status: "server error" });
//   }
// });
