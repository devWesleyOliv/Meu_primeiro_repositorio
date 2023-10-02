const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

let message = `O livro favorito da ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;
console.log(message);
console.log("------");

reader.favoriteBooks.push({
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
});

console.log(reader);
console.log('--------');

const numFavoriteBooks = reader.favoriteBooks.length;

numFavoriteBooks > 1 
  ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`) 
  : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);