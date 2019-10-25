import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography  color="inherit">Exercise Database</Typography>
            </Toolbar>
        </AppBar>
    )
}
