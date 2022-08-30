const tab1content = window.document.getElementById("tab-1-content")   

const tab2content = window.document.getElementById("tab-2-content")   

const tab3content = window.document.getElementById("tab-3-content")   

const tab1 = window.document.getElementById("tab-1");

const tab2 = window.document.getElementById("tab-2");

const tab3 = window.document.getElementById("tab-3");


function innerContent() {
    tab1content.style.display = "block";
    tab2content.style.display = "none";
    tab3content.style.display = "none";
}

function showContent1 () {
    tab1content.style.display = "block";
    tab2content.style.display = "none";
    tab3content.style.display = "none";
    tab1.classList.add('tab-border');
    tab2.classList.remove('tab-border');
    tab3.classList.remove('tab-border');
}

function showContent2 () {
    tab1content.style.display = "none";
    tab2content.style.display = "block";
    tab3content.style.display = "none";
    tab1.classList.remove('tab-border');
    tab2.classList.add('tab-border');
    tab3.classList.remove('tab-border');
}

function showContent3 () {
    tab1content.style.display = "none";
    tab2content.style.display = "none";
    tab3content.style.display = "block";
    tab1.classList.remove('tab-border');
    tab2.classList.remove('tab-border');
    tab3.classList.add('tab-border');
}

