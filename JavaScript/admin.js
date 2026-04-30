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

// Support updated Cancel button markup (e.g. .btn-secondary or type="reset")
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

const employeeForm = document.getElementById('employeeForm') || document.querySelector('.employee-form');
if (employeeForm) employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Use native validation UI where possible
  if (typeof employeeForm.reportValidity === 'function' && !employeeForm.reportValidity()) {
    return;
  }
  
  const fullNameInput = employeeForm.querySelector('#employeeFullName, #fullName, input[name="fullName"]');
  const emailInput = employeeForm.querySelector('#employeeEmail, #email, input[name="email"]');
  const roleSelect = employeeForm.querySelector('#employeeRole, #role, select[name="role"], select');
  const certificateInput = employeeForm.querySelector('#employeeCertificate, #certificate, input[type="file"][name="certificate"], input[type="file"]');

  const fullName = (fullNameInput?.value || '').trim();
  const email = (emailInput?.value || '').trim();
  const role = (roleSelect?.value || '').trim();

  // Guard: in case required attrs were removed
  if (certificateInput && certificateInput.required && (!certificateInput.files || certificateInput.files.length === 0)) {
    alert('Please upload the certificate PDF.');
    certificateInput.focus();
    return;
  }

  if (!role) {
    alert('Please select a role.');
    roleSelect?.focus();
    return;
  }
  if (!fullName) {
    alert('Please enter full name.');
    fullNameInput?.focus();
    return;
  }
  if (!email) {
    alert('Please enter email.');
    emailInput?.focus();
    return;
  }
  
  const newCard = document.createElement('div');
  newCard.className = 'employee-card';
  const roleText = role.charAt(0).toUpperCase() + role.slice(1);
  newCard.innerHTML = `
    <div class="employee-info">
      <h4>${fullName}</h4>
      <p>${email}</p>
      <div class="status-badges">
        <span class="badge clocked-out">🔴 Clocked Out</span>
        <span class="badge approved">✓ Approved</span>
      </div>
    </div>
    <span class="role-badge ${role}">${roleText}</span>
  `;
  
  document.querySelector('.employees-grid').appendChild(newCard);
  
  employeeForm.reset();
  closeModal();
  
  alert('Employee added successfully!');
});

const actionBtns = document.querySelectorAll('.action-btn');
actionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.textContent.trim();
    
    if (text.includes('Add Employee')) {
      document.querySelector('[data-section="employees"]').click();
      setTimeout(() => openModal(), 300);
    } else if (text.includes('Approve Customer')) {
      document.querySelector('[data-section="customer"]').click();
    } else if (text.includes('View Reports')) {
      document.querySelector('[data-section="reports"]').click();
    } else if (text.includes('Manage Tables')) {
      document.querySelector('[data-section="tables"]').click();
    } else if (text.includes('Menu Items')) {
      document.querySelector('[data-section="menu"]').click();
    } else if (text.includes('Export Data')) {
      alert('Exporting data...');
    }
  });
});

const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to logout?')) {
    alert('Logging out...');
  }
});

// Customer approval actions
(() => {
  const customerSection = document.getElementById('customer');
  if (!customerSection) return;

  const pendingList = document.getElementById('pendingCustomers');
  const approvedList = document.getElementById('approvedCustomers');
  const pendingCount = document.getElementById('pendingCount');
  const approvedCount = document.getElementById('approvedCount');

  const updateCounts = () => {
    if (pendingCount && pendingList) {
      pendingCount.textContent = String(pendingList.querySelectorAll('.customer-request').length);
    }
    if (approvedCount && approvedList) {
      approvedCount.textContent = String(approvedList.querySelectorAll('.approved-customer').length);
    }
  };

  const buildApprovedCard = ({ id, name, email, since }) => {
    const card = document.createElement('div');
    card.className = 'approved-customer';
    card.dataset.customerId = id;
    card.innerHTML = `
      <div class="approved-check">✓</div>
      <div class="approved-info">
        <h4>${name}</h4>
        <p>${email}</p>
        <small>${since}</small>
      </div>
    `;
    return card;
  };

  customerSection.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;

    const action = actionBtn.getAttribute('data-action');
    const request = actionBtn.closest('.customer-request');
    if (!request) return;

    const id = request.dataset.customerId || `approved-${Date.now()}`;
    const name = request.querySelector('h4')?.textContent?.trim() || 'Customer';
    const email = request.querySelector('p')?.textContent?.trim() || '';
    const since = request.querySelector('small')?.textContent?.trim() || '';

    if (action === 'approve') {
      if (approvedList) {
        approvedList.appendChild(buildApprovedCard({ id: id.replace('pending', 'approved'), name, email, since }));
      }
      request.remove();
      updateCounts();
      return;
    }

    if (action === 'reject') {
      request.remove();
      updateCounts();
    }
  });

  updateCounts();
})();

