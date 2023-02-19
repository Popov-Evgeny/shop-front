import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {LoginDto, RegisterDto, User} from "../../app/types/auth";

export const registerUser = createAsyncThunk<User | null, RegisterDto>(
    'users/register',
    async (userData) => {
        const response = await axiosApi.post<User | null>('/users', userData);
        return response.data;
    },
)

export const loginUser = createAsyncThunk<User | null, LoginDto>(
    'users/login',
    async (userData) => {
        const response = await axiosApi.post<User | null>('/users/sessions', userData);
        return response.data;
    },
)

export const logout = createAsyncThunk(
    'users/logout',
    async () => {
        await axiosApi.delete('/users/sessions');
        axiosApi.interceptors.request.use()
    },
)