"use strict"; // to enable strict mode and modern JavaScript functionality

import { hello } from "./user.js";
import User from "./user.js";

hello();

const user1 = new User(
    "Jens Lyn",
    "jenslyn@torden.dk",
    "1893-11-02",
    "http://www.danskefilmstemmer.dk/Billeder/FilmS/1812.jpg"
);

document.querySelector("#content").innerHTML += user1.appendPerson();
user1.log();
