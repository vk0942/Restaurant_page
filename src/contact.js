export default function Contact()
{
 const Contact = document.createElement('div');
 Contact.id="contact";
 const contact_content  = document.createElement('div');
 contact_content.id="contact_content";
 const line1 = document.createElement('div');
 const line2 = document.createElement('div');

 line1.textContent = "Contact us at tipusdining@gmail.com";
 line2.textContent = "Hours Everyday: 12:00 - 22:00";
 const para  = document.createElement('div');
 para.appendChild(line1);
 para.appendChild(line2);
 contact_content.appendChild(para);
 Contact.appendChild(contact_content);
 return Contact;
}