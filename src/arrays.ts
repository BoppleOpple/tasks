/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n: number): number => 3 * n);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((val: string): number => parseInt(val) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map(
        (str: string): number =>
            (str[0] === "$" ? parseFloat(str.slice(1)) : parseFloat(str)) || 0,
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((str: string): boolean => !str.endsWith("?"))
        .map((str: string): string =>
            str.endsWith("!") ? str.toUpperCase() : str,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((str: string): boolean => str.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const permissableColors = ["red", "blue", "green"];
    return colors.reduce(
        (currentResult: boolean, color: string): boolean =>
            currentResult && permissableColors.includes(color),
        true,
    );
}

// ill need this a couple times, so ill make it a function
/**
 * Consumes 2 numbers and returns their sum.
 */
function sumNumbers(tally: number, next: number): number {
    return tally + next;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    return addends.reduce(sumNumbers, 0) + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

export function injectPositive(values: number[]): number[] {
    // get first negative index
    let index: number = values.findIndex((n: number): boolean => n < 0);

    // if only nonnegative numbers, append sum
    if (index === -1) return [...values, values.reduce(sumNumbers, 0)];

    /*
        otherwise return all numbers before and including the negative number,
        the sum of all numbers before the negative number, and the remainder of the array.
    */
    return [
        ...values.slice(0, index + 1),
        values.slice(0, index).reduce(sumNumbers, 0),
        ...values.slice(index + 1),
    ];
}
