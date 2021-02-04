import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user by email / id from data
  return admin.auth().getUserByEmail(data.email).then((user) => {
    // set custom claim to user
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    }).then(() => {
      // return response to frontend
      return {
        message: "Success setting admin role",
      };
    });
  }).catch((err) => {
    return err;
  });
});
