import fs from 'fs'


function run(){
    console.log('Export VSJson')

    const inputArgs = process.argv.slice(2);
    console.log('inputArgs: ', inputArgs);
    

    let inputFileName = inputArgs[0]
    if(!inputFileName || !inputFileName.endsWith('.txt')){
        console.log('Invalid input file: must be a .txt file')
    }

    let outputFolder = 'output/'

    let modelName = 'TestModel'
    let authorName = ''
    let authorWalletAddress = ''

    let typesArray = []
    let segmentsArray = []
    let compressedBytesArray = ""

    

    let rootFileName = modelName
    let outputFileName = rootFileName.concat('.vxjson')

    let outputFileData = {
        metadata:{
        name: modelName,
        author: authorName,
        walletAddress:authorWalletAddress
        },        
        types:typesArray,
        segments:segmentsArray,
        bytesArray:compressedBytesArray
    } 

    let outputFile = fs.writeFileSync(outputFolder.concat(outputFileName), JSON.stringify(outputFileData))
    
    console.log('exported ',outputFileName)
    
}


run()

