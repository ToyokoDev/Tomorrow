import express from "express";
import type { Request, Response } from "express";
import taskRoutes from "./routes/task.route.js";
const app = express();
const PORT = 3000;

// Middleware đọc JSON
app.use(express.json());
app.use("/api/task", taskRoutes);
// Định nghĩa route với type rõ ràng cho req, res
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World từ Express Server với TypeScript!");
});

// Lắng nghe cổng
app.listen(PORT, (): void => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
