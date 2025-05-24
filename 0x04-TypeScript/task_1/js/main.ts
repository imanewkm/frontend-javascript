// Define Teacher interface with index signature
interface Teacher {
    firstName: string;
    lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any additional properties
}

const teacher1: Teacher = { 
    firstName: "John",
    lastName: "Doe",
    yearsOfExperience: 10,
    location: "USA",
    contract: true,  // Example of additional property
    subject: "Math",
    phoneNumber: "123-456-7890"
};

console.log(teacher1);