import {valid_luhn} from "./validators";


export function generate_cc_number(length_number, starts_with) {
    let number_array = [].concat(starts_with);

    for (var x=number_array.length;x<length_number;x++) {
        number_array.push(Math.floor(Math.random() * 10));
    }

    if (!valid_luhn(number_array, starts_with.length)) {
        return generate_cc_number(length_number, starts_with);
    }

    return number_array;
}


export function generate_cvv(max_length) {
    let number_array = [];
    for (var x=number_array.length;x<max_length;x++) {
        number_array.push(Math.floor(Math.random() * 10));
    }

    return number_array;
}

export function generate_date_expiration() {
    let min_year = parseInt(new Date().getFullYear().toString().slice(2)),
        max_year = parseInt(((new Date().getFullYear()) + 4).toString().slice(2)),
        min_month = 5,
        max_month = 12;

    let target_year = parseInt(Math.random() * (max_year - min_year) + min_year).toString(),
        target_month = parseInt(Math.random() * (max_month - min_month) + min_month).toString();

    if (target_month.length < 2) {
        target_month = "0" + target_month;
    }

    return [target_month, target_year].join("/");
}