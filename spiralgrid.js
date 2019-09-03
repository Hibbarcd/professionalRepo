$(document).ready(function() {
    $("#spiral").on("click", function(){
        event.preventDefault();
        let number = $("#rows").val().trim();
        printGrid(createSpiral(number))
    });
    

    function printGrid(grid) {
        for (i = 0; i < grid.length; i++) {
            console.log(grid[i].join(" "));
            document.getElementById('rows').innerHTML = grid[i].join(" ");
            }
        }

    function create2Dgrid(size){
        let i = size;
        const grid = [];
            while(i--) grid.push(new Array(size));
                return grid;
        };

    function createSpiral(n) {
        const spiral = create2Dgrid(n)
        let currentNumber = 1;
        let i = 0;
        let j = 0;
        let di = 0;
        let dj = 1;

    while (currentNumber <= n * n) {
        spiral[i][j] = currentNumber++;
            if (j + dj === n  || i + di === n || j + dj === -1 || spiral[i + di][j + dj]) {
                const tempDi = di;
                di = dj;
                dj = -tempDi;
            }
                i += di;
                j += dj;
            }
return spiral;

}
printGrid(createSpiral());
});


