// let data = {
//     "books": [
//         { "title": "Tales of Horror", "author": "H.P. Lovecraft", "publishDate": "04/11/2017" },
//         { "title": "The Four Hour Body", "author": "Timothy Ferris", "publishDate": "09/15/1992" },
//         { "title": "The Count of Monte Cristo", "author": "Alexander Dumas", "publishDate": "01/15/1846" },
//         { "title": "The Four Hour Body", "author": "Timothy Ferris", "publishDate": "09/15/1992" },
//         { "title": "The Count of Monte Cristo", "author": "Alexander Dumas", "publishDate": "01/15/1846" },
//         { "title": "The Iliad", "author": "Homer", "publishDate": "-800 BC"},
//         { "title": "Little Women", "author": "Louisa May Alcott", "publishDate": "05/17/1907"}
//     ],
//     "websiteTitle": "The Book Shoppe - a la JavaScript"
// };


let mainPageTitle = document.querySelector('.main-title');


let bookList = document.querySelector(".book-list");
// console.log("The ole' booklist", bookList)


let myFetchPromise = 
    fetch("https://afwerx-learn-to-code-api.onrender.com/api/books")
        .then((response) => response.json())
        .then((data) => {
            console.log("Our Book Data", data)
            mainPageTitle.innerHTML = data.websiteTitle
            
            for(let i = 0; i < data.books.length; i++){
                //TODO: work to build out "book cards" dynamically.
                 /* 
                     <div class="book-card">
                         <h3>The Book Title</h3>
                         Author: <span>James Kelley</span>
                         <p>Publish Date: 01/05/2025</p>
                     </div> 
                 */
                 let bookData = data.books[i];
             
                 let bookDiv = document.createElement("div");
                 bookDiv.classList.add("book-card")
                 // <div class="book-card"> <div>
             
                 let bookHeader = document.createElement("h3");
                 bookHeader.innerHTML = bookData.title;
                 // <h3>Author Name</h3>
               
             
                 let authorPTag = document.createElement('p');
                 authorPTag.innerHTML = "Author: " + data.books[i].author;
                 
                 let publishDatePTag = document.createElement('p');
                 publishDatePTag.innerHTML = "Publish Date: " + data.books[i].publishDate;
                     
                 bookDiv.appendChild(bookHeader);
                 bookDiv.appendChild(authorPTag);
                 bookDiv.appendChild(publishDatePTag);
             
                 //Adds book to the bookList
                 bookList.appendChild(bookDiv);
             
             }
             
        });


