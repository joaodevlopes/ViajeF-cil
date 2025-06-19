 // Configuração do modal (comum a todos os pacotes)
    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            const price = this.getAttribute('data-price');

            document.getElementById('modal-title').textContent = destination;
            document.getElementById('modal-price').textContent = `R$ ${parseFloat(price).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
            document.getElementById('modal-destination').value = destination;

            document.getElementById('modal-form').reset();
            document.getElementById('modal-form').style.display = 'block';
            document.getElementById('modal-success').classList.remove('active');
            document.getElementById('destination-modal').classList.add('active');
        });
    });
