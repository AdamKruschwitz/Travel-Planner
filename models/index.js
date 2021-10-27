const Location = require("./Location");
const traveller = require("./Traveller");
const Trip = require("./Trip");

traveller.belongsToMany(Location, {
    through: "trip"
});

Location.belongsToMany(traveller, {
    through: "trip"
});

module.exports = {
    Location, traveller, Trip,
};