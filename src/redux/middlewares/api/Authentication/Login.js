import firebase from 'firebase'

export const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(() => {
      return { code: false, message: 'Bad Connect' }
    })
}
