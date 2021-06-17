module.export = class Main {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found
    }
    mul(quantity, Class, index, arr) {
        this.multiplay++;
        var found = this.chooseCell(0)
        var exact = random(found)
        if (exact && this.multiplay > quantity) {
            let x = exact[0]
            let y = exact[1]
            let person = new Class(x, y, index)
            arr.push(person)
            matrix[y][x] = index
            this.multiplay = 0
        }
    }


}
