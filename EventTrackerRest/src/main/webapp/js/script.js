window.addEventListener('load', function() {
	console.log('document loaded');
	onLoad();
	init();
});

function init() {
	document.getElementById('addBook').addEventListener('click',
			function(event) {
				event.preventDefault();
				addBook();
				onLoad();
			});
	document.getElementById('deleteBook').addEventListener('click',
			function(event) {
				event.preventDefault();
				deleteBook();
			});
	document.getElementById('updateBook').addEventListener('click',
			function(event) {
				event.preventDefault();
				updateBook();
				onLoad();
			});
}

function onLoad() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/books`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('found books');
				let books = JSON.parse(xhr.responseText);
				displayAllBooks(books);
				console.log(books);
			} else {
				document.getElementById('bookData').textContent = 'Book not found';
			}
		}
	};
	xhr.send(null);
}

function displayAllBooks(books) {
	var booksDiv = document.getElementById('bookData');
	booksDiv.textContent = 'List Of Books';
	let ul = document.createElement("ul");
	for (let i = 0; i < books.length; i++) {
		let li = document.createElement("li");
		let button = document.createElement("button");
		li.textContent = "Book # " + books[i].id + ": " + books[i].title + " "
				+ books[i].authorName + " '" + books[i].category + " "
				+ books[i].dateOfPurchase + " ";
		li.appendChild(button);
		button.textContent = "Delete";
		ul.appendChild(li);
	}
	booksDiv.appendChild(ul);
}

function addBook() {
	console.log('addBook() called.');
	let f = document.addBookForm;
	let books = {};
	books.title = f.title.value;
	books.authorName = f.authorName.value;
	books.category = f.category.value;
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/books');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let addedBook = JSON.parse(xhr.responseText);
				console.log(addedBook);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(books));
	location.reload();
}

function updateBook() {
	console.log('updateBook() called.');
	let f = document.updateBookForm;
	let books = {};
	books.id = f.id.value;
	let id = f.id.value;
	books.title = f.title.value;
	books.authorName = f.authorName.value;
	books.category = f.category.value;
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', '/api/books/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let addedBook = JSON.parse(xhr.responseText);
				console.log(addedBook);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(books));
	location.reload();
}

function deleteBook() {
	console.log('deleteBook() called.');
	let f = document.deleteBookForm;
	let books = {};
	books.id = f.id.value;
	let id = f.id.value;
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', '/api/books/' + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let deletedBook = JSON.parse(xhr.responseText);
				console.log(deletedBook);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(books));
	location.reload();
}