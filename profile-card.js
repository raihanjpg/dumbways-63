import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// setup view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "assets", "views"));

// static & form data
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

// dummy data
let projects = [];

// routes
app.get("/", (req, res) => res.render("form", { title: "Home" }));
app.get("/day6", (req, res) => res.render("form", { title: "Contact" }));
app.get("/add-project", (req, res) => res.render("aproject", { title: "My Project", projects }));

app.post("/add-project", (req, res) => {
  const { name, startDate, endDate, description } = req.body;
  projects.push({ id: projects.length + 1, name, startDate, endDate, description });
  res.redirect("/myproject");
});

app.get("/project/:id", (req, res) => {
  const project = projects.find((p) => p.id == req.params.id);
  res.render("profile", { title: "Detail Project", project });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
