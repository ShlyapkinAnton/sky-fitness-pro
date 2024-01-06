import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    currentCourse: [],

}

const coursesSlice = createSlice({
    name: 'coursesReduces',
    initialState,
    reducers: {
        setAllCourses: (state, action) => {
            state.allCourses = action.payload
        },
        setCurrentCourse: (state, action) => {
            state.currentCourse = action.payload
        },

    },
})

export const {
    setAllCourses,
    setCurrentCourse,

} = coursesSlice.actions

export default coursesSlice.reducer