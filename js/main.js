
	var hello = document.getElementById('book-search');
hello.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		bookfinder();
	};
}, false);

function bookfinder() {
	$('#results').empty();
	var search = document.getElementById('book-search').value;



	$.ajax ({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		datatype: "json",

		success: function(data) {
			for (i = 0; i < data.items.length; i++) {
				var mydata = data.items[i].volumeInfo;

				// Create All elements needed
				var book_box = document.createElement('div');
				var book_img = document.createElement('img');
				// Box for variables below
				var book_info = document.createElement('div');
				// These go into the book_info box
				var book_title = document.createElement('h2');
				var book_author = document.createElement('h4');
				var book_date = document.createElement('h4');
				var book_pages = document.createElement('h4');
				var book_description = document.createElement('p');

				// Add class to elements
				book_box.className = 'book_box col-sm-6 col-md-4 col-lg-4 ';
				book_img.className = 'book_img col-md-6 col-lg-6';
				book_info.className = 'book_info col-md-6 col-lg-6';
				book_title.className = 'books';
				book_author.className = 'books';
				book_date.className = 'books';
				book_pages.className = 'books last';
				book_description.className = 'description';

				// IMAGE----Put JSON image into book_box
				book_img.src = mydata.imageLinks.thumbnail;

				// TITLE----Put JSON title into book_title
				book_title.innerText = mydata.title;
				book_info.appendChild(book_title);

				// AUTHOR
				book_author.innerText = "Author: " + mydata.authors;
				book_info.appendChild(book_author);

				// PUBLISH DATE
				book_date.innerText = "Published: " + mydata.publishedDate;
				book_info.appendChild(book_date);

				// PAGE COUNT
				book_pages.innerText = mydata.pageCount + " pages";
				book_info.appendChild(book_pages);

				// DESCRIPTION
				book_description.innerText = mydata.description;

				// Append boxes into book_box
				book_box.appendChild(book_img);
				book_box.appendChild(book_info);
				book_box.appendChild(book_description);

				// Append book box to document
				var results = document.getElementById('results');
				results.appendChild(book_box);

			}
		},

		type: "GET"
	});

	
}

document.getElementById('button').addEventListener('click', bookfinder, false)

// document.getElementById('button').addEventListener('click', function() {
// 	document.getElementById("results").reset();
// })



// how to reset event listener when clicked on

// how to: find key words in the description to provide more accurate search




