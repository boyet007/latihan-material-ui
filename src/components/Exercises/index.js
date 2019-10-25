import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import RightPane from './RightPane'

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export default ({ exercises }) => {
    return(
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => 
                        <Typography variant="subtitle2" 
                            style={{textTransform: 'capitalize'}}>
                            {group}
                        </Typography>
                        
                        )}
            </Paper>
            </Grid>
            <Grid item sm>
                <RightPane styles={styles} />
            </Grid>
        </Grid>
    )
}
