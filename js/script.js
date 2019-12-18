
// Initial variables for page
const listItems = document.getElementsByClassName('student-item cf');
console.log(listItems);
const pageNumber = 10;
const page = document.querySelector('.page');
// Function that decides which students to show
const showPage = (list, page) => {
   // startIndex decides which number student to start with 
   let startIndex = (page * pageNumber) - pageNumber;
   // endIndex decides the last student to show
   let endIndex = page * pageNumber;
   //  For loop that displays appropriate students on appropriate page
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}
// Function that appends buttons dynamically based on how many students are in a given list
const appendPageLinks = (list) => {
   // First div grabs the first div we want to append our links to 
   const firstDiv = document.getElementsByClassName('page')[0];
   let pageLinks = Math.ceil(list.length / pageNumber);
   // create needed elements for buttons
   const div = document.createElement('div');
   div.className = 'pagination';
   const ul = document.createElement('ul');
   //dynamically create our link elements depending on number of students
   for (let i = 0; i < pageLinks; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute("href", "#");
      //sets the link numbers 
      a.textContent = i + 1;
      if (i === 0) {
         a.className = 'active';
      }
      li.appendChild(a);
      ul.appendChild(li);
   }
   div.appendChild(ul);
   //append our new dynamically created div 
   firstDiv.appendChild(div);
   // attaches our event listeners to our pagelinks
   let a = document.getElementsByTagName('a');
   for (let i = 0; i < a.length; i++) {
      a[i].addEventListener('click', (event) => {
         let pageNumber = event.target.textContent;
         for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('active');
         }
         event.target.className = 'active';
         //call showPage function to show the items/page we have selected
         showPage(listItems, pageNumber);
      });
   }
};
appendPageLinks(listItems);
showPage(listItems, 1);

