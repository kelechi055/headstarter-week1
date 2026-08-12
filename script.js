

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (!loader) {
        document.body.classList.add('loaded');
        return;
    }
    loader.classList.add('fadeOut'); 
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.add('loaded');
    }, 1000); 
});


const navLinks = document.querySelectorAll('.navbar a');
    

const currentPath = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

function countUp(el, start, end, duration) {
    if (!el) return;
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
    const codingYears = document.querySelector('.numbers.coding-years');
    const programmingHours = document.querySelector('.numbers.programming-hours');
    const SubscriberCount = document.querySelector('.numbers.sub-count');

    countUp(codingYears, 0, 3, 2000);
    countUp(programmingHours, 0, 500, 3000);
    countUp(SubscriberCount, 0, 23000, 3000);
});

// Project stats counter restored from the original portfolio section.
document.addEventListener('DOMContentLoaded', () => {
    const statsItems = document.querySelectorAll('.stat-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatItem(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    statsItems.forEach(item => {
        observer.observe(item);
    });

    document.querySelector('.stats-heading')?.classList.add('animate-in');
});

function animateStatItem(statItem) {
    statItem.style.opacity = '1';
    statItem.style.transform = 'translateY(0)';

    const iconContainer = statItem.querySelector('.icon-container');
    iconContainer.style.opacity = '1';
    iconContainer.style.transform = 'scale(1)';

    const valueElement = statItem.querySelector('.stat-value');
    const labelElement = statItem.querySelector('.stat-label');

    setTimeout(() => {
        valueElement.style.opacity = '1';
        valueElement.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        labelElement.style.opacity = '1';
        labelElement.style.transform = 'translateY(0)';
    }, 300);

    const finalValue = parseInt(statItem.dataset.value, 10);
    animateCounter(valueElement, finalValue);
}

function animateCounter(element, finalValue) {
    const duration = 5000; // 5 secs
    const startTime = performance.now();
    let currentValue = 0;

    function updateCounter(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        currentValue = Math.floor(progress * finalValue);
        element.textContent = currentValue.toLocaleString() + '+';

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = finalValue.toLocaleString() + '+';
        }
    }

    requestAnimationFrame(updateCounter);
}

const texts = [
    "a <Software Engineer/>.",
    "a CompSci Student.",
    "a Problem Solver.",
    "Creative Technologist.",
    "a Builder."
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById('typing-text').textContent = '';
            type();
        }, 1000); // Wait for 1 second before starting to type the next sentence
    } else {
        setTimeout(type, 100); 
    }
}());

