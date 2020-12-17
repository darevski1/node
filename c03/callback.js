
const movies = [
    {
        title: "Batman 2020",
        year: 2020,
    },
    {
        title: "Hi joe",
        year: 2010,
    },
    {
        title: "Bananaman",
        year: 2015,
    },

];

function movieList() {
    setTimeout(() => {
        let output = "";

        movies.forEach((movie, index) => {
            output += movie.title;
        })
        console.log(output)

    })
}

movieList()