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

            let hasColor = splitLine[3]

            if(hasColor){
                rawVoxelArray.push({
                    x: parseInt(splitLine[0]),
                    y: parseInt(splitLine[1]),
                    z: parseInt(splitLine[2]),
                    color: splitLine[3]                
                })
            }
           
        }



        //find offset and apply it so all coords are positive 
        let structureOffset = VoxelDataHelper.getNegativeOffsets( rawVoxelArray )

        let offsetToApply = VoxelDataHelper.negateCoords(structureOffset)

        console.log('offsetToApply',offsetToApply)

        VoxelDataHelper.shiftVoxelsByOffset( rawVoxelArray, offsetToApply )

        //if some coords are still invalid, throw an error 
        for(let row of rawVoxelArray){
            if(!VoxelDataHelper.coordinateIsValid( row.x, row.y, row.z )){
                return {success:false, error:`Voxel is invalid: ${JSON.stringify(row)}`}
            }
        }

       
        return {success:true, voxelArray: rawVoxelArray, offsetApplied: offsetToApply}      
    }
 

    static getNegativeOffsets(rawVoxelArray){
        let output = {x:0,y:0,z:0}

        for(let row of rawVoxelArray){

            for(let dimension of ['x','y','z']){
                if( row[dimension] < output[dimension] ){

                     output[dimension] = row[dimension]

                   
                }
            }
        }

        return output
    }

    static shiftVoxelsByOffset(voxelRows, offset){

        for(let row of voxelRows){
            row.x += offset.x
            row.y += offset.y 
            row.z += offset.z 
        }

    }



    static negateCoords(coords){
        coords.x = -coords.x;
        coords.y = -coords.y;
        coords.z = -coords.z;
        return coords
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

    static coordinateIsValid(x,y,z){
        return (x>=0 && y>=0 && z>=0) && (x < maxWidth && y < maxWidth && z< maxWidth)
    }



    //used to build a nice flat map array for the voxel data so we can run our greedy mesh algo 
    static getIndexFromCoordinates(x,y,z){
        return  (x) + (y*maxWidth) + (z*maxWidth*maxWidth)

    }


    static buildSegmentsArray(rawVoxelData, typesArray){

        let segments = [] 
        let greedyMask = [] //keep going and building segments until everything is masked [included in a segment]


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