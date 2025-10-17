import express from "express";
import path from "path";
import { Pool } from 'pg';
import multer from "multer";


const db = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'b63-personal-web',
  max: 20
});


const app = express();
const port = 3000;


app.set("view engine", "hbs");
app.set("views", path.join(process.cwd(), "assets", "views"));

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/uploads')
  },
  filename: function (req, file, cb) {
    
    cb(null, file.fieldname + Date.now())
  }
});

const upload = multer({ storage: storage })


app.get("/contact", contact);
app.post("/contact", handleContact);
app.get("/", home);
app.get("/login", login)
app.get("/add-project", addProject)
app.post("/add-project", upload.single('project') , handleProject)
app.get("/add-experience", addExperience)
app.post("/add-experience", handleExperience)

app.get("/card/:id", cardDetail)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

function addExperience(req, res){
  res.render("add-experience")
}

function addProject(req, res) {
  res.render("add-project")
}

function login(req, res) {
  res.render("form")
}

async function home(req, res) {
   const queryExperience ='SELECT * FROM experiences'
   const resultExperience = await db.query(queryExperience)
  
  const query ='SELECT * FROM project' 
 const result = await db.query(query)

 console.log(result.rows);
 res.render('index',{projects:result.rows, experiences:resultExperience.rows})
}

function contact(req, res) {
  const phoneNumber = 81281281211;
  res.render("contact", { phoneNumber });
}

let accounts = [];

async function handleExperience(req, res) {
  let { name, company_name, description, technologies, date } = req.body
  console.log(name, company_name, description, technologies, date);

  const query = `
  INSERT INTO public."experiences" (name, company_name, description, technologies, date)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
`;

const values = [name, company_name, description, technologies, date];

try{
const result = await db.query(query, values);
    console.log('Insert successful:', result.rows[0]);
    console.log(result.rows);
    res.redirect("/")
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

async function handleProject(req, res) {
  let { name, startDate, endDate, description, technologies, } = req.body
  console.log(name, startDate, endDate, description, technologies);

  const query = `
  INSERT INTO public."project" (name, start_date, end_date, description, technologies) 
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
`;

  const values = [name, startDate, endDate, description, technologies];
  
  try {
    
    const result = await db.query(query, values);
    console.log('Insert successful:', result.rows[0]);
    console.log(result.rows);
    res.redirect("/")
  } catch (error) {
    console.error('Error executing query:', error);
  }

}

async function handleContact(req, res) {
  // let name = req.body.name;
  // let password = req.body.password;
  let { email, password } = req.body

  console.log(email, password);


  let account = {
    email,
    password,
  };

  const query = `SELECT * FROM login`
  const result = await db.query(query);
  console.log(result.rows);




  // accounts.push(account);
  // console.log(accounts);


}


function cardDetail(req, res) {
  console.log(req.params.id);

}

