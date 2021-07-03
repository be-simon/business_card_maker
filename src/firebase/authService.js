import firebase from 'firebase'
import firebaseApp from './firebase';

class AuthService {
  loginWithProvider(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`];
    return firebaseApp.auth().signInWithPopup(authProvider)
  }

  createWithEmailAndPassword(email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  }

  loginWithEmailAndPassword(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  }
}

export default AuthService;