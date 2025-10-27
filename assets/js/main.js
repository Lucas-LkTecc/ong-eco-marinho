/* ==========================================================================
   JAVASCRIPT PRINCIPAL - EcoMarinho (Versão com Diagnóstico)
   Arquivo: main.js
   ========================================================================== */

console.log("main.js carregado com sucesso!");

// 1. Seleciona os elementos
const btnMobile = document.querySelector('.btn-mobile-nav');
const navList = document.querySelector('header nav ul');

// 2. Verifica se encontrou os elementos
if (btnMobile && navList) {
    
    // 3. Adiciona o "ouvinte" de clique
    btnMobile.addEventListener('click', () => {
        
        // !!! --- LINHA DE DIAGNÓSTICO --- !!!
        // Esta mensagem DEVE aparecer no console a cada clique.
        console.log("BOTÃO HAMBÚRGUER CLICADO!"); 
        
        // 4. Ação: Adiciona ou remove a classe
        navList.classList.toggle('nav-open');
    });

} else {
    // 5. Se não encontrar os elementos, avisa no console
    console.error("Erro EcoMarinho: Não foi possível encontrar o botão (.btn-mobile-nav) ou a lista do menu (header nav ul). Verifique seu HTML.");
}