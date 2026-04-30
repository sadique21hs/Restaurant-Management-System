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

if (addEmployeeBtn) {
  addEmployeeBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

btnCancel.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

const employeeForm = document.querySelector('.employee-form');
employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fullName = employeeForm.querySelector('input[placeholder="Enter full name"]').value;
  const email = employeeForm.querySelector('input[placeholder="Enter email"]').value;
  const role = employeeForm.querySelector('select').value;
  
  const newCard = document.createElement('div');
  newCard.className = 'employee-card';
  newCard.innerHTML = `
    <div class="employee-info">
      <h4>${fullName}</h4>
      <p>${email}</p>
      <div class="status-badges">
        <span class="badge clocked-out">🔴 Clocked Out</span>
        <span class="badge approved">✓ Approved</span>
      </div>
    </div>
    <span class="role-badge ${role}">${role.charAt(0).toUpperCase() + role.slice(1)}</span>
  `;
  
  document.querySelector('.employees-grid').appendChild(newCard);
  
  employeeForm.reset();
  modal.classList.remove('active');
  
  alert('Employee added successfully!');
});

const actionBtns = document.querySelectorAll('.action-btn');
actionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.textContent.trim();
    
    if (text.includes('Add Employee')) {
      document.querySelector('[data-section="employees"]').click();
      setTimeout(() => addEmployeeBtn.click(), 300);
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
