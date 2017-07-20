// Create am empty grid based on input values

//TO-DO --- the check that start and food are not in the same place

var Mapper = {
    height: 0,
    width: 0,
    size: this.height * this.width,
    grid: [],
    food_location: [],

    init: function() {
        var hgt = document.getElementById("grid-ht"),
            wdt = document.getElementById("grid-wt"),
            f_x = document.getElementById("food-x"),
            f_y = document.getElementById("food-y"),
            d_x = document.getElementById("dep-x"),
            d_y = document.getElementById("dep-y"),
            wal = document.getElementById("num-walls"),
            self = this;



        // this.empty_grid();

        $("#butt").on("click", function() {
            // self.clear_map();
            self.empty_grid();
            self.setCoord(f_x.value, f_y.value, "FOOD");
            self.setCoord(d_x.value, d_y.value, "START");
        });


        // if $("")
    },

    empty_grid: function() {
        var table = $("section#body table"),
            hgt = document.getElementById("grid-ht"),
            wdt = document.getElementById("grid-wt");

        this.grid = [];
        this.height = (hgt.value) ? hgt.value : 10;
        this.width = (wdt.value) ? wdt.value : 10;

        $("#t_body").remove();

        table.append("<tbody id='t_body'>");

        for (i=0; i < this.height; i++) {
            this.grid[i] = new Array();
            var row = this.grid[i];
            table.append("<tr class='row_"+ i +"'></tr>");
            for (j=0; j < this.width; j++) {
                var coord = [i, j];
                var cell = Object.create(Cell);
                cell.setCoords(coord);
                cell.setPurpose("EMPTY");
                row.push(cell);
                $("tr.row_" + i).append("<td id='"+ i+ "_" +j +"' data-x='"+ i +"' data-y='"+ j +"'></td>");
            }
        }

        table.append("</tbody>");

        console.log(this.grid);
        return this.grid;
    },

/*
    clear_map: function () {
        //turn each cell in this.grid
        console.log("hello");

        this.grid.forEach(function(elem) {
            elem.forEach(function(elem_two) {
                elem_two.purpose = "EMPTY"
                console.log(elem_two);
            })
        });
    },
*/

    add_walls: function() {
        if (this.grid.length) {
            this.grid[0]
        }
    },

    setCoord: function (xCoord, yCoord, reason) {
        var self = this;

        if (reason == "FOOD") {
            self.food_location = [xCoord, yCoord];
        }

        if (!xCoord) {
            xCoord = Math.floor((Math.random() * self.height));
        }

        if (!yCoord) {
            //if both empty random coords
            yCoord = Math.ceil((Math.random() * self.width));
        }

        if (self.food_location) {
            while (xCoord == self.food_location[0] && yCoord == self.food_location[1]) {
                yCoord = Math.ceil((Math.random() * self.width));
            }
        }

        self.grid[xCoord][yCoord].setPurpose(reason);
    }



};

document.addEventListener("DOMContentLoaded", function() {
   var mapp = Object.create(Mapper);
   Mapper.init();

   console.log('pppppppppppppp');
   console.log('pppppppppppppp');
   console.log('pppppppppppppp');
});

// Mapper.init();