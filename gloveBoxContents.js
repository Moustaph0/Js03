
const mystorage = {
    car: {
        inside: {
            "glove_box":"maps",
            "passenger seat":"crumbs",
        },
        outside: {
            "trunk":"jack",
        }
    }
}
const gloveboxContents = mystorage.car.inside.glove_box;
console.log(gloveboxContents);