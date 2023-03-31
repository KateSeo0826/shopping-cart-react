// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { useState } from 'react'
// import { auth } from '../api/firebase'
// export default function useAuth() {
//     const [isAuth, setIsAuth] = useState(false)
//     const [error, setError] = useState('')

//     const signup = async (email, password) => {

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user
//             })
//             .catch((error) => {
//                 setError(error.message);
//             })
//     }

//     const login = (email, password) => {
//         setIsAuth(true)
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;

//             })
//             .catch((error) => {
//                 setError(error.message);
//             });

//     }

//     const logout = () => {
//         auth().signOut()
//     }
//     return { isAuth, signup, login, logout, error }
// }
