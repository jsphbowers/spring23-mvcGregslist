import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }
}