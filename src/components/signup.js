import { Grid, Box, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import image from "../asset/bg11.jpg"
import { Container } from '@mui/material'


const Signup = function signup() {
    const imageStyle = { backgroundImage: `url(${image})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }
    const avatarStyle = { margin: '0 0 10px', backgroundColor: '#610864' };
    const boxStyle = { marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh' };
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
                <Box style={boxStyle}>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 2, }}>
                        Sign up
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus

                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password-verfiy" label="verify-password" type="verify-password" id="password" autoComplete="new-password" />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to..."
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>

                        <Grid container justifyContent="flex-end" sx={{ ml: -11.5 }}>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

        </Grid>


    )

}

export default Signup;