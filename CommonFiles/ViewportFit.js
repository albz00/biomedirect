/* Ensure a real viewport meta so TV / embedded browsers do not layout at ~980px. */
(function ensureBiomeViewportMeta() {
    try {
        if (typeof document === "undefined" || !document.head) return;
        if (document.querySelector('meta[name="viewport"]')) return;
        var meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.setAttribute("content", "width=device-width, initial-scale=1, viewport-fit=cover");
        document.head.insertBefore(meta, document.head.firstChild);
    } catch (e) { /* ignore */ }
})();
