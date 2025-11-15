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



