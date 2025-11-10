// Application state
const appState = {
    selectedTemplate: null,
    personalInfo: {
        fullName: '',
        professionalTitle: '',
        bio: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        twitter: '',
        instagram: '',
        profileImage: '',
        aboutContent: 'Tell your story here. Share your background, experience, and what drives you. Make it personal and engaging.'
    },
    sections: [
        { name: 'Hero', description: 'Eye-catching introduction section', enabled: true, order: 0 },
        { name: 'Portfolio', description: 'Showcase your work and projects', enabled: true, order: 1 },
        { name: 'About', description: 'Tell your story', enabled: true, order: 2 },
        { name: 'Services', description: 'Describe what you offer', enabled: false, order: 3 },
        { name: 'Testimonials', description: 'Social proof from clients', enabled: false, order: 4 },
        { name: 'Skills', description: 'Highlight your expertise', enabled: false, order: 5 },
        { name: 'Contact', description: 'Get in touch form', enabled: true, order: 6 },
        { name: 'Social Links', description: 'Connect on social media', enabled: false, order: 7 },
        { name: 'Blog', description: 'Share your thoughts', enabled: false, order: 8 },
        { name: 'Team', description: 'Introduce your team', enabled: false, order: 9 }
    ],
    projects: [],
    skills: [],
    design: {
        colorScheme: 'Dark Professional',
        primaryColor: '#1a1a1a',
        secondaryColor: '#ffffff',
        accentColor: '#0066cc',
        headingFont: 'Poppins',
        bodyFont: 'Inter',
        headingSize: 'medium',
        bodySize: 'medium',
        containerWidth: 'standard',
        animationSpeed: 'medium'
    },
    favorites: [],
    exportFormat: 'html'
};

// Template data
const templates = [
    {
        id: 'tech_developer',
        name: 'Tech Developer',
        category: 'Tech/Developer',
        description: 'Minimalist code-inspired design with dark mode',
        colorSchemes: [
            { name: 'Tech Noir', primary: '#1a1a1a', secondary: '#00d9ff', accent: '#ff006e' },
            { name: 'Hacker Green', primary: '#0a0e27', secondary: '#00ff41', accent: '#00d4ff' },
            { name: 'Purple Coder', primary: '#1a0033', secondary: '#9d4edd', accent: '#00d9ff' }
        ]
    },
    {
        id: 'creative_pro',
        name: 'Creative Professional',
        category: 'Creative Professional',
        description: 'Gallery-heavy with large image showcases',
        colorSchemes: [
            { name: 'Creative Burst', primary: '#f5f5f5', secondary: '#ff6b6b', accent: '#4ecdc4' },
            { name: 'Warm Palette', primary: '#fff8f3', secondary: '#ff8c42', accent: '#2d6a4f' },
            { name: 'Midnight Creative', primary: '#1a1a2e', secondary: '#e94560', accent: '#16c784' }
        ]
    },
    {
        id: 'business_pro',
        name: 'Business Professional',
        category: 'Business Professional',
        description: 'Structured corporate layout',
        colorSchemes: [
            { name: 'Corporate Blue', primary: '#ffffff', secondary: '#003d99', accent: '#ffa500' },
            { name: 'Executive Gray', primary: '#f9f9f9', secondary: '#333333', accent: '#0066cc' },
            { name: 'Modern Corporate', primary: '#fafafa', secondary: '#1e3a5f', accent: '#00a3ff' }
        ]
    },
    {
        id: 'freelancer',
        name: 'Freelancer',
        category: 'Freelancer',
        description: 'Testimonials, rates, case studies',
        colorSchemes: [
            { name: 'Freelance Vibrant', primary: '#ffffff', secondary: '#667eea', accent: '#764ba2' },
            { name: 'Freelance Warm', primary: '#fffbf0', secondary: '#f97316', accent: '#dc2626' },
            { name: 'Freelance Cool', primary: '#f0f9ff', secondary: '#0ea5e9', accent: '#06b6d4' }
        ]
    },
    {
        id: 'designer',
        name: 'Designer',
        category: 'Designer',
        description: 'Visual-first with bold typography',
        colorSchemes: [
            { name: 'Designer Bold', primary: '#000000', secondary: '#00ffff', accent: '#ff00ff' },
            { name: 'Designer Soft', primary: '#f5f1e8', secondary: '#d4a574', accent: '#7c3aed' },
            { name: 'Designer Electric', primary: '#0f172a', secondary: '#fbbf24', accent: '#ec4899' }
        ]
    },
    {
        id: 'content_creator',
        name: 'Content Creator',
        category: 'Content Creator',
        description: 'Video and media integrated',
        colorSchemes: [
            { name: 'Creator Vibrant', primary: '#ffffff', secondary: '#ff0000', accent: '#1db954' },
            { name: 'Creator Dark', primary: '#121212', secondary: '#1ed760', accent: '#1db954' },
            { name: 'Creator Sunset', primary: '#fff5f7', secondary: '#ff1744', accent: '#ff9100' }
        ]
    },
    {
        id: 'startup_founder',
        name: 'Startup/Founder',
        category: 'Startup/Founder',
        description: 'Investor-ready pitch',
        colorSchemes: [
            { name: 'Startup Bold', primary: '#ffffff', secondary: '#000000', accent: '#ff6b00' },
            { name: 'Startup Gradient', primary: '#f8f9fa', secondary: '#667eea', accent: '#764ba2' },
            { name: 'Startup Tech', primary: '#0f172a', secondary: '#3b82f6', accent: '#10b981' }
        ]
    },
    {
        id: 'service_based',
        name: 'Service-Based',
        category: 'Service-Based',
        description: 'Before/after showcases',
        colorSchemes: [
            { name: 'Service Pro', primary: '#ffffff', secondary: '#2c5aa0', accent: '#ff9800' },
            { name: 'Service Warm', primary: '#fff9e6', secondary: '#d97706', accent: '#059669' },
            { name: 'Service Modern', primary: '#f1f5f9', secondary: '#475569', accent: '#8b5cf6' }
        ]
    },
    {
        id: 'photography',
        name: 'Photography',
        category: 'Photography',
        description: 'Full-screen galleries',
        colorSchemes: [
            { name: 'Photo Classic', primary: '#000000', secondary: '#ffffff', accent: '#cccccc' },
            { name: 'Photo Warm', primary: '#1a1a1a', secondary: '#d4a574', accent: '#ffffff' },
            { name: 'Photo Colorful', primary: '#ffffff', secondary: '#333333', accent: '#ff6b6b' }
        ]
    },
    {
        id: 'artistic',
        name: 'Artistic',
        category: 'Artistic',
        description: 'Unconventional layouts',
        colorSchemes: [
            { name: 'Artistic Bold', primary: '#1a1a1a', secondary: '#ff006e', accent: '#00d9ff' },
            { name: 'Artistic Pastel', primary: '#fffaed', secondary: '#fda29b', accent: '#86efac' },
            { name: 'Artistic Dark', primary: '#0f0f1e', secondary: '#a78bfa', accent: '#f472b6' }
        ]
    }
];

