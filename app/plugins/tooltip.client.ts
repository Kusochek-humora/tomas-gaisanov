export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("tooltip", {
    mounted(el: HTMLElement, binding) {
      let tooltip: HTMLDivElement | null = null;
      let isTouch = false;

      const createTip = () => {
        if (tooltip) return;
        tooltip = document.createElement("div");
        tooltip.className = "tooltip-portal";
        tooltip.textContent = binding.value;
        document.body.appendChild(tooltip);
      };

      const show = () => {
        createTip();
        if (!tooltip) return;

        const rect = el.getBoundingClientRect();

        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.style.top = rect.top + window.scrollY - 10 + "px";
        tooltip.style.opacity = "1";
      };

      const hide = () => {
        if (!tooltip) return;
        tooltip.style.opacity = "0";
      };

      // Hover (desktop)
      el.addEventListener("mouseenter", () => {
        if (!isTouch) show();
      });
      el.addEventListener("mouseleave", () => {
        if (!isTouch) hide();
      });

      // Touch (tablet/mobile)
      el.addEventListener("touchstart", () => {
        isTouch = true;
        if (tooltip?.style.opacity === "1") hide();
        else show();
      });

      // Close on outside tap
      document.addEventListener("touchstart", (e) => {
        if (!tooltip) return;
        if (!el.contains(e.target as Node)) hide();
      });
    },

    beforeUnmount() {
      document.querySelectorAll(".tooltip-portal").forEach(el => el.remove());
    }
  });
});
