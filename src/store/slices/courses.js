import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    currentCourse: [],
    allCursesCards: []
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
        setAllCoursesCards: (state, action) => {
            state.allCursesCards = action.payload;
        }

    },
})

export const {
    setAllCourses,
    setCurrentCourse,
    setAllCoursesCards,

} = coursesSlice.actions

export default coursesSlice.reducer