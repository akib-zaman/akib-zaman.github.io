document.addEventListener('DOMContentLoaded', () => {
    loadPublications();
    loadSectionContent('about');
    loadSectionContent('timeline');
    loadSectionContent('research');
    loadSectionContent('publications');
    loadSectionContent('contact');
    
    // This function call is now unnecessary here because it's called within loadSectionContent for publications
});

function loadPublications() {
    const publications = [
        { title: "Publication Title 1", year: "2022", link: "http://example.com/publication1" },
        { title: "Publication Title 2", year: "2021", link: "http://example.com/publication2" },
    ];

    const publicationsList = document.getElementById('publications');
    if (publicationsList) {
        publications.forEach(pub => {
            const listItem = document.createElement('li');
            // Adding an 'Abstract' button to each publication
            listItem.innerHTML = `<p class="publication-title"><strong>${pub.title} (${pub.year})</strong></p><p class="publication-abstract" style="display: none;">This is the abstract of the publication...</p><button class="btn abstract-btn">Abstract</button><a href="${pub.link}" target="_blank" class="btn">Read More</a>`;
            publicationsList.appendChild(listItem);
        });
    } else {
        console.error('Publications list element not found.');
    }
}

function loadSectionContent(sectionId) {
    const url = `${sectionId}.html`;
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
            if (sectionId === 'contact') {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                    initializeFormListener(contactForm);
                }
            }
            if (sectionId === 'publications') {
                // Attach listeners for both titles and abstract buttons after the publications section is loaded
                attachPublicationListeners();
            }
        })
        .catch(error => {
            console.error(`Failed to load content for ${sectionId}:`, error);
        });
}

function initializeFormListener(formElement) {
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        if (!name) {
            alert('Please enter your name.');
            return false;
        }
        console.log('Form is valid! Sending data...');
        this.reset();
        alert('Thank you for your message! I will get back to you as soon as possible.');
    });
}

// Renamed and expanded function to handle clicks on both titles and abstract buttons
function attachPublicationListeners() {
    document.querySelectorAll('.publication').forEach(item => {
        const abstractButton = item.querySelector('.abstract-btn');
        const abstract = item.querySelector('.publication-abstract');

        abstractButton.addEventListener('click', () => {
            abstract.style.display = abstract.style.display === 'none' ? 'block' : 'none';
        });
    });
}
