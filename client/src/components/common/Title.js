import React from "react"
import { Grid } from "@mui/material"
const Title = (props) => {
    const { title, description } = props
    return (
        <Grid container direction="row" textAlign="center">
            <Grid item xs={12} pb={5} pt={5}>
                <h2 className="title">{title}</h2>
                <p className="title-description">{description}</p>
            </Grid>
        </Grid>
    )
}

export default Title