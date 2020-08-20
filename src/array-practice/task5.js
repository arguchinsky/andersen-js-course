/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * В решении функции-генераторы (function*) не использовать.
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */

export function createGenerator(array) {
  const generator = {
    _array: array,
    _current: 0,
    next() {
      const result = (this._current < this._array.length) ? this._array[this._current] : 'Complete!';
      this._current++;
      return result
    },
  };
  return generator;
}