const colorSchemes = [
    { name: 'Dark Professional', primary: '#1a1a1a', secondary: '#ffffff', accent: '#0066cc' },
    { name: 'Light Minimal', primary: '#ffffff', secondary: '#333333', accent: '#6366f1' },
    { name: 'Vibrant Energy', primary: '#f5f5f5', secondary: '#ff006e', accent: '#00d9ff' },
    { name: 'Sunset Gradient', primary: '#fff8f3', secondary: '#ff8c42', accent: '#2d6a4f' },
    { name: 'Ocean Deep', primary: '#0a1128', secondary: '#00d4ff', accent: '#ff006e' },
    { name: 'Forest Calm', primary: '#f0fdf4', secondary: '#16a34a', accent: '#7c3aed' },
    { name: 'Tech Noir', primary: '#1a1a1a', secondary: '#00ff41', accent: '#00d4ff' },
    { name: 'Creative Burst', primary: '#f5f5f5', secondary: '#ff6b6b', accent: '#4ecdc4' }
];

// Initialize app
function init() {
    renderTemplates();
    renderSections();
    renderColorSchemes();
    initProfileUpload();
    attachFormListeners();
    updatePreview();
}

// Attach event listeners to form inputs for live preview
function attachFormListeners() {
    const inputs = ['fullName', 'professionalTitle', 'bio', 'email', 'phone', 'location'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                updatePreviewData();
                updatePreview();
            });
        }
    });
}

// Profile image upload functionality
function initProfileUpload() {
    const profilePreview = document.getElementById('profilePreview');
    const uploadButton = document.getElementById('uploadButton');
    const profileUploadArea = document.getElementById('profileUploadArea');
    
    if (!profilePreview || !uploadButton || !profileUploadArea) return;
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });
    
    uploadButton.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });
    
    profilePreview.addEventListener('click', () => {
        fileInput.click();
    });
    
    profileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        profileUploadArea.style.borderColor = '#0066cc';
        profileUploadArea.style.backgroundColor = 'rgba(0, 102, 204, 0.05)';
    });
    
    profileUploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        profileUploadArea.style.borderColor = '';
        profileUploadArea.style.backgroundColor = '';
    });
    
    profileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        profileUploadArea.style.borderColor = '';
        profileUploadArea.style.backgroundColor = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        } else {
            alert('Please upload an image file');
        }
    });
}

