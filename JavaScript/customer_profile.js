// ===== SETTINGS MODAL =====
function openSettings() {
    document.getElementById("settingsModal").style.display = "flex";
  }
  
  function closeSettings() {
    document.getElementById("settingsModal").style.display = "none";
  }
  
  // ===== PROFILE EDIT =====
  function openProfileEdit() {
    closeSettings();
    document.getElementById("profileModal").style.display = "flex";
  }
  
  function closeProfile() {
    document.getElementById("profileModal").style.display = "none";
  }
  
  // ===== PASSWORD EDIT =====
  function openPasswordEdit() {
    closeSettings();
    document.getElementById("passwordModal").style.display = "flex";
  }
  
  function closePassword() {
    document.getElementById("passwordModal").style.display = "none";
  }