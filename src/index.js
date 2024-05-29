const students = [
  { name: "Laura", age: 22, email: "laura@email.com" },
  { name: "Anna", age: 21, email: "anna@email.com" },
  { name: "Lluis", age: 28, email: "lluis@email.com" },
  { name: "Dani", age: 21, email: "dani@email.com" },
  { name: "Leo", age: 33, email: "leo@email.com" },
  { name: "Clara", age: 24, email: "clara@email.com" },
  { name: "Marc", age: 24, email: "marc@email.com" },
  { name: "Adriana", age: 28, email: "adriana@email.com" },
  { name: "Diego", age: 32, email: "diego@email.com" },
  { name: "Mar", age: 30, email: "mar@email.com" },
  { name: "Helena", age: 22, email: "helena@email.com" },
  { name: "Javi", age: 33, email: "javi@email.com" },
  { name: "Lorena", age: 34, email: "lorena@email.com" },
  { name: "Constanza", age: 28, email: "constanza@email.com" },
  { name: "Ingrid", age: 45, email: "ingrid@email.com" },
  { name: "Raquel", age: 28, email: "raquel@email.com" },
];

document.getElementById("printButton").addEventListener("click", () => {
  const studentsList = document.getElementById("studentsList");
  studentsList.innerHTML = ""; // Limpiar la lista antes de añadir

  students.forEach(student => {
    const listItem = document.createElement("li");
    listItem.classList = "bg-blue-100 p-4 rounded-lg shadow";
    listItem.innerHTML = `<strong>${student.name}</strong>, ${student.age} years old`;
    studentsList.appendChild(listItem);
  });
});