// Handle image upload
function handleImageUpload(file) {
    const reader = new FileReader();
    const profilePreview = document.getElementById('profilePreview');
    
    reader.onload = (e) => {
        const imageData = e.target.result;
        
        profilePreview.style.backgroundImage = `url(${imageData})`;
        profilePreview.style.backgroundSize = 'cover';
        profilePreview.style.backgroundPosition = 'center';
        profilePreview.textContent = '';
        profilePreview.style.fontSize = '0';
        
        appState.personalInfo.profileImage = imageData;
        updatePreview();
    };
    
    reader.readAsDataURL(file);
}

// Navigation functions
function startApp() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('mainApp').classList.add('active');
}

function backToLanding() {
    document.getElementById('landingPage').classList.remove('hidden');
    document.getElementById('mainApp').classList.remove('active');
}

function scrollToExamples() {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    const tabBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
    if (tabBtn) tabBtn.classList.add('active');
    
    const tabContent = document.getElementById(tabName + 'Tab');
    if (tabContent) tabContent.classList.add('active');

    if (tabName === 'preview') {
        updatePreview();
    }
}

// Template functions
function renderTemplates() {
    const grid = document.getElementById('templatesGrid');
    if (!grid) return;
    
    grid.innerHTML = templates.map(template => `
        <div class="template-card" data-category="${template.category}">
            <div class="template-preview" style="background: linear-gradient(135deg, ${template.colorSchemes[0].secondary} 0%, ${template.colorSchemes[0].accent} 100%);">
                ${getTemplateIcon(template.category)}
            </div>
            <div class="template-card-body">
                <div class="template-header">
                    <div>
                        <h3>${template.name}</h3>
                        <span class="template-badge">${template.category}</span>
                    </div>
                    <button class="favorite-btn ${appState.favorites.includes(template.id) ? 'active' : ''}" onclick="toggleFavorite('${template.id}', event)">
                        ${appState.favorites.includes(template.id) ? '⭐' : '☆'}
                    </button>
                </div>
                <p class="template-description">${template.description}</p>
                <div class="color-scheme-preview">
                    ${template.colorSchemes.map(scheme => `
                        <div class="color-dot" style="background: ${scheme.primary}; border-color: ${scheme.secondary};"></div>
                    `).join('')}
                </div>
                <div class="template-actions">
                    <button class="btn-small btn-outline" onclick="previewTemplate('${template.id}')">Preview</button>
                    <button class="btn-small btn-primary-small" onclick="selectTemplate('${template.id}')">Use Template</button>
                </div>
            </div>
        </div>
    `).join('');
}

function getTemplateIcon(category) {
    const icons = {
        'Tech/Developer': '💻',
        'Creative Professional': '🎨',
        'Business Professional': '💼',
        'Freelancer': '🚀',
        'Designer': '✨',
        'Content Creator': '🎬',
        'Startup/Founder': '🔥',
        'Service-Based': '⚙️',
        'Photography': '📸',
        'Artistic': '🎭'
    };
    return icons[category] || '📄';
}

function filterTemplates() {
    const filterSelect = document.getElementById('categoryFilter');
    if (!filterSelect) return;
    
    const category = filterSelect.value;
    const cards = document.querySelectorAll('.template-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function toggleFavorite(templateId, event) {
    event.stopPropagation();
    const index = appState.favorites.indexOf(templateId);
    if (index > -1) {
        appState.favorites.splice(index, 1);
    } else {
        appState.favorites.push(templateId);
    }
    renderTemplates();
}

function previewTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    alert(`Preview: ${template.name}\n${template.description}\n\nThis would show a full preview of the template.`);
}

function selectTemplate(templateId) {
    appState.selectedTemplate = templateId;
    const template = templates.find(t => t.id === templateId);
    
    if (template.colorSchemes.length > 0) {
        const scheme = template.colorSchemes[0];
        appState.design.primaryColor = scheme.primary;
        appState.design.secondaryColor = scheme.secondary;
        appState.design.accentColor = scheme.accent;
    }
    
    alert(`Template "${template.name}" selected! Proceed to Personal Info to continue.`);
    switchTab('personalInfo');
}

