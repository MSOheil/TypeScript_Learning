type Emplooyee = {
    readonly id: string,
    name: number,
    retier: (date: Date) => void
}



var employee: Emplooyee = {
    id: "1",
    name: 1,
    retier: (date: Date) => {
        console.log(date);
    }
};