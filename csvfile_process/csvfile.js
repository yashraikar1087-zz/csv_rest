var fs = require("fs");
const csv = require('csv-parse');

function processCSV(prcJSON) {
    const csvFilePath = './csvfile_process/procurement.csv';
    const csv = require('csvtojson');

    csv().fromFile(csvFilePath).then((obj_csv) => {
        console.log("OBJ length cond1:"+obj_csv.length);
        if (obj_csv.length === 0) {
            console.log("In Condition 1, if file empty");

            const Json2csvParser = require('json2csv').Parser;
            
            const fields = ['Id', 'Name', 'Sport'];
            
            const json2csvParser = new Json2csvParser({ fields });

            const csv = json2csvParser.parse(prcJSON);            
            console.log(csv);
            fs.writeFileSync('./csvfile_process/procurement.csv', csv, function(err) {
                if (err) throw err;
                console.log('file saved');
            });
        }
        else if (obj_csv.length !== 0) {
            console.log("In Condition 2, update existing record");
            obj_csv.map(function (obj) {
                if (obj.Id == prcJSON.Id) {
                    obj.Name = prcJSON.Name
                    obj.Sport =  prcJSON.Sport
                    const Json2csvParser = require('json2csv').Parser;
                    const fields = ['Id', 'Name', 'Sport'];
                    
                    const json2csvParser = new Json2csvParser({ fields });    
                    const csv = json2csvParser.parse(prcJSON);
                    
                    console.log(csv);
                    fs.writeFileSync('./csvfile_process/procurement.csv', csv, function(err) {
                        if (err) throw err;
                        console.log('file saved');
                    }); 
                }
                else if (obj.Id != prcJSON.Id) {
                    console.log("In Condition 3, add new id record to excel");
                    const Json2csvParser = require('json2csv').Parser;
                    const fields = ['Id', 'Name', 'Sport'];
                    
                    const json2csvParser = new Json2csvParser({ fields });
                    const csv = json2csvParser.parse(prcJSON);
                    
                    console.log(csv.slice(19));
                    fs.appendFileSync('./csvfile_process/procurement.csv', csv.slice(19), function(err) {
                        if (err) throw err;
                        console.log('file saved');
                        break;
                    });
                }
            })
        }
    });

    // csv().fromFile(csvFilePath).then((obj_csv) => {
    //     if (obj_csv.length === 0) {
    //         console.log("In Condition 1, if file empty, create new");

    //         const Json2csvParser = require('json2csv').Parser;
            
    //         const fields = ['Id', 'Name', 'Sport'];
            
    //         const json2csvParser = new Json2csvParser({ fields });

    //         const csv = json2csvParser.parse(prcJSON);            
    //         console.log(csv);
    //         fs.writeFile('./csvfile_process/procurement.csv', csv, function(err) {
    //             if (err) throw err;
    //             console.log('file 1 saved');
    //         });
    //     }
    // });

    // csv().fromFile(csvFilePath).then((obj_csv) => {
    //     if (obj_csv.length !== 0) {
    //         obj_csv.map(function (obj) {
    //             if (obj.Id == prcJSON.Id) {
    //                 console.log("In Condition 2, if record exists, then update existing");
    //                 obj.Id = prcJSON.Id
    //                 obj.Name = prcJSON.Name
    //                 obj.Sport =  prcJSON.Sport
                    
    //             }
    //         });
            
    //         const Json2csvParser = require('json2csv').Parser;
            
    //         const fields = ['Id', 'Name', 'Sport'];
            
    //         const json2csvParser = new Json2csvParser({ fields });

    //         const csv = json2csvParser.parse(obj_csv);            
    //         console.log(csv);
    //         fs.writeFile('./csvfile_process/procurement.csv', csv, function(err) {
    //             if (err) throw err;
    //             console.log('file 2 saved');
    //         });
    //     }
    // });

    // csv().fromFile(csvFilePath).then((obj_csv) => {
    //     if (obj_csv.length !== 0) {
    //         obj_csv.map(function (obj) {
    //             if (obj.Id != prcJSON.Id) {
    //                 console.log("In Condition 3, if new record, then insert below");
    //                 const Json2csvParser = require('json2csv').Parser;
            
    //                 const fields = ['Id', 'Name', 'Sport'];
                    
    //                 const json2csvParser = new Json2csvParser({ fields });
        
    //                 const csv = json2csvParser.parse(prcJSON);            
    //                 console.log(csv);
    //                 console.log("Second In Condition 3, if new record, then insert below");
    //                 fs.appendFileSync('./csvfile_process/procurement.csv', csv, function(err) {
    //                     if (err) throw err;
    //                     console.log('In condition 3, file saved');
    //                 });     
    //             }
    //         });
    //     }
    // });

}


var fileExists = function(path, reqJSON) {
    if (fs.existsSync(path)) {
        console.log('Process CSV');
        processCSV(reqJSON);
    } else {
        fs.writeFileSync('./csvfile_process/procurement.csv', '');  // ['Id','Name','Sport']+'\n'
        console.log('Created a CSV file');
        processCSV(reqJSON);
    }
}

module.exports = {
    fileExists
}