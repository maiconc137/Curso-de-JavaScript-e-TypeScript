function Calculudara() {
    this.display = document.querySelector('.display');

    
    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaEnter();
        this.pressionaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.KeyCode !== 13) return;
            this.realizaConta()
        })
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDsplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            if (el.classList.contains('btn-sqr')) this.raiz(el);
            if (el.classList.contains('btn-mod')) this.modulo(el);
            if (el.classList.contains('btn-ln')) this.logE(el);

            this.display.focus();
        })
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida')
                return
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida')
            return
        }
    };
    this.addNumDsplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
              }
        })
    }
    this.raiz = () => {
        const raiz = this.display.value;
        this.display.value = `Math.sqrt(${raiz})`;
        this.realizaConta()
    }
    this.modulo = () => {
        const mod = this.display.value;
        this.display.value = `Math.abs(${mod})`;
        this.realizaConta()
    }
    this.logE = () => {
        const logE = this.display.value;
        this.display.value = `Math.log(${logE})`;
        this.realizaConta()
    }

};

const calculadora = new Calculudara()
calculadora.inicia()