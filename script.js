function criptografar() {
    const mensagem = document.getElementById("mensagem").value;
    const chave = document.getElementById("chave").value;
    const resultado = document.getElementById("resultadoCriptografia");
    const msg = document.getElementById("msgCripto");
  
    if (!mensagem || !chave) {
      msg.textContent = "⚠️ Preencha a mensagem e a chave!";
      resultado.value = "";
      return;
    }
  
    try {
      const criptografado = CryptoJS.AES.encrypt(mensagem, chave).toString();
      resultado.value = criptografado;
      msg.textContent = "✅ Mensagem criptografada com sucesso!";
    } catch (e) {
      msg.textContent = "❌ Erro na criptografia.";
    }
  }
  
  function descriptografar() {
    const mensagem = document.getElementById("mensagemCriptografada").value;
    const chave = document.getElementById("chaveDescriptografia").value;
    const resultado = document.getElementById("resultadoDescriptografia");
    const msg = document.getElementById("msgDescripto");
  
    if (!mensagem || !chave) {
      msg.textContent = "⚠️ Preencha o texto criptografado e a chave!";
      resultado.value = "";
      return;
    }
  
    try {
      const bytes = CryptoJS.AES.decrypt(mensagem, chave);
      const descriptografado = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!descriptografado) {
        msg.textContent = "❌ Chave incorreta ou mensagem inválida.";
        resultado.value = "";
      } else {
        resultado.value = descriptografado;
        msg.textContent = "✅ Mensagem descriptografada com sucesso!";
      }
    } catch (e) {
      msg.textContent = "❌ Erro na descriptografia.";
      resultado.value = "";
    }
  }
  