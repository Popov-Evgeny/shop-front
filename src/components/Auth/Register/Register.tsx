import React, {useCallback} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Box, Container, Grid, Link, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {LoadingButton} from "@mui/lab";
import {useAppDispatch, useAppSelector} from "../../../app/store/hooks";
import {selectRegisterLoading} from "../../../store/users/usersSlice";
import useZodForm from "../../../app/hooks/useZodForm";
import {RegisterDtoSchema} from "../../../app/schemas/auth";
import {RegisterDto} from "../../../app/types/auth";
import {registerUser} from "../../../store/users/usersThunks";
import './Register.scss';

const Register = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectRegisterLoading);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useZodForm(RegisterDtoSchema);

    const onSubmit = useCallback(
        async (data: RegisterDto) => {
            const {
                meta: { requestStatus },
            } = await dispatch(registerUser(data));

            if (requestStatus === 'fulfilled') {
                navigate('/');
            }
        },
        [dispatch, navigate],
    );


    return (
        <Container component="main" maxWidth="xs" className={'register-form-wrapper'}>
            <Box
                sx={{
                    marginTop: 6,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={'register-form-title'}>
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register('name')}
                                autoComplete="full-name"
                                name="name"
                                required
                                id="name"
                                label="Display Name"
                                autoFocus
                                error={!!errors['name']}
                                helperText={errors['name']?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('email')}
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                error={!!errors['email']}
                                helperText={errors['email']?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('password')}
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                error={!!errors['password']}
                                helperText={errors['password']?.message}
                            />
                        </Grid>
                    </Grid>
                    <LoadingButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} loading={isLoading} className={'register-form-btn'}>
                        <span>Sign Up</span>
                    </LoadingButton>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link component={NavLink} to="/signIn" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;