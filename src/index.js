//apis
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
// api key
const API_KEY = '1c5ef8925c7549d5aa78b4ddb9563a20';



const technologyBtn = document.getElementById("technology");



// display technology news on click
technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();
});



// fetch tech news
const fetchTechnologyNews = async () => {
   
	fetch(TECHNOLOGY_NEWS+API_KEY)
	.then(response => response.json())
	.then(news =>{
		console.log(news)
		displayNews(news)
	})
    
}



// render news 
function displayNews(news) {

    newsdetails.innerHTML = "";

    news.articles.forEach(article => {
        
        const col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        const card = document.createElement('div');
        card.className = "p-2";

        const image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=article.urlToImage;

        const cardBody = document.createElement('div');
        
        const newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = article.title;

        const discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = article.description;

        const link = document.createElement('a');
        link.className="btn btn-dark";
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
