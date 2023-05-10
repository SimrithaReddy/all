const fs = require("fs/promises")

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent).then(() => {
		console.log("My file is Created")
	})
}


const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let p = await fs.readFile(fileName, { encoding: "utf-8" })
	console.log(p);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	let r = await fs.appendFile(fileName, ` ${fileContent}`)
	console.log(r);
}


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }