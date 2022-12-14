console.log("shukri")
// get top scorers
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

const topscorers = "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=39"

// fetch('https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=39', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    const displaytopscorers = () => {
        fetch(topscorers, options)
        	.then(response => response.json())
        	.then(
                
                response => console.log(response))
        	.catch(err => console.error(err));
    }
displaytopscorers()