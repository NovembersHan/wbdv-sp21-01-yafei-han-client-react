// const initialState = {
//     lessons: []
// }
//
// const lessonReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case "CREATE_LESSON":
//             return {
//                 ...state,
//                 lessons: [
//                     ...state.lessons,
//                     action.lesson
//                 ]
//             }
//         case "FIND_LESSONS":
//             return {
//                 ...state,
//                 lessons: action.lessons
//             }
//         case "DELETE_MODULE":
//             return {
//                 lessons: state.lessons.filter(lesson => {
//                     if(lesson._id === action.lessonToDelete._id) {
//                         return false
//                     } else {
//                         return true
//                     }
//                 })
//             }
//         case "UPDATE_MODULE":
//             return {
//                 lessons: state.lessons.map(lesson => {
//                     if(lesson._id === action.lesson._id) {
//                         return action.lesson
//                     } else {
//                         return lesson
//                     }
//                 })
//             }
//         default:
//             return state
//     }
// }
//
// export default lessonReducer

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState
        case "DELETE_LESSON":
            const newState1 = {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(m => {
                    if(m._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default lessonReducer