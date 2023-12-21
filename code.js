// Övning 1: Destructurera objekt
const person = {
    name: "Alice",
    age: 30,
    address: "123 Main St",
  };
  
  // Använd destructuering för att ta ut varje property till separat variabel
  // TODO
  
  console.log(`Name: ${name}, Age: ${age}, Address: ${address}`); // Detta ska skrivas ut
  
  
  // Övning 2: Destructurera arrayer
  const colors = ["red", "green", "blue"];
  
  // Tilldela varje färg en variabel
  // TODO
  
  console.log(color1, color2, color3); // Detta ska skrivas ut
  
  
  // Övning 3: Använda spread operator (...)
  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];
  
  // Kompinera de båda arrayerna med spreadoperatorn
  // TODO
  
  console.log(combinedNumbers); // Detta ska skrivas ut
  
  // Övning 4: Använda spread operator (...) för att uppdatera ett objekt
  const product = {
    id: 1,
    name: "Apple",
    price: 10,
  };
  
  // Skapa ett nytt objekt där property "price" uppdateras till 15
  // TODO

  console.log(updatedProduct); // Detta ska skrivas ut
  
  
  // Övning 5: Rest parametern (...)
  // Skapa en funktion som tar emot ett varierbart antal argument och returnerar summan av dem
  // TODO
  
  console.log(sum(1, 2, 3, 4, 5)); // Ska ex skriva ut 15
  
  
  // Övning 6: Destructurera nästlade objekt
  const user = {
    id: 1,
    info: {
      name: "John",
      email: "john@example.com",
    },
  };
  
  // Extrahera alla properties från objektet user
  // TODO

  console.log(`User ID: ${id}, Name: ${name}, Email: ${email}`); // Detta ska skrivas ut
  
  
  // Övning 7: Destructurera nästlade arrayer
  const teams = [
    { name: "Team A", players: ["Player 1", "Player 2"] },
    { name: "Team B", players: ["Player 3", "Player 4"] },
  ];
  
  // Extrahera alla properties från den nästlade arrayen.
  // TODO
  
  console.log(`Team Name: ${teamName}`); // Detta ska skrivas ut
  console.log(`Players: ${player1}, ${player2}`); // Detta ska skrivas ut
  
  // Övning 8 Rest parametern i objekt destructurering
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 180,
  };
  
  // Destructurera så att title extraheras i en variabel och bookInfo till återstående
  // TODO
  
  console.log(`Title: ${title}`); // Detta ska skrivas ut
  console.log("Book Info:", bookInfo); // Resten av objektet ska skrivas ut
  
