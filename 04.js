/**
 * Q: filter 함수
 *
 * - filterEven(arr)를 작성하세요.
 * - 파라미터로 받는 배열에서 짝수만 걸러낸 새 배열을 반환합니다.
 * - filterOdd(arr)를 작성하세요.
 * - 파라미터로 받는 배열에서 홀수만 걸러낸 새 배열을 반환합니다.
 * - filter 메소드를 사용하여 작성하세요.
 *
 * @param {number[]} arr
 * @returns {number[]} 짝수만 포함된 새 배열
 */

// TODO: filterEven 함수를 작성하세요.
function filterEven(arr) {
    let arr_even = arr.filter((arr) => arr % 2 === 0);
    return arr_even;
}

// TODO: filterOdd 함수를 작성하세요.
function filterOdd(arr) {
    let arr_odd = arr.filter((arr) => arr % 2 !== 0);
    return arr_odd;
}

// export를 수정하지 마세요.
export { filterEven, filterOdd };
