// // // console.log("shukri")



// // // // 1c5ef8925c7549d5aa78b4ddb9563a20 --- api key
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
//         'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
//     }
// };

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



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b7e8da5e2msh065d9972ad16fcdp175dfdjsn726f8012b370',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
	}
};

fetch('https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=sports', options)
	.then(response => response.json())
	.then(data =>{
        console.log(data)
    } )
	.catch(err => console.error(err));





















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

