// Definim un array de cărți pentru exemplificare
const books = [
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997, cover: "https://example.com/harry_potter.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, cover: "https://example.com/great_gatsby.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, cover: "https://example.com/to_kill_a_mockingbird.jpg" }
  ];
  
  // Funcție pentru a adăuga o carte în tabel
  function addBookToTable(book) {
    const tableBody = document.getElementById("book-table-body");
    const row = document.createElement("tr");
  
    // Adăugăm celule pentru fiecare proprietate a cărții
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);
  
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);
  
    const yearCell = document.createElement("td");
    yearCell.textContent = book.year;
    row.appendChild(yearCell);
  
    const coverCell = document.createElement("td");
    const coverImage = document.createElement("img");
    coverImage.src = book.cover;
    coverImage.alt = `${book.title} Cover`;
    coverCell.appendChild(coverImage);
    row.appendChild(coverCell);
  
    tableBody.appendChild(row);
  }
  
  // Adăugăm fiecare carte din array-ul de cărți în tabel
  books.forEach(book => {
    addBookToTable(book);
  });
  