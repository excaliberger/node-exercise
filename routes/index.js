import express from "express";
import userRouter from "./users.route"
import employeeRouter from "./employees.routes";
import productRouter from "./products.routes";
// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);
router.use("/employees", employeeRouter);
router.use("/products", productRouter);

export default router;
