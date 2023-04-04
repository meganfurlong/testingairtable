//https://docs.google.com/spreadsheets/d/197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc/edit?usp=sharing

const sheetId = '197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'user-data';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`


const data = []
document.addEventListener('DOMContentLoaded', init)
 
const output = document.querySelector('.output')


 
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const data = JSON.parse(rep.substring(47).slice(0, -2));
            
            data.table.cols.forEach((heading)=>{
                //console.log(heading);
                

                if (heading.label == "Caption"){
                    const textBlurb = document.createElement('p');
                    textBlurb.textContent = data.table.rows[1];
                    output.append(textBlurb);
                    console.log(data.table.rows[1]);
                }
            })
          //console.log(data);
        })
}



 // const row = document.createElement('tr');
            // output.append(row);
            // data.table.cols.forEach((heading)=>{
            //     const cell = document.createElement('td');
            //     cell.textContent = heading.label;
            //     row.append(cell);
            // })
            // data.table.rows.forEach((main)=>{
            //     const container = document.createElement('tr');
            //     output.append(container);
            //     main.c.forEach((ele)=>{
            //         const cell = document.createElement('td');
            //         cell.textContent = ele.v;
            //         container.append(cell);
            //     })