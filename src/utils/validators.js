

export function valid_luhn(card_number_array, length_untouchable) {
    let reversed_array = [...card_number_array];

    for (var i=0;i<(reversed_array.length-length_untouchable);i++) {
        if (i%2!==1) {
            let new_number = reversed_array[i] * 2;
            new_number = simplified_number(new_number);
            reversed_array[i] = new_number;
        }
    }

    let sum_total = reversed_array.reduce((a, b) => a + b, 0);
    return sum_total%10===0;
}

function simplified_number(target_number) {
    if (target_number > 9) {
        let sum_array = Array.from(target_number.toString()).map(Number);
        sum_array = sum_array.reduce((a, b) => a + b, 0);
        if (sum_array > 9) {
            return simplified_number(sum_array);
        } else {
            target_number = sum_array;
        }
    }

    return target_number;
}