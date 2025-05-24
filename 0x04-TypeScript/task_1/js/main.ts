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

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("Imane", "Wakrim"));

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}