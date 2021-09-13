"use strict";

fetch(`https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        appendMovies(json);
    });

let appendMovies = (movies) => {
    let htmlTemplate = "";
    for (let movie of movies) {
        htmlTemplate += `
            <article>
                <h3>${movie.title.rendered}</h3>
                <img src="${movie._embedded["wp:featuredmedia"][0].source_url}">
            </article>
            `;
    }
    document.querySelector("#movie-section").innerHTML = htmlTemplate;
};
