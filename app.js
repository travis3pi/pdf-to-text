
//Imports
const PDFImage = require("pdf-image").PDFImage;
const fs = require('fs');
const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}


let pdfArray = []
const files = fs.readdirSync('/content');

//Iterate over files and change names if it includes a special character, populate array.
files.forEach(file => {
    if (file.split('.')[1] === 'pdf') {
        fs.renameSync('/content/'+file,'/content/'+file.split(" ").join('-').replace(/[&\/\\#,+()$~%'":*?<>{}]/g,'_'));
        pdfArray.push(file.split(" ").join('-').replace(/[&\/\\#,+()$~%'":*?<>{}]/g,'_'));
    }

    console.log(pdfArray);

})


//Process the PDF
async function processPDF() {

    for (const file of pdfArray) {
        // Convert PDF into image for OCR
        const pdfImage = await new PDFImage("/content/" + file, {
            combinedImage: true,
            quality: 100,
            convertOptions: {
                "-resize": "150%"
            }
        });
        let imagePaths = await pdfImage.convertFile().catch(err => console.log(err));

        //Run OCR on resulting image
        const textResult = await tesseract.recognize(imagePaths, config).catch(err => console.log(err));

        //Remove temp image
        fs.unlinkSync(imagePaths);

        //Write to text file
        fs.writeFileSync('/content/' + file.split('.')[0] + '.txt', textResult, 'utf-8');
        console.log('Finished converting:' + file);
    }

}

//Process files
processPDF().then(async () => {
    console.log('DONE :)');
});




