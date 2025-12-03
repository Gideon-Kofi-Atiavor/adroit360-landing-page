// dropdown open/close with short delay so it doesn't vanish when cursor moves fast
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  const panel = dropdown.querySelector('.dropdown-content');
  let closeTimeout = null;

  function openDropdown() {
    clearTimeout(closeTimeout);
    dropdown.classList.add('open');
  }

  function closeDropdownSoon() {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => dropdown.classList.remove('open'), 100); // 150ms delay
  }

  // open when entering the nav item
  dropdown.addEventListener('mouseenter', openDropdown);
  dropdown.addEventListener('mouseleave', closeDropdownSoon);

  // also keep open while mouse over the big panel
  if (panel) {
    panel.addEventListener('mouseenter', openDropdown);
    panel.addEventListener('mouseleave', closeDropdownSoon);
  }

  // support keyboard (focus) opening for accessibility
  const trigger = dropdown.querySelector('a');
  if (trigger) {
    trigger.addEventListener('focus', openDropdown);
    trigger.addEventListener('blur', closeDropdownSoon);
  }
});
