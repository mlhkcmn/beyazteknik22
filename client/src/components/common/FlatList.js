import React from "react"
import Title from "./Title"
import FlatItem from "./FlatItem"
import { Grid } from "@mui/material"

const FlatList = () => {
    const title = {
        text: "Öne Çıkan İlanlar",
        description: ""
    }
    return (
        <>
            <Grid container direction="row" sx={{ bgcolor: 'red' }}>
                <Title title={title.text} description={title.description} />
                <Grid item xs={12}>
                    <FlatItem slug="lorem-ipsum-1" />
                    {/* <FlatItem slug="lorem-ipsum-2" />
                    <FlatItem slug="lorem-ipsum-3" />
                    <FlatItem slug="lorem-ipsum-4" />
                    <FlatItem slug="lorem-ipsum-5" />
                    <FlatItem slug="lorem-ipsum-6" /> */}
                </Grid>
            </Grid>
        </>
    )

}

export default FlatList;