import express from "express";
import videosRoutes from "./src/videos/routes.js";
import categoriesRoutes from "./src/categories/routes.js";
import usersRoutes from "./src/users/routes.js";
import onlinesRoutes from "./src/onlines/routes.js";
import favoritesRoutes from "./src/favorites/routes.js";
import authRoutes from "./src/auth/routes.js";
import cookieParser from "cookie-parser";
import tokenRoutes from "./src/token/routes.js";
import cors from "cors";

const app = express();
const port = 3002;
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ credentials: true, origin: true }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Soloud Api");
});

app.use("/soloud/api/v1/videos", videosRoutes);
app.use("/soloud/api/v1/categories", categoriesRoutes);
app.use("/soloud/api/v1/users", usersRoutes);
app.use("/soloud/api/v1/auth", authRoutes);
app.use("/soloud/api/v1/token", tokenRoutes);
app.use("/soloud/api/v1/onlines", onlinesRoutes);
app.use("/soloud/api/v1/favorites", favoritesRoutes);

app.listen(port, () => console.log(`app listening on ${port}`));