// Personal Info functions
function updatePreviewData() {
    const fullNameEl = document.getElementById('fullName');
    const titleEl = document.getElementById('professionalTitle');
    const bioEl = document.getElementById('bio');
    const emailEl = document.getElementById('email');
    
    if (fullNameEl) appState.personalInfo.fullName = fullNameEl.value;
    if (titleEl) appState.personalInfo.professionalTitle = titleEl.value;
    if (bioEl) appState.personalInfo.bio = bioEl.value;
    if (emailEl) appState.personalInfo.email = emailEl.value;
}

// About section functions
function getAboutContent() {
    return appState.personalInfo.aboutContent || '';
}

function setAboutContent(content) {
    appState.personalInfo.aboutContent = content;
    updatePreview();
}

function editAboutSection() {
    const currentContent = getAboutContent();
    const textarea = document.getElementById('aboutTextarea');
    
    if (!textarea) return;
    
    textarea.value = currentContent;
}

// Sections functions
function renderSections() {
    const list = document.getElementById('sectionsList');
    if (!list) return;
    
    list.innerHTML = appState.sections.map((section, index) => `
        <div class="section-item" draggable="true" data-index="${index}" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; flex: 1;">
                <span class="drag-handle" style="margin-right: 12px; cursor: move; font-size: 18px;">☰</span>
                <div class="section-info">
                    <h3 style="margin: 0 0 4px 0;">${section.name}</h3>
                    <p style="margin: 0; color: #666; font-size: 14px;">${section.description}</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
                ${section.name === 'About' ? `<button class="btn btn-outline" onclick="showEditAbout()" style="padding: 6px 12px; font-size: 12px;">Edit</button>` : ''}
                <label class="toggle-switch">
                    <input type="checkbox" class="toggle-input" ${section.enabled ? 'checked' : ''} onchange="toggleSection(${index})">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>
    `).join('');
}

function showEditAbout() {
    const modal = document.createElement('div');
    modal.id = 'aboutModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 32px; border-radius: 12px; width: 90%; max-width: 600px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
            <h2 style="margin: 0 0 16px 0;">Edit About Section</h2>
            <textarea id="aboutTextarea" style="width: 100%; height: 200px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-family: inherit; font-size: 14px; resize: vertical;">${appState.personalInfo.aboutContent}</textarea>
            <div style="display: flex; gap: 12px; margin-top: 20px;">
                <button onclick="saveAbout()" style="flex: 1; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Save</button>
                <button onclick="closeAboutModal()" style="flex: 1; padding: 12px; background: #f0f0f0; color: #333; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function saveAbout() {
    const textarea = document.getElementById('aboutTextarea');
    if (textarea) {
        appState.personalInfo.aboutContent = textarea.value;
        closeAboutModal();
        updatePreview();
    }
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.remove();
    }
}

function toggleSection(index) {
    appState.sections[index].enabled = !appState.sections[index].enabled;
    updatePreview();
}

function addCustomSection() {
    const name = prompt('Enter section name:');
    if (name) {
        appState.sections.push({
            name: name,
            description: 'Custom section',
            enabled: true,
            order: appState.sections.length
        });
        renderSections();
        updatePreview();
    }
}

// Projects functions
function openProjectModal() {
    const projectName = prompt('Enter project name:');
    if (!projectName) return;
    
    const projectDesc = prompt('Enter project description:');
    const githubLink = prompt('Enter GitHub link (optional):');
    
    const newProject = {
        id: Date.now(),
        name: projectName,
        description: projectDesc || 'Project description',
        github: githubLink || '',
        image: ''
    };
    
    appState.projects.push(newProject);
    renderProjects();
    updatePreview();
}

function renderProjects() {
    const list = document.getElementById('projectsList');
    if (!list) return;
    
    list.innerHTML = appState.projects.map((project, index) => `
        <div class="project-item" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <div style="margin-bottom: 16px;">
                <div style="display: flex; gap: 16px; margin-bottom: 16px;">
                    <div style="width: 150px; height: 150px; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
                        ${project.image ? `<img src="${project.image}" style="width: 100%; height: 100%; object-fit: cover;">` : `<div style="text-align: center; color: #999;">
                            <div style="font-size: 40px; margin-bottom: 8px;">📸</div>
                            <button class="btn btn-outline" onclick="addProjectImage(${index})" style="padding: 8px 12px; font-size: 12px;">Upload</button>
                        </div>`}
                    </div>
                    <div style="flex: 1;">
                        <h3 style="margin-bottom: 8px;">${project.name}</h3>
                        <p style="margin-bottom: 12px; color: #666;">${project.description}</p>
                        ${project.github ? `<a href="${project.github}" target="_blank" style="color: #0066cc; text-decoration: none; margin-right: 16px;">🔗 GitHub Link</a>` : '<span style="color: #999;">No GitHub link</span>'}
                    </div>
                </div>
                ${project.image ? `<button class="btn btn-outline" onclick="removeProjectImage(${index})" style="padding: 6px 12px; font-size: 12px; margin-bottom: 12px;">Change Image</button>` : ''}
            </div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-outline" onclick="editProject(${index})" style="padding: 8px 16px; font-size: 14px;">Edit</button>
                <button class="btn btn-outline" onclick="deleteProject(${index})" style="padding: 8px 16px; font-size: 14px; background: #ff4444; color: white;">Delete</button>
            </div>
        </div>
    `).join('');
}

