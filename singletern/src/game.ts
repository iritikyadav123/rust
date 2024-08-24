interface Game {
    id : string;
    blackPlayer: string;
    whitePlayer: string;
    moves: string[]
}

export class GameManager {
    private static intence : GameManager;
    game: Game[] = [];

   private constructor () {
        this.game = []
    }

     static getIntance() {
        if(GameManager.intence) {
            return GameManager.intence;
        }
        GameManager.intence = new GameManager();
        return GameManager.intence;
     }

    addMove(gameId: string, move: string) {
        console.log(`adding move ${move} to game ${gameId}`)
        const game = this.game.find(game => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId: string) {
       const game = {
            id : gameId,
            blackPlayer: "alice",
            whitePlayer: "david",
            moves: []
        }
        this.game.push(game);
    }

    log() {
        console.log(this.game);
    }
}

 