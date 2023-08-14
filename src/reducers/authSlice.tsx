import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    user: any;
    password: string;
    error: string;
}

const initialState: AuthState = {
    user: null,
    password: '',
    error: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ email: string; password: string }>) {
            const { email, password } = action.payload;
            state.user = email;
            state.password = password;
        },
        register(state, action: PayloadAction<{ name: string; email: string; password: string}>) {
            const { name, email, password } = action.payload;
            state.user = name;
            state.user = email;
            state.password = password;
        },
        logout(state) {
            state.user = null;
            state.password = '';
        }

    },
});

export const { login , register, logout } = authSlice.actions;

export default authSlice.reducer;