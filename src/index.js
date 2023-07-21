import './style.css';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';
console.log("restraurant page incoming");
function component()
{

   const header = document.createElement('header');
   const heading = document.createElement('div');
   heading.textContent= "Tipu's";
   heading.id="heading";
   const pages = document.createElement('div');
   pages.id="pages";
   const home_btn = document.createElement('button'); home_btn.textContent = "Home";
   const menu_btn = document.createElement('button');menu_btn.textContent = "Menu";
   const contact_btn = document.createElement('button');contact_btn.textContent = "contact";
   pages.appendChild(home_btn);
   pages.appendChild(menu_btn);
   pages.appendChild(contact_btn);

   header.appendChild(heading);
   header.appendChild(pages);
   const Mid = document.createElement('div');
   Mid.appendChild(Home());
   home_btn.addEventListener('click',()=>{
    Mid.innerHTML = "";
    Mid.appendChild(Home());
   })
   menu_btn.addEventListener('click',()=>{
    Mid.innerHTML = "";
    Mid.appendChild(Menu());
   })
   contact_btn.addEventListener('click',()=>{
    Mid.innerHTML = "";
    Mid.appendChild(Contact());
   })
   const footer = document.createElement('footer');
   const left_footer = document.createElement('div');  left_footer.textContent = "Fonts taken from https://www.fontspace.com/";
   const right_footer = document.createElement('div');  right_footer.textContent = "Made by @vk0942"
   footer.appendChild(left_footer);footer.appendChild(right_footer);
   header.id="header";Mid.id="Mid";footer.id='footer';
   const content = document.createElement('div');
   content.id="content";
   content.appendChild(header);
   content.appendChild(Mid);
   content.appendChild(footer);
   return content;
}



document.body.appendChild(component());
