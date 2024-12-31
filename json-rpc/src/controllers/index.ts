interface IAdd{
    a: number,
    b: number
}

export class DemoController{
    public add(params: IAdd): number{
        const {a, b} = params;
        return a + b;
    }
}

export const demoController = new DemoController();
