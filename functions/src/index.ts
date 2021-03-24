import * as admin from "firebase-admin";
admin.initializeApp();

const role = require("./role-management/role-functions");

exports.addAdminRole = role.addAdminRole;
