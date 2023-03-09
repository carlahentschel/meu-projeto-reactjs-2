import React from "react"
import { Checkbox, Grid, TextField, Box, FormGroup, FormControlLabel, Button } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login: React.FC = ()=> {
  return (
    <>
        <Grid container height={'100vh'} width={'100vw'} justifyContent="center" alignItems="center">
            <Grid item sm={7} height={"100%"} width={"60%"}>
          <img src= "./assets/images/image.jpg" />
            </Grid>

            <Grid item sm={5}>
            <Grid container 
              flexDirection={'column'}
              height={'100vh'}
              >
              <Box component={'form'} >
                    <TextField id="email-adress" label="Email Adress" variant="outlined" />
                    <TextField id="password" label="Password" variant="outlined" />
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                    <Button variant="contained">SING IN</Button>
                </Box>
              </Grid>
            </Grid>
              
            </Grid>


    </>
  )
}
export default Login