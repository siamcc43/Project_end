import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Link from "@mui/material/Link";
import Axios from "axios";
import TableBody from "@mui/material/TableBody";
export default function Editcom() {
  
  const { staff_id } = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    

    fetch("http://localhost:3333/selecttech/"+[staff_id], requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 'ok' && result.message.length == 1) {
          var message = result.message[0];
          //alert( JSON.stringify(message) ) ;
          setemail(message.email);
          setpassword(message.password);
          settitle_name(message.title_name);
          setfirstname(message.firstname);
          setlastname(message.lastname);
          setphonenumber(message.phonenumber);
          setstatus(message.status);
        }
      })
      .catch((error) => console.log("error", error));
  }, [staff_id]);
  const handlesubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      staff_id: staff_id,
      email: email,
      password: password,
      title_name: title_name,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      status: status,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3333/Edittech/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result['message'])
        if (result["status"] === "ok") {
          window.location.href = "/adminstafftech";
        }
      })
      .catch((error) => console.log("error", error));
  };
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [title_name, settitle_name] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [status, setstatus] = useState("");

  
  console.log(email)
  console.log(title_name)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          ????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </Typography>

        <form onSubmit={handlesubmit}>
          <TableBody>
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={12}>
                  <TextField
                    id="email"
                    label="??????????????? ???????????????????????????????????????????????????????????????????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setemail(e.target.value)}
                    value = {email}
                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <TextField
                    id="password"
                    label="???????????????????????? ??????????????????????????????????????????????????????????????????????????? "
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setpassword(e.target.value)}
                    value = {password}

                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                <TextField
                    id="title_name"
                    label="????????????????????????????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setpassword(e.target.value)}
                    value = {title_name}

                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <TextField
                    id="firstname"
                    label="????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setfirstname(e.target.value)}
                    value = {firstname}

                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <TextField
                    id="lastname"
                    label="?????????????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setlastname(e.target.value)}
                    value = {lastname}

                  />
                </Grid>

                <Grid item xs={6} sm={12}>
                  <TextField
                    id="phonenumber"
                    label="???????????????????????????????????????????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setphonenumber(e.target.value)}
                    value = {phonenumber}

                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                <TextField
                    id="status"
                    label="??????????????? 1 ???????????? 0 ????????? ???????????????????????????"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setstatus(e.target.value)}
                    value={status}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/adminstafftech" variant="body2">
                        ????????????????????????
                      </Link>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TableBody>
        </form>
      </Container>
    </React.Fragment>
  );
 
}



