import { game } from "./store"


export function startGame() {
    setInterval(()=>{
        console.log(game)
    },3000)
}