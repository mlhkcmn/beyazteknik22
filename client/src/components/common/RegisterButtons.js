import React from 'react'
import {
  Button,
  FormControl,
  Typography,
} from '@mui/material'

export const RegisterAccount = (props) => {
  return (
    <>
      <FormControl className="signupModalRegisterForm">
        <Button className="registerAccount" {...props}>
          <Typography
            sx={{
              color: '#FFFFFF',
              textTransform: 'capitalize',
              fontFamily: 'Mulish',
              fontWeight: 'bold',
            }}
          >
            {props.text}
          </Typography>
        </Button>
      </FormControl>
    </>
  )
}