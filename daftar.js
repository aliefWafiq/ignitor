
  function toggleDropdown() {
    const dropdown = document.getElementById('dropdownKategori');
    dropdown.classList.toggle('hidden');
  }

  // Optional: Menutup dropdown saat klik di luar
  document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('dropdownKategori');
    const button = e.target.closest('button');
    const insideDropdown = e.target.closest('#dropdownKategori');

    if (!insideDropdown && !button) {
      dropdown.classList.add('hidden');
    }
  });

