let projectCard = [
//   { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
//     title: "Dumbways web app -2025",
//     duration: "1 bulan",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
//     { image: "https://th.bing.com/th?id=OIF.o99iCqhjQcBLqf8MF%2fXKRQ&w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     title: "Dumbways web app -2025",
//     duration: "1 bulan",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
//     { image: "https://th.bing.com/th/id/OIP.akl_eQWJAPNt2o8yMr--TAHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     title: "Dumbways web app -2025",
//     duration: "1 bulan",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },

//     { image: "https://th.bing.com/th/id/OIP.f9uy8Wra5c246RU5F57RngHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     title: "Dumbways web app -2025",
//     duration: "1 bulan",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
//     { image: "https://i.pinimg.com/1200x/0b/5a/3f/0b5a3ff8a39162c938bdd87a44cf1d91.jpg",
//     title: "Dumbways web app -2025",
//     duration: "1 bulan",
//     description: "Nokia is a Finnish multinational corporation founded on 12 May 1865 as a single paper mill operation. Through the 19th century the company expanded, branching into several different products. In 1967, the Nokia corporation was formed. In the late 20th century, the company took advantage of the increasing popularity of computer and mobile phones. " }
 ];

// Elemen target di HTML
let container = document.getElementById("card-container");

// Loop untuk membuat kartu
if (container){
projectCard.forEach(card => {
  // Membuat elemen div untuk kartu
  let cardElement = document.createElement("div");
  cardElement.className = "projectCard";

  // Menambahkan konten ke kartu
  cardElement.innerHTML = `
  <a href="detail.html" target="_blank">
                <img src="${card.image}" alt="${card.title}">
                </a>
                <h3>${card.title}</h3>
                <p>Durasi:${card.duration}</p>
               <p>${card.description}</p>
                <div class="tech-icon">📱🤖♨️</div>

                <div class="button-container">
                    <button class=" btn-button">edit</button>
                    <button class=" btn-button">delete</button>
                </div>
            </div>
            `;

  // Menambahkan kartu ke dalam container
  container.appendChild(cardElement);
});

} else {
    console.error("Element with id 'card-container' not found")
}