// script.js
const bookData = { /* tumhara pura data yahin rahega */ };

let pageFlip;
let currentLang = 'en';

function initBook() {
    const container = document.getElementById('book-container');
    
    // Clear previous pages
    container.innerHTML = '';

    // Create pages
    bookData[currentLang].forEach((page, index) => {
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

    // Initialize StPageFlip
    pageFlip = new St.PageFlip(container, {
        width: 400,           // single page width
        height: 500,
        size: "stretch",
        minWidth: 300,
        maxWidth: 800,
        minHeight: 400,
        maxHeight: 600,
        showCover: true,
        mobileScrollSupport: true,
        maxShadowOpacity: 0.5,
        flippingTime: 800,    // animation speed
        usePortrait: true
    });

    // Load pages
    pageFlip.loadFromHTML(container.querySelectorAll('.page'));

    // Events
    pageFlip.on('flip', () => {
        updateProgress();
        saveProgress();
    });

    // Initial progress
    updateProgress();
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

function nextPage() {
    if (pageFlip) pageFlip.flipNext();
}

function prevPage() {
    if (pageFlip) pageFlip.flipPrev();
}

function speakCurrentPage() {
    if (!pageFlip) return;
    const currentIndex = pageFlip.getCurrentPageIndex();
    const text = bookData[currentLang][currentIndex].content;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function toggleTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Search (basic)
function searchBook() {
    const query = document.getElementById('searchBar').value.toLowerCase().trim();
    if (!query) return;

    const results = bookData[currentLang].filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.content.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        alert(`Found ${results.length} results. First match: ${results[0].title}`);
        // Better: highlight ya jump to page
    } else {
        alert("No results found");
    }
}

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});

// Load on start
window.onload = () => {
    initBook();
    
    // Restore last page
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && pageFlip) {
        setTimeout(() => {
            pageFlip.flipTo(parseInt(lastPage));
        }, 800);
    }
};
