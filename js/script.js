// Car objects
let myCar = {
  model: "Vintage Mustang",
  brand: "Ford",
  color: "Green",
  scale: "1:18",
  price: "$33.60",
  material: "Die-cast",
  SKU: "31166-MAI-GREEN",
  UPC: "764072005706",
  packaging: "Window Box",
  year: 1965,
  weight: "500g",
  availability: "In stock"
};

// Function to display car details
function showCarDetails() {
  document.getElementById("carDetails").innerHTML = `
      <p>Brand: ${myCar.brand}</p>
      <p>Model: ${myCar.model}</p>
      <p>Color: ${myCar.color}</p>
      <p>Scale: ${myCar.scale}</p>
      <p>SKU: ${myCar.SKU}</p>
      <p>UPC: ${myCar.UPC}</p>
      <p>Year: ${myCar.year}</p>
      <p>Weight: ${myCar.weight}</p>
      <p>Material: ${myCar.material}</p>
      <p>Price: ${myCar.price}</p>
      <p>packaging: ${myCar.packaging}</p>
      <p>Availability: ${myCar.availability}</p>
  `;
}

// Function to change the car color
function changeColor(color) {
  myCar.color = color;
  showCarDetails();
  const carImage = document.getElementById("carImage");

  // If statement to switch the image when the color is selected
    if (color === "White") {
      myCar.SKU = "31167-MAI-WHITE";
      myCar.UPC = "764072005737" 
      carImage.src = "./img/white.jpg";

    } else if (color === "Green") {
      myCar.SKU = "31166-MAI-GREEN";
      myCar.UPC = "764072005706"
      carImage.src = "./img/green.jpg";
    }
    showCarDetails();
}
