const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};
exports.curhatCreated = functions.firestore
  .document("curhats/{curhatId}")
  .onCreate(doc => {
    const curhat = doc.data();
    const notification = {
      content: "Menambahkan curhat",
      user: curhat.authorPseudonym,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      if (newUser) {
        const notification = {
          content: "Bergabung dengan curhat",
          user: newUser.pseudonym,
          time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification);
      } else {
        return "doc.data() error";
      }
    });
});
