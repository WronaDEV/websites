const LoadingPageText = document.getElementById("loading-page-text");
const LoadingTexts = [
    "Czy wiesz że Wrona to szef?",
    "Ta? To Smerfastycznie!",
    "Tyle było dni...",
    "To były tylko rozkazy...",
    "Mocium panie!",
    "GG!",
    "nIe jEsTeM rObOtEm",
    "ShowMC.pl GUROM!!!"
]
LoadingPageText.textContent = LoadingTexts[Math.floor(Math.random()*LoadingTexts.length)];;