"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await fetchPost();
  console.log(projects); // Log to the console that the app is running
  displayProjectsGrid(projects); // Call Function
}

async function fetchPost() {
  const response = await fetch("https://exampractice.timiweb.dk/wp-json/wp/v2/projects?acf_format=standard");
  const data = await response.json();
  return data;
}

function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#posts-grid");

  for( const project of projects) {
    projectsGrid.insertAdjacentHTML(
      "beforeend",
      //HTML!
      `
    <article class="grid-item">
      <div class="space-picture"> 
        <img src="${project.acf.image}" alt="${project.acf.title}" />
      </div> 
      <div class="side-text">
        <h2>${project.acf.title}</h2>
        <h4>Client: ${project.acf.client}</h4>
        <p>${project.acf.description}</p>
        <a href="${project.acf.link}" target="_blank"><button>Learn more</button></a>
      </div>
    </article>
      `
    );
  }
}

// DROP DOWN MENU FOR ALL MOBILE PAGES 

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Scrolling animation for form when you will click on CONTACT in the MENU 

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  }
});
