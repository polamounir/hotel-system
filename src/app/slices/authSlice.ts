import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// Fake login API
const loginApi = async (credentials: { username: string; password: string }) => {
  return new Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "123") {
        resolve({ name: "Admin User" });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};

interface AuthState {
  user: { name: string } | null;
  isLoading: boolean;
  isError: boolean;
  isAuthenticated: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isError: false,
  isAuthenticated: false,
  errorMessage: null,
};

// THUNK
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await loginApi(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

///////////////////////////////////////////////////
// SLICE 
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isError = false;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ name: string }>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
