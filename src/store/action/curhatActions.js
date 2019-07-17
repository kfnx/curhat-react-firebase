export const createCurhat = curhat => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("curhats")
      .add({
        ...curhat,
        authorPseudonym: profile.pseudonym,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_CURHAT", curhat });
      })
      .catch(err => dispatch({ type: "CREATE_CURHAT_ERROR", curhat }));
  };
};
