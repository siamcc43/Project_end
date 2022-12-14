var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "Fullstack-Login";
const mysql = require("mysql2");
app.use(cors());
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "project_end",

});

app.use(cors());

app.use(express.json());
app.post("/register", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO  d4_users (email,password,status_users,title_name,id_population,firstname,lastname,major,faculty,phonenumber) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        req.body.email,
        hash,
        req.body.status_users,
        req.body.title_name,
        req.body.id_population,
        req.body.firstname,
        req.body.lastname,
        req.body.major,
        req.body.faculty,
        req.body.phonenumber,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" });
      }
    );
  });
});
app.post("/registerManager", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO  d3_manager (email,password,title_name,firstname,lastname,phonenumber,job_position,status) VALUES (?,?,?,?,?,?,?,?)",
      [
        req.body.email,
        hash,
        req.body.title_name,
        req.body.firstname,
        req.body.lastname,
        req.body.phonenumber,
        req.body.job_position,
        req.body.status
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" ,message:"เพิ่มข้อมูลสำเร็จ" });
      }
    );
  });
});
app.post("/registerStaffcom", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO  d2_staff_com (email,password,title_name,firstname,lastname,phonenumber,status) VALUES (?,?,?,?,?,?,?)",
      [
        req.body.email,
        hash,
        req.body.title_name,
        req.body.firstname,
        req.body.lastname,
        req.body.phonenumber,
        req.body.status,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", message: "เพิ่มเจ้าหน้าที่สำเร็จ" });
      }
    );
  });
});
app.post("/registerStafftech", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO  d1_staff_tech (email,password,title_name,firstname,lastname,phonenumber,status) VALUES (?,?,?,?,?,?,?)",
      [
        req.body.email,
        hash,
        req.body.title_name,
        req.body.firstname,
        req.body.lastname,
        req.body.phonenumber,
        req.body.status,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", message: "เพิ่มเจ้าหน้าที่สำเร็จ" });
      }
    );
  });
});
app.post("/registerAdmin", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "INSERT INTO  d12_admin (email,password,firstname,lastname,phonenumber) VALUES (?,?,?,?,?)",
      [req.body.email, hash, req.body.firstname, req.body.lastname,req.body.phonenumber],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" ,message: "เพิ่มข้อมมูลสำเร็จ"});
      }
    );
  });
});
app.post("/requestmail", jsonParser, function (req, res, next) { 
    
    connection.execute(  
      "INSERT INTO  d7_passmail_lru (id_card,major,faculty,study_group,name_passmail,new_passmail) VALUES (?,?,?,?,?,?)",
      [ req.body.id_card, req.body.major, req.body.faculty,req.body.study_group,req.body.name_passmail,req.body.new_passmail],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" ,message: "ส่งคำขอสำเร็จ กรุณารอเจ้าหน้าที่ตรวจสอบ"});
      }
    );

  
});

