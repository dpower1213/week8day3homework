function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let season = document.getElementsByName('season')[0].value
    let round = document.getElementsByName('round')[0].value
    doAPICall(season, round)
    }

let mybutton = document.getElementById('button1')
mybutton.addEventListener('click', (event)=> handleSubmit(event))
async function doAPICall(season, round){
    let result = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(result.data)
    data=result.data
    
    let count = data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length;
    // console.log(count);
    // console.log(data.length);
    for (let i = 0; i < count; i++){
        // let i = 4
        
    tbody = document.getElementsByTagName('tbody')[0];
    tr=document.createElement('tr');
    tbody.appendChild(tr);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
    tr.appendChild(td);

    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
    tr.appendChild(td);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.dateOfBirth;
    tr.appendChild(td);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
    tr.appendChild(td);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].wins;
    tr.appendChild(td);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
    tr.appendChild(td);
    
    td=document.createElement('td');
    td.innerText = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].url;
    tr.appendChild(td);
    };   
};