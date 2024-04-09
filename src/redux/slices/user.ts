import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    usersInfo: null
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedIn(state, { payload }) {
            return {
              ...state,
              loggedIn: true,
              usersInfo: payload
            };
        },
        setLogout(state) {
            return initialState;
        },
    }
})

// Reducer
export default slice.reducer;

// Actions
export const { setLoggedIn, setLogout } = slice.actions;