import { Grid, Box, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import image from "../asset/bg11.jpg"
import { Container, CssBaseline } from '@mui/material'




const Login = function login() {
    const imageStyle = { backgroundImage: `url(${image})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }
    const avatarStyle = { margin: '0 0 10px', backgroundColor: '#610864' };
    const boxStyle = { marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh' };
    const buttonStyle = { margin: "10px 0 20px 0" };
    const containerStyle = { padding: 30, width: '30vw' };




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (

        <Grid style={imageStyle}>
            <Container style={containerStyle} >
                <CssBaseline />
                <Box style={boxStyle}>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 12, }}>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />

                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"  fullWidth variant="contained" onSubmit={handleSubmit} style={buttonStyle}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </Grid>


    )

}

export default Login;