export default function Menu()
{
 const Menu = document.createElement('div');
 Menu.id="menu";
 const menu_content = document.createElement('div');
 menu_content.id="menu_content";
 const one  = document.createElement('div');
 const two  = document.createElement('div');
 const three  = document.createElement('div');
 one.id="one"; two.id = "two"; three.id="three";
 one.textContent = "Menu of Tipu's";
 const list1 = document.createElement('ul'); 
 const item2 = document.createElement('li');item2.textContent= "Allu paratha"; list1.appendChild(item2);
 const item3 = document.createElement('li'); item3.textContent= "Allu paratha"; list1.appendChild(item3);
 const item4 = document.createElement('li'); item4.textContent= "Allu paratha"; list1.appendChild(item4);
 const item5 = document.createElement('li'); item5.textContent= "Allu paratha"; list1.appendChild(item5);
 const item6 = document.createElement('li'); item6.textContent= "Allu paratha"; list1.appendChild(item6);

 const list2 = document.createElement('ul');
 const item7 = document.createElement('li');item7.textContent= "Allu paratha"; list2.appendChild(item7);
 const item8 = document.createElement('li'); item8.textContent= "Allu paratha"; list2.appendChild(item8);
 const item9 = document.createElement('li'); item9.textContent= "Allu paratha"; list2.appendChild(item9);
 const item10 = document.createElement('li'); item10.textContent= "Allu paratha"; list2.appendChild(item10);
 const item11 = document.createElement('li'); item11.textContent= "Allu paratha"; list2.appendChild(item11);
 two.appendChild(list1);
 three.appendChild(list2);
 menu_content.appendChild(one);
 menu_content.appendChild(two);
 menu_content.appendChild(three);

 Menu.appendChild(menu_content);
 return Menu;
}