/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// Importa il modulo 'inquirer' per ottenere l'input dell'utente.
import inquirer from "inquirer";

// Importa il modulo 'qr-image' per creare codici QR.
import qr from "qr-image";

// Importa il modulo 'fs' per manipolare i file.
import fs from "fs";

// Chiede all'utente di inserire un URL tramite inquirer.
inquirer
  .prompt([
    { message: "Type in your URL: ", name: "URL" }
  ])
  .then((answers) => {
    // Estrapola l'URL inserito dall'utente dalle risposte fornite da inquirer.
    const url = answers.URL;

    // Crea un'immagine del codice QR corrispondente all'URL utilizzando qr-image.
    var qr_svg = qr.image(url);

    // Salva l'immagine del codice QR in un file chiamato 'qr_img.png'.
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    // Crea un file di testo chiamato 'URL.txt' e salva l'URL inserito dall'utente al suo interno.
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    // Gestisce eventuali errori che potrebbero verificarsi durante l'esecuzione di inquirer.
    if (error.isTtyError) {
      // Handle TTY Error
    } else {
      // Handle other errors
    }
  });

/*
   In sintesi, questo codice utilizza inquirer per ottenere l'input dell'utente riguardante un URL,
   poi utilizza qr-image per generare un'immagine del codice QR corrispondente all'URL inserito e 
   infine salva sia l'immagine del codice QR che l'URL in un file di testo chiamato 'qr_img.png' e 'URL.txt' rispettivamente. 
   L'uso dei pacchetti npm rende il processo di ottenere l'input dell'utente, 
   generare codici QR e salvare i dati in un file molto più semplice ed efficiente.
*/

/*
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
     
    }
  });
  */