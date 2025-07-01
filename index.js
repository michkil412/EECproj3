/* og:
fetchCSV("https://www.monitoringanalytics.com/data/marginal_fuel.shtml");

async function fetchCSV(url)
{
    try 
    {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById('output').innerText = data;
    } catch(error) {
        console.error('Error fetching CSV:', error.message);
    }
}*/ 

/* not async grrr
fetch("https://www.monitoringanalytics.com/data/marginal_fuel.shtml")
    .then(response => 
    {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            throw new Error('network response was not ok');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('problem with fetch function:', error));
*/

async function test()
{
    try 
    {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.monitoringanalytics.com/data/marginal_fuel.shtml');
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
        }
       else
       {
            throw new Error ('webpage response not valid');
       }
    } catch(error) {
        console.error('function error:', error);
    }
}

test()