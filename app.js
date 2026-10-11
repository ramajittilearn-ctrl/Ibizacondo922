// Edit the property facts and bilingual page copy here.
const PROPERTY = Object.freeze({
  rent: 14000,
  sizeSqm: 32,
  floor: 11,
  phone: '0928255788',
  depositMonths: 2,
  advanceMonths: 1,
  minimumMonths: 12,
  mapUrl: 'https://www.google.com/maps/place/%E0%B9%84%E0%B8%AD-%E0%B8%9A%E0%B8%B4%E0%B8%8B%E0%B8%B2+%E0%B9%80%E0%B8%A3%E0%B8%AA%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%94%E0%B8%99%E0%B8%8B%E0%B9%8C/data=!4m2!3m1!1s0x0:0x10c180ef13e41d52?sa=X&ved=1t:2428&ictx=111',
  // Add a verified direct LINE URL here if one becomes available; QR always remains available.
  lineUrl: 'https://line.me/ti/p/-b23jGodq9'
});

const COPY = {
  th: {
    title: 'คอนโดให้เช่า พระราม 9 | i-biza Residence | 14,000 บาท/เดือน',
    description: 'คอนโดให้เช่า i-biza Residence พระราม 9 ห้องสตูดิโอ 32 ตร.ม. ชั้น 11 แต่งครบ พร้อมอยู่ ค่าเช่า 14,000 บาท/เดือน ติดต่อเจ้าของเพื่อนัดชมห้อง',
    skip: 'ข้ามไปยังเนื้อหา', navLabel: 'เมนูหลัก', menuOpen: 'เปิดเมนู', menuClose: 'ปิดเมนู', closeDialog: 'ปิด', lineDialogLabel: 'ติดต่อผ่าน LINE', navHome: 'หน้าแรก', navRoom: 'ห้องพัก', navGallery: 'แกลเลอรี', navFacilities: 'สิ่งอำนวยความสะดวก', navLocation: 'ทำเล', navRental: 'ค่าเช่า', navContact: 'ติดต่อ', schedule: 'นัดดูห้อง',
    forRent: 'FOR RENT · RAMA 9, BANGKOK', heroTitle: 'คอนโดให้เช่า ใจกลางพระราม 9', heroLead: 'สตูดิโอแต่งครบ 32 ตร.ม. บนชั้น 11 พร้อมใช้ชีวิตในเมืองได้ทันที', price: '฿14,000', perMonth: '/ เดือน', viewRoom: 'ดูรายละเอียดห้อง', heroNote: 'i-biza Residence · พระราม 9', realRoom: 'ภาพถ่ายห้องจริง', heroIndex: 'พื้นที่พร้อมอยู่ในย่านพระราม 9', heroAlt: 'ห้องสตูดิโอจริงที่ i-biza Residence มีโซฟาและพื้นที่นอน',
    factsLabel: 'ข้อมูลห้องโดยสรุป', factStudio: 'สตูดิโอ', factFloor: 'ชั้น 11', factFurnishedTop: 'Fully', factFurnished: 'เฟอร์นิเจอร์ครบ', factViewTop: 'City + Pool', factView: 'วิวเมือง + สระว่ายน้ำ', factPrice: 'ต่อเดือน',
    roomKicker: 'THE ROOM / ห้องพัก', roomTitle: 'พร้อมอยู่ ครบทุกอย่างที่ต้องการ', roomLead: 'ห้องสตูดิโอ 32 ตร.ม. ที่จัดพื้นที่อย่างลงตัวสำหรับการพักผ่อนและทำงาน เฟอร์นิเจอร์ครบหลังปรับปรุงใหม่ มีมุมทำงาน ครัว และระเบียง พร้อมวิวเมืองและสระว่ายน้ำ', renovated: 'ปรับปรุงใหม่ พร้อมอยู่', livingAlt: 'มุมห้องนั่งเล่นจริง พร้อมโซฟา โต๊ะอาหาร และโต๊ะทำงาน', studioBath: 'สตูดิโอ · 1 ห้องน้ำ', balconyView: 'ระเบียง · วิวเมืองและสระ', explorePhotos: 'ดูภาพห้องจริง',
    featureKicker: 'READY FOR EVERYDAY', featureTitle: 'ครบครันในทุกมุม', featureIntro: 'เฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าที่จำเป็นสำหรับชีวิตประจำวัน',
    galleryKicker: 'REAL SPACES / ภาพห้องจริง', galleryTitle: 'เห็นห้องทุกมุม', galleryIntro: 'ภาพถ่ายห้องจริง เพื่อให้คุณเห็นบรรยากาศก่อนนัดชม', galleryHint: 'แตะภาพเพื่อดูขนาดใหญ่ · ปัดเพื่อดูภาพถัดไปบนมือถือ', viewPhoto: 'เปิดภาพ', lightboxLabel: 'แกลเลอรีภาพห้อง', closeGallery: 'ปิดแกลเลอรี', previousImage: 'ภาพก่อนหน้า', nextImage: 'ภาพถัดไป',
    videoKicker: 'ROOM WALKTHROUGH', videoTitle: 'ชมห้องจริง ก่อนเดินทางมา', videoIntro: 'เดินดูพื้นที่จริงในห้อง ตั้งแต่มุมนั่งเล่น พื้นที่นอน ครัว ไปจนถึงระเบียง', videoDuration: 'นาที · วิดีโอห้องจริง', playTour: 'เล่นวิดีโอชมห้อง', playVideo: 'เล่นวิดีโอชมห้องจริง', videoAlt: 'ภาพตัวอย่างวิดีโอชมห้องจริง', videoAria: 'วิดีโอเดินชมห้องจริง',
    facilitiesKicker: 'THE RESIDENCE', facilitiesTitle: 'สิ่งอำนวยความสะดวก', facilitiesIntro: 'สิ่งอำนวยความสะดวกที่ i-biza Residence ระบุไว้สำหรับโครงการ', facilitySource: 'ข้อมูลอ้างอิงจากเว็บไซต์ทางการของ i-biza Residence', viewSource: 'ดูแหล่งข้อมูล',
    locationKicker: 'RAMA 9 / BANGKOK', locationTitle: 'ใช้ชีวิตสะดวก ใจกลางพระราม 9', locationIntro: 'i-biza Residence อยู่ในย่านพระราม 9 ที่เชื่อมต่อการทำงาน การเดินทาง และสิ่งจำเป็นในชีวิตประจำวัน', openMaps: 'เปิดใน Google Maps', mapTitle: 'แผนที่ i-biza Residence พระราม 9', addressLabel: 'ที่ตั้ง', address: 'พระราม 9 · บางกะปิ · ห้วยขวาง · กรุงเทพฯ', locationNote: 'ดูเส้นทางที่เหมาะกับคุณใน Google Maps ก่อนเดินทางมาชมห้อง', nearbyTitle: 'รอบ ๆ ที่พัก', nearbyNote: 'จุดหมายในย่านที่เว็บไซต์โครงการระบุ', nearbySource: 'รายชื่อสถานที่อ้างอิงจากเว็บไซต์ทางการของ i-biza Residence; เวลาเดินทางขึ้นอยู่กับเส้นทางและสภาพจราจร',
    rentalKicker: 'RENTAL DETAILS', rentalTitle: 'ค่าเช่าชัดเจน ตัดสินใจง่าย', rentalIntro: 'ห้องสตูดิโอแต่งครบพร้อมอยู่ พร้อมที่จอดรถรวมในค่าเช่า ติดต่อเจ้าของเพื่อสอบถามวันที่พร้อมเข้าอยู่', studio: 'สตูดิโอ', floor11: 'ชั้น 11', parkingIncluded: 'รวมที่จอดรถ', moveInTitle: 'ค่าใช้จ่ายวันทำสัญญา', firstMonth: 'ค่าเช่าเดือนแรก', deposit: 'เงินประกัน 2 เดือน', initialTotal: 'รวมชำระเริ่มต้น', monthlyRent: 'ค่าเช่ารายเดือน', contactAvailability: 'สอบถามวันพร้อมเข้าอยู่',
    contactKicker: 'GET IN TOUCH', contactTitle: 'สนใจห้องนี้?', contactIntro: 'ติดต่อเจ้าของโดยตรงเพื่อนัดชมห้องหรือสอบถามรายละเอียดเพิ่มเติม', ownerLabel: 'เจ้าของห้อง', ownerName: 'คุณต๊ะ / Taky', callNow: 'โทรสอบถาม', lineButton: 'ติดต่อผ่าน LINE', directContact: 'ติดต่อเจ้าของโดยตรง', scanLine: 'สแกนเพื่อติดต่อทาง LINE', lineHelp: 'เปิดกล้องหรือ LINE เพื่อสแกน QR Code', lineAlt: 'LINE QR code สำหรับติดต่อคุณต๊ะ', mobileCall: 'โทร', footerText: 'พื้นที่สบาย ๆ สำหรับชีวิตในเมือง · พระราม 9 กรุงเทพฯ',
    features: [
      ['เตียงและที่นอน','bed'],['โซฟา','sofa'],['สมาร์ตทีวี','screen'],['เครื่องปรับอากาศ 2 เครื่อง','climate'],
      ['ตู้เย็น','kitchen'],['ไมโครเวฟ','kitchen'],['เครื่องซักผ้า','wash'],['เตาไฟฟ้า','kitchen'],
      ['เครื่องดูดควัน','kitchen'],['โต๊ะรับประทานอาหาร','desk'],['โต๊ะทำงาน','desk'],['ตู้เสื้อผ้า','storage'],
      ['เครื่องทำน้ำอุ่น','climate'],['ผ้าม่าน','view'],['อุปกรณ์ครัว','kitchen'],['เฟอร์นิเจอร์บิวต์อิน','storage']
    ],
    facilities: [['สระว่ายน้ำ','pool'],['ฟิตเนส','gym'],['ซาวน่า','climate'],['สวนและพื้นที่สีเขียว','leaf'],['อาคารจอดรถ','car'],['ระบบคีย์การ์ด','shield'],['กล้องวงจรปิด','shield'],['รปภ. 24 ชั่วโมง','shield']],
    nearby: [['MRT พระราม 9','รถไฟฟ้า'],['MRT เพชรบุรี','รถไฟฟ้า'],['Airport Rail Link มักกะสัน','รถไฟฟ้า'],['Central Rama 9','ช้อปปิ้ง'],['RCA','ไลฟ์สไตล์'],['โรงพยาบาลปิยะเวท','สุขภาพ'],['โรงพยาบาลกรุงเทพ','สุขภาพ'],['G Tower','ย่านสำนักงาน']],
    terms: [['ขนาดห้อง','32 ตร.ม.'],['รูปแบบห้อง','สตูดิโอ · 1 ห้องน้ำ'],['เฟอร์นิเจอร์','ครบพร้อมอยู่'],['เงินประกัน','2 เดือน'],['ค่าเช่าล่วงหน้า','1 เดือน'],['สัญญาขั้นต่ำ','12 เดือน'],['ที่จอดรถ','รวมแล้ว'],['สัตว์เลี้ยง','ไม่อนุญาต'],['สูบบุหรี่','ไม่อนุญาต'],['วันพร้อมเข้าอยู่','ติดต่อเจ้าของ']],
    gallery: [
      ['ห้องโดยรวม','ภาพห้องพักจริง เห็นโซฟาและพื้นที่นอน'],['มุมนั่งเล่น','มุมนั่งเล่นและโต๊ะอาหารในห้องจริง'],['พื้นที่นอน','เตียงและหน้าต่างในห้องจริง'],['มุมหน้าต่าง','วิวจากหน้าต่างห้องพัก'],['มุมพักผ่อน','โซฟาและมุมรับประทานอาหาร'],['ทีวีและบิวต์อิน','ผนังทีวีและเฟอร์นิเจอร์บิวต์อิน'],['ห้องครัว','เคาน์เตอร์ครัวและอ่างล้างจาน'],['เครื่องใช้ไฟฟ้า','ตู้เย็นและครัวในห้องจริง'],['มองจากประตูเข้า','มุมมองห้องนั่งเล่นจากทางเข้า'],['มองจากเตียง','มุมมองห้องจากพื้นที่นอน']
    ]
  },
  en: {
    title: 'Condo for Rent Rama 9 | i-biza Residence | THB 14,000/month',
    description: 'Recently renovated, fully furnished 32 sqm studio at i-biza Residence, Rama 9. 11th floor, THB 14,000/month. Contact the owner to arrange a viewing.',
    skip: 'Skip to content', navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu', closeDialog: 'Close', lineDialogLabel: 'Contact via LINE', navHome: 'Home', navRoom: 'The Room', navGallery: 'Gallery', navFacilities: 'Facilities', navLocation: 'Location', navRental: 'Rental Details', navContact: 'Contact', schedule: 'Schedule a Viewing',
    forRent: 'FOR RENT · RAMA 9, BANGKOK', heroTitle: 'Urban Living in Rama 9', heroLead: 'Fully furnished studio · 32 sqm · 11th Floor. An easy place to settle into city life.', price: 'THB 14,000', perMonth: '/ month', viewRoom: 'View the Room', heroNote: 'i-biza Residence · Rama 9', realRoom: 'Photos of the actual room', heroIndex: 'A ready-to-live-in space in Rama 9', heroAlt: 'Actual studio at i-biza Residence with sofa and sleeping area',
    factsLabel: 'Room at a glance', factStudio: 'Studio', factFloor: 'Floor', factFurnishedTop: 'Fully', factFurnished: 'Furnished', factViewTop: 'City + Pool', factView: 'View', factPrice: 'Per Month',
    roomKicker: 'THE ROOM', roomTitle: 'Everything You Need, Ready to Move In', roomLead: 'A recently renovated 32 sqm studio with a practical layout for living and working. Fully furnished, with a work area, kitchen, balcony, and city and pool views.', renovated: 'Recently renovated', livingAlt: 'Actual living area with sofa, dining table and work desk', studioBath: 'Studio · 1 bathroom', balconyView: 'Balcony · city and pool view', explorePhotos: 'Explore the photos',
    featureKicker: 'READY FOR EVERYDAY', featureTitle: 'Considered essentials', featureIntro: 'Furniture and appliances for a comfortable everyday routine.',
    galleryKicker: 'REAL SPACES', galleryTitle: 'See the Room', galleryIntro: 'Actual photos so you can get a feel for the space before visiting.', galleryHint: 'Tap a photo to enlarge · Swipe through on mobile', viewPhoto: 'Open photo', lightboxLabel: 'Room photo gallery', closeGallery: 'Close gallery', previousImage: 'Previous image', nextImage: 'Next image',
    videoKicker: 'ROOM WALKTHROUGH', videoTitle: 'Take a Look Inside', videoIntro: 'Walk through the real space, from the living and sleeping areas to the kitchen and balcony.', videoDuration: 'min · actual room video', playTour: 'Play room tour', playVideo: 'Play room walkthrough', videoAlt: 'Preview of the room walkthrough video', videoAria: 'Room walkthrough video',
    facilitiesKicker: 'THE RESIDENCE', facilitiesTitle: 'Condo Facilities', facilitiesIntro: 'Facilities listed by i-biza Residence for the property.', facilitySource: 'Facility information from the official i-biza Residence website.', viewSource: 'View source',
    locationKicker: 'RAMA 9 / BANGKOK', locationTitle: 'Live Connected', locationIntro: 'i-biza Residence sits in the Rama 9 area, with access to work, transport, and everyday essentials.', openMaps: 'Open in Google Maps', mapTitle: 'Map of i-biza Residence Rama 9', addressLabel: 'Location', address: 'Rama 9 · Bang Kapi · Huai Khwang · Bangkok', locationNote: 'Check your preferred route in Google Maps before coming to view the room.', nearbyTitle: 'Around the Neighborhood', nearbyNote: 'Area destinations listed by the residence', nearbySource: 'Places are listed by the official i-biza Residence website; travel times vary by route and traffic.',
    rentalKicker: 'RENTAL DETAILS', rentalTitle: 'Simple, Clear Rental Terms', rentalIntro: 'A move-in-ready furnished studio with parking included. Contact the owner to confirm availability.', studio: 'Studio', floor11: '11th Floor', parkingIncluded: 'Parking included', moveInTitle: 'Initial payment', firstMonth: 'First month rent', deposit: 'Two-month deposit', initialTotal: 'Total at move-in', monthlyRent: 'Monthly rent', contactAvailability: 'Contact for availability',
    contactKicker: 'GET IN TOUCH', contactTitle: 'Interested in This Room?', contactIntro: 'Contact the owner directly to arrange a viewing or ask a question.', ownerLabel: 'Property owner', ownerName: 'Taky / คุณต๊ะ', callNow: 'Call Now', lineButton: 'Contact via LINE', directContact: 'Direct owner contact', scanLine: 'Scan to Contact via LINE', lineHelp: 'Scan the QR code with your camera or LINE app.', lineAlt: 'LINE QR code to contact Taky', mobileCall: 'Call', footerText: 'Comfortable urban living · Rama 9, Bangkok',
    features: [
      ['Bed & mattress','bed'],['Sofa','sofa'],['Smart TV','screen'],['2 air conditioners','climate'],
      ['Refrigerator','kitchen'],['Microwave','kitchen'],['Washing machine','wash'],['Electric stove','kitchen'],
      ['Range hood','kitchen'],['Dining table','desk'],['Work desk','desk'],['Wardrobe','storage'],
      ['Water heater','climate'],['Curtains','view'],['Kitchen equipment','kitchen'],['Built-in furniture','storage']
    ],
    facilities: [['Swimming pool','pool'],['Fitness center','gym'],['Sauna','climate'],['Landscaped gardens','leaf'],['Car park building','car'],['Access card system','shield'],['CCTV','shield'],['24-hour security','shield']],
    nearby: [['MRT Phra Ram 9','Transit'],['MRT Phetchaburi','Transit'],['Airport Rail Link Makkasan','Transit'],['Central Rama 9','Shopping'],['RCA','Lifestyle'],['Piyavate Hospital','Healthcare'],['Bangkok Hospital','Healthcare'],['G Tower','Business']],
    terms: [['Size','32 sqm'],['Layout','Studio · 1 bathroom'],['Furnishing','Fully furnished'],['Security deposit','2 months'],['Advance rent','1 month'],['Minimum lease','12 months'],['Parking','Included'],['Pets','Not allowed'],['Smoking','Not allowed'],['Availability','Contact owner']],
    gallery: [
      ['Room Overview','Actual room showing the sofa and sleeping area'],['Living Area','Actual living area and dining table'],['Sleeping Area','Bed and window in the actual room'],['Window View','View from the room window'],['Lounge Corner','Sofa and dining corner'],['TV & Built-ins','TV wall and built-in furniture'],['Kitchen','Kitchen counter and sink'],['Appliances','Refrigerator and kitchen area'],['Entrance View','Living area as seen from the entrance'],['From the Bed','View of the room from the sleeping area']
    ]
  }
};