app.post("/login", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM d4_users WHERE email=?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "NO USERS FOUND" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            res.json({ status: "ok", message: "Login success" });
          } else {
            res.json({ status: "error", message: "Login faild" });
          }
        }
      );
    }
  );
});
app.get("/selectcom/:staff_id", (req, res) =>{
  
  const staff_id = [req.params.staff_id]
  connection.execute( 
    
    "SELECT * FROM d2_staff_com WHERE staff_id=?",staff_id,(err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.json({ status: "ok", message: result });
      
      
    
    }
    
   
    
});
});
app.get("/selecttech/:staff_id", (req, res) =>{
  
  const staff_id = [req.params.staff_id]
  connection.execute( 
    "SELECT * FROM d1_staff_tech WHERE staff_id=?",staff_id,(err, result) => {
    
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: result });
        
        
      }

});
});
app.get("/selectUsers/:id", (req, res) =>{
  
  const id = [req.params.id]
  connection.execute( 
    
    "SELECT * FROM d4_users WHERE id=?",id,(err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.json({ status: "ok", message: result }); 
      
    
    }
    
});
});
app.get("/selectAdmin/:id", (req, res) =>{
  
  const id = [req.params.id] 
  connection.execute( 
    
    "SELECT * FROM d12_admin WHERE id=?",id,(err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.json({ status: "ok", message: result });
    
    }
    
});
});
app.post("/login", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM d4_users WHERE email=?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "NO USERS FOUND" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            res.json({ status: "ok", message: "Login success" });
          } else {
            res.json({ status: "error", message: "Login faild" });
          }
        }
      );
    }
  );
});
app.get("/selectmanager/:manager_id", (req, res) =>{
  
  const manager_id = [req.params.manager_id]
  connection.execute( 
    
    "SELECT * FROM d3_manager WHERE manager_id=?",manager_id,(err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.json({ status: "ok", message: result });
      
      
    
    }
    
   
    
});
});
app.get("/selectpassmail/:passmail_id", (req, res) =>{
  
  const passmail_id = [req.params.passmail_id]
  connection.execute( 
    
    "SELECT * FROM d7_passmail_lru WHERE passmail_id=?",passmail_id,(err, result) => {
    
    if (err) {
      console.log(err);
    } else {
      res.json({ status: "ok", message: result });
      
      
    
    }
    
   
    
});
});
app.post("/loginStaffcom", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM d2_staff_com WHERE email=?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "NO USERS FOUND" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            res.json({ status: "ok", message: "Login success" });
          } else {
            res.json({ status: "error", message: "Login faild" });
          }
        }
      );
    }
  );
});
app.post("/loginStafftech", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM d1_staff_tech WHERE email=?",
    [req.body.staff_id],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "NO USERS FOUND" });
        return;
      }
      
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            res.json({ status: "ok", message: "Login success" });
          } else {
            res.json({ status: "error", message: "Login faild" });
          }
        }
      
    }
  );
});
app.post("/loginAdmin", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM d12_admin WHERE email=?",
    [req.body.email],
    function (err, users) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "NO USERS FOUND" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            res.json({ status: "ok", message: "Login success" });
          } else {
            res.json({ status: "error", message: "Login faild" });
          }

        }
      );
    }
  );
});
app.get("/staffcom", (req, res) => {
  connection.execute("SELECT * FROM d2_staff_com", (err, result) => {
    [req.body.staff_id];
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/repassmail", (req, res) => {
  connection.execute("SELECT * FROM d7_passmail_lru ORDER BY passmail_id DESC", (err, result) => {
    [req.body.id];
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/Users", (req, res) => {
  connection.execute("SELECT * FROM d4_users", (err, result) => {
    [req.body.id];
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/manager", (req, res) => {
  connection.execute("SELECT * FROM d3_manager", (err, result) => {
    [req.body.manager_id];
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/Editcom/", (req, res) => { 
  const staff_id = req.body.staff_id;
  const email = req.body.email;
  const hash = req.body.password;
  const title_name = req.body.title_name;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  const status = req.body.status;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "UPDATE d2_staff_com SET email = ?,password = ?,title_name = ?,firstname = ?,lastname = ?,phonenumber = ?,status = ? WHERE staff_id = ?", 
      [email,hash,title_name,firstname,lastname,phonenumber,status,staff_id],
      (err, result) => {
        
      if (err) {
        console.log(err);
        
      } else {
        res.json({ status: "ok", message: "แก้ไขสำเร็จ" });
      }
    });
  });
 
});
app.put("/Staffcompassmail", (req, res) => {
  const passmail_id = req.body.passmail_id;
  const id_card = req.body.id_card;
  const major = req.body.major;
  const faculty = req.body.faculty;
  const study_group = req.body.study_group;
  const name_passmail = req.body.name_passmail;
  const new_passmail = req.body.new_passmail;
  const confirm = req.body.confirm;


    connection.execute(
      "UPDATE d7_passmail_lru SET id_card = ?,major = ?,faculty = ?,study_group = ?,name_passmail = ?,new_passmail = ?,confirm=? WHERE passmail_id = ?", 
      [id_card,major,faculty,study_group,name_passmail,new_passmail,confirm,passmail_id],
      (err, result) => {
        
      if (err) {
        console.log(err);
        
      } else {
        res.json({ status: "ok", message: "ส่งรหัสผ่านใหม่สำเร็จ" });
      }
    });
  
 
});
app.put("/Editmanager/", (req, res) => {
  const manager_id = req.body.manager_id;
  const email = req.body.email;
  const hash = req.body.password;
  const title_name = req.body.title_name;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  const job_position = req.body.job_position;
  const status = req.body.status;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "UPDATE d3_manager SET email = ?,password = ?,title_name = ?,firstname = ?,lastname = ?,phonenumber = ?,job_position=?,status = ? WHERE manager_id = ?", 
      [email,hash,title_name,firstname,lastname,phonenumber,job_position,status,manager_id],
      (err, result) => {
        
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "แก้ไขสำเร็จ" });
      }
    });
  });
 
});
app.put("/Edittech/", (req, res) => {
  const staff_id = req.body.staff_id;
  const email = req.body.email;
  const hash = req.body.password;
  const title_name = req.body.title_name;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  const status = req.body.status;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "UPDATE d1_staff_tech SET email = ?,password = ?,title_name = ?,firstname = ?,lastname = ?,phonenumber = ?,status = ? WHERE staff_id = ?", 
      [email,hash,title_name,firstname,lastname,phonenumber,status,staff_id],
      (err, result) => {
    
        
      if (err) {
        console.log(err);
        
      } else {
        res.json({ status: "ok", message: "แก้ไขข้อมูลสำเร็จ" });
      }
    });
  });
 
});
app.put("/EditAdmin/", (req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const hash = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phonenumber = req.body.phonenumber;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "UPDATE d12_admin SET email = ?,password = ?,firstname = ?,lastname = ?,phonenumber = ? WHERE id = ?", 
      [email,hash,firstname,lastname,phonenumber,id],
      (err, result) => {
    
        
      if (err) {
        console.log(err);
        
      } else {
        res.json({ status: "ok", message: "แก้ไขข้อมูลสำเร็จ" });
      }
    });
  });
 
});

