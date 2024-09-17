// Fetch data from API 
let storedData
let usersData

// Fetch product reviews data  
fetch('./data/product-reviews.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldn't fetch API, Network issue")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        // console.log(data[0].content)
        storedData = data
        renderReviews(storedData)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })

fetch('./data/users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldn't fetch API, Network issue")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        // console.log(data[0].content)
        usersData = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })

/*
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
function updatePercentages() {
    excellentPercentage.textContent = `${percentages.excellent}%`;
    goodPercentage.textContent = `${percentages.good}%`;
    averagePercentage.textContent = `${percentages.average}%`;
    belowAveragePercentage.textContent = `${percentages.below_average}%`;
    poorPercentage.textContent = `${percentages.poor}%`;

    // Update percentages bars 
}

function renderReviews(storedData) {
    // Loop through reviews to display in page
    storedData.forEach(comment => {
        // get all attributes needed from data 
        const user = usersData.find(user => user.user_id === comment.user_id)

        console.log(user)

        let user_id = user.user_id
        let content = comment.content
        let date_created = comment.created_at
        let rating = comment.rating
        let user_name = user.name
        let avatar_url = user.avatar_url

        let newDiv1 = document.createElement('div')
    
        let newDiv2 = document.createElement('div')
    
        let newDiv3 = document.createElement('div')


    })
}
*/
