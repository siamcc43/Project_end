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
  const Edittech = staff_id =>{
    window.location = '/Edittech/'+staff_id
  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/stafftech")
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

fetch("http://localhost:3333/deletetech", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    window.location = '/adminstafftech'
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
                ข้อมูลเจ้าหน้าที่ศูนย์เทคโนโลยี
              </Typography>
            </Box>
            <Box>
              <Link href="/Admin">
                <Button variant="contained" color="success">ย้อนกลับ</Button>
              </Link>{" "}
            </Box>
            <Box>
              <Link href="/creattech">
                <Button variant="contained">เพิ่มข้อมูลเจ้าหน้าที่ศูนย์เทคโนโลยี</Button>
              </Link>{" "}
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>รหัสเจ้าหน้าที่</TableCell>
                  <TableCell align="center">คำนำหน้า</TableCell>
                  <TableCell align="center">ชื่อ</TableCell>
                  <TableCell align="center">สกุล</TableCell>
                  <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                  <TableCell align="center">จัดการข้อมูลเจ้าหน้าที่ศูนย์เทคโนโลยี</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.staff_id}
                    </TableCell>
                    <TableCell align="center">{row.title_name}</TableCell>
                    <TableCell align="center">{row.firstname}</TableCell>
                    <TableCell align="center">{row.lastname}</TableCell>
                    <TableCell align="center">{row.phonenumber}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                         <Button onClick={()=> Edittech(row.staff_id)} >แก้ไข/ดูข้อมูล</Button>
                        <Button color="error" onClick={()=> comdelete(row.staff_id)}>ลบ</Button>
                       
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
