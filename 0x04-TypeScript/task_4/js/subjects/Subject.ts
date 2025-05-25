namespace Subjects {
    export interface Teacher {
        // Define the Teacher interface properties here if needed
    }

    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
