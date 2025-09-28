let projectCard = [
  { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
    title: "Dumbways web app -2025",
    duration: "1 bulan",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
    { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
    title: "Dumbways web app -2025",
    duration: "1 bulan",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
    { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
    title: "Dumbways web app -2025",
    duration: "1 bulan",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },

    { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
    title: "Dumbways web app -2025",
    duration: "1 bulan",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
  
    { image: "https://a.storyblok.com/f/119877/1440x960/535ae83f94/adobestock_120392352_web.jpg",
    title: "Dumbways web app -2025",
    duration: "1 bulan",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" }
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
  <a href="project.html" target="_blank">
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