const bookData = {
    en: [
        { title: "PRAGATI ELECTROCOM", content: "<b>Today Pragati has an all India presence through its branch offices and offer solutions for:</b><br><br><b>EXTERNAL LIGHTNING PROTECTION</b><br>Two types of external lightning protection namely 'Advanced Lightning Prevention' and 'Advanced Lightning Capture' system are available. Protection is available against direct lightning, capable of handling multi strikes of lightning of the order of 200KA at 10/350 waveforms. Dissipation of this energy to earth is done through low impedance copper down conductor & maintenance free earth pits." },
        { title: "INTERNAL LIGHTNING PROTECTION", content: "<ul><li><b>A) Class B Protection</b> at the building entry point having 100KA at 10/350 pulse handling capacity, designed using fuse less lightning arresters operating on RADAX Technology.</li><br><li><b>B) Class C Protection</b> before the distribution board, capable of handling surges of the order of 20KA at 8/20 using fuse less surge arresters. The multi strike handling system operation is regulated by using an energy co-ordination coil.</li><br><li><b>C) Class D Protection:</b> Telephone Line Protection, radio Frequency Interface Protection, Computer Network Protection, Coaxial Cable Line Protection, Data Line and Server Protection.</li></ul>" },
        { title: "Maintenance Free Earthing", content: "<b>PRAGATI MAINTENANCE FREE EARTHING KIT CONSISTS OF</b><br><ol><li>UL Approved and CPRI certified Copper coated electrode</li><li>Our patented Earth Enhancement Material by trade name 'LOHM' complying IEC 62561-7 standard.</li><li>Polypit / RCC Earth Chamber</li><li>Copper / Copper Coated Earth Bus Bar</li></ol>Earthing is performed as per IS 3043; BS 7430 & IEEE 142 and RDSO guidelines to achieve Earth resistance of upto 1.0 Ohm." },
        { title: "Earth Electrode", content: "<b>Maintenance Free Earthing (ISO 9001; ISO 14001; ISO 45001) (UL) (CPRI)</b><br><ul><li>Length: 3/2 meters</li><li>Nominal Diameter: 17 mm</li><li>Thickness of copper coating: >250 Microns(Molecular bonding)</li><li>Steel Core: 1035 steel cold drawn to ASTM A 1080 and AISI C 1017 standards, tensile strength min. 90000 psi.</li><li>Copper Used for Coating: DHP alloy No. 122 CDA and rated at 99.95% copper.</li><li>UL Listed UL marked with part number & control number assigned by UL, satisfying standard CSA-C22.2 No. 41 in the in the category ANSI/UL 467</li></ul>" },
        { title: "LOHM® Properties", content: "<b>Low Resistance Grounding Backfill Material:</b><br><ul><li>Permanent and maintenance free (no re-charging with salts or chemicals).</li><li>Sets firmly and maintains its earth resistance with time.</li><li>Does not dissolve, decompose or pollute the soil/water table.</li><li>Suitable for use in dry form or slurry form.</li><li>Resistivity <0.07 ohm-m. Conforms to IEC 62561 Part-7.</li><li>Non toxic, non reactive, non explosive & non corrosive.</li><li>Supplied in moisture proof bags (10/15/20/23 KG).</li></ul>" },
        { title: "LOHM® GEL & Poly Pit", content: "<b>Pragati LOHM® Conductive GEL Properties:</b><br><ul><li>Non corrosive ground enhancing gel, very hygroscopic.</li><li>Electrolyte base for high conductivity.</li></ul><b>Poly Pit Chamber Properties:</b><br><ul><li>Heavy duty, weather proof and chemical resistant.</li><li>Locking facility. 4 knock-out openings for GRID.</li><li>Dimensions: Top 10\" / 6\" | Bottom 13\" / 8.3\" | Height 10.25\" / 9.5\"</li></ul>" },
        { title: "Copper Coated Strip", content: "<b>Specifications</b><br><ul><li>Length: 3.0m, Width: 25mm, Thickness: 3mm.</li><li>Copper coating: >250 Microns.</li><li>Holes on either end for connection to Earth electrode.</li><li>Steel Core 1035, tensile strength min. 90000 psi.</li></ul>" },
        { title: "EXOTHERMIC WELDING", content: "Exothermic welding kit ensures lifelong integrity of the earthing joints connecting the earth pit with the equipment. <b>Exothermic Welding System:</b> Earth electrode and protective conductors are joined by exothermic welding process that employs superheated copper alloy to make permanent & maintenance free joint. The welding system is UL 467 approved." }
    ],
    hi: [
        { title: "प्रगति इलेक्ट्रोकॉम", content: "<b>आज प्रगति की अपने शाखा कार्यालयों के माध्यम से अखिल भारतीय उपस्थिति है और यह निम्नलिखित के लिए समाधान प्रदान करती है:</b><br><br><b>बाहरी लाइटनिंग प्रोटेक्शन:</b><br>'एडवांस्ड लाइटनिंग प्रिवेंशन' और 'एडवांस्ड लाइटनिंग कैप्चर' सिस्टम। 200KA (10/350 वेवफॉर्म) के मल्टी-स्ट्राइक्स को संभालने में सक्षम। ऊर्जा लो-इम्पीडेंस कॉपर डाउन कंडक्टर और मेंटेनेंस-फ्री अर्थ पिट्स के माध्यम से जमीन में ट्रांसफर की जाती है।" },
        { title: "आंतरिक लाइटनिंग प्रोटेक्शन", content: "<ul><li><b>क्लास B:</b> 100KA (10/350 पल्स), RADAX तकनीक फयूज-लेस लाइटनिंग अरेस्टर।</li><li><b>क्लास C:</b> 20KA (8/20) सर्ज को संभालने में सक्षम। को-ऑर्डिनेशन कॉइल का उपयोग।</li><li><b>क्लास D:</b> टेलीफोन, सर्वर और कोएक्सियल लाइन सुरक्षा।</li></ul>" },
        { title: "मेंटेनेंस फ्री अर्थिंग", content: "<b>प्रगति किट में शामिल:</b><br><ol><li>UL/CPRI कॉपर इलेक्ट्रोड</li><li>पेटेंटेड LOHM (IEC 62561-7)</li><li>पॉलीपिट चैम्बर</li><li>कॉपर बस बार</li></ol>1.0 Ohm तक अर्थ रेजिस्टेंस। IS 3043, BS 7430, IEEE 142 व RDSO नियमों के अनुसार।" },
        { title: "अर्थ इलेक्ट्रोड", content: "<b>अर्थ इलेक्ट्रोड स्पेसिफिकेशन:</b><br><ul><li>लंबाई: 3/2 मीटर, व्यास: 17mm, कोटिंग: 250 माइक्रोन।</li><li>स्टील कोर 1035, 99.95% शुद्ध कॉपर।</li><li>UL लिस्टेड (CSA-C22.2 No. 41)।</li></ul>" },
        { title: "LOHM गुण", content: "<b>लो-रेजिस्टेंस ग्राउंडिंग मटीरियल:</b><br><ul><li>स्थायी और मेंटेनेंस फ्री।</li><li>रेजिस्टिविटी 0.07 ohm-m से कम। IEC 62561 Part-7 प्रमाणित।</li><li>10-23 KG के नमीरोधी बैग्स में उपलब्ध।</li></ul>" },
        { title: "कंडक्टिव जेल और पॉली पिट", content: "<b>LOHM® कंडक्टिव जेल:</b> नॉन-कोरोसिव, नमी सोखने वाला इलेक्ट्रोलाइट बेस।<br><b>पॉली पिट चैम्बर:</b> हेवी-ड्यूटी, केमिकल प्रतिरोधी। लॉकिंग सुविधा, 4 नॉक-आउट ओपनिंग।" },
        { title: "कॉपर स्ट्रिप", content: "<b>विशिष्टताएँ:</b><br><ul><li>लंबाई: 3.0 मीटर, चौड़ाई: 25mm, मोटाई: 3mm।</li><li>कोटिंग: 250+ माइक्रोन।</li><li>स्टील कोर 1035 (90000 psi)।</li></ul>" },
        { title: "एक्सोथर्मिक वेल्डिंग", content: "स्थायी और मेंटेनेंस-फ्री जोड़ के लिए सुपरहीटेड कॉपर मिश्र धातु का उपयोग। UL 467 स्वीकृत।" }
    ],
    bn: [
        { title: "প্রগতি ইলেক্ট্রোকম", content: "<b>আজ প্রগতির শাখা অফিসগুলির মাধ্যমে সমগ্র ভারতে উপস্থিতি রয়েছে এবং এর জন্য সমাধান অফার করে:</b><br><br><b>বাহ্যিক বজ্রপাত সুরক্ষা:</b><br>'অ্যাডভান্সড লাইটনিং প্রিভেনশন' এবং 'অ্যাডভান্সড লাইটনিং ক্যাপচার' সিস্টেম। 200KA পর্যন্ত মাল্টি-স্ট্রাইক পরিচালনা করতে সক্ষম। লো-ইম্পিডেন্স কপার ডাউন কন্ডাক্টরের মাধ্যমে এই শক্তি পৃথিবীতে স্থানান্তরিত হয়।" },
        { title: "অভ্যন্তরীণ বজ্রপাত সুরক্ষা", content: "<ul><li><b>ক্লাস B:</b> 100KA (10/350 পালস)।</li><li><b>ক্লাস C:</b> 20KA (8/20) সার্জ পরিচালনা করতে সক্ষম।</li><li><b>ক্লাস D:</b> টেলিফোন, কম্পিউটার নেটওয়ার্ক, কোঅক্সিয়াল কেবল এবং সার্ভার সুরক্ষা।</li></ul>" },
        { title: "রক্ষণাবেক্ষণ মুক্ত আর্থিং", content: "<b>প্রগতি আর্থিং কিটে রয়েছে:</b><br><ol><li>UL/CPRI প্রত্যয়িত কপার কোটেড ইলেকট্রোড</li><li>পেটেন্ট করা LOHM (IEC 62561-7)</li><li>পলিপিটি চেম্বার ও কপার বাস বার</li></ol>1.0 Ohm পর্যন্ত আর্থ রেজিস্ট্যান্স।" },
        { title: "আর্থ ইলেকট্রোড", content: "<b>ইলেকট্রোড স্পেসিফিকেশন:</b><br><ul><li>দৈর্ঘ্য ৩/২ মিটার, ব্যাস ১৭ মিমি।</li><li>২৫০+ মাইক্রন কোটিং।</li><li>৯৯.৯৫% খাঁটি কপার।</li><li>UL তালিকাভুক্ত (ANSI/UL 467)।</li></ul>" },
        { title: "LOHM বৈশিষ্ট্য", content: "<b>কম প্রতিরোধের গ্রাউন্ডিং ব্যাকফিল উপাদান:</b><br><ul><li>স্থায়ী এবং রক্ষণাবেক্ষণ মুক্ত।</li><li>প্রতিরোধ ক্ষমতা ০.০৭ ohm-m এর কম।</li><li>সিল করা ব্যাগ (10-23 KG)।</li></ul>" },
        { title: "জেল এবং পলি পিট", content: "<b>LOHM® পরিবাহী জেল:</b> অত্যন্ত আর্দ্রতা শোষক ইলেক্ট্রোলাইট।<br><b>পলি পিট চেম্বার:</b> হেভি-ডিউটি ওয়েদার-প্রুফ। লকিং সুবিধা এবং গ্রিড গঠনের জন্য ৪টি নক-আউট ওপেনিং।" },
        { title: "কপার কোটেড স্ট্রিপ", content: "<b>স্পেসিফিকেশন:</b><br><ul><li>দৈর্ঘ্য ৩.০ মিটার, প্রস্থ ২৫ মিমি, পুরুত্ব ৩ মিমি।</li><li>কোটিং ২৫০+ মাইক্রন।</li><li>স্টিল কোর 1035 (90000 psi)।</li></ul>" },
        { title: "এক্সোথার্মিক ওয়েল্ডিং", content: "স্থায়ী জয়েন্টের জন্য সুপারহিটেড কপার অ্যালয় ব্যবহার। UL 467 অনুমোদিত।" }
    ]
};

