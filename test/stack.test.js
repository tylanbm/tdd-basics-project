class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    const temp = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return temp;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });

  it('can pop off', () => {
    stack.push('1');
    stack.push('2');
    stack.push('3');

    expect(stack.top).toBe(2);
    expect(stack.peek).toBe('3');
    expect(stack.items).toEqual({ 0: '1', 1: '2', 2: '3' });

    expect(stack.pop()).toBe('3');
    expect(stack.pop()).toBe('2');
    expect(stack.pop()).toBe('1');
    expect(stack.items).toEqual({});
  });
});
