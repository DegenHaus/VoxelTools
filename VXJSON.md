## VXJSON File Format

{

    "metadata": {

        "name":"",
        "author":"",
        "walletAddress":"",
       

    },
    "types":[
        {"id":0, color:"#ffffff" }

    ]
    "segments": [
        { "start": {x:0,y:0,z:0}, "end": {x:1,y:1,z:1}, "type":0 }



    ],
    "bytesarray":""



}

### The bytesarray

this is an array of bytes that encodes a compressed version of the types array and the segments array. With just the bytesarray, those two arrays can be reconstructed fully. 

this array of bytes is compressed and is more useful for implanting as onchain data for a blockchain smart contract 