// // ./Fire.js
import uuid from 'uuid';

// import getUserInfo from './components/utils/getUserInfo';
// import shrinkImageAsync from './components/utils/shrinkImageAsync';
// import uploadPhoto from './components/utils/uploadPhoto';

const firebase = require('firebase');
// // Required for side-effects
require('firebase/firestore');

const collectionName = 'WlOe8oK6rmiVKVi0smL6';
// // const timestamp = snapshot.get('created_at');
// // const date = timestamp.toDate();
class Fire {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyATKYuW4P8bAJ7ZDC3PHEzQnxOkPiln_Is',
      authDomain: 'dayt-5664d.firebaseapp.com',
      databaseURL: 'https://dayt-5664d.firebaseio.com',
      projectId: 'dayt-5664d',
      storageBucket: 'dayt-5664d.appspot.com',
      messagingSenderId: '259299448191',
    });
//     // Some nonsense...
//     // firebase.firestore().settings({ timestampsInSnapshots: true });

//     // Listen for auth
//     firebase.auth().onAuthStateChanged(async user => {
//       if (!user) {
//         await firebase.auth().signInAnonymously();
      }
//     });
  }

//   // Download Data
//   getPaged = async ({ size, start }) => {
//     let ref = this.collection.orderBy('timestamp', 'desc').limit(size);
//     try {
//       if (start) {
//         ref = ref.startAfter(start);
//       }

//       const querySnapshot = await ref.get();
//       const data = [];
//       querySnapshot.forEach(function(doc) {
//         if (doc.exists) {
//           const post = doc.data() || {};

//           // Reduce the name
//           const user = post.user || {};

//           const name = user.deviceName;
//           const reduced = {
//             key: doc.id,
//             name: (name || 'Secret Duck').trim(),
//             ...post,
//           };
//           data.push(reduced);
//         }
//       });

//       const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
//       return { data, cursor: lastVisible };
//     } catch ({ message }) {
//       alert(message);
//     }
//   };

//   // Upload Data
//   uploadPhotoAsync = async uri => {
//     const path = `${collectionName}/${this.uid}/${uuid.v4()}.jpg`;
//     return uploadPhoto(uri, path);
//   };

//   post = async ({ text, image: localUri }) => {
//     try {
//       const { uri: reducedImage, width, height } = await shrinkImageAsync(
//         localUri,
//       );

//       const remoteUri = await this.uploadPhotoAsync(reducedImage);
//       this.collection.add({
//         text,
//         uid: this.uid,
//         timestamp: this.timestamp,
//         imageWidth: width,
//         imageHeight: height,
//         image: remoteUri,
//         user: getUserInfo(),
//       });
//     } catch ({ message }) {
//       alert(message);
//     }
//   };

//   // Helpers
//   get collection() {
//     return firebase.firestore().collection(collectionName);
//   }

//   get uid() {
//     return (firebase.auth().currentUser || {}).uid;
//   }
//   get timestamp() {
//     return Date.now();
//   }
// }

// Fire.shared = new Fire();
// export default Fire;