/* ==========================================
   Table Data Store
========================================== */
const tableData = {
    table1: {
      id:       'table1',
      number:   'Table 1',
      title:    'Cosy Duo Nook',
      subtitle: 'Ground Floor · Intimate Corner',
      image:    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=80',
      seats:    2,
      floor:    'GF',
      rating:   '★ 4.7',
      setting:  'Indoor',
      desc:     'A snug two-seater tucked in a warm corner of the dining room. Perfect for a quiet date night or an intimate catch-up, with soft overhead lighting and a candle-lit table setting.',
      pills: [
        { icon: 'fas fa-heart',     label: 'Romantic'        },
        { icon: 'fas fa-users',     label: '2 Seats'         },
        { icon: 'fas fa-volume-mute', label: 'Quiet Corner'  },
        { icon: 'fas fa-lightbulb', label: 'Candle Lit'      },
      ],
    },
    table2: {
      id:       'table2',
      number:   'Table 2',
      title:    'Garden View Pair',
      subtitle: 'Ground Floor · Window Side',
      image:    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
      seats:    2,
      floor:    'GF',
      rating:   '★ 4.6',
      setting:  'Indoor',
      desc:     'A charming two-seater by the window overlooking our courtyard garden. Natural light floods the table during daytime visits while soft lamplight creates a cosy glow in the evening.',
      pills: [
        { icon: 'fas fa-eye',   label: 'Garden View'    },
        { icon: 'fas fa-users', label: '2 Seats'        },
        { icon: 'fas fa-leaf',  label: 'Garden Facing'  },
        { icon: 'fas fa-sun',   label: 'Natural Light'  },
      ],
    },
    table3: {
      id:       'table3',
      number:   'Table 3',
      title:    'Classic Centre Table',
      subtitle: 'Ground Floor · Main Hall',
      image:    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=80',
      seats:    4,
      floor:    'GF',
      rating:   '★ 4.5',
      setting:  'Indoor',
      desc:     'Positioned in the heart of our main dining hall, this four-seater is ideal for families or small groups wanting to soak up the full ambiance of the restaurant.',
      pills: [
        { icon: 'fas fa-users',      label: '4 Seats'     },
        { icon: 'fas fa-star',       label: 'Popular'     },
        { icon: 'fas fa-utensils',   label: 'Main Hall'   },
        { icon: 'fas fa-lightbulb',  label: 'Well Lit'    },
      ],
    },
    table4: {
      id:       'table4',
      number:   'Table 4',
      title:    'Fireside Four',
      subtitle: 'Ground Floor · Fireplace Area',
      image:    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80',
      seats:    4,
      floor:    'GF',
      rating:   '★ 4.8',
      setting:  'Indoor',
      desc:     'Situated beside our stone fireplace, this table radiates warmth in every sense. A favourite during cooler months, guests love the crackling ambiance and the rich, cosy atmosphere it creates.',
      pills: [
        { icon: 'fas fa-fire',       label: 'Fireplace'   },
        { icon: 'fas fa-users',      label: '4 Seats'     },
        { icon: 'fas fa-snowflake',  label: 'Cosy Winter' },
        { icon: 'fas fa-star',       label: 'Top Rated'   },
      ],
    },
    table5: {
      id:       'table5',
      number:   'Table 5',
      title:    'Signature Window Table',
      subtitle: 'Ground Floor · Panoramic View',
      image:    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
      seats:    4,
      floor:    'GF',
      rating:   '★ 4.9',
      setting:  'Indoor',
      desc:     'Positioned at the heart of our dining floor, Table 5 offers a sweeping panoramic view through floor-to-ceiling windows overlooking the garden courtyard. Upholstered in warm cognac leather with soft overhead pendant lighting, it creates an intimate yet airy atmosphere. Ideal for romantic evenings, business dinners, or small celebrations.',
      pills: [
        { icon: 'fas fa-eye',       label: 'Window View'      },
        { icon: 'fas fa-users',     label: '4 Seats'          },
        { icon: 'fas fa-leaf',      label: 'Garden Facing'    },
        { icon: 'fas fa-lightbulb', label: 'Ambient Lighting' },
      ],
    },
    table6: {
      id:       'table6',
      number:   'Table 6',
      title:    'Executive Round Table',
      subtitle: 'First Floor · Private Lounge',
      image:    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
      seats:    6,
      floor:    'F1',
      rating:   '★ 4.8',
      setting:  'Semi-Private',
      desc:     'A large round table in our upstairs private lounge, ideal for business dinners and group celebrations. The round format encourages great conversation while the lounge setting gives a sense of exclusivity.',
      pills: [
        { icon: 'fas fa-briefcase',  label: 'Business Ready' },
        { icon: 'fas fa-users',      label: '6 Seats'        },
        { icon: 'fas fa-lock',       label: 'Semi-Private'   },
        { icon: 'fas fa-circle',     label: 'Round Table'    },
      ],
    },
    table7: {
      id:       'table7',
      number:   'Table 7',
      title:    'Private Corner Alcove',
      subtitle: 'Mezzanine Level · Quiet Corner',
      image:    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
      seats:    6,
      floor:    'M1',
      rating:   '★ 4.8',
      setting:  'Alcove',
      desc:     'Tucked into a quiet alcove on our mezzanine level, Table 7 is our most requested table for couples and intimate groups seeking privacy. Framed by arched brickwork and soft wall-mounted sconces, the space radiates warmth and character. A curated wine shelf lines the adjacent wall, setting the scene for an unforgettable dining experience.',
      pills: [
        { icon: 'fas fa-lock',        label: 'Private Setting'   },
        { icon: 'fas fa-users',       label: '6 Seats'           },
        { icon: 'fas fa-wine-bottle', label: 'Wine Shelf Nearby' },
        { icon: 'fas fa-volume-mute', label: 'Quiet Zone'        },
      ],
    },
    table8: {
      id:       'table8',
      number:   'Table 8',
      title:    'Grand Banquet Table',
      subtitle: 'First Floor · Event Hall',
      image:    'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=900&q=80',
      seats:    8,
      floor:    'F1',
      rating:   '★ 4.9',
      setting:  'Event Hall',
      desc:     'Our most prestigious table, reserved for large celebrations and special events. Set in our first floor event hall with high ceilings, chandeliers and a dedicated service team, this table turns any occasion into an unforgettable memory.',
      pills: [
        { icon: 'fas fa-crown',      label: 'Premium'      },
        { icon: 'fas fa-users',      label: '8 Seats'      },
        { icon: 'fas fa-glass-cheers', label: 'Events'     },
        { icon: 'fas fa-star',       label: 'Top Rated'    },
      ],
    },
  };
  
  /* ==========================================
     Tracked selected table for booking form
  ========================================== */
  let selectedTableKey = null;
  
  /* ==========================================
     BOOK A TABLE BUTTON
     → Opens table browser so user can
       browse all tables with image & desc
       then pick one to reserve
  ========================================== */
  function openBookingBrowser() {
    renderTableBrowser();
    openModal('tableBrowserOverlay');
  }
  
  function renderTableBrowser() {
    const grid = document.getElementById('browserGrid');
    grid.innerHTML = Object.values(tableData).map(t => `
      <div class="browser-card" onclick="selectBrowserTable('${t.id}', this)">
        <div class="browser-card-img-wrap">
          <img src="${t.image}" alt="${t.title}" loading="lazy"/>
          <span class="browser-img-badge">${t.number}</span>
          <span class="browser-seat-badge"><i class="fas fa-users"></i> ${t.seats} seats</span>
        </div>
        <div class="browser-card-body">
          <div class="browser-card-title">${t.title}</div>
          <div class="browser-card-sub">${t.subtitle}</div>
          <p class="browser-card-desc">${t.desc}</p>
          <div class="browser-pills">
            ${t.pills.map(p => `<span class="pill"><i class="${p.icon}"></i>${p.label}</span>`).join('')}
          </div>
          <div class="browser-card-stats">
            <span><i class="fas fa-layer-group"></i> ${t.floor}</span>
            <span><i class="fas fa-map-marker-alt"></i> ${t.setting}</span>
            <span><i class="fas fa-star"></i> ${t.rating}</span>
          </div>
        </div>
        <div class="browser-card-footer">
          <button class="browser-reserve-btn" onclick="proceedToBookingForm('${t.id}', event)">
            <i class="fas fa-calendar-plus"></i> Reserve This Table
          </button>
        </div>
      </div>
    `).join('');
  }
  
  function selectBrowserTable(tableKey, cardEl) {
    document.querySelectorAll('.browser-card').forEach(c => c.classList.remove('browser-selected'));
    cardEl.classList.add('browser-selected');
    selectedTableKey = tableKey;
  }
  
  function proceedToBookingForm(tableKey, event) {
    event.stopPropagation();
    selectedTableKey = tableKey;
    const t = tableData[tableKey];
  
    // Pre-fill booking form with chosen table info
    document.getElementById('bookingTableLabel').textContent = `${t.number} — ${t.title}`;
    document.getElementById('bookingTableImg').src = t.image;
  
    // Set today as default date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookDate').value = today;
  
    closeModal('tableBrowserOverlay');
    openModal('bookingFormOverlay');
  }
  
  /* ==========================================
     BOOKING FORM MODAL
     (reached from table browser)
  ========================================== */
  function submitBooking() {
    closeModal('bookingFormOverlay');
    showToast("Reservation request sent! We'll confirm shortly.");
  }
  
  /* ==========================================
     VIEW TABLE DETAILS
     (on existing reservation cards)
     → Shows image + full description of
       the table the user already reserved
  ========================================== */
  function openTableDetail(tableKey) {
    const d = tableData[tableKey];
    if (!d) return;
  
    document.getElementById('modalImage').src            = d.image;
    document.getElementById('modalBadge').textContent    = d.number;
    document.getElementById('modalTitle').textContent    = d.title;
    document.getElementById('modalSubtitle').textContent = d.subtitle;
    document.getElementById('modalDesc').textContent     = d.desc;
  
    document.getElementById('modalPills').innerHTML = d.pills.map(p =>
      `<span class="pill"><i class="${p.icon}"></i>${p.label}</span>`
    ).join('');
  
    document.getElementById('modalStats').innerHTML = [
      { value: d.seats,   label: 'Seats'        },
      { value: d.floor,   label: 'Floor'        },
      { value: d.rating,  label: 'Guest Rating' },
      { value: d.setting, label: 'Setting'      },
    ].map(s =>
      `<div class="stat-item">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    ).join('');
  
    openModal('tableDetailOverlay');
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
      closeModal('tableBrowserOverlay');
      closeModal('bookingFormOverlay');
      closeModal('tableDetailOverlay');
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