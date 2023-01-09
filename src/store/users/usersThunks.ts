import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiUser, LoginUserData, User} from "../../type";

export const register = createAsyncThunk<User | null, ApiUser>(
    'users/register',
    async (userData) => {
        const response = await axiosApi.post<User | null>('/users', userData);
        return response.data;
    },
)

export const login = createAsyncThunk<User | null, LoginUserData>(
    'users/login',
    async (userData) => {
        const response = await axiosApi.post<User | null>('/users', userData);
        return response.data;
    },
)

export const logout = createAsyncThunk<void, string>(
    'users/logout',
    async (token) => {
        await axiosApi.delete('/users/sessions');
        axiosApi.interceptors.request.use()
    },
)