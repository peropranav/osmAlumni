const fs = require('fs');

let rawdata = fs.readFileSync('dataAlumini.txt');
let student = JSON.parse(rawdata);
console.log(student['Form Responses 1'][0]);


var htmlData = "";

for(var i = 0 ; i <student['Form Responses 1'].length;i++ ) {
    htmlData = htmlData +  `<tr> 
    
    
    <td>${student['Form Responses 1'][i]['Full Name']} </td> 
    <td> ${student['Form Responses 1'][i]['Year of Passing (Batch)']}</td>
    <td> ${student['Form Responses 1'][i]['Current Occupation']}</td>
    <td> ${student['Form Responses 1'][i]['Date of Birth']}</td>
    </tr>
    `
}
fs.writeFileSync('finaldata.txt', htmlData);

