class annotation extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="col-12">
                <h5 class="text-white fs-4">Anotações</h5>

                <textarea name="annotation" rows="22" class="col-12 input p-3 text-white" data-js="form"></textarea>

                <div class="d-flex justify-content-between mt-4 pt-1">
                    <button class="btn btn-dark" data-js="copy-btn">
                        <i class="fa fa-copy me-1"></i> Copiar
                    </button>
                    <button class="btn bg-green btn-success" data-js="wpp-btn">
                        <i class="fab fa-whatsapp me-1"></i> WhatsApp
                    </button>
                    <button class="btn btn-danger" data-js="delete-btn">
                        <i class="fa fa-trash me-1"></i> Limpar
                    </button>
                </div>
            </div>
        `;

        const textarea = this.querySelector('[data-js="form"]');
        const copyBtn = this.querySelector('[data-js="copy-btn"]');
        const cleanBtn = this.querySelector('[data-js="delete-btn"]');
        const wppBtn = this.querySelector('[data-js="wpp-btn"]');

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(textarea.value)
        });

        cleanBtn.addEventListener('click', () => {
            textarea.value = '';
        });

        wppBtn.addEventListener('click', () => {
            const texto = encodeURIComponent(textarea.value);
            const url = `https://wa.me/?text=${texto}`;
            window.open(url, '_blank');
        });
    }
}

customElements.define('annotation-field', annotation);