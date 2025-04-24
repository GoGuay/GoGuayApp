import { NumToWordsPipe } from './num-to-words.pipe';

describe('NumToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumToWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
