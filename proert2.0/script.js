
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
  
    if (cardNumber && cardHolder && expiryDate && cvv) {
        
        alert('Карта добавлена!');
    } else {
        alert('Please fill in all fields.');
    }
  });

  document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});


document.getElementById('logo').addEventListener('click', function() {
    this.classList.toggle('rotate');
});


document.getElementById('logo').addEventListener('click', function() {
    this.classList.toggle('bounce');
});

const news = [
   { 
    title: "mac book air",
    content: "новый модель",
    imageurl: "https://gadgetstore.kz/wa-data/public/shop/products/47/09/947/images/2704/2704.970.jpg",
   },
   {
    title: "air pods max",
    content: " new model",
    imageurl: "https://images.satu.kz/227263445_w600_h600_227263445.jpg",
   },
   {
    title: "apple watch",
    content: " new model",
    imageurl: "https://optim.tildacdn.pro/tild3238-3539-4134-b266-363364646338/-/format/webp/hero__fmx18j9bq0ya_m.jpg",
   },
]

document.getElementById('search-Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const filteredNews = news.filter(n => n.title.toLowerCase().includes(searchQuery));
  
    const newsContainer = document.querySelector(".features");
    newsContainer.innerHTML = '';
  
    filteredNews.forEach(n => {
      const newsArticle = `
        <article class="categories">
          <img src="${n.imageUrl}" alt="${n.title}">
          <h3>${n.title}</h3>
          <p>${n.content}</p>
          <a href="#" class="btn" data-news="${n.content}">Читать далее</a>
        </article>
      `;
      newsContainer.innerHTML += newsArticle;
    });
  
    setupReadMoreButtons(); 
  
    if (filteredNews.length === 0) {
      newsContainer.innerHTML = '<p>Ничего не найдено.</p>';
    }
  });
  
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('newsModal').style.display = 'none';
  });
  
  
  setupReadMoreButtons();

  