// Subtle pointer-aware lighting for the site background.
(() => {
    const background = document.querySelector('.site-background');
    const canTrackPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let updateFrame = null;
    let pointerX = 0;
    let pointerY = 0;

    if (!background || !canTrackPointer || reduceMotion) return;

    const updateSpotlight = () => {
        background.style.setProperty('--background-pointer-x', `${pointerX}px`);
        background.style.setProperty('--background-pointer-y', `${pointerY}px`);
        updateFrame = null;
    };

    document.addEventListener('pointermove', event => {
        pointerX = event.clientX;
        pointerY = event.clientY;

        if (!updateFrame) updateFrame = requestAnimationFrame(updateSpotlight);
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
        background.style.setProperty('--background-pointer-x', '50vw');
        background.style.setProperty('--background-pointer-y', '18vh');
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.experience-section');
    const items = [...document.querySelectorAll('.experience-reveal')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!section || !items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('is-visible'));
        return;
    }

    section.classList.add('is-reveal-ready');

    const observer = new IntersectionObserver((entries, revealObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const itemIndex = items.indexOf(entry.target);
            entry.target.style.setProperty('--experience-reveal-delay', `${(itemIndex % 3) * 65}ms`);
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -7% 0px'
    });

    items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const history = document.querySelector('.experience-history');
    const toggleAllButton = document.querySelector('.experience-toggle-all');
    const experienceItems = history ? [...history.querySelectorAll('details.experience-history-item')] : [];

    if (!toggleAllButton || !experienceItems.length) return;

    const updateToggleAllButton = () => {
        const allExpanded = experienceItems.every(item => item.open);
        toggleAllButton.textContent = allExpanded ? 'Collapse all' : 'Expand all';
        toggleAllButton.setAttribute('aria-expanded', String(allExpanded));
    };

    toggleAllButton.addEventListener('click', () => {
        const shouldExpand = !experienceItems.every(item => item.open);
        experienceItems.forEach(item => {
            item.open = shouldExpand;
        });
        updateToggleAllButton();
    });

    experienceItems.forEach(item => item.addEventListener('toggle', updateToggleAllButton));
    updateToggleAllButton();
});

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelector('.experience-creator-stats');
    const values = stats ? [...stats.querySelectorAll('[data-creator-count]')] : [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!stats || !values.length) return;

    const formatValue = (element, value, finalValue) => {
        if (element.dataset.countFormat === 'figures') {
            if (value <= 0) return '0';
            const figureCount = Math.min(finalValue, Math.ceil(value));
            return `${figureCount} ${figureCount === 1 ? 'figure' : 'figures'}`;
        }

        return `${Math.floor(value).toLocaleString()}+`;
    };

    const showFinalValues = () => {
        values.forEach(element => {
            const finalValue = Number(element.dataset.creatorCount);
            element.textContent = formatValue(element, finalValue, finalValue);
        });
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
        showFinalValues();
        return;
    }

    const animateValues = () => {
        const duration = 6000;
        const startTime = performance.now();
        stats.classList.add('is-counting');

        const updateValues = timestamp => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 4);

            values.forEach(element => {
                const finalValue = Number(element.dataset.creatorCount);
                const currentValue = finalValue * (element.dataset.countFormat === 'figures' ? progress : easedProgress);
                element.textContent = formatValue(element, currentValue, finalValue);
            });

            if (progress < 1) {
                requestAnimationFrame(updateValues);
            } else {
                showFinalValues();
            }
        };

        requestAnimationFrame(updateValues);
    };

    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        animateValues();
    }, { threshold: 0.35 });

    observer.observe(stats);
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = [...document.querySelectorAll('.project-card')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && 'IntersectionObserver' in window) {
        projectCards.forEach(card => {
            card.classList.add('is-reveal-pending');
        });

        const cardObserver = new IntersectionObserver((entries, observer) => {
            const projectsGrid = document.querySelector('.projects-container');
            const columnCount = projectsGrid
                ? getComputedStyle(projectsGrid).gridTemplateColumns.split(' ').length
                : 1;

            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const cardIndex = projectCards.indexOf(entry.target);
                const delay = columnCount > 1 ? (cardIndex % columnCount) * 70 : 0;
                entry.target.style.setProperty('--reveal-delay', `${delay}ms`);
                entry.target.classList.add('is-visible');
                window.setTimeout(() => {
                    entry.target.classList.remove('is-reveal-pending');
                    entry.target.style.removeProperty('--reveal-delay');
                }, 650 + delay);
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -8% 0px'
        });

        projectCards.forEach(card => cardObserver.observe(card));
    } else {
        projectCards.forEach(card => card.classList.add('is-visible'));
    }

    document.querySelectorAll('.project-card .tech-stack').forEach((stack, stackIndex) => {
        const technologies = [...stack.children].filter(element => element.tagName === 'SPAN');
        const visibleTechnologyCount = 4;
        if (technologies.length <= visibleTechnologyCount) return;

        const hiddenTechnologies = technologies.slice(visibleTechnologyCount);
        const projectName = stack.closest('.project-card')?.querySelector('.project-title')?.textContent.trim() || 'this project';
        const controlledIds = hiddenTechnologies.map((technology, technologyIndex) => {
            technology.hidden = true;
            technology.id = `project-tech-${stackIndex}-${technologyIndex}`;
            return technology.id;
        });

        const moreButton = document.createElement('button');
        moreButton.type = 'button';
        moreButton.className = 'tech-more';
        moreButton.textContent = `+${hiddenTechnologies.length} more`;
        moreButton.setAttribute('aria-expanded', 'false');
        moreButton.setAttribute('aria-controls', controlledIds.join(' '));
        moreButton.setAttribute('aria-label', `Show ${hiddenTechnologies.length} more technologies used in ${projectName}`);

        moreButton.addEventListener('click', () => {
            const isExpanded = moreButton.getAttribute('aria-expanded') === 'true';
            hiddenTechnologies.forEach(technology => {
                technology.hidden = isExpanded;
            });
            moreButton.setAttribute('aria-expanded', String(!isExpanded));
            moreButton.setAttribute(
                'aria-label',
                isExpanded
                    ? `Show ${hiddenTechnologies.length} more technologies used in ${projectName}`
                    : `Hide additional technologies used in ${projectName}`
            );
            moreButton.textContent = isExpanded ? `+${hiddenTechnologies.length} more` : 'Show less';
        });

        stack.append(moreButton);
    });

    const lightbox = document.getElementById('project-lightbox');
    const lightboxImage = document.getElementById('project-lightbox-image');
    const lightboxCaption = document.getElementById('project-lightbox-caption');
    const closeButton = lightbox?.querySelector('.project-lightbox-close');
    const imageButtons = document.querySelectorAll('.project-image-open');
    const desktopImageViewer = window.matchMedia('(min-width: 769px) and (any-hover: hover) and (any-pointer: fine)');
    let lastTrigger = null;
    let closeTimer = null;

    if (!lightbox || !lightboxImage || !lightboxCaption || !closeButton) return;

    const closeLightbox = () => {
        if (!lightbox.open) return;
        lightbox.classList.remove('is-open');
        window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(() => lightbox.close(), reduceMotion ? 0 : 180);
    };

    desktopImageViewer.addEventListener('change', event => {
        if (!event.matches) closeLightbox();
    });

    imageButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!desktopImageViewer.matches) return;
            const thumbnail = button.closest('.project-media')?.querySelector('.project-image');
            if (!thumbnail || lightbox.open) return;

            lastTrigger = button;
            lightboxImage.src = thumbnail.currentSrc || thumbnail.src;
            lightboxImage.alt = thumbnail.alt;
            lightboxCaption.textContent = button.dataset.projectTitle || thumbnail.alt;
            lightbox.showModal();
            document.body.classList.add('lightbox-open');
            requestAnimationFrame(() => lightbox.classList.add('is-open'));
        });
    });

    closeButton.addEventListener('click', event => {
        event.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', event => {
        if (event.target !== lightboxImage) closeLightbox();
    });

    lightbox.addEventListener('cancel', event => {
        event.preventDefault();
        closeLightbox();
    });

    lightbox.addEventListener('close', () => {
        document.body.classList.remove('lightbox-open');
        lightboxImage.removeAttribute('src');
        lightboxImage.alt = '';
        if (desktopImageViewer.matches) lastTrigger?.focus();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;

    const updateProgressBar = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-site-header]');
    const toggle = document.querySelector('[data-site-nav-toggle]');
    const panel = document.querySelector('[data-site-nav-panel]');
    const links = Array.from(document.querySelectorAll('[data-site-nav-link]'));
    const mobileNavigation = window.matchMedia('(max-width: 900px)');

    if (!header || !toggle || !panel) return;

    const setNavigationOpen = isOpen => {
        const shouldOpen = Boolean(isOpen && mobileNavigation.matches);
        header.classList.toggle('is-open', shouldOpen);
        toggle.setAttribute('aria-expanded', String(shouldOpen));
        toggle.setAttribute('aria-label', shouldOpen ? 'Close navigation' : 'Open navigation');
        panel.inert = mobileNavigation.matches && !shouldOpen;
    };

    toggle.addEventListener('click', () => {
        setNavigationOpen(!header.classList.contains('is-open'));
    });

    links.forEach(link => {
        link.addEventListener('click', () => setNavigationOpen(false));
    });

    header.querySelector('.site-brand')?.addEventListener('click', () => setNavigationOpen(false));

    document.addEventListener('pointerdown', event => {
        if (header.classList.contains('is-open') && !header.contains(event.target)) {
            setNavigationOpen(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || !header.classList.contains('is-open')) return;
        setNavigationOpen(false);
        toggle.focus();
    });

    mobileNavigation.addEventListener('change', () => setNavigationOpen(false));

    setNavigationOpen(false);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('current-year');
    if (currentYear) currentYear.textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', () => {
    const eyes = document.querySelector('.curious-eyes');
    const pupils = eyes ? [...eyes.querySelectorAll('.curious-pupil')] : [];
    const canTrackPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!eyes || !pupils.length || !canTrackPointer || reduceMotion) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let trackingFrame = null;

    const updateEyes = () => {
        pupils.forEach(pupil => {
            const eye = pupil.parentElement;
            const bounds = eye.getBoundingClientRect();
            const deltaX = pointerX - (bounds.left + bounds.width / 2);
            const deltaY = pointerY - (bounds.top + bounds.height / 2);
            const angle = Math.atan2(deltaY, deltaX);
            const distanceScale = Math.min(Math.hypot(deltaX, deltaY) / 90, 1);
            const travelX = Math.max(1, bounds.width * 0.19) * distanceScale;
            const travelY = Math.max(1, bounds.height * 0.17) * distanceScale;

            pupil.style.setProperty('--eye-x', `${Math.cos(angle) * travelX}px`);
            pupil.style.setProperty('--eye-y', `${Math.sin(angle) * travelY}px`);
        });

        trackingFrame = null;
    };

    eyes.classList.add('is-pointer-tracking');

    document.addEventListener('pointermove', event => {
        pointerX = event.clientX;
        pointerY = event.clientY;

        if (!trackingFrame) trackingFrame = requestAnimationFrame(updateEyes);
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
        pupils.forEach(pupil => {
            pupil.style.setProperty('--eye-x', '0px');
            pupil.style.setProperty('--eye-y', '0px');
        });
    });

    updateEyes();
});

