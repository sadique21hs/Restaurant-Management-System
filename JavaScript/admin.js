const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const sectionId = tab.getAttribute('data-section');
    
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
  });
});
const modal = document.getElementById('addEmployeeModal');
const addEmployeeBtn = document.querySelector('.add-employee-btn');
const modalClose = modal ? modal.querySelector('.modal-close') : null;

const openModal = () => {
  if (!modal) return;
  modal.classList.add('active');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('active');
};

if (addEmployeeBtn) {
  addEmployeeBtn.addEventListener('click', () => {
    openModal();
  });
}

if (modalClose) {
  modalClose.addEventListener('click', () => {
    closeModal();
  });
}


const modalCancelBtn = document.querySelector('#addEmployeeModal .btn-secondary, #addEmployeeModal button[type="reset"]');
if (modalCancelBtn) {
  modalCancelBtn.addEventListener('click', () => {
    closeModal();
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeTableModal();
    closeEditMenuModal();
  }
});
const tableModal = document.getElementById('addTableModal');
const openTableModal = () => {
  if (!tableModal) return;
  tableModal.classList.add('active');
};

const closeTableModal = () => {
  if (!tableModal) return;
  tableModal.classList.remove('active');
};

if (tableModal) {
  const tableCloseBtn = tableModal.querySelector('.modal-close');
  if (tableCloseBtn) {
    tableCloseBtn.addEventListener('click', () => closeTableModal());
  }

  tableModal.addEventListener('click', (e) => {
    if (e.target === tableModal) closeTableModal();
  });

  const tableCancelBtn = tableModal.querySelector('.btn-secondary, button[type="reset"]');
  if (tableCancelBtn) {
    tableCancelBtn.addEventListener('click', () => closeTableModal());
  }
}

const addTableBtn = document.querySelector('.add-table-btn');
if (addTableBtn) {
  addTableBtn.addEventListener('click', () => {
    openTableModal();
  });
}

const editMenuModal = document.getElementById('editMenuModal');
const editMenuPriceValue = document.getElementById('editMenuPrice');
const editMenuNameValue = document.getElementById('editMenuName');
let activeMenuCard = null;

const openEditMenuModal = (menuCard) => {
  if (!editMenuModal || !editMenuPriceValue) return;
  activeMenuCard = menuCard;
  const priceEl = menuCard ? menuCard.querySelector('.menu-price') : null;
  const nameEl = menuCard ? menuCard.querySelector('.menu-name') : null;
  const currentPrice = priceEl ? priceEl.textContent.replace('$', '').trim() : '';
  if (editMenuNameValue) {
    editMenuNameValue.textContent = nameEl ? nameEl.textContent.trim() : '-';
  }
  editMenuPriceValue.textContent = currentPrice ? `$${currentPrice}` : '-';
  editMenuModal.classList.add('active');
};

const closeEditMenuModal = () => {
  if (!editMenuModal) return;
  editMenuModal.classList.remove('active');
  activeMenuCard = null;
};

document.querySelectorAll('.menu-edit-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const menuCard = e.currentTarget.closest('.menu-card');
    if (menuCard) {
      openEditMenuModal(menuCard);
    }
  });
});

if (editMenuModal) {
  const editCloseBtn = editMenuModal.querySelector('.modal-close');
  if (editCloseBtn) {
    editCloseBtn.addEventListener('click', () => closeEditMenuModal());
  }

  const cancelEditBtn = editMenuModal.querySelector('[data-action="cancel-edit"]');
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', () => closeEditMenuModal());
  }

  editMenuModal.addEventListener('click', (e) => {
    if (e.target === editMenuModal) {
      closeEditMenuModal();
    }
  });
}





