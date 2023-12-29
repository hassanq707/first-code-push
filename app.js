
const mobileModels = [
    {
      brand: "Samsung",
      model: "SamsungA30",
      price: "40000",
      camera: "40px",
      ram: "8gb",
      rom: "128gb",
    },
    {
      brand: "Samsung",
      model: "SamsungA10",
      price: "40000",
      camera: "40px",
      ram: "4gb",
      rom: "128gb",
    },
    {
      brand: "Samsung",
      model: "SamsungA20",
      price: "40000",
      camera: "40px",
      ram: "4gb",
      rom: "128gb",
    },
    {
      brand: "Vivo",
      model: "VivoY20",
      price: "20000",
      camera: "40px",
      ram: "2gb",
      rom: "32gb",
    },
    {
      brand: "Vivo",
      model: "VivoY11",
      price: "20000",
      camera: "40px",
      ram: "3gb",
      rom: "32gb",
    },
    {
      brand: "Vivo",
      model: "VivoY15",
      price: "30000",
      camera: "40px",
      ram: "4gb",
      rom: "64gb",
    },
    {
      brand: "Motorola",
      model: "Motorola123",
      price: "5000",
      camera: "2px",
      ram: "2gb",
      rom: "32gb",
    },
    {
      brand: "Iphone",
      model: "Iphone12",
      price: "300000",
      camera: "40px",
      ram: "8gb",
      rom: "128gb",
    },
    {
      brand: "Iphone",
      model: "Iphone13",
      price: "300000",
      camera: "40px",
      ram: "8gb",
      rom: "128gb",
    },
    {
      brand: "Iphone",
      model: "IphoneX",
      price: "300000",
      camera: "40px",
      ram: "8gb",
      rom: "128gb",
    },
  ];


// Function to update details based on selected option and input
function filterModels() {
    const selectedOption = document.getElementById('optionSelect').value;

    const inputValue = document.getElementById('inputField').value.toLowerCase();

    const filteredModels = mobileModels.filter((model) => {
        
     return model[selectedOption].toLowerCase().includes(inputValue)
         
    });
    console.log(filteredModels)

    const modelDetailsDiv = document.getElementById('modelDetails');
    
    if (filteredModels.length > 0) {
        modelDetailsDiv.innerHTML = '<h2>Filtered Models:</h2>';
        filteredModels.forEach(filteredModel => {
            modelDetailsDiv.innerHTML += `
                <p>${filteredModel.brand} ${filteredModel.model} - Price: ${filteredModel.price}, Camera: ${filteredModel.camera}, RAM: ${filteredModel.ram}, ROM: ${filteredModel.rom}</p>
            `;
        });
    } else {
        modelDetailsDiv.innerHTML = '<p>No models found for the selected criteria.</p>';
    }
}





























































