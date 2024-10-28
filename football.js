const risultati = [];
const Squadre = [
    {
        name: "Roma",
        points: 0,
        foul: 0,
    },
    {
        name: "Lazio",
        points: 0,
        foul: 0,
    },
    {
        name: "Boolean",
        points: 0,
        foul: 0,
    },
];


Squadre.forEach(squadra => {
    squadra.points = Math.floor(Math.random()*100);
    squadra.foul = Math.floor(Math.random()*25);
})

Squadre.forEach(squadra => {
    const infoSquadra = {
        name: squadra.name,
        foul: squadra.foul,
    };
    risultati.push(infoSquadra);
}
)

console.log(risultati)