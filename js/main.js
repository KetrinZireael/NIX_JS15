function maxDiff(array) {
    let diff;
    if (array.length !== 0) {
        array.sort(function(a, b) {
            return a - b;
        });
        diff = array[array.length - 1] - array[0];
    } else {
        diff = 0;
    }
    console.log(diff);
}

maxDiff([0, 1, 2, 3, 4, 5, 6]);
maxDiff([-0, 1, 2, -3, 4, 5, -6]);
maxDiff([0, 1, 2, 3, 4, 5, 16]);
maxDiff([16]);
maxDiff([]);