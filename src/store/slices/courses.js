import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    currentCourse: [],
    allCursesCards: [],
    allWorkouts: {}
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
        setAllWorkouts: (state, action) => {
            state.allWorkouts = action.payload;
        },

    },
})

export const {
    setAllCourses,
    setCurrentCourse,
    setAllWorkouts

} = coursesSlice.actions

export default coursesSlice.reducer