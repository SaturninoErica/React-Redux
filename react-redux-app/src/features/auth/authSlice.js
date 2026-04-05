import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch {
        return null;
    }
};

const initialUser = getInitialUser();

const initialState = {
    user: initialUser,
    isAuth: !!initialUser
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register(state, action) {
            state.user = action.payload;
            state.isAuth = true;
        },
        login(state, action) {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout(state) {
            state.user = null;
            state.isAuth = false;
            localStorage.removeItem("user");
        }
    }
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;