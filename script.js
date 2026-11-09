const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const navigationLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sections = navigationLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const yearElement = document.querySelector('#current-year');

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderProject(project) {
  const card = makeElement('article', `project-card${project.reverse ? ' project-reverse' : ''} reveal`);
  const visual = makeElement('div', `project-visual project-visual-static${project.visual.kind === 'panel' ? ' repository-visual' : ''}`);

  if (project.visual.kind === 'image') {
    const image = makeElement('img');
    image.src = project.visual.src;
    image.alt = project.visual.alt;
    image.loading = 'lazy';
    visual.append(image);
  } else if (project.visual.kind === 'gallery') {
    const gallery = makeElement('div', 'project-gallery');
    project.visual.images.forEach((img) => {
      const image = makeElement('img');
      image.src = img.src;
      image.alt = img.alt;
      image.loading = 'lazy';
      gallery.append(image);
    });
    visual.append(gallery);
  } else {
    const visualCopy = makeElement('div', 'repository-visual-copy');
    visualCopy.append(makeElement('span', 'repository-visual-kicker', project.visual.kicker));
    const visualHeading = makeElement('strong', '', project.visual.heading);
    visualHeading.style.whiteSpace = 'pre-line';
    visualCopy.append(visualHeading);
    visualCopy.append(makeElement('span', 'repository-visual-stack', project.visual.stack));
    visual.append(visualCopy);
  }

  visual.append(makeElement('span', 'visual-label', project.visual.label));
  visual.append(makeElement('span', 'visual-note', project.visual.note));

  const info = makeElement('div', 'project-info');
  const meta = makeElement('div', 'project-meta');
  const status = makeElement('span', `project-status${project.statusType === 'progress' ? ' status-progress' : ''}`);
  status.append(makeElement('i'));
  status.append(document.createTextNode(` ${project.status}`));
  meta.append(status, makeElement('span', '', project.category));
  info.append(meta, makeElement('h3', '', project.title));
  info.append(makeElement('p', 'project-subtitle', project.subtitle));
  info.append(makeElement('p', '', project.description));

  project.details.forEach((detail) => {
    const detailBlock = makeElement('div', `project-detail${detail.kind === 'contribution' ? ' project-contribution' : ''}`);
    detailBlock.append(makeElement('h4', '', detail.heading));
    if (detail.kind === 'technologies') {
      const techList = makeElement('div', 'tech-list');
      detail.items.forEach((technology) => techList.append(makeElement('span', '', technology)));
      detailBlock.append(techList);
    } else if (detail.items) {
      const list = makeElement('ul');
      detail.items.forEach((item) => list.append(makeElement('li', '', item)));
      detailBlock.append(list);
    } else {
      detailBlock.append(makeElement('p', '', detail.text));
    }
    info.append(detailBlock);
  });

  if (project.repository?.href) {
    const link = makeElement('a', 'project-link', project.repository.label);
    link.href = project.repository.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.append(makeElement('span', '', '↗'));
    link.lastChild.setAttribute('aria-hidden', 'true');
    info.append(link);
  } else {
    info.append(makeElement('span', 'project-link project-link-pending', project.repositoryLabel || 'Repository link pending verification'));
  }

  card.append(visual, info);
  return card;
}

function renderProjects() {
  const projectList = document.querySelector('#project-list');
  if (!projectList || !Array.isArray(window.portfolioProjects)) return;
  const futureCard = projectList.querySelector('.future-project');
  projectList.querySelectorAll('.project-card').forEach((card) => card.remove());
  window.portfolioProjects.forEach((project) => projectList.insertBefore(renderProject(project), futureCard));
  const futureCount = futureCard?.querySelector('.future-count');
  if (futureCount) futureCount.textContent = `${String(window.portfolioProjects.length + 1).padStart(2, '0')} / —`;
}

function renderCv() {
  const container = document.querySelector('#cv-download');
  const cv = window.portfolioCv;
  if (!container || !cv?.href) return;

  container.replaceChildren();
  container.append(makeElement('div', 'cv-placeholder-icon', 'PDF'));

  const details = makeElement('div');
  details.append(makeElement('span', 'contact-label', 'CURRICULUM VITAE'));
  details.append(makeElement('h3', '', 'CV download'));
  details.append(makeElement('p', '', cv.description || 'Download my CV as a PDF.'));
  container.append(details);

  const link = makeElement('a', 'cv-download-button', cv.buttonLabel || 'Download CV');
  link.href = cv.href;
  link.download = cv.filename || '';
  link.append(makeElement('span', '', '↓'));
  link.lastChild.setAttribute('aria-hidden', 'true');
  container.append(link);
}

renderProjects();
renderCv();

if (yearElement) yearElement.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    navigation?.classList.remove('is-open');
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}