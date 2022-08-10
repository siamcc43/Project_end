import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function CreatUserCom() {
  const handlesubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,

      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3333/registerAdmin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/Adminadmin";
        }
      })
      .catch((error) => console.log("error", error));
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          เพิ่มข้อมูลผู้ดูแลระบบ
        </Typography>

        <form onSubmit={handlesubmit}>
          <Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={12}>
                <TextField
                  id="email"
                  label="อีเมล ผู้ดูแลระบบ"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={12}>
                <TextField
                  id="password"
                  label="รหัสผ่าน ผู้ดูแลระบบ "
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={12}>
                <TextField
                  id="firstname"
                  label="ชื่อ"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={12}>
                <TextField
                  id="lastname"
                  label="นามสกุล"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Grid>

              <Grid item xs={6} sm={12}>
                <TextField
                  id="phonenumber"
                  label="เบอร์โทรติดต่อได้"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setphonenumber(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  เพิ่มสมาชิกผู้ดูแลระบบ
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs>
                    <Link href="/Adminadmin" variant="body2">
                      ย้อนกลับ
                    </Link>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
