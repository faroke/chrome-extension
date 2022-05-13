chrome.devtools.panels.create(
    'DevTools Starter',
    'assets/preact-icon.png',
    'devtools/app/index.html',
    () => {
        console.log('DevTools panel loaded!');
    }
);