function editProject(index) {
    const project = appState.projects[index];
    const newName = prompt('Enter project name:', project.name);
    if (!newName) return;
    
    const newDesc = prompt('Enter project description:', project.description);
    const newGithub = prompt('Enter GitHub link (optional):', project.github);
    
    appState.projects[index].name = newName;
    appState.projects[index].description = newDesc;
    appState.projects[index].github = newGithub;
    
    renderProjects();
    updatePreview();
}

function addProjectImage(index) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                appState.projects[index].image = event.target.result;
                renderProjects();
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });
    
    fileInput.click();
}

function removeProjectImage(index) {
    if (confirm('Remove this project image?')) {
        appState.projects[index].image = '';
        renderProjects();
        updatePreview();
    }
}

function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        appState.projects.splice(index, 1);
        renderProjects();
        updatePreview();
    }
}

// Skills functions
function addSkill() {
    const skillNameEl = document.getElementById('skillName');
    const skillLevelEl = document.getElementById('skillLevel');
    
    if (skillNameEl && skillLevelEl && skillNameEl.value) {
        appState.skills.push({
            id: Date.now(),
            name: skillNameEl.value,
            level: parseInt(skillLevelEl.value) || 50
        });
        skillNameEl.value = '';
        skillLevelEl.value = '';
        renderSkills();
        updatePreview();
    }
}

function renderSkills() {
    const list = document.getElementById('skillsList');
    if (!list) return;
    
    list.innerHTML = appState.skills.map((skill, index) => `
        <div class="skill-item">
            <div class="skill-header">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%; background: ${appState.design.accentColor};"></div>
            </div>
            <button class="btn btn-outline" onclick="deleteSkill(${index})">Remove</button>
        </div>
    `).join('');
}

function deleteSkill(index) {
    appState.skills.splice(index, 1);
    renderSkills();
    updatePreview();
}

// Design functions
function renderColorSchemes() {
    const grid = document.getElementById('colorSchemesGrid');
    if (!grid) return;
    
    grid.innerHTML = colorSchemes.map(scheme => `
        <div class="color-scheme-card ${appState.design.colorScheme === scheme.name ? 'active' : ''}" onclick="selectColorScheme('${scheme.name}', '${scheme.primary}', '${scheme.secondary}', '${scheme.accent}')">
            <div class="color-scheme-colors">
                <div class="color-scheme-dot" style="background: ${scheme.primary};"></div>
                <div class="color-scheme-dot" style="background: ${scheme.secondary};"></div>
                <div class="color-scheme-dot" style="background: ${scheme.accent};"></div>
            </div>
            <div class="color-scheme-name">${scheme.name}</div>
        </div>
    `).join('');
}

function selectColorScheme(name, primary, secondary, accent) {
    appState.design.colorScheme = name;
    appState.design.primaryColor = primary;
    appState.design.secondaryColor = secondary;
    appState.design.accentColor = accent;
    
    const primaryInput = document.getElementById('primaryColor');
    const secondaryInput = document.getElementById('secondaryColor');
    const accentInput = document.getElementById('accentColor');
    
    if (primaryInput) primaryInput.value = primary;
    if (secondaryInput) secondaryInput.value = secondary;
    if (accentInput) accentInput.value = accent;
    
    renderColorSchemes();
    updatePreview();
}

function updateCustomColors() {
    const primaryInput = document.getElementById('primaryColor');
    const secondaryInput = document.getElementById('secondaryColor');
    const accentInput = document.getElementById('accentColor');
    
    if (primaryInput) appState.design.primaryColor = primaryInput.value;
    if (secondaryInput) appState.design.secondaryColor = secondaryInput.value;
    if (accentInput) appState.design.accentColor = accentInput.value;
    
    updatePreview();
}

function updateFonts() {
    const headingFontEl = document.getElementById('headingFont');
    const bodyFontEl = document.getElementById('bodyFont');
    
    if (headingFontEl) appState.design.headingFont = headingFontEl.value;
    if (bodyFontEl) appState.design.bodyFont = bodyFontEl.value;
    
    updatePreview();
}

