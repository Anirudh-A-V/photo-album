import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
              <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                Photo Album
              </Typography>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Do nulla laborum voluptate dolore aute qui. Duis non ex aliqua esse ipsum exercitation qui sit qui aute. Aliquip et magna velit ea ex occaecat do ad velit cillum. Non sint sunt eu cupidatat consectetur ea in minim culpa. Aliquip dolor enim nostrud nostrud fugiat velit pariatur incididunt labore Lorem.
              </Typography>
              <div>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Like
                    </Button>
                  </Grid>
                </Grid>
              </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App
