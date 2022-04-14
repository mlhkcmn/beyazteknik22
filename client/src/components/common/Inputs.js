import React from 'react'
import { Input, FormControl, TextField, Box, Stack } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

export const CreateProfileInput = (props) => {
  return (
    <>
      <span className="CreateProfileInputHead">{props.header}</span>
      <FormControl className="CreateProfileInput">
        <Input
          className="CreateProfileInputBase"
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  )
}

export const SignupInput = (props) => {

  return (
    <FormControl className="signupModalInput">
      <span className="signupModalInputHead">{props.head}</span>
      <Input type={props.type} className="signupModalInputBase"/>
    </FormControl>
  )
}

// export const SignupInput = (props) => {
//   return (
//     <>
//       <FormControl className="signupModalInput">
//         <span className="signupModalInputHead">{props.head}</span>
//         <Input
//           className="signupModalInputBase"
//           type={props.type}
//           placeholder={props.placeholder}
//         />
//       </FormControl>
//     </>
//   )
// }

export const CreateProfileInputBio = (props) => {
  return (
    <>
      <span className="CreateProfileInputHead">{props.header}</span>
      <br />
      <FormControl
        className="CreateProfileInputBio"
        sx={{ minWidth: { xs: '90.5%', sm: '95.8%' } }}
      >
        <Input
          multiline
          rows={4}
          className="CreateProfileInputBioBase"
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  )
}

export const PageBuilderInput = (props) => {
  const { icon, label, leftLabel } = props

  return (
    <Box className="input-group">
      {label ? (
        <label className="input-group__input-label">{label}</label>
      ) : null}
      <Stack
        direction={{ xs: icon ? 'row' : 'column', sm: 'row' }}
        sx={{ marginTop: 1 }}
        spacing={0}
      >
        {icon ? <i className={icon} /> : null}

        {leftLabel ? (
          <label className="input-group__left-label">{leftLabel}</label>
        ) : null}

        <TextField variant="standard" {...props} label="" />
      </Stack>
    </Box>
  )
}

export const TextArea = (props) => {
  const { label, placeholder } = props

  return (
    <Box className="input-group" sx={{ textAlign: 'left' }}>
      <label className="input-group__input-label">{label}</label>
      <TextField
        sx={{ marginTop: 1 }}
        multiline
        rows={3}
        variant="standard"
        placeholder={placeholder}
        {...props}
        label=""
      />
    </Box>
  )
}

export const CreateProfileInputAbout = (props) => {
  return (
    <>
      <span className="CreateProfileInputHead">{props.header}</span>
      <br />
      <FormControl
        className="CreateProfileInputAboutYou"
        sx={{ minWidth: { xs: '90.5%', sm: '95.8%' } }}
      >
        <Input
          multiline
          rows={22}
          className="CreateProfileInputAboutYouBase"
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  )
}

export const CreateNewEventInputTitle = (props) => {
  return (
    <>
      <span className="CreateNewEventInputTitleHead">{props.head}</span>
      <FormControl className="CreateNewEventInputTitle">
        <Input
          className="CreateNewEventInputTitleBase"
          type={props.type}
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  )
}

export const CreateNewEventInputDesc = (props) => {
  return (
    <>
      <span className="CreateNewEventInputTitleHead">{props.head}</span>
      <FormControl className="CreateNewEventInputDesc">
        <Input
          multiline
          rows={5}
          className="CreateNewEventInputDescBase"
          type={props.type}
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  )
}