app.put("/Editusers/", (req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const hash = req.body.password;
  const status_users = req.body.status_users;
  const title_name = req.body.title_name;
  const id_population = req.body.id_population;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const major = req.body.major;
  const faculty = req.body.faculty;
  const phonenumber = req.body.phonenumber;
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      "UPDATE d4_users SET email = ?,password = ?,status_users=?,title_name = ?,id_population=?,firstname = ?,lastname = ?,major=?,faculty=?,phonenumber = ? WHERE id = ?", 
      [email,hash,status_users,title_name,id_population,firstname,lastname,major,faculty,phonenumber,id],
      (err, result) => {
    
        
      if (err) {
        console.log(err);
        
      } else {
        res.json({ status: "ok", message: "แก้ไขข้อมูลสำเร็จ" });
      }
    });
  });
 
});

app.get("/stafftech", (req, res) => {
  connection.execute("SELECT * FROM d1_staff_tech", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/Admin", (req, res) => {
  connection.execute("SELECT * FROM d12_admin", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/deletecom", (req, res) => {
  const staff_id = [req.body.staff_id];
  connection.execute(
    "DELETE FROM d2_staff_com WHERE staff_id = ?",
    staff_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.delete("/deleteadmin", (req, res) => {
  const id = [req.body.id];
  connection.execute(
    "DELETE FROM d12_admin WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.delete("/deletetech", (req, res) => {
  const staff_id = [req.body.staff_id];
  connection.execute(
    "DELETE FROM d1_staff_tech WHERE staff_id = ?",
    staff_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.delete("/deleteusers", (req, res) => {
  const staff_id = [req.body.staff_id];
  connection.execute(
    "DELETE FROM d4_users WHERE id = ?",
    staff_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.delete("/deletemanager", (req, res) => {
  const manager = [req.body.manager_id];
  connection.execute(
    "DELETE FROM d3_manager WHERE manager_id = ?",
    manager, 
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.delete("/deletpassmail", (req, res) => {
  const passmail = [req.body. passmail_id];
  connection.execute(
    "DELETE FROM d7_passmail_lru WHERE passmail_id = ?",
    passmail, 
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ status: "ok", message: "ลบสำเร็จ" });
      }
    }
  );
});
app.listen(3333, function () {
  console.log(" online api on port 3333");
});
