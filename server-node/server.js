let albums = [
    { year: '1967', title: 'The Piper at the Gates of Dawn' },
    { year: '1968', title: 'A Saucerful of Secrets' },
    { year: '1969', title: 'More' },
    { year: '1969', title: 'Ummagumma' },
    { year: '1970', title: 'Zabriskie Point' },
    { year: '1970', title: 'Atom Heart Mother' },
    { year: '1971', title: 'Meddle' },
    { year: '1972', title: 'Obscured by Clouds' },
    { year: '1973', title: 'The Dark Side of the Moon' },
    { year: '1975', title: 'Wish You Were Here' },
    { year: '1977', title: 'Animals' },
    { year: '1979', title: 'The Wall' },
    { year: '1983', title: 'The Final Cut' },
    { year: '1987', title: 'A Momentary Lapse of Reason' },
    { year: '1994', title: 'The Division Bell' },
    { year: '2014', title: 'The Endless River' }
];

let members = [
    { name: 'Syd Barrett', role: 'lead and rhythm guitars, vocals' },
    { name: 'Nick Mason', role: 'drums, percussion, vocals' },
    { name: 'Bob Klose', role: 'lead guitar' },
    { name: 'Roger Waters', role: 'bass, vocals, rhythm guitar' },
    { name: 'Richard Wright', role: 'keyboards, piano, organ, vocals' },
    { name: 'David Gilmour', role: 'lead and rhythm guitars, vocals, bass, keyboards' }
];

let concertTours = [
    { name: 'Pink Floyd World Tour', year: '1968' },
    { name: 'The Man and The Journey Tour', year: '1969' },
    { name: 'Atom Heart Mother World Tour', year: '1970–71' },
    { name: 'Meddle Tour', year: '1971' },
    { name: 'Dark Side of the Moon Tour', year: '1972–73' },
    { name: 'French Summer Tour', year: '1974' },
    { name: 'British Winter Tour', year: '1974' },
    { name: 'Wish You Were Here Tour', year: '1975' },
    { name: 'In the Flesh Tour', year: '1977' },
    { name: 'The Wall Tour', year: '1980–81' },
    { name: 'A Momentary Lapse of Reason Tour', year: '1987–89' },
    { name: 'The Division Bell Tour', year: '1994' }
];

// 1. import du module express
const express = require('express');

// 2. initialistion des modules express et cors
const app = express();
const cors = require('cors'); //Module servant à gérer l'accès à notre API
let corsOptions = {
    origin: "*" // origin: “*” pour que toutes les requêtes soient acceptées
}
app.use(cors(corsOptions));

// 3. lancement de l'écoute sur le port 3000
app.listen(3000);

// 4. choix de la route Http ( /chemin qui mène)
app.get('/albums', function (req, res) {
    res.send(albums);
});

app.get('/members', function (req, res) {
    res.send(members);
});

app.get('/concerttours', function (req, res) {
    res.send(concerttours);
});

app.get('/labels', function (req, res) {
    res.send(labels);
});