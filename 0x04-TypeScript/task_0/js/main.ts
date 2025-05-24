// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Imane",
  lastName: "Wakrim",
  age: 23,
  location: "Morocco"
};

const student2: Student = {
  firstName: "Nihad",
  lastName: "Ouassekssou",
  age: 24,
  location: "Morocco"
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create table and populate it using Vanilla JS
const table: HTMLTableElement = document.createElement("table");
const tableHeader = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