const GALLERY_IMAGES = [
  'room-overview','living-wide','sleeping-area','window-view','living-dining',
  'entertainment-wall','kitchen','kitchen-appliances','living-front','room-from-bed'
];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
let currentLanguage = 'th';
let currentPhoto = 0;
let lastGalleryTrigger = null;

function syncPropertyFacts() {
  const rent = PROPERTY.rent.toLocaleString('en-US');
  const deposit = (PROPERTY.rent * PROPERTY.depositMonths).toLocaleString('en-US');
  const initial = (PROPERTY.rent * (PROPERTY.depositMonths + PROPERTY.advanceMonths)).toLocaleString('en-US');
  const phoneDisplay = PROPERTY.phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
  COPY.th.price = `฿${rent}`;
  COPY.en.price = `THB ${rent}`;
  COPY.th.deposit = `เงินประกัน ${PROPERTY.depositMonths} เดือน`;
  COPY.en.deposit = `${PROPERTY.depositMonths}-month deposit`;
  COPY.th.title = `คอนโดให้เช่า พระราม 9 | i-biza Residence | ${rent} บาท/เดือน`;
  COPY.en.title = `Condo for Rent Rama 9 | i-biza Residence | THB ${rent}/month`;
  COPY.th.description = `คอนโดให้เช่า i-biza Residence พระราม 9 ห้องสตูดิโอ ${PROPERTY.sizeSqm} ตร.ม. ชั้น ${PROPERTY.floor} แต่งครบ พร้อมอยู่ ค่าเช่า ${rent} บาท/เดือน ติดต่อเจ้าของเพื่อนัดชมห้อง`;
  COPY.en.description = `Recently renovated, fully furnished ${PROPERTY.sizeSqm} sqm studio at i-biza Residence, Rama 9. ${PROPERTY.floor}th floor, THB ${rent}/month. Contact the owner to arrange a viewing.`;
  COPY.th.heroLead = `สตูดิโอแต่งครบ ${PROPERTY.sizeSqm} ตร.ม. บนชั้น ${PROPERTY.floor} พร้อมใช้ชีวิตในเมืองได้ทันที`;
  COPY.en.heroLead = `Fully furnished studio · ${PROPERTY.sizeSqm} sqm · ${PROPERTY.floor}th Floor. An easy place to settle into city life.`;
  COPY.th.factFloor = `ชั้น ${PROPERTY.floor}`;
  COPY.th.floor11 = `ชั้น ${PROPERTY.floor}`;
  COPY.en.floor11 = `${PROPERTY.floor}th Floor`;
  COPY.th.roomLead = `ห้องสตูดิโอ ${PROPERTY.sizeSqm} ตร.ม. ที่จัดพื้นที่อย่างลงตัวสำหรับการพักผ่อนและทำงาน เฟอร์นิเจอร์ครบหลังปรับปรุงใหม่ มีมุมทำงาน ครัว และระเบียง พร้อมวิวเมืองและสระว่ายน้ำ`;
  COPY.en.roomLead = `A recently renovated ${PROPERTY.sizeSqm} sqm studio with a practical layout for living and working. Fully furnished, with a work area, kitchen, balcony, and city and pool views.`;
  COPY.th.terms[0][1] = `${PROPERTY.sizeSqm} ตร.ม.`;
  COPY.en.terms[0][1] = `${PROPERTY.sizeSqm} sqm`;
  COPY.th.terms[3][1] = `${PROPERTY.depositMonths} เดือน`;
  COPY.en.terms[3][1] = `${PROPERTY.depositMonths} months`;
  COPY.th.terms[4][1] = `${PROPERTY.advanceMonths} เดือน`;
  COPY.en.terms[4][1] = `${PROPERTY.advanceMonths} month${PROPERTY.advanceMonths === 1 ? '' : 's'}`;
  COPY.th.terms[5][1] = `${PROPERTY.minimumMonths} เดือน`;
  COPY.en.terms[5][1] = `${PROPERTY.minimumMonths} months`;
  $('.fact:first-child strong').innerHTML = `${PROPERTY.sizeSqm} <small>sqm</small>`;
  $('.fact:nth-child(2) strong').textContent = `${PROPERTY.floor}th`;
  $('.fact:last-child strong').textContent = PROPERTY.rent % 1000 === 0 ? `฿${PROPERTY.rent / 1000}K` : `฿${rent}`;
  $('.rental-summary span:first-child').textContent = `${PROPERTY.sizeSqm} sqm`;
  $('.move-in>div:nth-of-type(1) strong').textContent = `฿${rent}`;
  $('.move-in>div:nth-of-type(2) strong').textContent = `฿${deposit}`;
  $('.move-in-total strong').textContent = `฿${initial}`;
  $('.rental-big strong').textContent = `฿${rent}`;
  $('#location .button').href = PROPERTY.mapUrl;
  $$('a[href^="tel:"]').forEach(link => { link.href = `tel:${PROPERTY.phone}`; if (link.classList.contains('contact-number') || link.closest('.footer')) link.querySelector('span') ? link.querySelector('span').textContent = phoneDisplay : link.textContent = phoneDisplay; });
  $('.contact-number').setAttribute('aria-label', `Call ${phoneDisplay}`);
  try {
    const structured = JSON.parse($('script[type="application/ld+json"]').textContent);
    structured.floorLevel = String(PROPERTY.floor);
    structured.floorSize.value = PROPERTY.sizeSqm;
    structured.offers.price = String(PROPERTY.rent);
    $('script[type="application/ld+json"]').textContent = JSON.stringify(structured);
  } catch (_) {}
}

