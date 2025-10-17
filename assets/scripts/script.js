let project = [
    {
        image: "../images/reeanweb.png",
        title: "Submission Form",
        description: " Project Submission Form adds or uploads information abaut a project indo a database or portofolio page.",
        languages: ["Html", "Css", "Javascript", "Express"]
    },
    {
        image: "https://i.ytimg.com/vi/CNKcBz21Lr8/maxresdefault.jpg",
        title: "Web Calculator",
        description: "Web Calculator is a web based application used to perform matematical calculation directly trough a browser.",
        languages: ["Html", "Css"]
    },
    {
        image: "https://user-images.githubusercontent.com/71531185/258106529-0449d64e-bfc5-4088-9dc0-dd1d41d8762a.png",
        title: "Login Page",
        description: "This is a modern Login Page layout. It includes a form for entering a username and password.",
        languages: ["Html", "Css", "Javascript"]
    },
    {
        image: "https://www.codewithrandom.com/wp-content/uploads/2023/01/blog-card-template-7.jpg",
        title: "blog Card",
        description: "This is a blog news section that display the latses articles forma website.",
        languages: ["Html", "Css"]
    },
    {
        image: "https://foolishdeveloper.com/wp-content/uploads/2024/01/Copy-of-Copy-of-codewithrandom233.png",
        title: "Profile Cerd",
        description: "This is a Profile news section that display the latses articles forma website.",
        languages: ["Html", "Css"]
    },

];

let container = document.getElementById('card-project');
function languageItem(lang) {
    const languages = []
    for (let index = 0; index < lang.length; index++) {
        const item = lang[index];
        languages.push(`<span class="bg-gray-200 text-s px-3 py-1 rounded-full">${item}</span>`)
    }
    return languages.join('');
}

for (let i = 0; i < project.length; i++) {
    let card =
        `<div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col" >

        <a href="add-project.html">
          <div class="bg-gray-100 flex justify-center items-center">
            <img src="${project[i].image}" alt="screenshot" class="w-full max-w-sm ">
            </div>
            </a>

          <div class="p-6 flex flex-col justify-between h-full"></div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${project[i].title}</h3>
            <p class="text-gray-700 text-sm mb-4">
              ${project[i].description}
            </p>

            <div class="flex flex-wrap gap-2 mb-4" id="stacks">
            ${languageItem(project[i].languages)}
            </div>
          </div>

          <div class="flex items-center gap-6 text-sm text-gray-600 mt-auto mb-6">
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5"
                viewBox="0 0 24 24">
                <path d="M12 6v6h6" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Private Repository
            </div>

            <a href="#" class="flex items-center gap-1 text-blue-500 hover:underline">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>`
    container.innerHTML += card;
}