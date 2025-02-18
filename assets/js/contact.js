
// Array of contacts with names, phone numbers, addresses, map links, and modal IDs
const contacts = [
    { name: 'VESU', number: '7435996000', address: 'MAHAVIDEH DHAM, 3rd Floor, Maharana Pratap Road, Vesu, SURAT.', mapLink: 'https://maps.app.goo.gl/doL47s44S25tsEUw6', modalClass: 'vesu-details' },
    { name: 'Kailashnagar', number: '8347196000', address: 'F-04, Shankheshwar Complex, Kailash Nagar, Surat(Opposite Raymond Show Room, Majura Gate).', mapLink: 'https://maps.app.goo.gl/Nzm2hS3P9mheB7766', modalClass: 'kailashnagar-details-F4' },
    { name: 'Kailashnagar', number: '8347196000', address: 'F-06, Shankheshwar Complex, Kailash Nagar, Surat(Opposite Raymond Show Room, Majura Gate).', mapLink: 'https://maps.app.goo.gl/Nzm2hS3P9mheB7766', modalClass: 'kailashnagar-details-F6' },
    { name: 'Kailashnagar', number: '7434096000', address: 'F-06, Shankheshwar Complex, Kailash Nagar, Surat(Opposite Raymond Show Room, Majura Gate).', mapLink: 'https://maps.app.goo.gl/Nzm2hS3P9mheB7766', modalClass: 'kailashnagar-details-Equipment' },
    { name: 'Kailashnagar', number: '8347496000', address: 'F-06, Shankheshwar Complex, Kailash Nagar, Surat(Opposite Raymond Show Room, Majura Gate).', mapLink: 'https://maps.app.goo.gl/Nzm2hS3P9mheB7766', modalClass: 'kailashnagar-details-Xray-Sono' },
    { name: 'Pal', number: '9586069600', address: 'Shop No. 5, Western Arena, B/s. Western BusinessHub, L.P. Sawani Road, Pal, Surat.', mapLink: 'https://maps.app.goo.gl/navz4yMP2hbVF4y8A', modalClass: 'pal-details' },
    { name: 'ADAJAN', number: '7435019600', address: 'Shop No. 29, KUNTI SHOPPING CENTER, Above Sai Xerox, Deepa Comp., Adajan, Surat.', mapLink: 'https://maps.app.goo.gl/YRqS1U5j62rhp8Xk6', modalClass: 'adajan-details' },
    { name: 'KATARGAM', number: '8109609600', address: 'PARESH APART, Nr. Nitisuri Aaradhna Bhavan, Katargam, Surat', mapLink: 'https://maps.app.goo.gl/gdWEoqJGkYUJnkd18c', modalClass: 'katargam-details' },
    // Add more contacts here
];

// Function to create WhatsApp links
function createWhatsAppLinks() {
    contacts.forEach(contact => {
        const containers = document.querySelectorAll(`.${contact.modalClass}`);
        containers.forEach(container => {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'modal-address mt-3';
            contactDiv.innerHTML = `
                <h3 class="text-white">${contact.name}</h3>
                <p class="fs-4 mb-0">
                    <a href="${contact.mapLink}" target="_blank">
                        <i class="fa-solid fa-location-dot"></i>
                        ${contact.address}
                    </a>
                </p>
                <div class="mt-2 d-sm-flex">
                    <span class="px-2 rounded  text-white">M. ${contact.number}</span>
                    <div class="d-flex col-12 col-sm-5 ms-sm-3 mt-2 mt-sm-0">
                        <a href="tel:${contact.number}" class="d-flex align-items-center">
                        <i class="fa-solid fa-phone fs-4 p-2 rounded text-white" style="background-color: #C9B582;"></i>
                        </a>
                        <a href="https://wa.me/${contact.number}?text=Hello%20there!" target="_blank" class="d-flex align-items-center ms-3">
                            <i class="fa-brands fa-whatsapp fs-4 p-2 rounded text-white" style="background-color: #4AC958;"></i>
                        </a>
                    </div>
                </div>
            `;
            container.appendChild(contactDiv);
        });
    });
}

// Call the function on page load
window.onload = createWhatsAppLinks;