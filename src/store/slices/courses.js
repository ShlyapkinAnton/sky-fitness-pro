import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    currentCourse: [],
    allWorkouts: {},
    currentWorkout: [],
    currentPage: '',
    userCourses: [],
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
        setCurrentWorkout: (state, action) => {
            state.currentWorkout = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setUserCourses: (state, action) => {
            state.userCourses = action.payload
        },
    },
})

export const {
    setAllCourses,
    setCurrentCourse,
    setAllWorkouts,
    setCurrentWorkout,
    setCurrentPage,
    setUserCourses,
} = coursesSlice.actions

export default coursesSlice.reducer