function renderLists() {
  const content = COPY[currentLanguage];
  $('#feature-grid').innerHTML = content.features.map(([label, symbol]) => `<div class="feature-card">${icon(symbol)}<strong>${label}</strong></div>`).join('');
  $('#facilities-grid').innerHTML = content.facilities.map(([label, symbol]) => `<div class="facility-card">${icon(symbol)}<strong>${label}</strong></div>`).join('');
  $('#nearby-grid').innerHTML = content.nearby.map(([label, category]) => `<div class="nearby-card"><span>${category}</span><strong>${label}</strong></div>`).join('');
  $('#rental-terms').innerHTML = content.terms.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  $('#gallery-grid').innerHTML = content.gallery.map(([category, alt], index) => {
    const file = GALLERY_IMAGES[index];
    return `<button class="gallery-item" type="button" data-photo="${index}" aria-label="${content.viewPhoto}: ${category}"><img src="assets/images/${file}-720.webp" srcset="assets/images/${file}-720.webp 720w, assets/images/${file}-1440.webp 1440w" sizes="(max-width: 760px) 78vw, (max-width: 1100px) 50vw, 32vw" width="720" height="540" loading="lazy" alt="${alt}"><span class="gallery-caption">${category}${icon('arrow')}</span></button>`;
  }).join('');
}

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'th';
  const content = COPY[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = content.title;
  $('meta[name="description"]').content = content.description;
  $$('[data-i18n]').forEach(element => { const value = content[element.dataset.i18n]; if (value !== undefined) element.textContent = value; });
  $$('[data-i18n-alt]').forEach(element => { const value = content[element.dataset.i18nAlt]; if (value !== undefined) element.alt = value; });
  $$('[data-i18n-aria]').forEach(element => { const value = content[element.dataset.i18nAria]; if (value !== undefined) element.setAttribute('aria-label', value); });
  $$('[data-i18n-title]').forEach(element => { const value = content[element.dataset.i18nTitle]; if (value !== undefined) element.title = value; });
  $$('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage)));
  $('.menu-toggle').setAttribute('aria-label', $('.menu-toggle').getAttribute('aria-expanded') === 'true' ? content.menuClose : content.menuOpen);
  renderLists();
  if ($('#lightbox').open) showPhoto(currentPhoto);
  try { localStorage.setItem('ibiza-language', currentLanguage); } catch (_) {}
}

function showPhoto(index) {
  currentPhoto = (index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  const [category, alt] = COPY[currentLanguage].gallery[currentPhoto];
  const image = $('#lightbox-image');
  image.src = `assets/images/${GALLERY_IMAGES[currentPhoto]}-1440.webp`;
  image.alt = alt;
  $('#lightbox-caption').textContent = category;
  $('#lightbox-count').textContent = `${currentPhoto + 1} / ${GALLERY_IMAGES.length}`;
}

function closeDialog(dialog) { dialog.close(); document.body.classList.remove('dialog-open'); }

document.addEventListener('DOMContentLoaded', () => {
  syncPropertyFacts();
  let savedLanguage = 'th';
  try { savedLanguage = localStorage.getItem('ibiza-language') || 'th'; } catch (_) {}
  applyLanguage(savedLanguage);

  // The dynamic lists change page height; realign section URLs after they render.
  if (location.hash) {
    const restoreAnchor = () => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (!target) return;
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      target.scrollIntoView();
      root.style.scrollBehavior = previous;
    };
    requestAnimationFrame(restoreAnchor);
    window.addEventListener('load', restoreAnchor, { once: true });
  }

  $$('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  const header = $('#site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? COPY[currentLanguage].menuClose : COPY[currentLanguage].menuOpen);
  });
  $$('#mobile-menu a').forEach(link => link.addEventListener('click', () => { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }));

  const lightbox = $('#lightbox');
  $('#gallery-grid').addEventListener('click', event => {
    const trigger = event.target.closest('[data-photo]');
    if (!trigger) return;
    lastGalleryTrigger = trigger;
    showPhoto(Number(trigger.dataset.photo));
    lightbox.showModal(); document.body.classList.add('dialog-open');
  });
  $('.lightbox-close').addEventListener('click', () => closeDialog(lightbox));
  $('.lightbox-prev').addEventListener('click', () => showPhoto(currentPhoto - 1));
  $('.lightbox-next').addEventListener('click', () => showPhoto(currentPhoto + 1));
  lightbox.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastGalleryTrigger?.focus(); });
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(currentPhoto - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(currentPhoto + 1); }
  });
  let startX = null;
  lightbox.addEventListener('touchstart', event => { startX = event.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', event => { if (startX === null) return; const delta = event.changedTouches[0].screenX - startX; if (Math.abs(delta) > 55) showPhoto(currentPhoto + (delta < 0 ? 1 : -1)); startX = null; }, { passive: true });

  const preview = $('#video-play');
  const video = $('#room-video');
  preview.addEventListener('click', () => {
    const source = video.querySelector('source');
    source.src = source.dataset.src;
    video.load();
    preview.hidden = true;
    video.hidden = false;
    video.play().catch(() => {});
  });

  const lineDialog = $('#line-dialog');
  $$('[data-open-line]').forEach(button => button.addEventListener('click', () => {
    if (PROPERTY.lineUrl && window.matchMedia('(max-width: 760px)').matches) { window.open(PROPERTY.lineUrl, '_blank', 'noopener'); return; }
    lineDialog.showModal(); document.body.classList.add('dialog-open');
  }));
  $('[data-close-line]').addEventListener('click', () => closeDialog(lineDialog));
  lineDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    $$('.reveal').forEach(element => observer.observe(element));
  } else $$('.reveal').forEach(element => element.classList.add('is-visible'));
});
