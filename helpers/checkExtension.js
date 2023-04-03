function checkExtension (fileName){
const EXTENSIONS = ["js", "json", "txt", "xml", "html", "css"];
const ext = fileName.slice(fileName.lastIndexOf('.') + 1);
// console.log(ext)
const res = EXTENSIONS.includes(ext);

return {ext, res
}

}
module.exports = checkExtension;