import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.color = data.color
    this.floors = data.floors
    this.sqfoot = data.sqfoot
    this.price = data.price
    this.img = data.img
  }


  get HouseCard() {
    return `<div class="col-6 col-md-4">
    <div class="card elevation-2">
      <img
        src=${this.img}
        alt="${this.color}">
      <div class="p-2 info-bg">
        <h5 class="text-center"> ${this.sqfoot} sqfeet | 🧀${this.price}</h5>
        <p>Address: ${this.address}</p>
        <p>Floors: ${this.floors}</p>
        <div class="color px-2 rounded" style="background: ${this.color}">🖌️</div>
      </div>
    </div>
  </div>
  `
  }

  static HouseForm() {
    return `
    <form onsubmit="app.carsController.createCar()" class="row bg-white rounded p-4 elevation-2">
            <h3>List a House:</h3>
            <div class="mb-2 col-4">
              <label for="address">Address</label>
              <input type="text" name="address" id="address" class="form-control" placeholder="Yo Mammas House"
                required>
            </div>
            <div class="mb-2 col-4">
              <label for="price">Price</label>
              <input type="number" name="price" id="price" class="form-control" placeholder="$" required min="0">
            </div>
            <div class="mb-2 col-4">
              <label for="sqfeet">Square Footage</label>
              <input type="number" name="sqfeet" id="sqfeet" class="form-control" required min="0">
            </div>
            <div class="mb-2 col-4">
              <label for="color">Color</label>
              <input type="color" name="color" id="color" class="form-control" required>
            </div>
            <div class="mb-2 col-4">
              <label for="floors">Floors</label>
              <input type="number" name="floors" id="floors" class="form-control" required>
            </div>
            <div class="mb-2 col-4">
              <label for="img">Image</label>
              <input type="url" name="img" id="img" class="form-control" required
                placeholder="link an image of ur house!">
            </div>
          </form>
    `
  }
}