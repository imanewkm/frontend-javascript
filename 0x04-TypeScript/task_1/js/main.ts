// Define Teacher interface with index signature
interface Teacher {
    firstName: string;
    lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any additional properties
}

// Extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}
