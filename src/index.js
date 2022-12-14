// api key
const API_KEY = '1c5ef8925c7549d5aa78b4ddb9563a20'

//apis
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=";
const Headlines = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5ef8925c7549d5aa78b4ddb9563a20"
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";



// buttons variables
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");



document.addEventListener('DOMContentLoaded', () => {
    // display hotnews onload
	window.onload = () => {
		newsType.innerHTML="<h4>Headlines</h4>";
		fetchHeadlines();
	};
	

	// display  news on click
	generalBtn.addEventListener("click",() => {
		newsType.innerHTML="<h4>general news</h4>";
		fetchGeneralNews();
	});

	businessBtn.addEventListener("click",() => {
		newsType.innerHTML="<h4>Business </h4>";
		fetchBusinessNews();
	});

	sportsBtn.addEventListener("click",() => {
		newsType.innerHTML="<h4>sports</h4>";
		fetchSportsNews();
	});

	entertainmentBtn.addEventListener("click",() => {
		newsType.innerHTML="<h4>entertainment</h4>";
		fetchEntertainmentNews();
	});

	technologyBtn.addEventListener("click",() => {
		newsType.innerHTML="<h4>Technology</h4>";
		fetchTechnologyNews();
	});
     
    searchBtn.addEventListener("click",(e) => {
		// newsType.innerHTML="<h4>newsQuery.value</h4>";
         e.preventDefault()
		fetchQueryNews();
		document.getElementById("search-form").reset();
	});
	

	// fetch  news
    const fetchHeadlines =  () => {
		 fetch(Headlines)
		 .then(response => response.json())
		 .then(news => { 
			console.log(news)
			displayNews(news)})
	}

    const fetchGeneralNews = () => {
	
		fetch(GENERAL_NEWS+API_KEY)
		.then(response => response.json())
		.then(news =>{
			console.log(news)
			displayNews(news)
		})
		
	}

	const fetchBusinessNews = () => {
	
		fetch(BUSINESS_NEWS+API_KEY)
		.then(response => response.json())
		.then(news =>{
			console.log(news)
			displayNews(news)
		})
		
	}

	const fetchSportsNews = () => {
	
		fetch(SPORTS_NEWS+API_KEY)
		.then(response => response.json())
		.then(news =>{
			console.log(news)
			displayNews(news)
		})
		
	}

	const fetchEntertainmentNews = () => {
	
		fetch(ENTERTAINMENT_NEWS +API_KEY)
		.then(response => response.json())
		.then(news =>{
			console.log(news)
			displayNews(news)
		})
		
	}


	const fetchTechnologyNews = () => {
	
		fetch(TECHNOLOGY_NEWS+API_KEY)
		.then(response => response.json())
		.then(news =>{
			console.log(news)
			displayNews(news)
		})
		
	}
    
	const fetchQueryNews =  () => {
		 fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY)
		 .then(response => response.json())
		 .then(news =>{
			console.log(news)
			 displayNews(news)})
	}
	
	// render news 
	function displayNews(news) {

		newsdetails.innerHTML = "";

		news.articles.forEach(article => {
			
			const col = document.createElement('div');
			col.className="col-lg-6 col-md-4 col-sm-12  card ";

			const card = document.createElement('div');
			card.className = "p-2";

			const image = document.createElement('img');
			image.setAttribute("height","matchparent");
			image.setAttribute("width","100%");
			image.src = article.urlToImage;

			const cardBody = document.createElement('div');
			
			const newsHeading = document.createElement('h5');
			newsHeading.className = "card-title";
			newsHeading.innerHTML = article.title;

			const discription = document.createElement('p');
			discription.className="text-muted";
			discription.innerHTML = article.description;

			const link = document.createElement('a');
			link.className="btn btn-outline-info btn-lg btn-block";
			link.setAttribute("target", "_blank");
			link.href = article.url;
			link.innerHTML="Read more";

			cardBody.appendChild(newsHeading);
			cardBody.appendChild(discription);
			cardBody.appendChild(link);

			card.appendChild(image);
			card.appendChild(cardBody);

			col.appendChild(card);

			newsdetails.appendChild(col);
		});

	}
})


// form handler

const form = document.getElementById("signup-form");
const jumbo = document.getElementById('jumbo')
form.addEventListener("submit", function(event) {
	event.preventDefault();
	form.style.display = "none";
    jumbo.style.display = "none"
	const news = document.getElementById("news");
	news.style.display = "block";
  });

// prevent user from skipping the form
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var passwordConfirm = document.getElementById('password-confirm').value;

  if (name == '') {
	alert('Please enter your name');
	return false;
  }

  if (email == '') {
	alert('Please enter your email');
	return false;
  }

  if (password == '') {
	alert('Please enter a password');
	return false;
  }

  if (password != passwordConfirm) {
	alert('Passwords do not match');
	return false;
  }

  return true;
}

// prevent scroll before signup
function enableScroll() {
   
    document.body.style.overflow = 'auto';
  
    return true;
  }