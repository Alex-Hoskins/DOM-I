const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header selector
const headerSelector = document.querySelector('header');
const headerNav1 = headerSelector.querySelector('a');
const headerNav2 = headerNav1.nextElementSibling;
const headerNav3 = headerNav2.nextElementSibling;
const headerNav4 = headerNav3.nextElementSibling;
const headerNav5 = headerNav4.nextElementSibling;
const headerNav6 = headerNav5.nextElementSibling;

// cta selector
const ctaSelector =document.querySelector('.cta');
const ctaH1 = ctaSelector.querySelector('h1');
const ctaButton = ctaSelector.querySelector('button');
const ctaImg =ctaSelector.querySelector('img');

// main selector
const mainContentSelector=document.querySelector('.main-content');
const textContentSelector = mainContentSelector.querySelectorAll('.text-content');

const textContent1 = textContentSelector[0];
const textContent1h = textContent1.querySelector('h4');
const textContent1p = textContent1.querySelector('p');

const textContent2 = textContentSelector[1];
const textContent2h = textContent2.querySelector('h4');
const textContent2p = textContent2.querySelector('p');

const textContent3 = textContentSelector[2];
const textContent3h = textContent3.querySelector('h4');
const textContent3p = textContent3.querySelector('p');

const textContent4 = textContentSelector[3];
const textContent4h = textContent4.querySelector('h4');
const textContent4p = textContent4.querySelector('p');

const textContent5 = textContentSelector[4];
const textContent5h = textContent5.querySelector('h4');
const textContent5p = textContent5.querySelector('p');

const mainContImg = mainContentSelector.querySelector('img')
// contact selector
const contactSelector=document.querySelector('.contact');
const contactSelectorh4=contactSelector.querySelector('h4');
const contactSelectorAddress=contactSelector.querySelector('p');
const contactSelectorPhone=contactSelectorAddress.nextElementSibling;
const contactSelectorEmail=contactSelectorPhone.nextElementSibling;

// footer selector
const footerSelector=document.querySelector('footer');
const copyright=footerSelector.querySelector('p');

// header content
headerNav1.textContent=siteContent['nav']['nav-item-1']
headerNav2.textContent=siteContent['nav']['nav-item-2']
headerNav3.textContent=siteContent['nav']['nav-item-3']
headerNav4.textContent=siteContent['nav']['nav-item-4']
headerNav5.textContent=siteContent['nav']['nav-item-5']
headerNav6.textContent=siteContent['nav']['nav-item-6']

// cta content
ctaH1.textContent=siteContent['cta']['h1'];
ctaButton.textContent=siteContent['cta']['button'];
ctaImg.src= `img/${siteContent['cta']['img-src']}`;

// main content
textContent1h.textContent=siteContent['main-content']['features-h4']
textContent1p.textContent=siteContent['main-content']['features-content']

textContent2h.textContent=siteContent['main-content']["about-h4"]
textContent2p.textContent=siteContent['main-content']['about-content']

textContent3h.textContent=siteContent['main-content']["services-h4"]
textContent3p.textContent=siteContent['main-content']['services-content']

textContent4h.textContent=siteContent['main-content']["product-h4"]
textContent4p.textContent=siteContent['main-content']['product-content']

textContent5h.textContent=siteContent['main-content']["vision-h4"]
textContent5p.textContent=siteContent['main-content']['vision-content']

mainContImg.src=siteContent['main-content']['middle-img-src'];

// contact content

contactSelectorh4.textContent=siteContent['contact']['contact-h4'];
contactSelectorAddress.textContent=siteContent['contact']['address'];
contactSelectorPhone.textContent=siteContent['contact']['phone'];
contactSelectorEmail.textContent=siteContent['contact']['email'];

// copyright content
footerSelector.textContent=siteContent['footer']['copyright'];

