class header extends HTMLElement {
    connectedCallback () {
        const title = this.getAttribute('title') || 'newloop';
        const verifyHref = this.getAttribute('back');
        let icon = '';

        if(verifyHref) {
            icon = this.innerHTML= `<a href="../index.html"><i class="fa-solid fa-angle-left text-white back_icon"></i></a>`;
        } else{
            icon = this.innerHTML= `<img src="./assets/image/loop.svg" class="logo" alt="logo pequeno">`;
        }

        this.innerHTML = `
            <header class="header bg-menu align-items-center px-4 mb-5">
                ${icon}
                <h3 class="newloop mx-auto mb-0 text-white">${title}</h3>
            </header>
        `;

    }
}

customElements.define('newloop-header', header);