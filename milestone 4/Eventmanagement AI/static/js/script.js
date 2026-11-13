document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".stat-item[data-count]").forEach((counter) => {
        const target = Number.parseInt(counter.dataset.count || "0", 10);
        if (!Number.isFinite(target) || target <= 0) {
            return;
        }

        let current = 0;
        const step = Math.max(1, Math.ceil(target / 90));

        const tick = () => {
            current = Math.min(target, current + step);
            counter.textContent = current.toLocaleString("en-IN");

            if (current < target) {
                window.requestAnimationFrame(tick);
            }
        };

        tick();
    });
});
