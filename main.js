const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 12;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // rastgele renk kodu uretmek
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // yeni bir 'li' elemanı oluşturmak ve container icine koymak
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // hex degeri kopyalanir, kopyalandi metni guncellenir, 
    // 1 saniye sonra metin eski degerine doner
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Kopyalandi";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Renk kodu kopyalanamadi!")); // kopyalanamadigini gösterir
}

refreshBtn.addEventListener("click", generatePalette);