document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.about-device');
    const layers = scene ? [...scene.querySelectorAll('[data-about-depth]')] : [];
    const canUseParallax = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!scene || !layers.length || !canUseParallax || reduceMotion) return;

    let frame = null;
    let pointerX = 0;
    let pointerY = 0;

    const renderScene = () => {
        const bounds = scene.getBoundingClientRect();
        const normalizedX = Math.max(-1, Math.min(1, (pointerX - (bounds.left + bounds.width / 2)) / (bounds.width / 2)));
        const normalizedY = Math.max(-1, Math.min(1, (pointerY - (bounds.top + bounds.height / 2)) / (bounds.height / 2)));

        layers.forEach(layer => {
            const depth = Number(layer.dataset.aboutDepth) || 0;
            layer.style.setProperty('--shift-x', `${normalizedX * depth}px`);
            layer.style.setProperty('--shift-y', `${normalizedY * depth * 0.65}px`);
        });

        frame = null;
    };

    scene.addEventListener('pointermove', event => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!frame) frame = requestAnimationFrame(renderScene);
    }, { passive: true });

    scene.addEventListener('pointerleave', () => {
        layers.forEach(layer => {
            layer.style.setProperty('--shift-x', '0px');
            layer.style.setProperty('--shift-y', '0px');
        });
    });
});