let currentLang = 'en', currentPage = 0;

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.style.display = 'none', 1000); }
        renderPage();
    }, 2500);
});

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    document.getElementById('chip-' + lang).classList.add('active');
    renderPage();
}

function changePage(d) {
    currentPage = (currentPage + d + 8) % 8;
    renderPage();
}

function renderPage() {
    const data = bookData[currentLang][currentPage];
    document.getElementById('chapterTitle').innerHTML = data.title;
    document.getElementById('bookText').innerHTML = data.content;
    document.getElementById('pageNum').textContent = `— ${currentPage + 1} —`;
    document.getElementById('chapterNum').textContent = `CHAPTER · ${['I','II','III','IV','V','VI','VII','VIII'][currentPage]}`;
    const page = document.getElementById('bookPage');
    page.classList.remove('reveal');
    void page.offsetWidth;
    page.classList.add('reveal');
}

function speakText() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const data = bookData[currentLang][currentPage];
    const cleanContent = data.content.replace(/<[^>]*>/g, '');
    const utter = new SpeechSynthesisUtterance(`${data.title}. ${cleanContent}`);
    utter.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'bn' ? 'bn-IN' : 'en-US');
    utter.onstart = () => document.getElementById('speakIndicator').classList.add('active');
    utter.onend = () => document.getElementById('speakIndicator').classList.remove('active');
    window.speechSynthesis.speak(utter);
}

function stopSpeak() { if('speechSynthesis' in window) window.speechSynthesis.cancel(); document.getElementById('speakIndicator').classList.remove('active'); }
function toggleRotation() { const w = document.getElementById('bookWrapper'); w.style.animationPlayState = w.style.animationPlayState === 'paused' ? 'running' : 'paused'; }
