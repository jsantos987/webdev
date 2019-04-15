//es6 looks cleaner. Resembles ReactJS


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
            const list = document.getElementById('book-list');
            // Create tr element
            const row = document.createElement('tr');
            // Insert cols
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X<a></td>
            `;
        
            list.appendChild(row);

    }

    showAlert(message, className){
        // Create div
        const div = document.createElement('div');
        // Add class
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        // Get Form
        const form = document.querySelector('#book-form');
         // Insert alert
        container.insertBefore(div, form);

        // Message timout after 3 seconds
        setTimeout(function(){
        document.querySelector('.alert').remove();
        }, 2000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listeners for ADD book
document.getElementById('book-form').addEventListener('submit',
function(e){
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn);
    
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();
    console.log(ui);
    

    // validate (form complete)
    if(title === '' || author === '' || isbn == '') {
        //Error Alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        // Add book to list
        ui.addBookToList(book);
        //console.log(book);
    
        // Show Success
        ui.showAlert('Book Added!', 'success');

        //Clear Fields
        ui.clearFields();

    }

    e.preventDefault();
});

// Event Listner for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //console.log(123);

    // Instantiate UI
    const ui = new UI();

    // Delete Book from list
    ui.deleteBook(e.target);

    // Show alet upon successful delete
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
})