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
const modalClose = document.querySelector('.modal-close');
const btnCancel = document.querySelector('.btn-cancel');

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

if (btnCancel) {
  btnCancel.addEventListener('click', () => {
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
  }
});

// Table modal helpers
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


const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to logout?')) {
    alert('Logging out...');
  }
});



