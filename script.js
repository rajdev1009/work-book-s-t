// ================= MASSIVE DATA DICTIONARY =================
const bookData = {
    en: [
        { title: "Ext. Lightning Protection", content: "Two types: 'Advanced Lightning Prevention' & 'Capture'. Capable of handling multi strikes of 200KA at 10/350 waveforms. Energy dissipated to earth via low impedance copper down conductor & maintenance-free earth pits." },
        { title: "Int. Lightning Protection", content: "Class B (100KA, 10/350 pulse) at building entry using fuse less RADAX Tech. Class C (20KA, 8/20) before distribution board with energy coordination coil. Class D for Telephone, RF, Network, Coaxial, and Server protection." },
        { title: "Earthing Kit Overview", content: "Kit consists of: UL/CPRI Copper coated electrode, Patented LOHM (IEC 62561-7), Polypit Chamber, and Copper Bus Bar. Performed as per IS 3043, BS 7430, IEEE 142 & RDSO for resistance upto 1.0 Ohm." },
        { title: "Earth Electrode Specs", content: "Length 3/2m, Dia 17mm. Copper coating >250 microns (Molecular bonding). Steel core 1035 cold drawn to ASTM A1080/AISI C1017 (90000 psi tensile). DHP alloy No.122 (99.95% copper). UL Listed & CPRI Certified." },
        { title: "Pragati LOHM", content: "Permanent & maintenance-free. Sets firmly, doesn't dissolve or pollute soil. Works dry or slurry. Resistivity <0.07 ohm-m. Conforms to IEC 62561 Part-7. Hygroscopic, non-toxic, non-corrosive. Bags: 10/15/20/23 KG." },
        { title: "LOHM Conductive Gel", content: "Non-corrosive ground enhancing gel. Low solubility, very hygroscopic. Electrolyte base for high conductivity. Creates partially ionized electrolytes with high charge & water retention. Long-lasting particle links." },
        { title: "Poly Pit & Copper Strip", content: "Poly Pit: Heavy-duty, weather-proof, chemical resistant plastic. Top locking, 4 knock-out openings for GRID, zero water absorption. Copper Strip: 3.0m length, 25mm width, 3mm thick, >250 Microns copper coating." },
        { title: "Exothermic Welding", content: "Employs superheated copper alloy to make permanent & maintenance-free joints. Avoids unreliable screwed joints. Ensures lifelong integrity connecting earth pit with equipment. UL 467 approved system." }
    ],
    hi: [
        { title: "बाहरी लाइटनिंग प्रोटेक्शन", content: "दो प्रकार: 'एडवांस्ड लाइटनिंग प्रिवेंशन' और 'कैप्चर'। 200KA (10/350 वेवफॉर्म) के मल्टी स्ट्राइक्स संभालने में सक्षम। लो-इम्पीडेंस कॉपर डाउन कंडक्टर से अर्थ में ऊर्जा ट्रांसफर।" },
        { title: "आंतरिक लाइटनिंग प्रोटेक्शन", content: "क्लास B (100KA): बिल्डिंग एंट्री पर RADAX तकनीक। क्लास C (20KA): डिस्ट्रीब्यूशन बोर्ड से पहले, को-ऑर्डिनेशन कॉइल के साथ। क्लास D: टेलीफोन, RF, कंप्यूटर नेटवर्क, सर्वर और कोएक्सियल लाइन की सुरक्षा।" },
        { title: "अर्थिंग किट ओवरव्यू", content: "किट में शामिल: UL/CPRI कॉपर कोटेड इलेक्ट्रोड, पेटेंटेड LOHM (IEC 62561-7), पॉलीपिट चैम्बर और कॉपर बस बार। IS 3043, BS 7430, IEEE 142 व RDSO नियमों के तहत 1.0 Ohm तक अर्थ रेजिस्टेंस।" },
        { title: "अर्थ इलेक्ट्रोड स्पेसिफिकेशन", content: "लंबाई 3/2m, व्यास 17mm। 250+ माइक्रोन कॉपर कोटिंग (मॉलिक्यूलर बॉन्डिंग)। स्टील कोर 1035 (90000 psi)। DHP अलॉय नंबर 122 (99.95% कॉपर)। UL लिस्टेड (ANSI/UL 467) और CPRI प्रमाणित।" },
        { title: "प्रगति LOHM", content: "स्थायी और मेंटेनेंस-फ्री। न घुलता है, न मिट्टी प्रदूषित करता है। बिना नमी के भी चालकता बनाए रखता है। रेजिस्टिविटी 0.07 ohm-m से कम। IEC 62561 Part-7 के अनुरूप। नॉन-टॉक्सिक, स्किन/आँखों के लिए सुरक्षित। 10-23 KG बैग्स।" },
        { title: "LOHM कंडक्टिव जेल", content: "नॉन-कोरोसिव ग्राउंड एन्हांसिंग जेल। पानी में कम घुलनशील पर उच्च नमी सोखने वाला। इलेक्ट्रोलाइट बेस से उच्च चालकता। आयनित इलेक्ट्रोलाइट्स बनाता है जो लंबे समय तक मिट्टी में टिके रहते हैं।" },
        { title: "पॉली पिट और कॉपर स्ट्रिप", content: "पॉली पिट: हेवी-ड्यूटी, वेदर-प्रूफ, केमिकल प्रतिरोधी प्लास्टिक। लॉकिंग सुविधा, ग्रिड बनाने के लिए 4 ओपनिंग। कॉपर स्ट्रिप: 3.0 मीटर लंबी, 25mm चौड़ी, 3mm मोटी, >250 माइक्रोन कोटिंग।" },
        { title: "एक्सोथर्मिक वेल्डिंग", content: "स्थायी और मेंटेनेंस-फ्री जोड़ बनाने के लिए सुपरहीटेड कॉपर अलॉय का इस्तेमाल। पेच वाले अविश्वसनीय जोड़ों से बचाता है। उपकरण को अर्थ पिट से जीवनभर सुरक्षित जोड़ता है। UL 467 अप्रूव्ड।" }
    ],
    bn: [
        { title: "বাহ্যিক বজ্রপাত সুরক্ষা", content: "দুই প্রকার: 'উন্নত বজ্রপাত প্রতিরোধ' এবং 'ক্যাপচার'। 200KA পর্যন্ত মাল্টি-স্ট্রাইক পরিচালনা করতে সক্ষম। লো-ইম্পিডেন্স কপার ডাউন কন্ডাক্টরের মাধ্যমে পৃথিবীতে শক্তি স্থানান্তর করে।" },
        { title: "অভ্যন্তরীণ বজ্রপাত সুরক্ষা", content: "ক্লাস B (100KA): বিল্ডিং এন্ট্রিতে ফিউজ-লেস RADAX প্রযুক্তি। ক্লাস C (20KA): ডিস্ট্রিবিউশন বোর্ডের আগে। ক্লাস D: টেলিফোন, RF, কম্পিউটার নেটওয়ার্ক, সার্ভার এবং কোঅক্সিয়াল লাইনের সুরক্ষা।" },
        { title: "আর্থিং কিট ওভারভিউ", content: "কিটে রয়েছে: UL/CPRI কপার কোটেড ইলেকট্রোড, পেটেন্ট করা LOHM (IEC 62561-7), পলিপিট চেম্বার এবং কপার বাস বার। IS 3043, BS 7430 অনুযায়ী 1.0 Ohm পর্যন্ত আর্থ রেজিস্ট্যান্স।" },
        { title: "আর্থ ইলেকট্রোড স্পেসিফিকেশন", content: "দৈর্ঘ্য ৩/২ মি, ব্যাস ১৭ মিমি। ২৫০+ মাইক্রন কপার কোটিং (আণবিক বন্ধন)। স্টিল কোর 1035 (90000 psi)। DHP অ্যালয় 122 (99.95% কপার)। UL তালিকাভুক্ত এবং CPRI প্রত্যয়িত।" },
        { title: "প্রগতি LOHM", content: "স্থায়ী এবং রক্ষণাবেক্ষণ মুক্ত। এটি মাটিতে গলে না বা মাটি দূষিত করে না। জল বা আর্দ্রতা ছাড়াও পরিবাহিতা বজায় রাখে। প্রতিরোধ ক্ষমতা <0.07 ohm-m। বিষাক্ত নয় এবং ত্বকের জন্য নিরাপদ।" },
        { title: "LOHM পরিবাহী জেল", content: "ক্ষয়হীন গ্রাউন্ড বর্ধক জেল। কম দ্রবণীয় কিন্তু অত্যন্ত আর্দ্রতা শোষক। উচ্চ পরিবাহিতার জন্য ইলেক্ট্রোলাইট বেস। আংশিক আয়নিত ইলেক্ট্রোলাইট তৈরি করে যা মাটিতে দীর্ঘস্থায়ী হয়।" },
        { title: "পলি পিট এবং কপার স্ট্রিপ", content: "পলি পিট: হেভি-ডিউটি, আবহাওয়া-প্রমাণ এবং রাসায়নিক প্রতিরোধী প্লাস্টিক চেম্বার। টপ লকিং এবং গ্রিডের জন্য ৪টি ওপেনিং। কপার স্ট্রিপ: ৩.০ মি লম্বা, ২৫ মিমি চওড়া, ৩ মিমি পুরু, ২৫০+ মাইক্রন কোটিং।" },
        { title: "এক্সোথার্মিক ওয়েল্ডিং", content: "স্থায়ী এবং রক্ষণাবেক্ষণ-মুক্ত জয়েন্ট তৈরি করতে সুপারহিটেড কপার অ্যালয়ের ব্যবহার। স্ক্রু জয়েন্টগুলি এড়িয়ে যায়। সরঞ্জামের সাথে আর্থ পিটকে সারাজীবন নিরাপদে সংযুক্ত রাখে। UL 467 অনুমোদিত।" }
    ]
};

