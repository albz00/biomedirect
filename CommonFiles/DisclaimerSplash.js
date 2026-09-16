(function () {
    var KEY = 'biomeDisclaimerSeen';
    var splash = document.getElementById('biomeDisclaimerSplash');
    if (!splash) return;

    function alreadySeen() {
        try { return window.localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
    }

    function dismiss() {
        try { window.localStorage.setItem(KEY, '1'); } catch (e) { /* ignore */ }
        document.documentElement.classList.add('disclaimer-seen');
        splash.remove();
    }

    if (alreadySeen()) {
        document.documentElement.classList.add('disclaimer-seen');
        splash.remove();
        return;
    }

    splash.addEventListener('click', dismiss);
    splash.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dismiss();
        }
    });
})();
