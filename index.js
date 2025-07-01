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
}
