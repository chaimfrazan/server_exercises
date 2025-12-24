import express from "express";
import { readProducts, writeProducts } from "./utils/server.js";
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const data = await readProducts();
    res.status(200).json({ status: "sucsses", data: data });
  } catch (error) {
    res.status(500).json({ status: "server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const data = await readProducts();
    res.status(200).json({ status: "sucsses", data: data });
  } catch (error) {
    res.status(500).json({ status: "server error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const data = await readProducts();
      const { body } = req;
      const nextIndex = data[data.length -1].id + 1
      data.push({id: nextIndex, ... body });
    await writeProducts(data);
    res.status(200).json({ status: "sucssefoly", data: data });
  } catch (error) {
    res.status(500).json({ status: "server error" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const data = await readProducts();
    const { body } = req;
    const { id } = req.params;
    for (let index = 0; index < data.length; index++) {
      if (data[index].id == id) {
        data[index].name = body.name;
        data[index].price = body.price;
        data[index].category = body.category;
        data[index].stock = body.stock;
        res.status(200).json({ status: "sucssefoly", data: data });
        writeProducts(data);
      }
    }
    res.status(404).json({ status: "id not existe" });
  } catch (error) {
    res.status(500).json({ status: "server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const data = await readProducts();
    const { id } = req.params;
    for (let index = 0; index < data.length; index++) {
      if (data[index].id == id) {
        const filterData = data.filter((data) => data.id != id);
        res.status(200).json({ status: "sucssefoly", data: data });
        writeProducts(filterData);
      }
    }
    res.status(404).json({ status: "id not found" });
  } catch (error) {
    res.status(500).json({ status: "server error" });
  }
});

app.get("/products/search", async (req, res) => {
  try {
    const data = await readProducts();
    const { category } = req.query;
    const filterData = data.filter((f) => f.category === category);
    if (!filterData) {
      res.status(404).json({ status: " data not found" });
    }
    res.status(200).json({ status: "sucssefoly", data: filterData });
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