function setHeadingSize(size) {
    appState.design.headingSize = size;
    updateSizeButtonState(event);
    updatePreview();
}

function setBodySize(size) {
    appState.design.bodySize = size;
    updateSizeButtonState(event);
    updatePreview();
}

function setContainerWidth(width) {
    appState.design.containerWidth = width;
    updateSizeButtonState(event);
    updatePreview();
}

function setAnimationSpeed(speed) {
    appState.design.animationSpeed = speed;
    updateSizeButtonState(event);
}

function updateSizeButtonState(event) {
    const parent = event.target.parentElement;
    parent.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Preview functions
function updatePreview() {
    const frame = document.getElementById('previewFrame');
    if (!frame) return;
    
    const enabledSections = appState.sections.filter(s => s.enabled);
    
    const previewHTML = `
        <div style="font-family: ${appState.design.bodyFont}, sans-serif; background: ${appState.design.primaryColor}; color: ${appState.design.secondaryColor}; min-height: 100vh; padding: 0;">
            ${enabledSections.map(section => {
                if (section.name === 'Hero') {
                    return `
                        <div style="padding: 80px 20px; text-align: center; background: linear-gradient(135deg, ${appState.design.secondaryColor}22 0%, ${appState.design.accentColor}22 100%);">
                            ${appState.personalInfo.profileImage ? `
                                <div style="width: 150px; height: 150px; border-radius: 50%; background-image: url('${appState.personalInfo.profileImage}'); background-size: cover; background-position: center; margin: 0 auto 24px; border: 4px solid ${appState.design.accentColor}; display: inline-block;"></div>
                            ` : ''}
                            <h1 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '56px' : appState.design.headingSize === 'small' ? '36px' : '48px'}; margin-bottom: 16px;">
                                ${appState.personalInfo.fullName || 'Your Name'}
                            </h1>
                            <p style="font-size: ${appState.design.bodySize === 'large' ? '24px' : appState.design.bodySize === 'small' ? '16px' : '20px'}; margin-bottom: 24px; color: ${appState.design.accentColor};">
                                ${appState.personalInfo.professionalTitle || 'Your Professional Title'}
                            </p>
                            <p style="max-width: 600px; margin: 0 auto; font-size: ${appState.design.bodySize === 'large' ? '18px' : appState.design.bodySize === 'small' ? '14px' : '16px'}; opacity: 0.8;">
                                ${appState.personalInfo.bio || 'Your bio and tagline will appear here. Share your unique value proposition and what makes you stand out.'}
                            </p>
                        </div>
                    `;
                } else if (section.name === 'Portfolio') {
                    return `
                        <div style="padding: 60px 20px; max-width: ${appState.design.containerWidth === 'wide' ? '1400px' : appState.design.containerWidth === 'narrow' ? '800px' : '1200px'}; margin: 0 auto;">
                            <h2 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '42px' : appState.design.headingSize === 'small' ? '28px' : '36px'}; margin-bottom: 32px; text-align: center;">
                                Portfolio
                            </h2>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
                                ${appState.projects.length > 0 ? appState.projects.map(p => `
                                    <div style="background: ${appState.design.secondaryColor}11; border-radius: 12px; overflow: hidden; border: 1px solid ${appState.design.accentColor}33; transition: transform 0.3s;">
                                        ${p.image ? `<img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover;">` : `<div style="height: 180px; background: linear-gradient(135deg, ${appState.design.accentColor} 0%, ${appState.design.secondaryColor}66 100%);"></div>`}
                                        <div style="padding: 20px;">
                                            <h3 style="margin-bottom: 8px; font-size: ${appState.design.bodySize === 'large' ? '20px' : appState.design.bodySize === 'small' ? '16px' : '18px'};">${p.name}</h3>
                                            <p style="opacity: 0.7; font-size: ${appState.design.bodySize === 'large' ? '16px' : appState.design.bodySize === 'small' ? '13px' : '14px'}; margin-bottom: 12px;">${p.description}</p>
                                            ${p.github ? `<a href="${p.github}" target="_blank" style="display: inline-block; color: ${appState.design.accentColor}; text-decoration: none; font-weight: 500; transition: opacity 0.3s;">View on GitHub →</a>` : ''}
                                        </div>
                                    </div>
                                `).join('') : `
                                    ${[1, 2, 3, 4].map(i => `
                                        <div style="background: ${appState.design.secondaryColor}11; border-radius: 12px; padding: 20px; border: 1px solid ${appState.design.accentColor}33;">
                                            <div style="height: 180px; background: linear-gradient(135deg, ${appState.design.accentColor} 0%, ${appState.design.secondaryColor}66 100%); border-radius: 8px; margin-bottom: 16px;"></div>
                                            <h3 style="margin-bottom: 8px; font-size: ${appState.design.bodySize === 'large' ? '20px' : appState.design.bodySize === 'small' ? '16px' : '18px'};">Project ${i}</h3>
                                            <p style="opacity: 0.7; font-size: ${appState.design.bodySize === 'large' ? '16px' : appState.design.bodySize === 'small' ? '13px' : '14px'};">Project description goes here</p>
                                        </div>
                                    `).join('')}
                                `}
                            </div>
                        </div>
                    `;
                } else if (section.name === 'About') {
                    return `
                        <div style="padding: 60px 20px; background: ${appState.design.accentColor}11;">
                            <div style="max-width: ${appState.design.containerWidth === 'wide' ? '1400px' : appState.design.containerWidth === 'narrow' ? '800px' : '1200px'}; margin: 0 auto;">
                                <h2 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '42px' : appState.design.headingSize === 'small' ? '28px' : '36px'}; margin-bottom: 24px; text-align: center;">
                                    About Me
                                </h2>
                                <p style="max-width: 700px; margin: 0 auto; font-size: ${appState.design.bodySize === 'large' ? '18px' : appState.design.bodySize === 'small' ? '14px' : '16px'}; line-height: 1.8; opacity: 0.8; text-align: center; white-space: pre-wrap;">
                                    ${appState.personalInfo.aboutContent || 'Tell your story here. Share your background, experience, and what drives you. Make it personal and engaging.'}
                                </p>
                            </div>
                        </div>
                    `;
                } else if (section.name === 'Skills') {
                    return `
                        <div style="padding: 60px 20px;">
                            <div style="max-width: ${appState.design.containerWidth === 'wide' ? '1400px' : appState.design.containerWidth === 'narrow' ? '800px' : '1200px'}; margin: 0 auto;">
                                <h2 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '42px' : appState.design.headingSize === 'small' ? '28px' : '36px'}; margin-bottom: 32px; text-align: center;">
                                    Skills
                                </h2>
                                ${appState.skills.length > 0 ? `
                                    <div style="max-width: 600px; margin: 0 auto;">
                                        ${appState.skills.map(skill => `
                                            <div style="margin-bottom: 24px;">
                                                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                                    <span>${skill.name}</span>
                                                    <span>${skill.level}%</span>
                                                </div>
                                                <div style="height: 8px; background: ${appState.design.secondaryColor}22; border-radius: 4px; overflow: hidden;">
                                                    <div style="height: 100%; width: ${skill.level}%; background: ${appState.design.accentColor};"></div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : '<p style="text-align: center; opacity: 0.6;">Add skills in the Skills tab</p>'}
                            </div>
                        </div>
                    `;
                } else if (section.name === 'Contact') {
                    return `
                        <div style="padding: 60px 20px; background: ${appState.design.accentColor}11;">
                            <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                                <h2 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '42px' : appState.design.headingSize === 'small' ? '28px' : '36px'}; margin-bottom: 24px;">
                                    Get In Touch
                                </h2>
                                <p style="margin-bottom: 32px; opacity: 0.8; font-size: 16px;">${appState.personalInfo.email || 'your@email.com'}</p>
                                <button style="padding: 16px 32px; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; border: none; border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    `;
                } else if (section.name === 'Social Links') {
                    return `
                        <div style="padding: 60px 20px; text-align: center;">
                            <h2 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '42px' : appState.design.headingSize === 'small' ? '28px' : '36px'}; margin-bottom: 32px;">
                                Connect With Me
                            </h2>
                            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                                ${appState.personalInfo.linkedin ? `<a href="${appState.personalInfo.linkedin}" style="display: inline-block; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; text-decoration: none; font-weight: bold;">in</a>` : ''}
                                ${appState.personalInfo.github ? `<a href="${appState.personalInfo.github}" style="display: inline-block; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; text-decoration: none; font-weight: bold;">gh</a>` : ''}
                                ${appState.personalInfo.twitter ? `<a href="${appState.personalInfo.twitter}" style="display: inline-block; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; text-decoration: none; font-weight: bold;">tw</a>` : ''}
                                ${appState.personalInfo.instagram ? `<a href="${appState.personalInfo.instagram}" style="display: inline-block; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; text-decoration: none; font-weight: bold;">ig</a>` : ''}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div style="padding: 40px 20px; text-align: center; border-top: 1px solid ${appState.design.secondaryColor}22;">
                            <h3 style="font-family: ${appState.design.headingFont}, sans-serif; font-size: ${appState.design.headingSize === 'large' ? '32px' : appState.design.headingSize === 'small' ? '20px' : '24px'};">
                                ${section.name}
                            </h3>
                            <p style="opacity: 0.7; margin-top: 8px;">${section.description}</p>
                        </div>
                    `;
                }
            }).join('')}
        </div>
    `;
    
    frame.innerHTML = previewHTML;
}

function setPreviewDevice(device) {
    const frame = document.getElementById('previewFrame');
    if (!frame) return;
    
    frame.className = `preview-frame ${device}`;
    
    document.querySelectorAll('.device-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function setZoom(zoom) {
    const frame = document.getElementById('previewFrame');
    if (!frame) return;
    
    frame.style.transform = `scale(${zoom / 100})`;
    frame.style.transformOrigin = 'top center';
    
    document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Export functions
function selectExportFormat(format) {
    appState.exportFormat = format;
    document.querySelectorAll('.export-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.export-card').classList.add('selected');
}

function exportPortfolio() {
    const enabledSections = appState.sections.filter(s => s.enabled);
    
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appState.personalInfo.fullName || 'My Portfolio'}</title>
    <link href="https://fonts.googleapis.com/css2?family=${appState.design.headingFont.replace(' ', '+')}:wght@400;600;700&family=${appState.design.bodyFont.replace(' ', '+')}:wght@400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: '${appState.design.bodyFont}', sans-serif;
            background: ${appState.design.primaryColor};
            color: ${appState.design.secondaryColor};
            line-height: 1.6;
        }
        .section { padding: 80px 20px; }
        .container { max-width: ${appState.design.containerWidth === 'wide' ? '1400px' : appState.design.containerWidth === 'narrow' ? '800px' : '1200px'}; margin: 0 auto; }
        h1, h2, h3 { font-family: '${appState.design.headingFont}', sans-serif; }
        .hero { text-align: center; background: linear-gradient(135deg, ${appState.design.secondaryColor}22 0%, ${appState.design.accentColor}22 100%); }
        .profile-img { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 24px; border: 4px solid ${appState.design.accentColor}; object-fit: cover; }
        .btn { padding: 16px 32px; background: ${appState.design.accentColor}; color: ${appState.design.primaryColor}; border: none; border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
        .btn:hover { transform: translateY(-2px); opacity: 0.9; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 24px; }
        .skill-bar { height: 8px; background: ${appState.design.secondaryColor}22; border-radius: 4px; margin-top: 8px; overflow: hidden; }
        .skill-progress { height: 100%; background: ${appState.design.accentColor}; }
    </style>
</head>
<body>
${enabledSections.map(section => {
    if (section.name === 'Hero') {
        return `    <section class="section hero">
        <div class="container">
            ${appState.personalInfo.profileImage ? `<img src="${appState.personalInfo.profileImage}" alt="Profile" class="profile-img">` : ''}
            <h1>${appState.personalInfo.fullName || 'Your Name'}</h1>
            <p style="font-size: 24px; color: ${appState.design.accentColor}; margin: 16px 0;">${appState.personalInfo.professionalTitle || 'Professional Title'}</p>
            <p style="max-width: 700px; margin: 0 auto; opacity: 0.8;">${appState.personalInfo.bio || 'Your bio goes here'}</p>
        </div>
    </section>`;
    }
    if (section.name === 'Portfolio') {
        return `    <section class="section">
        <div class="container">
            <h2>Portfolio</h2>
            <div class="skills-grid">
                ${appState.projects.map(p => `<div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                    ${p.image ? `<img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover;">` : ''}
                    <div style="padding: 16px;">
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                        ${p.github ? `<a href="${p.github}" target="_blank" style="color: ${appState.design.accentColor}; text-decoration: none;">View on GitHub →</a>` : ''}
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>`;
    }
    if (section.name === 'Skills') {
        return `    <section class="section">
        <div class="container">
            <h2>Skills</h2>
            ${appState.skills.map(s => `<div><h4>${s.name}</h4><div class="skill-bar"><div class="skill-progress" style="width: ${s.level}%;"></div></div></div>`).join('')}
        </div>
    </section>`;
    }
    return `    <section class="section">
        <div class="container">
            <h2>${section.name}</h2>
            <p>${section.description}</p>
        </div>
    </section>`;
}).join('\n')}
</body>
</html>`;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio.${appState.exportFormat === 'pdf' ? 'html' : appState.exportFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`Your portfolio has been exported as ${appState.exportFormat.toUpperCase()}!`);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);