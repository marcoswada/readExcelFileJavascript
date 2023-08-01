const input=document.getElementById("file-input");
const table=document.getElementById("excel-table");

input.addEventListener('change', (event)=>{
    table.innerHTML="";
    const file=event.target.files[0];
    readXlsxFile(file).then((rows)=>{
        // console.log(rows);
        console.log ("lendo arquivo");
        rows.forEach((row) => {
            let tr=document.createElement("tr");
            row.forEach((cell)=>{
                const td=document.createElement("td");
                td.textContent=cell;
                tr.appendChild(td);

            })
            table.appendChild(tr);
        });
    })
    console.log ("terminado leitura de arquivo");
})