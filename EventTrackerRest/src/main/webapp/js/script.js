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
				onLoad();
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

// function displayAllBooks(books) {
// var booksDiv = document.getElementById('bookData');
// booksDiv.textContent = 'List Of Books';
// let ul = document.createElement("ul");
// for (let i = 0; i < books.length; i++) {
// let li = document.createElement("li");
// let button = document.createElement("button");
// li.textContent = "Book # " + books[i].id + ": " + books[i].title + " "
// + books[i].authorName + " '" + books[i].category + " "
// + books[i].dateOfPurchase + " ";
// li.appendChild(button);
// button.textContent = "Delete";
// ul.appendChild(li);
// }
// booksDiv.appendChild(ul);
// }

function displayAllBooks(books) {
	var booksDiv = document.getElementById('bookData');
	booksDiv.textContent = 'List Of Books';
	var table = document.createElement('table');
	var button = document.createElement('button');
	for (var i = 0; i < books.length; i++) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var td6 = document.createElement('button');
		var td7 = document.createElement('button');
		td6.textContent = 'Details';
		// td7.textContent = 'Update';
		tr.setAttribute("id", "trMain");
		td1.setAttribute("id", "Div1");
		td2.setAttribute("id", "Div2");
		td3.setAttribute("id", "Div3");
		td4.setAttribute("id", "Div4");
		td5.setAttribute("id", "Div5");
		td6.setAttribute("id", "DeleteTableRow" + i);
		td7.setAttribute("id", "UpdateTableRow" + i);
		td6.setAttribute("class", "btn btn-info");
		// td7.setAttribute("class", "btn btn-info" );

		var text1 = document.createTextNode(books[i].id);
		var text2 = document.createTextNode(books[i].title);
		var text3 = document.createTextNode(books[i].authorName);
		var text4 = document.createTextNode(books[i].category);
		var text5 = document.createTextNode(books[i].dateOfPurchase);

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		td5.appendChild(text5);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		// tr.appendChild(td7);

		table.appendChild(tr);
	}
	booksDiv.appendChild(table);
}

function deleteAndUpdate() {
	document.getElementById('DetailTableRow0').addEventListener('click',
			function(event) {
				event.preventDefault();
				alert('ads');
				onLoad();
			});
	document.getElementById('DetailTableRow1').addEventListener('click',
			function(event) {
				event.preventDefault();
				deleteBook();
				onLoad();
			});
	document.getElementById('DetailTableRow2').addEventListener('click',
			function(event) {
				event.preventDefault();
				alert('ads');
				let f = document.deleteBookForm;
				onLoad();
			});
	document.getElementById('DetailTableRow3').addEventListener('click',
			function(event) {
				event.preventDefault();
				alert('ads');
				onLoad();
			});
	document.getElementById('DetailTableRow4').addEventListener('click',
			function(event) {
				event.preventDefault();
				alert('ads');
				onLoad();
			});
	document.getElementById('DetailTableRow5').addEventListener('click',
			function(event) {
				event.preventDefault();
				alert('ads');
				onLoad();
			});
	// document.getElementById('UpdateTableRow0').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });
	// document.getElementById('UpdateTableRow1').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });
	// document.getElementById('UpdateTableRow2').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });
	// document.getElementById('UpdateTableRow3').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });
	// document.getElementById('UpdateTableRow4').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });
	// document.getElementById('UpdateTableRow5').addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// alert("Hello");
	// onLoad();
	// });

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
