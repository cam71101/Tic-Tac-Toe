function Player(name) {
    this.name = name
    // this.points = 0
}

const TicTacToe =  {
        score:  [],
        player1name: "",
        player2name: "",
        turn: this.player1name,

        init: function(player1, player2) {
            this.player1name = player1.name
            this.player2name = player2.name
            this.turn = player1.name
            this.cacheDom()
            this.bindEvents()
            this.render()
        },

        cacheDom: function() {
            this.player1turn = document.querySelector("#player1turn")
            this.player2turn = document.querySelector("#player2turn")
            this.container = document.querySelectorAll(".square")
            this.reset = document.querySelector("#reset")
        },

        bindEvents: function() {
            square1.addEventListener("click", () => this.xORo(0))
            square2.addEventListener("click", () => this.xORo(1))
            square3.addEventListener("click", () => this.xORo(2))
            square4.addEventListener("click", () => this.xORo(3))
            square5.addEventListener("click", () => this.xORo(4))
            square6.addEventListener("click", () => this.xORo(5))
            square7.addEventListener("click", () => this.xORo(6))
            square8.addEventListener("click", () => this.xORo(7))
            square9.addEventListener("click", () => this.xORo(8))
            this.reset.addEventListener("click", () => this.clearGrid())
        },

        clearGrid: function() {
            this.score = []
            this.render()
        },

        xORo: function(index) {
            if (!this.score[index]) {
                if (this.turn === this.player1name) {
                    this.turn = this.player2name
                    this.score[index] = "x"
                } else {
                    this.turn = this.player1name
                    this.score[index] = "o"
                }
                this.render()
            } else {
                return
            }
        },

        checkForWinner: function() {
            const score = this.score
            const drawScore = score.filter((value) => {
                return value === "x" || value === "o"
            })

            if (drawScore.length === 9) { 
                alert("It's a draw!")
                this.clearGrid()
            } else {
                switch (true) {
                    case (score[0] === "x" && score[1] === "x" && score[2] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        break;
                    case (score[3] === "x" && score[4] === "x" && score[5] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[6] === "x" && score[7] === "x" && score[8] === "x"):
                         alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[0] === "x" && score[3] === "x" && score[6] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[1] === "x" && score[4] === "x" && score[7] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[3] === "x" && score[5] === "x" && score[8] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[0] === "x" && score[4] === "x" && score[8] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break; 
                    case (score[2] === "x" && score[4] === "x" && score[6] === "x"):
                        alert('Player 1 wins!')
                        this.score = []
                        this.render()
                        break; 
                    case (score[0] === "o" && score[1] === "o" && score[2] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[3] === "o" && score[4] === "o" && score[5] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[6] === "o" && score[7] === "o" && score[8] === "o"):
                         alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[0] === "o" && score[3] === "o" && score[6] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[1] === "o" && score[4] === "o" && score[7] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[3] === "o" && score[5] === "o" && score[8] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    case (score[0] === "o" && score[4] === "o" && score[8] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break; 
                    case (score[2] === "o" && score[4] === "o" && score[6] === "o"):
                        alert('Player 2 wins!')
                        this.score = []
                        this.render()
                        break;
                    default:
                }
            }
        },

        render: function () {
            if (this.score === []) {
                this.container.forEach((element) => {
                    element.textContent = ""
                })
                this.turn = this.player1name
                return
            }
            
            let total = 0
            this.container.forEach((element) => {
                element.textContent = this.score[total]
                total ++
            }, 0);

            if (this.turn === this.player1name) {
                this.player1turn.textContent = this.player1name + " turn"
            } else {
                this.player1turn.textContent = this.player2name + " turn"
            }
            this.checkForWinner()
        },
};


document.querySelector('.button').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
    const player1 = new Player(document.getElementById('player1').value)
    const player2 = new Player(document.getElementById('player2').value)
    TicTacToe.init(player1, player2)
});

