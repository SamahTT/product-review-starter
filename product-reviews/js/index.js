// Fetch data from API 
let storedData

// Fetch function 
fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/:productId/reviews')
    .then(response => {
        if(!response.ok){
            throw new Error("Couldn't fetch API, Network issue")
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
        //console.log(data.aggregate.counts[1].count)
        storedData = data; 
    })
    .catch(error =>{
        console.error('There was a problem with the fetch operation:', error);
    })

// Display data on overall ratings 
// Get elements by their IDs
const excellentPercentage = document.getElementById('excellent-percentage');
const goodPercentage = document.getElementById('good-percentage');
const averagePercentage = document.getElementById('average-percentage');
const belowAveragePercentage = document.getElementById('below-average-percentage');
const poorPercentage = document.getElementById('poor-percentage');

// Set percentages values 

const percentages = {
    excellent: 90,
    good: 75,
    average: 50,
    below_average: 45, 
    poor: 20
};

// call functio 
updatePercentages()


// Function to update percentages in the DOM
function updatePercentages(){
    excellentPercentage.textContent = `${percentages.excellent}%`; 
    goodPercentage.textContent = `${percentages.good}%`;
    averagePercentage.textContent = `${percentages.average}%`;
    belowAveragePercentage.textContent = `${percentages.below_average}%`;
    poorPercentage.textContent = `${percentages.poor}%`;

    // Update percentages bars 
}

