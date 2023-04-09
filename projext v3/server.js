const mysql = require("mysql");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "Aditya",
  database: "temp",
});

app.use("/static", express.static("static")); // for serving static files
app.use(express.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const static_path = path.join(__dirname, "/views");
app.use(express.static(static_path));
app.set("views", path.join(__dirname, "/views"));

app.get("/index", (req, res) => {
  res.status(200).render("index.html");
});
app.get("/StaffRegForm", (req, res) => {
  res.status(200).render("1)StaffRegForm.html");
});
app.get("/PropRegForm", (req, res) => {
  res.status(200).render("3)PropRegForm.html");
});
app.get("/ClientReg", (req, res) => {
  res.status(200).render("4)ClientReg.html");
});
app.get("/LeaseForm", (req, res) => {
  res.status(200).render("7)LeaseForm.html");
});

app.get("/StaffListing", (req, res) => {
  res.status(200).render("2)StaffListing.html");
  console.log(res);
});
app.get("/PropListing", (req, res) => {
  res.status(200).render("5)PropListing.html");
  console.log(res);
});
app.get("/PropViewReport", (req, res) => {
  res.status(200).render("6)PropViewReport.html");
  console.log(res);
});

app.post("/StaffRegForm", (req, res) => {
  const {
    name,
    staff_number,
    sex,
    position,
    salary,
    branch_number,
    branch_address,
    telephone,
    supervisor_name,
    manager_start_date,
    manager_bonus,
  } = req.body;

  // Insert into database
  let sqlstaff = `INSERT INTO staff (name, staff_number, sex, position, salary, branch_number, branch_address, telephone, supervisor_name, manager_start_date, manager_bonus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.getConnection(function (err, con) {
    if (err) throw err;
    con.query(
      sqlstaff,
      [
        name,
        staff_number,
        sex,
        position,
        salary,
        branch_number,
        branch_address,
        telephone,
        supervisor_name,
        manager_start_date,
        manager_bonus,
      ],
      function (err, result) {
        if (err) {
          throw err;
        }
        con.release();
        res.redirect("/index");
      }
    );
  });
});

//
app.post("/PropRegForm", (req, res) => {
  const {
    property_number,
    type,
    rooms,
    rent,
    address,
    comment,
    owner_name,
    owner_number,
    owner_address,
    owner_tel,
    business_type,
    contact_name,
    staff_managed,
    branch_registered,
  } = req.body;

  let sqlproperty = `INSERT INTO property(property_number, type, rooms, rent, address,comment, owner_name, owner_number, owner_address, owner_tel, business_type, contact_name, staff_managed, branch_registered) 
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.getConnection(function (err, con) {
    if (err) throw err;
    con.query(
      sqlproperty,
      [
        property_number,
        type,
        rooms,
        rent,
        address,
        comment,
        owner_name,
        owner_number,
        owner_address,
        owner_tel,
        business_type,
        contact_name,
        staff_managed,
        branch_registered,
      ],
      function (err, result) {
        if (err) {
          throw err;
        }
        con.release();
        res.redirect("/index");
      }
    );
  });
});

app.post("/ClientReg", (req, res) => {
  const {
    client_name,
    client_number,
    property_type,
    max_rent,
    branch_number,
    branch_address,
    registered_by,
    registration_date,
  } = req.body;
  let sqlclients = `INSERT INTO clients (client_name, client_number, property_type, max_rent, branch_number, branch_address, registered_by, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.getConnection(function (err, con) {
    if (err) throw err;
    con.query(
      sqlclients,
      [
        client_name,
        client_number,
        property_type,
        max_rent,
        branch_number,
        branch_address,
        registered_by,
        registration_date,
      ],
      function (err, result) {
        if (err) {
          throw err;
        }
        con.release();
        res.redirect("/index");
      }
    );
  });
});

app.post("/LeaseForm", (req, res) => {
  const {
    client_number,
    client_name,
    property_number,
    property_address,
    rent_start,
    rent_finish,
    duration,
    monthly_rent,
    payment_method,
    deposit_paid,
    deposit_amount,
  } = req.body;

  let sqlleases = `INSERT INTO leases (client_number, client_name, property_number, property_address, rent_start, rent_finish, duration, monthly_rent, payment_method, deposit_paid, deposit_amount)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.getConnection(function (err, con) {
    if (err) throw err;
    con.query(
      sqlleases,
      [
        client_number,
        client_name,
        property_number,
        property_address,
        rent_start,
        rent_finish,
        duration,
        monthly_rent,
        payment_method,
        deposit_paid,
        deposit_amount,
      ],
      function (err, result) {
        if (err) {
          throw err;
        }
        con.release();
        res.redirect("/index");
      }
    );
  });
});
app.listen(port);

// app.post("/StaffListing", (req, res) => {
//   const { branch_number, telephone, branch_address } = req.body;

//   let sqlstaff = `SELECT * FROM staff WHERE branch_number = ?`;
//   pool.getConnection(function (err, con) {
//     if (err) throw err;
//     con.query(sqlstaff, [branch_number], function (err, result) {
//       if (err) {
//         throw err;
//       }
//       con.release();
//       res.redirect("/index");
//     });
//   });
// });
