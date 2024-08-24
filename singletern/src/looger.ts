import { GameManager } from "./game"

export function addGame() {
    setInterval(() => {
      GameManager.getIntance().addGame(Math.random().toString())
    },5000)
}