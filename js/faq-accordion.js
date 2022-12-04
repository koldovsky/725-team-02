(() => {
    const acc = document.getElementsByClassName('faq__accordion-button');

    for (let i = 0; i < acc.length; i++) {

        acc[i].onclick = function () {
            let panel = this.nextElementSibling;
            console.log(panel);
            let coursePanel = document.getElementsByClassName('faq__panel');
            console.log(coursePanel);
            let courseAccordionActive = document.getElementsByClassName('faq__accordion-button active');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                for (let j = 0; j < courseAccordionActive.length; j++) {
                    courseAccordionActive[j].classList.remove('active');
                }
                for (let t = 0; t < coursePanel.length; t++) {
                    this.classList.remove('active');
                    coursePanel[t].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + 'px';
                this.classList.add('active');
            }
        }
    }

})();