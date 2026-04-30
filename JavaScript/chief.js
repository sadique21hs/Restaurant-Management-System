const storage = {
  read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return window.__chiefFallbackStore?.[key] ?? fallback;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      window.__chiefFallbackStore = window.__chiefFallbackStore || {};
      window.__chiefFallbackStore[key] = value;
    }
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function openModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  if (!modal) {
    return;
  }

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function wireModal(modal) {
  if (!modal) {
    return;
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.matches('[data-close-modal]')) {
      closeModal(modal);
    }
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function bindClockOut() {
  document.querySelectorAll('[data-clock-out]').forEach((button) => {
    button.addEventListener('click', () => {
      window.alert('Clock out is connected in the UI. Hook this button to your backend action when ready.');
    });
  });
}

function initRecipesPage() {
  const list = document.getElementById('recipeList');
  const addButton = document.getElementById('addRecipeBtn');
  const modal = document.getElementById('recipeModal');
  const form = document.getElementById('recipeForm');

  if (!list || !addButton || !modal || !form) {
    return;
  }

  const defaults = [
    {
      id: 1,
      name: 'Margherita Pizza',
      prepTime: '15 min',
      image: '../Images/food/pizza.png',
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Fresh basil'],
      note: 'Added 2/10/2026'
    },
    {
      id: 2,
      name: 'Chicken Platter',
      prepTime: '25 min',
      image: '../Images/food/chicken.jpg',
      ingredients: ['Grilled chicken', 'Rice', 'Salad', 'Sauce'],
      note: 'Kitchen favorite'
    },
    {
      id: 3,
      name: 'Dam Biriani',
      prepTime: '30 min',
      image: '../Images/food/Dam%20biriani.jpg',
      ingredients: ['Basmati rice', 'Spices', 'Beef', 'Yogurt'],
      note: 'Signature special'
    }
  ];

  let recipes = storage.read('chiefRecipes', defaults);

  function renderRecipes() {
    if (!recipes.length) {
      list.innerHTML = '<div class="empty-state grid-12">No recipes added yet. Use Add Recipe to create the first kitchen item.</div>';
      return;
    }

    list.innerHTML = recipes.map((recipe) => {
      const ingredients = recipe.ingredients.slice(0, 4).map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join('');
      return `
        <article class="card recipe-card">
          <img class="recipe-image" src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}">
          <div class="recipe-body">
            <div class="card-head">
              <div>
                <h3 class="card-title">${escapeHtml(recipe.name)}</h3>
                <p class="card-subtitle">${escapeHtml(recipe.note || 'Kitchen recipe')}</p>
              </div>
              <span class="pill">${escapeHtml(recipe.prepTime)}</span>
            </div>
            <div class="chip-group">${ingredients}</div>
          </div>
        </article>
      `;
    }).join('');
  }

  addButton.addEventListener('click', () => {
    form.reset();
    const preview = form.querySelector('[data-image-preview]');
    if (preview) {
      preview.src = '../Images/food/bowl.png';
    }
    openModal(modal);
  });

  wireModal(modal);

  const imageInput = form.querySelector('#recipeImageFile');
  const preview = form.querySelector('[data-image-preview]');

  if (imageInput && preview) {
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files && imageInput.files[0];
      if (!file) {
        preview.src = '../Images/food/bowl.png';
        return;
      }

      preview.src = await fileToDataUrl(file);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.querySelector('#recipeName').value.trim();
    const prepTime = form.querySelector('#recipeTime').value.trim();
    const ingredients = form.querySelector('#recipeIngredients').value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
    const note = form.querySelector('#recipeNote').value.trim();
    const file = imageInput?.files?.[0];
    const imageUrl = form.querySelector('#recipeImageUrl').value.trim();

    let image = imageUrl || '../Images/food/bowl.png';
    if (file) {
      image = await fileToDataUrl(file);
    }

    recipes = [
      {
        id: Date.now(),
        name,
        prepTime,
        ingredients,
        note: note || 'Added from chief dashboard',
        image
      },
      ...recipes
    ];

    storage.write('chiefRecipes', recipes);
    renderRecipes();
    closeModal(modal);
  });

  renderRecipes();
}

function initProfilePage() {
  const card = document.getElementById('profileCard');
  const modal = document.getElementById('profileModal');
  const form = document.getElementById('profileForm');
  const editButton = document.getElementById('editProfileBtn');

  if (!card || !modal || !form || !editButton) {
    return;
  }

  const defaults = {
    name: 'Richard Clark',
    role: 'Chief Chef',
    email: 'example@email.com',
    phone: '+1 555 123 4567',
    location: 'New York, NY',
    since: 'Member since Jan 2024',
    note: 'Member of the kitchen team',
    image: '../Images/profile.png'
  };

  let profile = storage.read('chiefProfile', defaults);

  function renderProfile() {
    card.querySelector('[data-profile-name]').textContent = profile.name;
    card.querySelector('[data-profile-role]').textContent = profile.role;
    card.querySelector('[data-profile-email]').textContent = profile.email;
    card.querySelector('[data-profile-phone]').textContent = profile.phone;
    card.querySelector('[data-profile-location]').textContent = profile.location;
    card.querySelector('[data-profile-since]').textContent = profile.since;
    card.querySelector('[data-profile-note]').textContent = profile.note;
    card.querySelector('[data-profile-image]').src = profile.image;

    form.querySelector('#profileName').value = profile.name;
    form.querySelector('#profileRole').value = profile.role;
    form.querySelector('#profileEmail').value = profile.email;
    form.querySelector('#profilePhone').value = profile.phone;
    form.querySelector('#profileLocation').value = profile.location;
    form.querySelector('#profileSince').value = profile.since;
    form.querySelector('#profileNote').value = profile.note;
    form.querySelector('#profileImageUrl').value = profile.image.startsWith('data:') ? '' : profile.image;

    const preview = form.querySelector('[data-profile-preview]');
    if (preview) {
      preview.src = profile.image;
    }
  }

  editButton.addEventListener('click', () => {
    renderProfile();
    openModal(modal);
  });

  wireModal(modal);

  const imageInput = form.querySelector('#profileImageFile');
  const preview = form.querySelector('[data-profile-preview]');

  if (imageInput && preview) {
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files && imageInput.files[0];
      if (!file) {
        preview.src = profile.image;
        return;
      }

      preview.src = await fileToDataUrl(file);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = imageInput?.files?.[0];
    const imageUrl = form.querySelector('#profileImageUrl').value.trim();

    let image = imageUrl || profile.image || '../Images/profile.png';
    if (file) {
      image = await fileToDataUrl(file);
    }

    profile = {
      name: form.querySelector('#profileName').value.trim(),
      role: form.querySelector('#profileRole').value.trim(),
      email: form.querySelector('#profileEmail').value.trim(),
      phone: form.querySelector('#profilePhone').value.trim(),
      location: form.querySelector('#profileLocation').value.trim(),
      since: form.querySelector('#profileSince').value.trim(),
      note: form.querySelector('#profileNote').value.trim(),
      image
    };

    storage.write('chiefProfile', profile);
    renderProfile();
    closeModal(modal);
  });

  renderProfile();
}

document.addEventListener('DOMContentLoaded', () => {
  bindClockOut();
  initRecipesPage();
  initProfilePage();
});