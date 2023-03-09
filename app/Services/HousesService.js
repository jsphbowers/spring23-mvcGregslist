import { appState } from "../AppState.js"
import { House } from "../Models/House.js"



class HousesService {

  createHouse(houseData) {
    let house = new House(houseData)
    appState.houses.push(house)
    console.log(appState.houses)
    appState.emit('houses')
  }
}

export const housesService = new HousesService()