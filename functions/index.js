const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
    .document('truheirinc/{userId}/followers/{followerId}')
    .onCreate((event,context) => {
        const userId = context.params.userId

        const db = admin.firestore()

        return db.collection('truheirinc').doc(userId)
                    .get()
                    .then(doc => {
                        const user = doc.data()

                        const msg = {
                            to: "joelc@doubleedgesoftware.com",
                            from: 'joelc@doubleedgesoftware.com',
                            subject: 'New Follower',
                            templateId: 'd-befd85489de84fd69575f5ae2afdd49e',
                            dynamic_template_data: {
                                name: "Joel"
                                // and other custom properties here
                                }
                        };

                        return sgMail.send(msg)
                    })
                    .then(() => console.log('email sent!'))
                    .catch(err => console.log(err))
    });



    exports.genericEmail = functions.https.onCall(async (data,context) => {
        const msg = {
            to:'joelc@doubleedgesoftware.com',
            from:'joelc@doubleedgesoftware.com',
            templateId:'d-befd85489de84fd69575f5ae2afdd49e',
            dynamic_template_data: {
                name:data.text
            }
        }

        await sgMail.send(msg);


        return { success: true};
    });

