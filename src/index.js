import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import http from "http";

import {
   CompanyRoute,
   StoreRoute,
   StaffRoute,
   UserRoute,
   AreaRoute,
   TableRoute,
   CustomerRoute,
   ProductRoute,
   BillRoute,
} from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
   res.send("Hello world");
});

// Routes
app.use("/api/company", CompanyRoute);
app.use("/api/store", StoreRoute);
app.use("/api/staff", StaffRoute);
app.use("/api/user", UserRoute);
app.use("/api/area", AreaRoute);
app.use("/api/table", TableRoute);
app.use("/api/customer", CustomerRoute);
app.use("/api/product", ProductRoute);
app.use("/api/bill", BillRoute);

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
