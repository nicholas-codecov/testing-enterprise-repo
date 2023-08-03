import Index from "./index";

test('test uncovered if', () => {
    const indexObj = new Index();
    expect(indexObj.uncovered_if(false)).toEqual(false);
});

test('test uncovered if', () => {
    const indexObj = new Index();
    expect(indexObj.uncovered_if()).toEqual(false);
});
