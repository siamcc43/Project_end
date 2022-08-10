import Navber from "./Navber";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
function App() {
  return (
    
    <div>
      <Navber />
      
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          แอดมิน
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          ระบบแจ้ง ยืม จองออนไลน์ของสำนักวิทยบริการและเทคโนโลยีสารสนเทศ
          มหาวิทยาลัยราชภัฏเลย
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Box>
            <Link href="/adminstaffcom">
              <Button variant="contained">จัดการข้อมูลเจ้าหน้าที่ศูนย์คอมพิวเตอร์</Button>
            </Link>
          </Box>

          <Box>
            <Link href="/adminstafftech">
              {" "}
              <Button variant="contained">จัดการข้อมูลเจ้าหน้าที่ศูนย์เทคโนโลยี</Button>
            </Link>
          </Box>
          
        </Stack>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Box>
            <Link href="/AdminUsers">
              <Button variant="contained">จัดการข้อมูลผู้ใช้</Button>
            </Link>
          </Box>

          <Box>
            <Link href="/Adminadmin">
              {" "}
              <Button variant="contained">จัดการข้อมูลผู้ดูเเลระบบ</Button>
            </Link>
          </Box>
          <Box>
            <Link href="Mainmanager">
              {" "}
              <Button variant="contained">จัดการข้อมูลผู้บริหาร</Button>
            </Link>
          </Box>
          
        </Stack>
      </Container>
     
    </div>
    
  );


}

export default App;
