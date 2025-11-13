interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: "Innocent",
  lastName: "Okafor",
  age: 28,
  location: "Nigeria"
};

const Student2: Student = {
  firstName: "Michael",
  lastName: "Nwaigwe",
  age: 29,
  location: "Ghana"
};

const Student3: Student = {
  firstName: "Joseph",
  lastName: "Kama",
  age: 34,
  location: "Congo"
};

const studentList: Student[] = [Student1, Student2, Student3];

const table: HTMLTableElement = document.createElement("table");
table.border = "1";

const header: HTMLTableRowElement = table.insertRow();
const th1: HTMLTableCellElement = document.createElement("th");
th1.textContent = "First Name";
const th2: HTMLTableCellElement = document.createElement("th");
th2.textContent = "Location";
header.appendChild(th1);
header.appendChild(th2);

studentList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;
  const cell2: HTMLTableCellElement = row.insertCell();
  cell2.textContent = student.location;
});

document.body.appendChild(table);

