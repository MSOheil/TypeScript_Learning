function KtToLbs(weight: number | string): number {
    return 0;
}

KtToLbs(1);

type Dragable = {
    resize: (num: number) => void,
};
type Resizable = {
    dra: (names: string) => string,
};
type widget = Dragable & Resizable;

let cheagcw: widget = {
    resize: () => { },
    dra: () => { return 's' }
}