const fs = require('fs')
const yargs = require('yargs') 
yargs.version('1.1.0')

yargs.command({
	command: 'file',
	describe: 'Create a file',
	builder: {
		name: {
			describe: 'File Name',
			demandOption: true,
			type: 'string'	
		}
	},

	handler(argv) {
        let fileName = argv.name;
        if(fs.existsSync('./output/filelist.txt')){
            let fileList = fs.readFileSync(`${__dirname}/output/filelist.txt`,'UTF-8');
            if(fileList.includes(fileName)){
                console.log("File already exists! Please enter a new file name.");
            }
            else{
                fs.writeFileSync(`./output/${fileName}`,'You are awesome');
                fs.appendFileSync('./output/filelist.txt','\r\n' + fileName);
                console.log('File Created Successfully!');
            }
        }
		else{
            fs.writeFileSync(`./output/filelist.txt`,fileName);
            fs.writeFileSync(`./output/${fileName}`,'You are awesome');
            console.log('File Created Successfully!');
        }
	}
})

yargs.parse()