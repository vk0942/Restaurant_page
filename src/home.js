export default function Home()
{
 const Home = document.createElement('div');
 Home.id="home";
 const home_content = document.createElement('div');
 home_content.id="home_content";
 const home_name = document.createElement('div');
 home_name.id="home_name";
 home_name.textContent="Tipu's Dining"
 const slogan = document.createElement('div');
 slogan.id="slogan";
 slogan.textContent="Nothing brings people together like good food.";
 home_content.appendChild(home_name);
 home_content.appendChild(slogan);

 Home.appendChild(home_content);
 return Home;
}

