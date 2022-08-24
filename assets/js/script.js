function word(string) {

    let words = string.split(" ");

    let array = [];

    for (const item of words) {

        array.push(item.length);

    }

    return array;
}
console.log(word("Salam Olsun Hamiya"));







