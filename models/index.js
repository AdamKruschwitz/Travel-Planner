const Location = require("./Location");
const Traveler = require("./Traveler");
const Trip = require("./Trip");

Traveler.belongsToMany(Location, {
    through: "trip"
});

Location.belongsToMany(Traveler, {
    through: "trip"
});