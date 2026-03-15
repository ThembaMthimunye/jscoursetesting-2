let books=[]

function addBook()
{
    const bookName=document.getElementById("bookName").value
    if (bookName)
    {
    const book={name: bookName
    }
    books.push(book)
    showbooks()
    clearInput();
    }else{
        alert("Please fill in all the fields")
    }
}


function showbooks(){
    const booksDiv=books.map((book,index)=>
    `<h1> Book Number ${index+1}</h1>
    <p>Book Name: ${book.name}</p>
   
    <button onClick="editBook(${index})">Edit</button>`
);

document.getElementById('books').innerHTML=booksDiv.join(" ")
}

function editBook(index){
    const book=books[index]
    document.getElementById('bookName').value=book.name;
    books.splice(index,1);
    showbooks();
}

function clearInput()
{
    document.getElementById("bookName").value=""
}