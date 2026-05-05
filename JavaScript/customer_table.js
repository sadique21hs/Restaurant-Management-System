/* ==========================================
   Table Data Store
========================================== */
const tableData = {
    table5: {
      badge:    'Table 5',
      title:    'Signature Window Table',
      subtitle: 'Ground Floor · Panoramic View',
      image:    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
      desc:     'Positioned at the heart of our dining floor, Table 5 offers a sweeping panoramic view through floor-to-ceiling windows overlooking the garden courtyard. Upholstered in warm cognac leather with soft overhead pendant lighting, it creates an intimate yet airy atmosphere. Ideal for romantic evenings, business dinners, or small celebrations.',
      pills: [
        { icon: 'fas fa-eye',       label: 'Window View'      },
        { icon: 'fas fa-users',     label: '4 Seats'          },
        { icon: 'fas fa-leaf',      label: 'Garden Facing'    },
        { icon: 'fas fa-lightbulb', label: 'Ambient Lighting' },
      ],
      stats: [
        { value: '4',      label: 'Seats'        },
        { value: 'GF',     label: 'Floor'        },
        { value: '★ 4.9',  label: 'Guest Rating' },
        { value: 'Indoor', label: 'Location'     },
      ],
    },
    table7: {
      badge:    'Table 7',
      title:    'Private Corner Alcove',
      subtitle: 'Mezzanine Level · Quiet Corner',
      image:    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
      desc:     'Tucked into a quiet alcove on our mezzanine level, Table 7 is our most requested table for couples and intimate groups seeking privacy. Framed by arched brickwork and soft wall-mounted sconces, the space radiates warmth and character. A curated wine shelf lines the adjacent wall, setting the scene for an unforgettable dining experience.',
      pills: [
        { icon: 'fas fa-lock',        label: 'Private Setting'   },
        { icon: 'fas fa-users',       label: '6 Seats'           },
        { icon: 'fas fa-wine-bottle', label: 'Wine Shelf Nearby' },
        { icon: 'fas fa-volume-mute', label: 'Quiet Zone'        },
      ],
      stats: [
        { value: '6',      label: 'Seats'        },
        { value: 'M1',     label: 'Floor'        },
        { value: '★ 4.8',  label: 'Guest Rating' },
        { value: 'Alcove', label: 'Setting'      },
      ],
    },
  };
  
  /* ==========================================
     Table Detail Modal
  ========================================== */
  function openTableDetail(tableKey) {
    const d = tableData[tableKey];
    if (!d) return;
  
    document.getElementById('modalImage').src            = d.image;
    document.getElementById('modalBadge').textContent    = d.badge;
    document.getElementById('modalTitle').textContent    = d.title;
    document.getElementById('modalSubtitle').textContent = d.subtitle;
    document.getElementById('modalDesc').textContent     = d.desc;
  
    document.getElementById('modalPills').innerHTML = d.pills.map(p =>
      `<span class="pill"><i class="${p.icon}"></i>${p.label}</span>`
    ).join('');
  
    document.getElementById('modalStats').innerHTML = d.stats.map(s =>
      `<div class="stat-item">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    ).join('');
  
    openModal('tableDetailOverlay');
  }
  
  /* ==========================================
     Booking Modal
  ========================================== */
  function openBookingModal() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookDate').value = today;
    openModal('bookingOverlay');
  }
  
  function selectTable(el) {
    document.querySelectorAll('.table-chip').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
  }
  
  function submitBooking() {
    closeModal('bookingOverlay');
    showToast("Reservation request sent! We'll confirm shortly.");
  }
  
  /* ==========================================
     Shared Modal Helpers
  ========================================== */
  function openModal(id) {
    document.getElementById(id).classList.add('open');
  }
  
  function closeModal(id) {
    document.getElementById(id).classList.remove('open');
  }
  
  function handleOverlayClick(e, id) {
    if (e.target === document.getElementById(id)) closeModal(id);
  }
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('tableDetailOverlay');
      closeModal('bookingOverlay');
    }
  });
  
  /* ==========================================
     Toast Notification
  ========================================== */
  function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3800);
  }