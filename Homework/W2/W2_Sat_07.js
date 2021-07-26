var films = [
    {
        "name": "Paris, Texas",
        "country": "USA",
        "year": 1984,
        "director": "Wim Wenders",
        "watchedStatus": true
    },
    {

        "name": "Three Seasons",
        "country": "Vietnam",
        "year": 1999,
        "director": "Tony Bui",
        "watchedStatus": false
    },
    {
        "name": "Chungking Express",
        "country": "Hong Kong",
        "year": 1994,
        "director": "Wong Kar-wai",
        "watchedStatus": true
    },
    {
        "name": "Cemetery of Splendour",
        "country": "Thailand",
        "year": 2015,
        "director": "Apichatpong Weerasethakul",
        "watchedStatus": false
    },
    {
        "name": "The Scent of Green Papaya",
        "country": "Vietnam",
        "year": 1992,
        "director": "Tran Anh Hung",
        "watchedStatus": false
    },
    {
        "name": "Parasite",
        "country": "South Korea",
        "year": 2019,
        "director": "Bong Joon-ho",
        "watchedStatus": true
    },
    {
        "name": "Before Sunrise",
        "country": "USA",
        "year": 1995,
        "director": "Richard Linklater",
        "watchedStatus": true
    },
    {
        "name": "Breathless",
        "country": "France",
        "year": 1960,
        "director": "Jean-Luc Godard",
        "watchedStatus": false
    },
    {
        "name": "Cyclo",
        "country": "Vietnam",
        "year": 1994,
        "director": "Tran Anh Hung",
        "watchedStatus": true
    }
]

console.log("a. In ra 1 arr ten nhung phim Vietnam in db tren");
for (let i = 0; i < films.length; i++) {
    if (films[i].country === "Vietnam") {
        console.log(films[i].name);
    }
}


console.log("b. In ra ten director co nhieu phim nhat trong db tren");
var tmp = new Array();
for (let i = 0; i < films.length; i++) {
    //if(tmp.indexOf(films[i].director) === -1){
    tmp.push(films[i].director);
    //}
}

var counts = {};
let num = 0;
for (var i = 0; i < tmp.length; i++) {
    var str = tmp[i];
    counts[str] = counts[str] ? counts[str] + 1 : 1;
    if (num < counts[str]) {
        res = str;
    }
}
console.log(res);

// function comptHash(_string, _storageMax) {
//     var hs = 0;
//     for (var i = 0; i < _string.length; i++) {
//         hs = (hs + _string.charCodeAt(i)) * 10 + i;
//     }
//     return hs % _storageMax;
// }

// var cnt = new Array(10);
// function _b() {
//     var index = 0;
//     for (let i = 0; i < films.length; i++) {
//         if (tmp[index] === undefined) {
//             tmp[index] = [];
//         } else {
//             index = comptHash(films[i].director, tmp.length);
//             tmp[index] = films[i].director;
//         }
//     }
//     return tmp;
// }