console.log("FORMULARIO.JS CARREGADO");

document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {

            console.log("ID DO FORM ENCONTRADO:", form.id);

            // Impede o envio inicial
            e.preventDefault();

            let tipo = "";
            let id = (form.id || "").toLowerCase();
            let classe = (form.className || "").toLowerCase();

            if (id.includes("contato") || classe.includes("contato")) {
                tipo = "contato";
            } else if (id.includes("contratacao") || classe.includes("contratacao")) {
                tipo = "contratacao";
            } else if (id.includes("orcamento") || classe.includes("orcamento")) {
                tipo = "orcamento";
            }

            let mensagem = "";

            if (tipo === "contato" || tipo === "contratacao") {
                mensagem = "Formulário enviado com sucesso! Em breve alguém responderá.";
            } else if (tipo === "orcamento") {
                mensagem = "Seu orçamento foi enviado com sucesso!";
            } else {
                mensagem = "Formulário enviado com sucesso!";
            }

            alert(mensagem);

            // Envia realmente o formulário depois do alert
            // Usamos submit Nativo para evitar loop
            HTMLFormElement.prototype.submit.call(form);
        });
    });
});
