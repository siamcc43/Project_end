import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function SimpleContainer() {
  const EditUsers = id =>{
    window.location = '/EditUsers/'+id
  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/Users")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  const comdelete = staff_id =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "staff_id": staff_id
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3333/deleteusers", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    window.location = '/AdminUsers'
  })
  .catch(error => console.log('error', error));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                ข้อมูลผู้ใช้ทั่วไป
              </Typography>
            </Box>
            <Box>
              <Link href="/Admin">
                <Button variant="contained" color="success">ย้อนกลับ</Button>
              </Link>{" "}
            </Box>
            <Box>
             
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell>รหัสผู้ใช้</TableCell>
                  <TableCell align="center">สถานะ</TableCell>
                  <TableCell align="center">ชื่อ</TableCell>
                  <TableCell align="center">สกุล</TableCell>
                  <TableCell align="center">คณะ</TableCell>
                  <TableCell align="center">สาขา</TableCell>
                  <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                  <TableCell align="center">จัดการข้อมูลผู้ใช้</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.status_users}</TableCell>
                    <TableCell align="center">{row.firstname}</TableCell>
                    <TableCell align="center">{row.lastname}</TableCell>
                    <TableCell align="center">{row.faculty}</TableCell>
                    <TableCell align="center">{row.major}</TableCell>
                    
                    <TableCell align="center">{row.phonenumber}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                         <Button onClick={()=> EditUsers(row.id)} >แก้ไข/ดูข้อมูล</Button>
                        <Button color="error" onClick={()=> comdelete(row.id)}>ลบ</Button>
                       
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
