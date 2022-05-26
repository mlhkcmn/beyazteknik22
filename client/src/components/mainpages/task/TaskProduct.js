import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import React from 'react'

const TaskProduct = () => {
    return (
        <>
            <Card sx={{ minWidth: '270px', textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Name
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        Title
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} >
                        Description aslkjflaskjfş lkjasşlkjf şalskjf şlkjasşlf kjaşljksf
                    </Typography>
                    <Typography color="text.secondary">
                        Content asjfşalksjfkl asjşflk jasşlkjf şalskjfşlkajs şfkljas
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default TaskProduct