export const fitnessCards = [
    {title: 'Йога', img: 'card1', path: '/course/ab1c3f'},
    {title: 'Стретчинг', img: 'card2', path: '/course/kfpq8e'},
    {title: 'Танцевальный фитнес', img: 'card3', path: '/course/ypox9r'},
    {title: 'Степ-аэробика', img: 'card4', path: '/course/6i67sm'},
    {title: 'Бодифлекс', img: 'card5', path: '/course/q02a6i'},
]

export const userFitnessCards = [
    {title: 'Йога', img: 'Yoga', id: 'ab1c3f'},
    {title: 'Стретчинг', img: 'Stretching', id: 'kfpq8e'},
    {title: 'Бодифлекс', img: 'BodyFlex', id: 'q02a6i'},
]

// if (!!userAuth) { 
//     // получить список курсов пользователя 
//     const dbRef = firebase.database().ref()
//     const db = firebase.database()
//     await get(child(dbRef, 'users/' + uid ))
//     .then((snapshot) => {
//         const dataRef = snapshot.val(); 
//         // добавить пользователя если его нет в дб
//         if (dataRef === null) {
//             set(ref(db, `users/${uid}`), {
//                 uid: uid,
//                 courses: {0: id}
//             })
//         } else {
//             // проверка на подписанный курс
//             console.log(dataRef.courses)
//             if (dataRef?.courses?.includes(id, 0)) {
//                 return
//             } else {
//                 dataRef?.courses?.push(id);
//                 set(ref(db, `users/${uid}`), {
//                     courses: dataRef.courses,
//                 })
//             }
//         }
//     })
//     .catch((e) => {
//         console.error(e);
//     });
// }    