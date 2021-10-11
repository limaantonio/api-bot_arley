

//verifique se há 'darkMode' salvo em localStorage
let darkMode = localStorage.getItem('dark'); 

const darkModeToggle = document.querySelector('#chk');

const enableDarkMode = () => {
  // 1. Adicione a classe ao body
  document.body.classList.add('dark');
  // 2. Atualize darkMode no localStorage
  localStorage.setItem('dark', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remova a classe do body
  document.body.classList.remove('dark');
  // 2. Atualize darkMode no localStorage 
  localStorage.setItem('dark', null);
}
 
// Se o usuário já visitou e habilitou darkMode
// começar com ele ligado
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Quando alguém clica no botão
darkModeToggle.addEventListener('click', () => {
  // obter sua configuração darkMode
  darkMode = localStorage.getItem('dark'); 
  
  // Se não estiver habilitado, habilite-o
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // Se estiver habilitado, desligue-o  
  } else {  
    disableDarkMode(); 
  }
});


