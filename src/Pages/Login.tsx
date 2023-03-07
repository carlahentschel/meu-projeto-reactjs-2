import { Checkbox, Grid, TextField, Box } from "@mui/material"

import React from "react"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login: React.FC = ()=>{
  return (
    <>
        <Grid container height={'100vh'} 
  justifyContent="center"
  alignItems="center">
            <Grid item sm={7} height={"100%"}>
          <img src="https://source.unsplash.com/random"/>
            </Grid>

            <Grid item sm={5}></Grid>
              <Grid container 
              flexDirection={'column'}
              height={'100vh'}
              >
              <Box component={'form'} >
                    <TextField id="email-adress" label="Email Adress" variant="outlined" />
                    <TextField id="password" label="Password" variant="outlined" />
                    <Checkbox {...label} defaultChecked />

                </Box>
              </Grid>
            </Grid>


    </>
  )
}
export default Login