function makePlaylists (key, value){
    var res = {};

    for(let i=0; i < key.length; i++){
        res[key[i]]=value[i];
    }
    return res;
}

// function hash(_string, _storageMax){
//     var hs = 0;
//     for (var i = 0; i < _string.length; i++){
//         hs = (hs + _string.charCodeAt(i))*10+i; 
//     }
//     return hs%_storageMax;
// }
// function makePlaylists (key, value){
//     let res = [];
//     const _StoMax = 1024;

//     var index = hash(key, _StoMax);
//     if(res[index]===undefined){
//         res[index] = [[key, value]];
//     } else{
//         var flag = false;
//         for(let i = 0; i < res[index].length; i++){
//             if(res[index][i][0]===key){
//                 res[index][i][1] = value;
//                 flag = true;
//             }
//         }
//         if(flag === false){
//             res[index].push([key, value]);
//         }
//     }
//     console.log(res);
// }

let songs = ["a", "ab", "abc"];
let artists = ["m", "m", "n"];

console.log(makePlaylists(artists, songs));