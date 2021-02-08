  const searchData =() => {
    const inputValue= document.getElementById('searchInput').value;
     const url= `https://www.themealdb.com/api/json/v1/1/categories.php/${inputValue}`
      fetch (url)
      .then(res => res.json())
      .then(data =>searchResult (data.categories))
  }

  const searchResult = result => {
    const showImg = document.getElementById('showImg');
    
     for (let i=0; i<result.length; i++){
       const food= result[i];
      //  console.log(food);
     const foodDiv = document.createElement('div')
     foodDiv.className ='foodList'
     const foodInfo =`
     
      <h3> ${food.strCategory} </h3>
     <img class=foodImg src ='${food.strCategoryThumb}'>
     <button class="button-pro" onclick ="displayFoodDetails('${food.strCategory}')"> Details </button>

     `;
     foodDiv.innerHTML =foodInfo;
     showImg.appendChild(foodDiv);
     
      
  }
 }
  
 const displayFoodDetails= name =>{
   const url =`https://www.themealdb.com/api/json/v1/1/categories.php/${name}`;
   console.log(url)
   fetch (url)
   .then(res => res.json())
   .then (data => searchfoodDetails(data.categories[0]));

 }
 const searchfoodDetails = result => {
   
    console.log(result);
    
    const foodInfoDiv = document.getElementById('detailsFood');

  foodInfoDiv.innerHTML= `
    <h3>${result.strCategory}</h3>
    <p>${result.strCategoryDescription}</p>
  `
 
 }