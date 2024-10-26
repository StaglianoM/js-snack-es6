const bikes = [
    {
        name: "Speed",
        weight: 8,
    },
    {
        name: "Heavy",
        weight: 29,
    },
    {
        name: "Flame",
        weight: 15,
    },
];

console.log(bikes);


let bikeLight = bikes[0]; 

for (i = 0; i < bikes.length; i++) {

    const currentElement = bikes[i];

    if (currentElement.weight < bikeLight.weight) {

        bikeLight = currentElement;

    }
}

console.log(`La bici più leggera è ${bikeLight.name} con un peso di ${bikeLight.weight} kg.`);

