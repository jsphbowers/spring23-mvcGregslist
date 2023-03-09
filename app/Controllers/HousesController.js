import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
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

  createHouse() {
    event.preventDefault()
    const form = event.target
    // console.log("form submitted")
    let formData = getFormData(form)
    // console.log(formData)
    housesService.createHouse(formData)
    form.reset()
    _drawHouses()
  }
}