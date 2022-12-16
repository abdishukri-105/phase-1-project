// // // console.log("shukri")



// // // // 1c5ef8925c7549d5aa78b4ddb9563a20 --- api key
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
};

// document.addEventListener('DOMContentLoaded', () =>{

   

//         // fetch('https://news-api14.p.rapidapi.com/top-headlines?country=england&language=en&pageSize=10&category=business&sortBy=timestamp', options)
//         // .then(response => response.json())
//         // .then(data => {
//         //     const card = document.getElementById('imgUrl')
//         //     console.log(card)
//         //     console.log(data)
//         //     card.src = data.url 
//         //     const cardtitle = document.getElementById('cardtitle')
//         //     console.log(cardtitle)
//         //     cardtitle.textContent = data.title
//         //     console.log(cardtitle.title)
//         //     const cardInfo = document.querySelector('#cardText')
//         //     cardInfo.textContent = data.url
//         //     body.appendchild(card)
//         // })
//         // .catch(err => console.error(err));


//         const card = (image, name) => {

//             const rootDiv = document.createElement('div')
//             rootDiv.classList.add('col-4', 'p-1')
    
//             const cardDiv = document.createElement('div')
//             cardDiv.classList.add('card', 'col-12', 'p-2')
    
//             const categoryImg = document.createElement('img')
//             categoryImg.classList.add('card-img-top')
//             categoryImg.src = image
    
//             const categoryTitle = document.createElement('h4')
//             categoryTitle.classList.add('card-title')
//             categoryTitle.innerText = name
    
//             // append title and image to card
//             cardDiv.appendChild(categoryImg)
//             cardDiv.appendChild(categoryTitle)
    
//             rootDiv.appendChild(cardDiv)
    
//             return rootDiv
    
//         }
  
//         const loadcard = () => {
//             fetch('https://news-api14.p.rapidapi.com/top-headlines?country=england&language=en&pageSize=10&category=business&sortBy=timestamp', options)
//                 .then((response) => response.json())
//                 .then((countries) => {
//                     const mealCountries = countries.meals
    
//                     const mealElems = mealCountries.map(
//                         area => c (area.strArea)
//                     )
                    
//                     countriesRow.append(...mealElems)
//                 })
//         }


// loadcard()
// card()

// })



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
// 		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
// 	}
// };

// fetch('https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=sports', options)
// 	.then(response => response.json())
// 	.then(data =>{
//         console.log(data)
//     } )
// 	.catch(err => console.error(err));





















// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
// // 		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
// // 	}
// // };

// // fetch('https://news-api14.p.rapidapi.com/top-headlines?country=england&language=en&pageSize=10&category=sports&sortBy=timestamp', options)
// // 	.then(response => response.json())
// // 	.then(data => 
// //         {
// //             data.

// //         })
// // 	.catch(err => console.error(err));



   
    
   

      
        
// //         fetch('https://news-api14.p.rapidapi.com/top-headlines?language=en&pageSize=10&category=technology&sortBy=timestamp', options)
// //             .then(response => response.json())
// //             .then(response => console.log(response))
// //             .catch(err => console.error(err));

          
    
            
// //             fetch('https://news-api14.p.rapidapi.com/search?q=computer&language=en&pageSize=10&publisher=cnn.com%2Cbbc.com&sortBy=timestamp', options)
// //                 .then(response => response.json())
// //                 .then(response => console.log(response))
// //                 .catch(err => console.error(err));



// // 
//   const ul = document.getElementById('authors');
//   const list = document.createDocumentFragment();
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const URL5 = 'https://news-api14.p.rapidapi.com/top-headlines?language=en&pageSize=10&category=technology&sortBy=timestamp'

//   fetch(URL5,options)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let authors = data;
// 	  console.log(authors)


//       authors.map(function(author) {
//         let li = document.createElement('li');
//         let name = document.createElement('h2');
//         let email = document.createElement('span');

//         name.innerHTML = `${author.name}`;
//         email.innerHTML = `${author.email}`;

//         li.appendChild(name);
//         li.appendChild(email);
//         list.appendChild(li);
//       });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

//   ul.appendChild(list);


const searchForm = document.querySelector('#search-form')
const input = document.querySelector('#search')
const newsList = document.querySelector('.class-list')
// console.log(searchForm)

searchForm.addEventListener('submit',retrieve)

function retrieve(e) {
    // load new data on new search
	// newsList.innerHTML = ''

	e.preventDefault()

	// alert when input field is empty
	if (input.value == ''){
		alert('please search')
		return
	}

	const apiKey = '1c5ef8925c7549d5aa78b4ddb9563a20'
    let topic = input.value 
	const url =`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
   
	fetch(url).then(res => res.json())
	.then(data => {
		console.log(data)
	 data.articles.forEach(article =>{

		const imageholder = document.getElementById('urlToImage')
		const title = document.getElementById('title')
		const description = document.getElementById('description')
		const a = document.getElementById('readmore')
		a.setAttribute('href', article.url)
		a.setAttribute('target', '-blank')

		a.textContent = article.url
		imageholder.src = article.urlToImage
		title.textContent = article.title
		description.textContent = article.description

		

	 })
	}).catch(error => console.log(error))
	
	console.log(topic)
}
