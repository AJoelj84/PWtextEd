const butInstall = document.getElementById('buttonInstall');
let installPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPromptEvent = event;
});

butInstall.addEventListener('click', async () => {
  if (installPromptEvent) {
    installPromptEvent.prompt();
    const choiceResult = await installPromptEvent.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User dismissed the PWA installation');
    }
    installPromptEvent = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA has been installed');
});