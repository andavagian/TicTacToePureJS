let cell = document.querySelectorAll("td")
let turn = true

function f(elem) {
    if (turn) {
        elem.innerText = 'X';
    } else {
        elem.innerText = 'O';
    }
    turn = !turn;
    CheckWinner();
}

function CheckWinner() {
    if (
        (cell[0].innerText == 'X' && cell[1].innerText == 'X' && cell[2].innerText == 'X') ||
        (cell[3].innerText == 'X' && cell[4].innerText == 'X' && cell[5].innerText == 'X') ||
        (cell[6].innerText == 'X' && cell[7].innerText == 'X' && cell[8].innerText == 'X') ||
        (cell[0].innerText == 'X' && cell[3].innerText == 'X' && cell[6].innerText == 'X') ||
        (cell[1].innerText == 'X' && cell[4].innerText == 'X' && cell[7].innerText == 'X') ||
        (cell[2].innerText == 'X' && cell[5].innerText == 'X' && cell[8].innerText == 'X') ||
        (cell[0].innerText == 'X' && cell[4].innerText == 'X' && cell[8].innerText == 'X') ||
        (cell[2].innerText == 'X' && cell[4].innerText == 'X' && cell[6].innerText == 'X')
    ) {
        setTimeout(function () {
            alert('X Wins')
            resetBoard()
            turn = true
        }, 0);
    }

    else if (
        (cell[0].innerText == 'O' && cell[1].innerText == 'O' && cell[2].innerText == 'O') ||
        (cell[3].innerText == 'O' && cell[4].innerText == 'O' && cell[5].innerText == 'O') ||
        (cell[6].innerText == 'O' && cell[7].innerText == 'O' && cell[8].innerText == 'O') ||
        (cell[0].innerText == 'O' && cell[3].innerText == 'O' && cell[6].innerText == 'O') ||
        (cell[1].innerText == 'O' && cell[4].innerText == 'O' && cell[7].innerText == 'O') ||
        (cell[2].innerText == 'O' && cell[5].innerText == 'O' && cell[8].innerText == 'O') ||
        (cell[0].innerText == 'O' && cell[4].innerText == 'O' && cell[8].innerText == 'O') ||
        (cell[2].innerText == 'O' && cell[4].innerText == 'O' && cell[6].innerText == 'O')
    ) {
        setTimeout(function () {
            alert('O Wins')
            resetBoard()
            turn = true
        }, 0);
    }

    else {
        let isDraw = true;
        for (let i = 0; i < cell.length; i++) {
            if (cell[i].innerText === '') {
                isDraw = false;
                break;
            }
        }
        if (isDraw) {
            setTimeout(function () {
                alert('Draw')
                resetBoard()
                turn = true
            }, 0);
        }
    }
}

function resetBoard() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerText = '';
    }
}
