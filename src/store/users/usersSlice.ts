import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store/store";
import {User} from "../../app/types/auth";
import {loginUser, logout, registerUser} from "./usersThunks";


interface AuthState {
  user: User | null;
  loginLoading: boolean;
  registerLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  loginLoading: false,
  registerLoading: false,
}

export const UsersSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.registerLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerLoading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registerLoading = false;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loginLoading = false;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  }
});

export const userReducer = UsersSlice.reducer;

export const selectUser = (state: RootState) => state.users.user;
export const selectRegisterLoading = (state: RootState) => state.users.registerLoading;
export const selectLoginLoading = (state: RootState) => state.users.loginLoading;

