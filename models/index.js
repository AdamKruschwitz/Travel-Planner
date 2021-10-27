const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
    through: "trip"
});

Location.belongsToMany(Traveller, {
    through: "trip"
});

module.exports = {
    Location, Traveller, Trip,
};