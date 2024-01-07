import { createSlice } from '@reduxjs/toolkit'

const AUTH_INFO = 'auth'

function getAuthFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_INFO))
    } catch (error) {
        console.error(error)
        return null
    }
}

const initialState = {
    access: null,
    refresh: null,
    userName: null,
    userID: null,
}

export const authSlice = createSlice({
    name: 'authReduces',
    initialState: getAuthFromLocalStorage() ?? initialState,

    reducers: {
        setAuth: (state, action) => {
            const { accessToken, email, uid, refreshToken } = action.payload ?? initialState
            state.access = accessToken
            state.userName = email
            state.userID = uid
            state.refresh = refreshToken

            localStorage.setItem(AUTH_INFO, JSON.stringify(state))
        },
    },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer