// Fetch data from API 
fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/:productId/reviews')
    .then(response => {
        if(!response.ok){
            throw new Error("Couldn't fetch API, Network issue")
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
        console.log(data.aggregate.counts[0].count)
    })
    .catch(error =>{
        console.error('There was a problem with the fetch operation:', error);
    })
