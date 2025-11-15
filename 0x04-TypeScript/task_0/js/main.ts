interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const Student1: Student = {
  firstName: "Michael",
  lastName: "Nwaigwe",
  age: 29,
  location: "Ghana"
};

const Student2: Student = {
  firstName: "Joseph",
  lastName: "Kama",
  age: 34,
  location: "Congo"
};

const studentsList: Student[] = [Student1, Student2];

// Table Listing
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);





