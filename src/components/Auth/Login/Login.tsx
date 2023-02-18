import React, {useCallback} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {selectLoginLoading} from "../../../store/users/usersSlice";
import {Avatar, Box, Container, Grid, Link, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import useZodForm from "../../../app/hooks/useZodForm";
import {useAppDispatch, useAppSelector} from "../../../app/store/hooks";
import {LoginDtoSchema} from "../../../app/schemas/auth";
import {LoginDto} from "../../../app/types/auth";
import {loginUser} from "../../../store/users/usersThunks";
import './Login.scss';

const Login = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectLoginLoading);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useZodForm(LoginDtoSchema);

    const onSubmit = useCallback(
        async (data: LoginDto) => {
            const {
                meta: { requestStatus },
            } = await dispatch(loginUser(data));

            if (requestStatus === 'fulfilled') {
                navigate('/');
            }
        },
        [dispatch, navigate],
    );


    return (
        <Container component="main" maxWidth="xs" className={'login-form-wrapper'}>
            <Box
                sx={{
                    marginTop: 6,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={'login-form-title'}>
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TextField
                        {...register('email')}
                        margin="normal"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={!!errors['email']}
                        helperText={errors['email']?.message}
                        color='primary'
                    />
                    <TextField
                        {...register('password')}
                        margin="normal"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={!!errors['password']}
                        helperText={errors['password']?.message}
                    />
                    <LoadingButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}} className={'login-form-btn'} loading={isLoading}>
                        <span>Sign In</span>
                    </LoadingButton>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link component={NavLink} to="/signUp" variant="body2">
                                Don&apos;t have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;