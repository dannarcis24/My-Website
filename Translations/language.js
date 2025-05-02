const lang = {
    ro: { flagSrc: "Flags/ro.png", ro_lang: "Română", en_lang: "Engleza"},
    en: { flagSrc: "Flags/en.png", ro_lang: "Romanian", en_lang: "English"}
}

const button = document.getElementById("butt-flag");
const flag   = document.getElementById("curr-flag");
const menu   = document.getElementById("lang-menu");
const drop   = document.getElementById("dropdown");
const flags  = {ro: document.getElementById("ro-name"), 
                en: document.getElementById("en-name"),};


// deschidem/inchidem meniul la apasarea butonului
button.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
})

// Închide meniul dacă dai click în afară
document.addEventListener("click", (e) => {
    if(!drop.contains(e.target)) {
        menu.style.display = "none";
    }
});

// selectarea unei limbi
menu.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        const aux = li.getAttribute("data-lang");
        const selected = lang[aux];

        flag.src = selected.flagSrc;
        flags.ro = selected.ro_lang;
        flags.en = selected.en_lang;

        menu.style.display = "none";
        changeLanguage(aux);
        localStorage.setItem('siteLanguage', aux);
    })
})

// funcție pentru a schimba limba pe baza selecției
function changeLanguage(language) {
    for (const id in dict[language]) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = dict[language][id];
        }
    }
}

// Detectare și setare limbă inițială
let userLanguage = localStorage.getItem('siteLanguage');
if (!userLanguage || !dict[userLanguage]) {
  userLanguage = navigator.language.slice(0, 2);
  if (!dict[userLanguage]) userLanguage = 'en';
}

menu.style.display = "none";

// setează limba inițială
flag.src = lang[userLanguage].flagSrc;
flags.ro = lang[userLanguage].ro_lang; 
flags.en = lang[userLanguage].en_lang;
changeLanguage(userLanguage);