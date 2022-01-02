export interface timerLog {
    // timerValue: number,
    status: string;
    timeStamp: string;
}

export interface timerCount {
    startCount: number;
    pauseCount: number;
}

export class StudentModel {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;
    address: string = "";
}
