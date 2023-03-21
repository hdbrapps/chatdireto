function openWhatsApp() {
    let phoneNumber = document.getElementById("phone").value.replace(/\D/g, '');
    phoneNumber = '55' + phoneNumber; // Adicione o código do país antes do número
    whatsapp.location.href = 'https://api.whatsapp.com/send?phone=' + phoneNumber;
  }
  
  document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    if (!document.getElementById("phone").value) {
      alert("Por favor, digite seu número de telefone.");
      event.preventDefault();
    }
  });
  
  const phoneInput = document.querySelector('#phone');
  
  phoneInput.addEventListener('paste', (event) => {
    // Impedir a ação padrão de colar o texto no campo de entrada
    event.preventDefault();
  
    // Obter o texto colado
    const pastedText = event.clipboardData.getData('text');
  
    // Filtrar apenas os dígitos do texto colado
    const phoneNumber = pastedText.replace(/\D/g, '');
  
    // Formatar o número de telefone e definir o valor do campo "phone"
    if (phoneNumber.length === 11) {
      phoneInput.value = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      phoneInput.value = phoneNumber.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
  });
  
  document.addEventListener('paste', function(event) {
    // Verifica se o que foi colado é um número de telefone válido
    const phoneNumber = event.clipboardData.getData('text').match(/\d+/g)?.join('');
    if (phoneNumber && phoneNumber.length >= 10 && phoneNumber.length <= 11) {
      // Preenche o campo "phone" com o número de telefone colado
      document.getElementById('phone').value = phoneNumber;
    }
  });
  
