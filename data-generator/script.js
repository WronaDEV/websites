const pl_m_name = [
    'Jan', 'Kacper', 'Mateusz', 'Michał', 'Jakub', 'Szymon', 'Bartosz', 'Adam', 'Piotr', 'Paweł',
    'Wiktor', 'Adrian', 'Kamil', 'Mikołaj', 'Krzysztof', 'Tomasz', 'Patryk', 'Łukasz', 'Marcin', 'Daniel',
    'Rafał', 'Hubert', 'Grzegorz', 'Damian', 'Sebastian', 'Robert', 'Artur', 'Alan', 'Dawid', 'Oliwier',
    'Igor', 'Filip', 'Marek', 'Dominik', 'Radosław', 'Aleksander', 'Maciej', 'Łukasz', 'Emil', 'Arkadiusz',
    'Jacek', 'Ksawery', 'Ernest', 'Bartłomiej', 'Juliusz', 'Cezary', 'Konrad', 'Norbert', 'Ryszard', 'Łukasz',
    'Ireneusz', 'Zenon', 'Edward', 'Henryk', 'Przemysław', 'Tadeusz', 'Władysław', 'Kazimierz', 'Artur', 'Aleks',
    'Bogdan', 'Leszek', 'Józef', 'Janusz', 'Zbigniew', 'Dariusz', 'Ernest', 'Waldemar', 'Ryszard', 'Stanisław',
    'Tymoteusz', 'Gerard', 'Karol', 'Leon', 'Zygmunt', 'Adrian', 'Bogusław', 'Cyprian', 'Felicjan', 'Leonard'
];

const pl_m_lname = [
    'Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak',
    'Dąbrowski', 'Kozłowski', 'Jankowski', 'Mazur', 'Wojciechowski', 'Kwiatkowski', 'Kaczmarek', 'Piotrowski', 'Grabowski', 'Zając',
    'Pawłowski', 'Michalski', 'Król', 'Wieczorek', 'Jabłoński', 'Wróbel', 'Nowakowski', 'Majewski', 'Olszewski', 'Stępień',
    'Jaworski', 'Malinowski', 'Pawlak', 'Witkowski', 'Walczak', 'Stankiewicz', 'Baran', 'Sadowski', 'Duda', 'Gajewski',
    'Rutkowski', 'Michalak', 'Sikora', 'Ostrowski', 'Tomaszewski', 'Zalewski', 'Wróblewski', 'Marciniak', 'Jasiński', 'Zawadzki',
    'Sokół', 'Czerwiński', 'Błaszczyk', 'Kubiak', 'Kwiecień', 'Marcinkowski', 'Kaczmarczyk', 'Mazurek', 'Włodarczyk', 'Adamczyk',
    'Górski', 'Jóźwiak', 'Bednarek', 'Makowski', 'Nawrocki', 'Wrona', 'Krajewski', 'Leszczyński', 'Górecki', 'Głowacki',
    'Klimek', 'Kołodziej', 'Matuszewski', 'Wawrzyniak', 'Sobczak', 'Baranowski', 'Laskowski', 'Brzeziński', 'Czech', 'Kowalewski',
    'Leszczynski', 'Cieślak', 'Szymczak', 'Gajda', 'Krawczyk', 'Wesołowski', 'Kołodziejczyk', 'Urbański', 'Kaźmierczak', 'Czarnecki'
];

function GenerateData() {
    var gender = document.getElementById("gender-input")[0].value;
    document.getElementById("data-box").style.display = "none";
    document.getElementById("results-box").style.display = "block";
    const isFemale = false;
    const randomName = isFemale ? sampleNamesFemale[Math.floor(Math.random() * sampleNamesFemale.length)] : pl_m_name[Math.floor(Math.random() * pl_m_name.length)];
    const randomLastName = isFemale ? sampleLastNamesFemale[Math.floor(Math.random() * sampleLastNamesFemale.length)] : pl_m_lname[Math.floor(Math.random() * pl_m_lname.length)];
    console.log(randomName + " " + randomLastName);
    document.getElementById("results-box").style.display = "block";
    //if (gender.value == random) {
    //    alert("Random Age...");
    //}
    document.getElementById("generated-name").textContent = pl_m_name[Math.floor((Math.random()*pl_m_name.length))];
    document.getElementById("generated-last-name").textContent = pl_m_lname[Math.floor((Math.random()*pl_m_name.length))];
    document.getElementById("generated-age").textContent = Math.floor((Math.random()*99));
    document.getElementById("generated-nickname").textContent = Math.floor((Math.random()*99));
}