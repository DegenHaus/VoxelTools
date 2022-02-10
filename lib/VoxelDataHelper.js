const maxWidth = 128;


var voxelMemoryCache = []

export default class VoxelDataHelper {

   

    static buildRawVoxelDataFromText( inputText ){

        let rawVoxelArray = []
        
        let inputData = inputText.toString()
        let inputDataLines = inputData.split('\n')
        inputDataLines = inputDataLines.filter(n => !n.startsWith('#'))
        
        for(let line of inputDataLines){

            let splitLine = line.trim().split(' ')

            if(splitLine[3]){
                rawVoxelArray.push({
                    x: splitLine[0],
                    y: splitLine[1],
                    z: splitLine[2],
                    color: splitLine[3]                
                })
            }
           
        }

       
        return rawVoxelArray        
    }


    static buildTypesArray(rawVoxelData){

        let uniqueTypes = {}

        for(let row of rawVoxelData){
            if(!uniqueTypes[row.color]){
                uniqueTypes[row.color] = {id: Object.keys(uniqueTypes).length , color: row.color }
            }

        }

       
        return Object.values( uniqueTypes )
    }


    static buildSegmentsArray(rawVoxelData, typesArray){

        let segments = [] 


        let uniqueTypes = {}
        for(let type of typesArray){
            uniqueTypes[type.color] = type
        }


        //do some sort of greedy compression here 
        for(let voxel of rawVoxelData){
            
        }

        return segments 

        
    }



    static buildCompressedBytesArray(typesArray, segmentsArray){

        
    }


}