var fs = require("fs");
const path = './csvfile_process/procurement.csv'


var fileExists = fs.access(path, fs.F_OK, (err) => {
    if (!err) {
        console.log('Process CSV');
    } else if (err) {
        fs.writeFileSync('./csvfile_process/procurement.csv', 'Some log\n');
        console.log('Created a CSV file');
    }
})

var csvData = function(reqJSON) {    
    return "here"
}

module,exports = csvData;

// var obj_one = [
//     {
//         Id: 11,Name: "Roger",Sport: "Tennis"
//     },    
//     {
//         Id: 12,Name: "Max",Sport: "F1"
//     },    
//     {   
//         Id: 13,Name: "Lionel",Sport: "Foot Ball"
//     },    
//     {   
//         Id: 14,Name: "Ali",Sport: "Boxing"
//     },    
//     {
//         Id: 15,Name: "Sainath",Sport: "Eating"
//     }
// ]

// var obj_two = {
//     Id: 16,Name: "Sainath",Sport: "Racing"
// }

// console.log("Id in JSON : " + obj_two["Id"]);

// // var arr_ids = [];

// obj_one.map(function(obj) {
//     if(obj_two.Id === obj.Id) {
//         obj.Name = obj_two.Name
//         obj.Sport =  obj_two.Sport
//     }
// })

// console.log(obj_one)


// for(i = 0; i<Object.keys(obj_one).length; i++) {
//     arr_ids.push(obj_one[i]["Id"]);
// }

// console.log("Ids in Excel :" + arr_ids);
// var a = arr_ids.indexOf(obj_two["Id"]);
// console.log(`Id ${obj_two["Id"]} is at index ${a}`);

// obj_one[4] = obj_two;

// console.log(obj_one);


// var fs = require('fs');
// var json2csv = require('json2csv');
// var newLine= "\r\n";

// var fields = ['Total', 'Name'];

// var appendThis = [
//     {
//         'Total': '100',
//         'Name': 'myName1'
//     },
//     {
//         'Total': '200',
//         'Name': 'myName2'
//     }
// ];

// var toCsv = {
//     data: appendThis,
//     fields: fields,
//     hasCSVColumnTitle: false
// };

// fs.stat('file.csv', function (err, stat) {
//     if (err == null) {
//         console.log('File exists');

//         //write the actual data and end with newline
//         var csv = json2csv(toCsv) + newLine;

//         fs.appendFile('file.csv', csv, function (err) {
//             if (err) throw err;
//             console.log('The "data to append" was appended to file!');
//         });
//     }
//     else {
//         //write the headers and newline
//         console.log('New file, just writing headers');
//         fields= (fields + newLine);

//         fs.writeFile('file.csv', fields, function (err, stat) {
//             if (err) throw err;
//             console.log('file saved');
//         });
//     }
// });