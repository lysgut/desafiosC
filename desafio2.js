const fila = [2,3,0,2,0,3]
const col = [2,3,5,0,4,1]
const vidaInicial = [13, 40, 40,50, 40, 6]
const vidaActual = [10, 34, 1, 48, 32, 1]
const d = 4
const mapa = [
        '..XX..',
        '...XXX',
        '...X..',
        '......'
]





function sanar(fila, col, vidaInicial, vidaActual, d, mapa) {
    const n = fila.length; //cantidad de jugadores
    const r = mapa.length; // ancho
    const c = mapa[0].length; //largo
    const xKhris = fila[0]; //coordenadas de khris (jugador 0)
    const yKhris = col[0];

    function posValida(x, y) {
        return x >= 0 && x < r && y >= 0 && y < c && mapa[x][y] === '.';
    }

    function distancia(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    // movimiento BFS (Breadth-First Search) Busqueda de Amplitud para explorar todas las posiciones posibles, googleado checkeadisimo
    let maxSanacion = 0;
    let visitado = Array.from({ length: r }, () => Array(c).fill(false));
    let queue = [[xKhris, yKhris, 0]]; //el 0 son los movimientos realizados

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // direcciones posibles adyacentes: abajo, arriba, derecha, izquierda

    while (queue.length > 0) {
        const [x, y, movs] = queue.shift();
        if (movs > d) continue; //checkea si ya supero a d

        if (!visitado[x][y]) {
            visitado[x][y] = true;

            let totalSanado = 0;
            for (let i = 1; i < n; i++) {
                if (distancia(x, y, fila[i], col[i]) <= 2) {
                    totalSanado += Math.min(vidaInicial[i] - vidaActual[i], 10);
                }
            }
            maxSanacion = Math.max(maxSanacion, totalSanado);

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                if (posValida(nx, ny) && !visitado[nx][ny]) {
                    queue.push([nx, ny, movs + 1]);
                }
            }
        }
    }

    return maxSanacion; //devuelve 14 en vez de 8 como dice el ejemplo, en algun lado me equivoque y no se en cual
}





console.log(sanar(fila, col, vidaInicial, vidaActual, d, mapa))