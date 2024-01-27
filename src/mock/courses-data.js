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
//                 courses: [{id: id, img: course.nameEN, title: course.nameRU}]
//             })
//         } else {
//             // проверка на подписанный курс
//             // console.log(dataRef.courses)
//             if (dataRef?.courses?.find((item) => item.id === id)) {
//                 return
//             } else {
//                 dataRef?.courses?.push({id: id, img: course.nameEN, title: course.nameRU});
//                 set(ref(db, `users/${uid}`), {
//                     uid: uid,
//                     courses: dataRef.courses,
//                 })
//             }
//         }
//     })