let currentLang = 'en';
let swiper;

// ================= LOADER LOGIC =================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000); 
    }, 2500); // 2.5 seconds RAJ intro
});

// ================= RENDER CONTENT & INIT SWIPER =================
function renderBook() {
    const container = document.getElementById('book-content');
    container.innerHTML = ''; 

    bookData[currentLang].forEach((page, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <div class="page-title interactive-text">${page.title}</div>
            <div class="page-content interactive-text">
                <p>${page.content}</p>
            </div>
            <button class="tts-btn" onclick="speakContent(${index})">
                <i class="fa-solid fa-volume-high"></i> Read Aloud
            </button>
        `;
        container.appendChild(slide);
    });

    if (swiper) {
        swiper.destroy(); 
    }
    
    swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
}

// ================= LANGUAGE SWITCHER =================
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    window.speechSynthesis.cancel();
    renderBook();
}

// ================= TTS (TEXT TO SPEECH) =================
function speakContent(index) {
    window.speechSynthesis.cancel();
    const data = bookData[currentLang][index];
    const textToRead = `${data.title}. ${data.content}`;
    
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    if (currentLang === 'hi') utterance.lang = 'hi-IN';
    else if (currentLang === 'bn') utterance.lang = 'bn-IN';
    else utterance.lang = 'en-US';

    utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

// ================= WATER / MAGNETIC TEXT EFFECT & GLOW =================
const glow = document.getElementById('cursorGlow');

function handleInteraction(x, y) {
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    document.querySelectorAll('.interactive-text').forEach(el => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;
        
        const distX = x - elX;
        const distY = y - elY;
        const distance = Math.sqrt(distX*distX + distY*distY);

        if (distance < 120) {
            el.style.transform = `translate(${distX * 0.15}px, ${distY * 0.15}px) scale(1.02)`;
            el.style.textShadow = `0 0 15px #00e5ff`;
        } else {
            el.style.transform = `translate(0, 0) scale(1)`;
            el.style.textShadow = `none`;
        }
    });
}

document.addEventListener('mousemove', (e) => handleInteraction(e.clientX, e.clientY));
document.addEventListener('touchmove', (e) => {
    handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
});

renderBook();
