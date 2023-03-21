function openWhatsApp() {
  const phoneInput = document.querySelector('#phone');
  const phoneNumber = phoneInput.value.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  if (!phoneNumber) {
    phoneInput.setCustomValidity('Campo obrigatório');
    phoneInput.reportValidity();
  } else {
    phoneInput.setCustomValidity('');
    window.location.href = whatsappLink;
    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = `intent://send/${phoneNumber}#Intent;scheme=whatsapp;package=com.whatsapp;action=android.intent.action.SENDTO;end`
      }
    }, 2000);
  }
}

document.getElementById("whatsappForm").addEventListener("submit", function(event) {
  if (!document.getElementById("phone").value) {
    alert("Por favor, preencha o número de telefone.");
    event.preventDefault();
  }
});

const phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('input', (event) => {
  let phoneNumber = event.target.value;
  phoneNumber = phoneNumber.replace(/\D/g, '');
  if (phoneNumber.length === 11) {
    phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    phoneNumber = phoneNumber.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }
  event.target.value = phoneNumber;
});

phoneInput.addEventListener('paste', (event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData('text');
  const phoneNumber = pastedText.replace(/\D/g, '');
  if (phoneNumber.length === 11) {
    phoneInput.value = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    phoneInput.value = phoneNumber.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  }
});

document.addEventListener('paste', function(event) {
  const phoneNumber = event.clipboardData.getData('text').match(/\d+/g)?.join('');
  if (phoneNumber && phoneNumber.length >= 10 && phoneNumber.length <= 11) {
    document.getElementById('phone').value = phoneNumber;
  }
});
