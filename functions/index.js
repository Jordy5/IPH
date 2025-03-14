/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: 'http://localhost:5173' });  // Permite solicitudes de cualquier origen

admin.initializeApp();

exports.createUser = functions.https.onRequest((req, res) => {
  // Usamos CORS para manejar el preflight y las solicitudes
  cors(req, res, async () => {
    if (req.method === 'OPTIONS') {
      // Si es una solicitud preflight, respondemos con un 200
      res.status(200).send();
      return;
    }

    // Aquí va el código para crear el usuario
    try {
      const { nombre, apellidoPaterno, apellidoMaterno, numeroMatricula, numeroPatrulla, municipio, institucion, entidadFederativa, cargoPolitico, correo, rol, contraseña } = req.body;

      // Crear usuario en Auth con correo y contraseña

      const userRecord = await admin.auth().createUser({
        email: correo,
        password: contraseña,
        displayName: `${nombre} ${apellidoPaterno} ${apellidoMaterno}`
      });

      // Ejemplo de creación de usuario en la base de datos
      const userRef = admin.firestore().collection('users').doc(userRecord.uid);
      await userRef.set({
        nombre,
        uid: userRecord.uid,
        apellidoPaterno,
        apellidoMaterno,
        numeroMatricula,
        numeroPatrulla,
        municipio,
        institucion,
        entidadFederativa,
        cargoPolitico,
        correo,
        rol,
        contraseña,
        createdAt: new Date()
      });

      // Respondemos con éxito
      res.status(200).send({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).send({ error: 'Error al crear el usuario' });
    }
  });
});

