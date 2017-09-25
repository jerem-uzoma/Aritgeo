function aritgeo(arr) {
    var array_type = -1;
    if (arr.length < 1) return 0;

    var second_array = arr[1],
        ratio = second_array / arr[0],
        i;
    for (i = 2; i < arr.length; ++i) {
        if ((second_array *= ratio) == arr[i]) {
            array_type = "Geometric";
        } else {
            array_type = -1;
            break;
        }
    }

    if (array_type == "Geometric")
        return array_type;


    var second_array = arr[1],
        difference = second_array - arr[0],
        i;
    for (i = 2; i < arr.length; ++i) {
        if ((second_array += difference) == arr[i]) {
            array_type = "Arithmetic";
        } else {
            array_type = -1;
            break;
        }
    }
    return array_type;
}
module.exports = aritgeo