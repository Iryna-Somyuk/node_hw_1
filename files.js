const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const dataValidation = require('./helpers/dataValidation');
const checkExtension = require('./helpers/checkExtension');

function createFile (fileName, content) {
    const data = {
        fileName,
        content,
    }
const {error} = dataValidation(data);
// console.log(error.details[0]);
if(error){
    console.log(chalk.red(`Please specify ${error.details[0].context.key} parametr`));
}

const {ext, res} = checkExtension(fileName);
if(!res){
    console.log(chalk.red(`Application doesn't support files with ${ext} extension`));
}
const filePath = path.join(_dirname + "/files", fileName)
fs.writeFile(filePath, content, "utf-8");
console.log(chalk.blue("File created successfully"))

}


module.exports = {createFile};