// Tables: Add Table button
(() => {
  const tablesSection = document.getElementById('tables');
  if (!tablesSection) return;

  const grid = document.getElementById('tablesGrid');
  const addBtn = tablesSection.querySelector('.add-table-btn');
  if (!grid || !addBtn) return;

  const getNextTableId = () => {
    const ids = Array.from(grid.querySelectorAll('.table-card'))
      .map(el => Number(el.dataset.tableId))
      .filter(n => Number.isFinite(n));
    return (ids.length ? Math.max(...ids) : 0) + 1;
  };

  const buildTableCard = ({ tableId, capacity, status, imageSrc, positionLabel }) => {
    const card = document.createElement('div');
    card.className = 'table-card';
    card.dataset.tableId = String(tableId);
    card.dataset.status = status;
    const safeStatus = status || 'available';
    const statusText = safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1);
    const note = positionLabel ? `<small class="table-note">Position: ${positionLabel}</small>` : '';
    card.innerHTML = `
      <div class="table-number"><img class="table-icon" src="${imageSrc}" alt="Table" /></div>
      <h4>Table ${tableId}</h4>
      <p>Seat: <span>${capacity}</span></p>
      <span class="table-status ${safeStatus}">${statusText}</span>
      ${note}
    `;
    return card;
  };

  const form = document.getElementById('tableForm');
  const tableNumberInput = document.getElementById('tableNumber');
  const capacityInput = document.getElementById('tableCapacity');
  const positionSelect = document.getElementById('tablePosition');
  const presetSelect = document.getElementById('tableImagePreset');
  const fileInput = document.getElementById('tableImageFile');

  const positionLabelMap = {
    window: 'Window',
    center: 'Center',
    corner: 'Corner',
    outdoor: 'Outdoor',
    entrance: 'Near Entrance'
  };

  const getImageSrcFromForm = async () => {
    const file = fileInput?.files?.[0];
    if (file) {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Failed to read image'));
        reader.readAsDataURL(file);
      });
      if (dataUrl) return dataUrl;
    }
    const preset = (presetSelect?.value || '4_people table.jpg').trim();
    return `../Images/Table/${preset}`;
  };

  const setDefaults = () => {
    if (tableNumberInput) tableNumberInput.value = String(getNextTableId());
    if (capacityInput && !capacityInput.value) capacityInput.value = '6';
    if (positionSelect && !positionSelect.value) positionSelect.value = '';
    if (presetSelect && !presetSelect.value) presetSelect.value = '4_people table.jpg';
    if (fileInput) fileInput.value = '';
  };

  addBtn.addEventListener('click', () => {
    setDefaults();
    openTableModal();
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
        return;
      }

      const tableId = Number(tableNumberInput?.value);
      const capacity = Number(capacityInput?.value);
      const position = (positionSelect?.value || '').trim();

      if (!Number.isFinite(tableId) || tableId < 1) {
        alert('Please enter a valid table number.');
        tableNumberInput?.focus();
        return;
      }
      if (!Number.isFinite(capacity) || capacity < 1) {
        alert('Please enter a valid capacity.');
        capacityInput?.focus();
        return;
      }
      if (!position) {
        alert('Please select a position.');
        positionSelect?.focus();
        return;
      }

      const exists = Array.from(grid.querySelectorAll('.table-card'))
        .some(el => Number(el.dataset.tableId) === tableId);
      if (exists) {
        alert('This table number already exists.');
        tableNumberInput?.focus();
        return;
      }

      let imageSrc = '';
      try {
        imageSrc = await getImageSrcFromForm();
      } catch {
        alert('Unable to load table image.');
        return;
      }

      const positionLabel = positionLabelMap[position] || position;
      grid.appendChild(buildTableCard({
        tableId,
        capacity,
        status: 'available',
        imageSrc,
        positionLabel
      }));

      form.reset();
      closeTableModal();
    });
  }
})();

// Menu Items: approval actions
(() => {
  const menuSection = document.getElementById('menu');
  if (!menuSection) return;

  const pendingList = document.getElementById('pendingMenuItems');
  const approvedList = document.getElementById('approvedMenuItems');
  const pendingCount = document.getElementById('pendingMenuCount');
  const approvedCount = document.getElementById('approvedMenuCount');

  if (!pendingList || !approvedList) return;

  const updateCounts = () => {
    if (pendingCount) {
      pendingCount.textContent = String(pendingList.querySelectorAll('.menu-card').length);
    }
    if (approvedCount) {
      approvedCount.textContent = String(approvedList.querySelectorAll('.menu-card').length);
    }
  };

  const ensureApprovedCardUI = (card) => {
    card.classList.remove('pending');
    card.classList.add('approved');

    // Remove approve button if present
    card.querySelector('.menu-approve-btn')?.remove();

    // Add check icon if missing
    if (!card.querySelector('.menu-check')) {
      const check = document.createElement('div');
      check.className = 'menu-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';
      card.appendChild(check);
    }
  };

  menuSection.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="approve-menu"]');
    if (!btn) return;

    const card = btn.closest('.menu-card');
    if (!card) return;

    ensureApprovedCardUI(card);

    const oldId = card.getAttribute('data-menu-id') || `approved-${Date.now()}`;
    card.setAttribute('data-menu-id', oldId.replace('pending', 'approved'));
    approvedList.appendChild(card);
    updateCounts();
  });

  updateCounts();
})();
