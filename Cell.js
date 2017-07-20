var Cell = {
    coordinate: [],

    pheromones: 0,

    path_direction: ['V1', 'V2'],

    // purpose: ['Empty', 'Food', 'Wall', 'Start'],
    purpose: '',

    setCoords: function (coords) {
        this.coordinate = coords;
    },

    setPurpose: function (reason) {
        this.purpose = reason;
        this.setColor();
    },

    setColor: function () {
        var self = this,
            color;

        switch (self.purpose) {
            case "FOOD":
                color = "#30AB52";
                break;
            case "START":
                color = "#AB161A";
                break;
            default:
                color = "#FFFFFF";
                break;
        }

        $('td#'+ self.coordinate[0] +'_'+ self.coordinate[1]).css("background-color", color);
    }

}