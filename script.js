const bookData = {
    en: [
        { title: "PRAGATI ELECTROCOM", content: "Today Pragati has an all India presence offering: EXTERNAL LIGHTNING PROTECTION: 'Advanced Lightning Prevention' and 'Capture' systems. Capable of 200KA multi-strike protection." },
        { title: "INTERNAL PROTECTION", content: "Class B (100KA) at building entry using RADAX. Class C (20KA) at distribution board. Class D for Telephone, Network and Server protection." },
        { title: "MAINTENANCE FREE EARTHING", content: "Kit includes: UL/CPRI Copper electrode, Patented LOHM (IEC 62561-7), Polypit Chamber, Copper Bus Bar. Resistance < 1.0 Ohm." },
        { title: "EARTH ELECTRODE", content: "Length: 3/2m, Dia: 17mm. Copper coating: >250 Microns. Steel Core: 1035 ASTM A1080 (90000 psi). 99.95% pure copper." },
        { title: "LOHM PROPERTIES", content: "Permanent, maintenance free. Resistivity <0.07 ohm-m. Non-toxic, non-corrosive, non-explosive." },
        { title: "CONDUCTIVE GEL & POLY PIT", content: "Gel: Highly hygroscopic electrolyte. Poly Pit: Heavy-duty weather-proof plastic, 4 knock-out openings for grid." },
        { title: "COPPER COATED STRIP", content: "Length: 3.0m, Width: 25mm, Thickness: 3mm. Holes on ends. Steel Core 1035 (90000 psi)." },
        { title: "EXOTHERMIC WELDING", content: "Superheated copper alloy for permanent maintenance-free joints. UL 467 approved system." }
    ]
};

let pageFlip = null;
let currentLang = 'en';

function initBook() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Clear pehle

    // Pages create karo
    bookData[currentLang].forEach(page => {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.innerHTML = `
            <div class="page-content">
                <h2>${page.title}</h2>
                <p>${page.content}</p>
            </div>
        `;
        container.appendChild(pageDiv);
    });

    // Initialize PageFlip
    pageFlip = new St.PageFlip(container, {
        width: 420,
        height: 520,
        size: "stretch",
        minWidth: 300,
        maxWidth: 900,
        minHeight: 400,
        maxHeight: 650,
        showCover: true,
        mobileScrollSupport: true,
        flippingTime: 900,
        maxShadowOpacity: 0.6
    });

    pageFlip.loadFromHTML(container.querySelectorAll('.page'));

    // Events
    pageFlip.on('flip', () => {
        updateProgress();
        saveProgress();
    });

    updateProgress();

    // Hide loader after book loads
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1200);
}

function updateProgress() {
    if (!pageFlip) return;
    const current = pageFlip.getCurrentPageIndex() + 1;
    const total = pageFlip.getPageCount();
    const progress = (current / total) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function saveProgress() {
    if (pageFlip) {
        localStorage.setItem('lastPage', pageFlip.getCurrentPageIndex());
    }
}

function nextPage() { if (pageFlip) pageFlip.flipNext(); }
function prevPage() { if (pageFlip) pageFlip.flipPrev(); }

function speakCurrentPage() {
    if (!pageFlip) return;
    const index = pageFlip.getCurrentPageIndex();
    const text = bookData[currentLang][index].content;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function toggleTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function searchBook() {
    const query = document.getElementById('searchBar').value.toLowerCase().trim();
    if (!query || !pageFlip) return;
    
    const results = bookData[currentLang].findIndex(page => 
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );
    
    if (results !== -1) {
        pageFlip.flipTo(results);
    } else {
        alert("No matching content found!");
    }
}

// Keyboard support
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});

// Start everything
window.onload = initBook;
