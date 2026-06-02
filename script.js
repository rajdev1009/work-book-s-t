// script.js - Final Fixed Version
const bookData = {
    en: [
        { 
            title: "PRAGATI ELECTROCOM", 
            content: "Today Pragati has an all India presence offering: EXTERNAL LIGHTNING PROTECTION: 'Advanced Lightning Prevention' and 'Capture' systems. Capable of 200KA multi-strike protection." 
        },
        { 
            title: "INTERNAL PROTECTION", 
            content: "Class B (100KA) at building entry using RADAX. Class C (20KA) at distribution board. Class D for Telephone, Network and Server protection." 
        },
        { 
            title: "MAINTENANCE FREE EARTHING", 
            content: "Kit includes: UL/CPRI Copper electrode, Patented LOHM (IEC 62561-7), Polypit Chamber, Copper Bus Bar. Resistance < 1.0 Ohm." 
        },
        { 
            title: "EARTH ELECTRODE", 
            content: "Length: 3/2m, Dia: 17mm. Copper coating: >250 Microns. Steel Core: 1035 ASTM A1080 (90000 psi). 99.95% pure copper." 
        },
        { 
            title: "LOHM PROPERTIES", 
            content: "Permanent, maintenance free. Resistivity <0.07 ohm-m. Non-toxic, non-corrosive, non-explosive." 
        },
        { 
            title: "CONDUCTIVE GEL & POLY PIT", 
            content: "Gel: Highly hygroscopic electrolyte. Poly Pit: Heavy-duty weather-proof plastic, 4 knock-out openings for grid." 
        },
        { 
            title: "COPPER COATED STRIP", 
            content: "Length: 3.0m, Width: 25mm, Thickness: 3mm. Holes on ends. Steel Core 1035 (90000 psi)." 
        },
        { 
            title: "EXOTHERMIC WELDING", 
            content: "Superheated copper alloy for permanent maintenance-free joints. UL 467 approved system." 
        }
    ]
};

let pageFlip = null;

function initBook() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';

    bookData.en.forEach((pageData) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.innerHTML = `
            <div class="page-content">
                <h2>${pageData.title}</h2>
                <p>${pageData.content}</p>
            </div>
        `;
        container.appendChild(page);
    });

    pageFlip = new St.PageFlip(container, {
        width: 440,
        height: 580,
        size: "stretch",
        minWidth: 320,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 700,
        showCover: true,
        mobileScrollSupport: true,
        flippingTime: 1000,
        maxShadowOpacity: 0.6,
        usePortrait: true
    });

    pageFlip.loadFromHTML(container.querySelectorAll('.page'));

    pageFlip.on('flip', () => {
        updateProgressAndPageInfo();
        saveProgress();
    });

    updateProgressAndPageInfo();
    
    // Hide loader smoothly
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 800);
}

function updateProgressAndPageInfo() {
    if (!pageFlip) return;
    
    const current = pageFlip.getCurrentPageIndex() + 1;
    const total = pageFlip.getPageCount();
    const progress = (current / total) * 100;

    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('pageInfo').textContent = `${current} / ${total}`;
}

function saveProgress() {
    if (pageFlip) {
        localStorage.setItem('lastReadPage', pageFlip.getCurrentPageIndex());
    }
}

function nextPage() { 
    if (pageFlip) pageFlip.flipNext(); 
}

function prevPage() { 
    if (pageFlip) pageFlip.flipPrev(); 
}

function speakCurrentPage() {
    if (!pageFlip) return;
    const index = pageFlip.getCurrentPageIndex();
    const text = bookData.en .content;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function toggleTheme(theme) {
    document.body.className = theme;
    
    document.querySelectorAll('.theme-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(theme));
    });
    
    localStorage.setItem('theme', theme);
}

function switchLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });
    // Currently only English data is available
}

let searchTimeout = null;

function initSearch() {
    const searchBar = document.getElementById('searchBar');
    const resultsBox = document.getElementById('searchResults');

    searchBar.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const query = searchBar.value.trim().toLowerCase();
            resultsBox.innerHTML = '';

            if (query.length < 2) {
                resultsBox.style.display = 'none';
                return;
            }

            const matches = bookData.en.map((page, i) => {
                if (page.title.toLowerCase().includes(query) || 
                    page.content.toLowerCase().includes(query)) {
                    return { index: i, title: page.title };
                }
                return null;
            }).filter(Boolean);

            if (matches.length === 0) {
                resultsBox.innerHTML = `<div class="search-item"><small>No results found</small></div>`;
            } else {
                matches.forEach(match => {
                    const item = document.createElement('div');
                    item.className = 'search-item';
                    item.textContent = match.title;
                    item.onclick = () => {
                        if (pageFlip) pageFlip.flipTo(match.index);
                        resultsBox.style.display = 'none';
                        searchBar.value = '';
                    };
                    resultsBox.appendChild(item);
                });
            }
            resultsBox.style.display = 'block';
        }, 250);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
});

window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'sepia';
    document.body.className = savedTheme;
    
    initBook();
    initSearch();

    const lastPage = localStorage.getItem('lastReadPage');
    if (lastPage) {
        setTimeout(() => {
            if (pageFlip) pageFlip.flipTo(parseInt(lastPage));
        }, 1500);
    }
};
