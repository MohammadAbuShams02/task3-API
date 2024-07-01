async function getPizza() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    const news = data.recipes;
  
    const result = news.map(function(ele) {
      return `
        <div class='article'>
          <h2>${ele.title}</h2>
          <img src='${ele.image_url}'>
        </div>
      `;
    }).join('');
  
    document.querySelector(".data").innerHTML = result;
  }
  
  getPizza();
  