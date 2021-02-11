


/*** Externaalit muuttujat ****/
var DEFAULT_CUSTOMER = "....";
var customer = {};
//Apumuuttujia
var element;
var orderState;
var INIT = 0;
var READING_DOMAINNAME = 1;
var READING_THEME = 2;
var READING_PAGETITLE = 3;

/*** Funktiot ***/
//Onload-funktio
function initPage () {
    //Lue tilatieto
    var sysState = sessionStorage.getItem("systemStatus");
    //JOS tultiin pääsivulta NIIN alusta tilaustiedot
    if (sysState === "index") {
        customer = {
            domainName: DEFAULT_CUSTOMER,
            theme: DEFAULT_CUSTOMER,
            pageTitle: DEFAULT_CUSTOMER,
            name: DEFAULT_CUSTOMER,
            address: DEFAULT_CUSTOMER,
            phone: DEFAULT_CUSTOMER,
            email: DEFAULT_CUSTOMER
        }
        customerJSON = JSON.stringify(customer);
        sessionStorage.setItem("customerJson", customerJSON);
    }
    customerJSON = sessionStorage.getItem("customerJson");
    customer = JSON.parse(customerJSON);
    orderState = INIT;
    control (null);
    sessionStorage.setItem("systemStatus", "order");    
}
//Kontrolli
function control (orderEvent) {
    switch (orderState) {
        case INIT:
            //Aseta vanhaverkkotunnus
            if (customer.domainName !== DEFAULT_CUSTOMER) {
                element = w3.getElements("#domname");
                element[0].value = customer.domainName;
            }            
            //Avaa verkkotunnusvälilehti
            var element = w3.getElements(".tabdname");
            openTab (element[0], "domainName");           
            //Aseta status = lukee verkkotunnusta
            orderState = READING_DOMAINNAME;
            break;
        case READING_DOMAINNAME:
            //  Tallenna verkkotunnus
            var element = w3.getElements("#domname");
            if (element[0].value.length > 0) customer.domainName = element[0].value;            
            //JOS tapahtuma == seuraava TAI toteema NIIN
            if ( (orderEvent === "next") || (orderEvent === "toTheme")) {
                //Aseta vanhateema
                if (customer.theme !== DEFAULT_CUSTOMER) {
                    //Kirjoita syöttötieto syöttökenttään
                    document.forms["themeForm"]["theme"].value = customer.theme;
                }
                //Avaa teema
                element = w3.getElements(".tabtheme");
                openTab (element[0], "theme");
                //Aseta tila on teema
                orderState = READING_THEME;
            }
            //MUUTOIN JOS tapahtuma == toPagetitle NIIN
            else if ( orderEvent === "toPagetitle") {
                //Aseta vanhapagetitle
                if (customer.pageTitle !== DEFAULT_CUSTOMER) {
                  //Kirjoita syöttötieto syöttökenttään
                  element = w3.getElements("#pagetitle");
                  element[0].value = customer.pageTitle;
                }
                //Avaa pagetitle
                element = w3.getElements(".tabptitle");
                openTab (element[0], "pageTitle");
                //Aseta tila on pagetitle
                orderState = READING_PAGETITLE;
            }
            break;
        case READING_THEME:
            //Tallenna teema
            customer.theme = document.forms["themeForm"]["theme"].value;
            //JOS tapahtuma == seuraava TAI tapahtuma == toPageTitle NIIN
            if ( (orderEvent === "next") || (orderEvent === "toPagetitle")) {
                //Lue vanhasivuotsikko
                if (customer.pageTitle !== DEFAULT_CUSTOMER) {
                  //Kirjoita syöttötieto syöttökenttään
                  element = w3.getElements("#pagetitle");
                  element[0].value = customer.pageTitle;
                }
                //Avaa sivuotsikko
                element = w3.getElements(".tabptitle");
                openTab (element[0], "pageTitle");
                //Aseta tila on sivuotsikko
                orderState = READING_PAGETITLE;                
            }
            //MUUTOIN JOS tapahtuma == toVerkkotunnus NIIN
            else if ( (orderEvent === "toDomainname")  || (orderEvent === "previous") ) {
                //Aseta vanhaverkkotunnus
                if (customer.domainName !== DEFAULT_CUSTOMER) {
                    element = w3.getElements("#domname");
                    element[0].value = customer.domainName;
                }
                //Avaa verkkotunnus
                element = w3.getElements(".tabdname");
                openTab (element[0], "domainName");  
                //Aseta tila on verkkotunnus
                orderState = READING_DOMAINNAME;
            }
            break;
        case READING_PAGETITLE:
            //Tallenna otsikkotieto
            element = w3.getElements("#pagetitle");
            if (element[0].value.length > 0) customer.pageTitle = element[0].value;
            //JOS tapahtuma == seuraava NIIN
            if (orderEvent === "next") {
                //Siirry esittelysivustolle
                var customerJSON = JSON.stringify(customer);
                sessionStorage.setItem("customerJson", customerJSON);
                //Avaa sivu
                switch (customer.theme) {
                    case "SINGLE_VIEW": window.location.assign("indexsingle.html"); break;
                    case "LONG_PAGE": window.location.assign("indexlong.html"); break;
                    case "LONG_PAGE_II": window.location.assign("indexlong2.html"); break;
                    default: window.location.assign("indexsingle.html");
                }
            }
            //MUUTOIN JOS tapahtuma == toVerkkotunnus NIIN
            else if (orderEvent === "toDomainname") {
                //Aseta vanhaverkkotunnus
                if (customer.domainName !== DEFAULT_CUSTOMER) {
                    element = w3.getElements("#domname");
                    element[0].value = customer.domainName;
                }
                //Avaa verkkotunnus
                element = w3.getElements(".tabdname");
                openTab (element[0], "domainName");  
                //Aseta tila on verkkotunnus
                orderState = READING_DOMAINNAME;
            }
            //MUUTOIN JOS tapahtuma == toTeema NIIN
            else if ( (orderEvent === "toTheme")  || (orderEvent === "previous") ) {
                //Aseta vanhateema
                if (customer.theme !== DEFAULT_CUSTOMER) {
                    //Kirjoita syöttötieto syöttökenttään
                    document.forms["themeForm"]["theme"].value = customer.theme;
                }
                //Avaa teema
                element = w3.getElements(".tabtheme");
                openTab (element[0], "theme");
                //Aseta tila on teema
                orderState = READING_THEME;
            }          
            break;
        default: break;
    }
}
// Tabbed Menu
function openTab(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-white", " w3-teal");
  }
  //Avaa välilehti
  document.getElementById(menuName).style.display = "block";
  //Vaihda tabin väriä
  evt.className = evt.className.replace ("w3-teal", "w3-white");
}