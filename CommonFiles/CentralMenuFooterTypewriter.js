// Typewriter animation for central menu footer credit on first page load.
(function () {
    var FOOTER_TEXT = 'Jack D. Thatcher, Ph.D.\u2003Copyright 2013';
    var SEEN_KEY = 'biomeCentralMenuFooterTyped';
    var CHAR_DELAY_MS = 42;
    var START_DELAY_MS = 1050;

    document.addEventListener('DOMContentLoaded', function () {
        var el = document.querySelector('.footerCredit');
        if (!el) return;

        var text = (el.getAttribute('data-typewriter-text') || el.textContent || '').trim();
        if (!text) text = FOOTER_TEXT;

        var alreadyTyped = false;
        try {
            alreadyTyped = window.sessionStorage.getItem(SEEN_KEY) === '1';
        } catch (e) {
            // Storage may be unavailable in privacy-restricted browsers.
        }

        if (alreadyTyped) {
            el.textContent = text;
            el.classList.add('footerCredit--done');
            return;
        }

        try {
            window.sessionStorage.setItem(SEEN_KEY, '1');
        } catch (e) {
            // The animation still works when storage is unavailable.
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.textContent = text;
            el.classList.add('footerCredit--done');
            return;
        }

        el.textContent = '';
        el.classList.add('footerCredit--typing');
        el.setAttribute('aria-live', 'polite');

        var index = 0;

        function typeNext() {
            if (index < text.length) {
                el.textContent += text.charAt(index);
                index += 1;
                setTimeout(typeNext, CHAR_DELAY_MS);
                return;
            }
            el.classList.remove('footerCredit--typing');
            el.classList.add('footerCredit--done');
        }

        setTimeout(typeNext, START_DELAY_MS);
    });
})();
