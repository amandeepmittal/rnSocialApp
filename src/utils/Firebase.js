import firebase from 'react-native-firebase'
import uuid from 'uuid'

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  signOut: () => {
    return firebase.auth().signOut()
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user)
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData)
  },
  uploadPost: post => {
    let user = firebase.auth().currentUser
    const id = uuid.v4()
    const uploadData = {
      uid: user.uid,
      id: id,
      postPhoto: post.photo,
      postTitle: post.title,
      postDescription: post.description,
      likes: []
    }
    return firebase
      .firestore()
      .collection('posts')
      .doc(id)
      .set(uploadData)
  },
  getPosts: () => {
    let user = firebase.auth().currentUser
    return (
      firebase
        .firestore()
        .collection('posts')
        // .where('uid', '==', user.uid)
        .get()
        .then(function(querySnapshot) {
          let posts = querySnapshot.docs.map(doc => doc.data())
          // console.log('CURRENT USER =======>', user)
          // console.log(posts)
          return posts
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error)
        })
    )
  }
}

export default Firebase
