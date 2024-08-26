const doctors = [
  {
    specialty: "MD Physician",
    name: "Dr. Hiren Shah",
    qualification: "M.D. (Medicine)",
    days: ["Tuesday to Friday"],
    time: "9:00 AM to 10:00 AM",
  },
  {
    specialty: "MD Physician",
    name: "Dr. Manish Singhvi",
    qualification: "M.D. (Medicine)",
    days: ["Saturday"],
    time: "5:00 PM to 6:00 PM",
  },
  {
    specialty: "MD Physician",
    name: "Dr. Priyank Shah",
    qualification: "M.D. (Medicine)",
    days: ["Monday to Saturday"],
    time: "9:30 AM to 10:30 AM",
  },
  {
    specialty: "MD Physician",
    name: "Dr. Ankit Gajjar",
    qualification: "MD, IDCCM, EDIC, IFCCM",
    days: ["Tuesday", "Friday"],
    time: "1:00 PM to 2:00 PM",
  },
  {
    specialty: "MD Physician",
    name: "Dr. Parshwa Shah",
    qualification: "M.D. (Medicine)",
    days: ["Tuesday", "Thursday", "Friday"],
    time: "4:00 PM to 5:00 PM",
  },
  {
    specialty: "Orthopaedic",
    name: "Dr. Kaushal Shah",
    qualification: "DNB Orthopaedics",
    days: ["Wednesday", "Saturday"],
    time: "10:30 AM to 11:30 AM",
  },
  {
    specialty: "Orthopaedic",
    name: "Dr. Shrujal Shah",
    qualification: "M.S., M.CH",
    days: ["Tuesday (Only M.S.)"],
    time: "10:00 AM to 11:00 AM",
  },
  {
    specialty: "Orthopaedic",
    name: "Dr. Niral Shah",
    qualification: "M.S., Ortho",
    days: ["Thursday"],
    time: "11:00 AM to 12:00 PM",
  },
  {
    specialty: "Orthopaedic",
    name: "Dr. Akash Shah",
    qualification: "M.S., Ortho. (HIP SPECIALIST)",
    days: ["Monday to Friday"],
    time: "7:00 PM to 8:00 PM",
  },
  {
    specialty: "Orthopaedic",
    name: "Dr. Pavan D Desai",
    qualification: "M.S. - ORTHO., D.N.B. - ORTHO.",
    days: ["Thursday"],
    time: "4:00 PM to 5:00 PM",
  },
  {
    specialty: "Cardiologist",
    name: "Dr. Dhaval Shah",
    qualification: "DM (Cardiology) MD (Medicine)",
    days: ["Friday"],
    time: "8:30 AM to 9:30 AM",
  },
  {
    specialty: "ENT Specialist",
    name: "Dr. Harit Trivedi",
    qualification: "M.S (ENT Head & Neck Surgeon)",
    days: ["Saturday"],
    time: "1:00 PM to 2:00 PM",
  },
  {
    specialty: "Rheumatologist",
    name: "Dr. Romi Shah",
    qualification: "MD MEDICINE, DNB-RHEUMATOLOGY",
    days: ["Friday"],
    time: "9:00 AM to 10:00 AM",
  },
  {
    specialty: "HIV / TB / Fever / Infectious Diseases Specialist",
    name: "Dr. Pratik Savaj",
    qualification: "DNB Medicine (FID, FNB Infectious Disease)",
    days: ["Tuesday", "Friday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    specialty: "HIV / TB / Fever / Infectious Diseases Specialist",
    name: "Dr. Ishan Sheth",
    qualification: "M.B.B.S, DTMH, CCEBDM, Physician",
    days: ["Monday to Friday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    specialty: "Chest, Allergy & Pulmonologist",
    name: "Dr. Chandrakant Ghevariya",
    qualification: "M.D., D.T.C.D - ICU Specialist",
    days: ["Monday", "Wednesday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    specialty: "Chest, Allergy & Pulmonologist",
    name: "Dr. Nirav Gondaliya",
    qualification: "MD - Respiratory Medicine, IDCCM",
    days: ["Tuesday", "Thursday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    specialty: "Chest, Allergy & Pulmonologist",
    name: "Dr. Ronak Yagnik",
    qualification: "M.B.B.S, DTCD, IFCCM, EDIC",
    days: ["Tuesday", "Friday"],
    time: "3:00 PM to 4:00 PM",
  },
  {
    specialty: "Gastroloist",
    name: "Dr. Rajiv Mehta",
    qualification: "MD, DNB, Gastroenterologist",
    days: ["On Appointment"],
    time: null,
  },
  {
    specialty: "Gastroloist",
    name: "Dr. Nisharg Patel",
    qualification: "MD, DNB, GI Motility Expert",
    days: ["Wednesday"],
    time: "9:00 AM to 10:00 AM",
  },
  {
    specialty: "Gastroloist",
    name: "Dr. Mohit Sethia",
    qualification: "MD, DNB",
    days: ["Friday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    specialty: "Ophthalmologist",
    name: "Dr. Nirav Shah",
    qualification: "M.S DO (Opthal)",
    days: ["On Appointment"],
    time: null,
  },
  {
    specialty: "Ophthalmologist",
    name: "Dr. Pareen Shah",
    qualification: "M.S (Opthal)",
    days: ["Tuesday", "Friday"],
    time: "8:30 AM to 10:30 AM",
  },
  {
    specialty: "Ophthalmologist",
    name: "Dr. Utkarsh Parmar",
    qualification: "M.B.B.S, M.S (Opthal)",
    days: ["Monday", "Wednesday"],
    time: "9:30 AM to 10:30 AM",
  },
  {
    specialty: "Ophthalmologist",
    name: "Dr. Mansi Shah",
    qualification: "DNB Ophthalm, Cornea Fellowship",
    days: ["Thursday", "Saturday"],
    time: "5:00 PM to 6:00 PM",
  },
  {
    specialty: "Ophthalmologist",
    name: "Dr. Jinay P. Shah",
    qualification: "M.S (Opthal)",
    days: ["Monday to Friday (On Call)"],
    time: "3:00 PM to 4:00 PM",
  },
  {
    specialty: "Gynaecologist",
    name: "Dr. Milind Wadekar",
    qualification: "DNB - Obst & Gyn",
    days: ["Monday", "Thursday"],
    time: "4:00 PM to 5:00 PM",
  },
  {
    specialty: "Gynaecologist",
    name: "Dr. Mansi Wadekar",
    qualification:
      "M.D., D.G.O - Obstetrician, Gynaecologist & Infertility Specialist",
    days: ["Tuesday", "Friday"],
    time: "12:00 PM to 1:00 PM",
  },
  {
    specialty: "Dermatologist",
    name: "Dr. Jeet Gandhi",
    qualification: "[MBBS, MD (Skin & VD)] [Gold Medalist]",
    days: ["Monday", "Wednesday"],
    time: "9:30 AM to 10:30 AM",
  },
  {
    specialty: "Dermatologist",
    name: "Dr. Kopal Mehta",
    qualification: "[MBBS, MD (Skin & VD)]",
    days: ["Tuesday", "Friday"],
    time: "11:30 AM to 12:30 PM",
  },
  {
    specialty: "Endocrinologist",
    name: "Dr. Mehul Virani",
    qualification: "MRCP Endocrinology & Diabetes",
    days: ["Wednesday"],
    time: "3:00 PM to 4:00 PM",
  },
  {
    specialty: "Neuro. + Spine Surgeon",
    name: "Dr. Keyur Prajapati",
    qualification: "M.Ch - Neuro Surgery",
    days: ["Monday", "Thursday"],
    time: "9:00 AM to 10:00 AM",
  },
  {
    specialty: "Neuro. + Spine Surgeon",
    name: "Dr. Mohit Goyal",
    qualification:
      "MS, MCH - Neuro Surgery, Fellow Minimally Invasive & Endoscopic Spine Surgery",
    days: ["Wednesday"],
    time: "5:00 PM to 6:00 PM",
  },
  {
    specialty: "Neuro. + Spine Surgeon",
    name: "Dr. Nilay Shah",
    qualification: "DNB Neuro. + Spine Surgeon, Gold Medalist",
    days: ["Tuesday", "Friday"],
    time: "7:00 PM to 8:00 PM",
  },
  {
    specialty: "Psychiatrist",
    name: "Dr. Shivani Shah Goyal",
    qualification: "MD Psychiatry, R-TMS Specialist",
    days: ["Thursday"],
    time: "4:30 PM to 5:30 PM",
  },
  {
    specialty: "Nephrologist",
    name: "Dr. Jinesh Purohit",
    qualification: "MD Medicines, DNB - Nephrology",
    days: ["Friday"],
    time: "12:00 PM to 1:00 PM",
  },
  {
    name: "DR. SAPAN CHOKSHI",
    specialty: "Dental Surgeon",
    days: ["Tuesday", "Thursday"],
    time: "4:00 PM TO 5:00 PM",
  },
  {
    name: "DR. APURVA MEHTA",
    specialty: "MDS (Oral & Maxillofacial Surgeon)",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM TO 11:00 AM",
  },
  {
    name: "DR. RUCHI A MEHTA",
    specialty: "B.D.S., Dental Surgeon",
    days: ["Tuesday", "Wednesday"],
    time: "8:30 AM TO 10:30 AM",
  },
  {
    name: "DR. GARGI DABHELIA",
    specialty: "B.D.S., Dental Surgeon",
    days: ["Monday to Friday"],
    time: "9:00 AM TO 1:00 PM",
  },
  {
    name: "DR. NIRAV SHAH",
    specialty: "MDS (Maxillofacial Surgeon)",
    days: ["On Call"],
    time: "",
  },
  {
    name: "DR. RASHESH SHAH",
    specialty: "MDS (Maxillofacial Plastic Surgeon)",
    days: ["Monday"],
    time: "7:00 PM TO 8:00 PM",
  },
  {
    name: "DR. ASHUTOSH SHAH",
    specialty: "M.B., M.S., M.Ch., D.N.B.",
    days: ["On Appointment"],
    time: "",
  },
  {
    name: "DR. PRIYANSH JAIN",
    specialty: "M.S., M.Ch Surgical Oncology",
    days: ["Monday"],
    time: "6:00 PM (On Call)",
  },
  {
    name: "DR. MANSI SHAH",
    specialty: "B.H.M.S.",
    days: ["Monday", "Thursday"],
    time: "10:00 AM TO 12:00 PM",
  },
  {
    name: "DR. JINAL SHAH",
    specialty: "B.H.M.S.",
    days: ["Wednesday", "Friday"],
    time: "3:00 PM TO 5:00 PM",
  },
  {
    name: "DR. VITRAG SHAH",
    specialty: "MBBS, C. Diab",
    days: ["ONLY FOR M.S."],
    time: "",
  },
  {
    name: "DR. NIRVA MEHTA",
    specialty: "B.A.M.S",
    days: ["Monday to Saturday"],
    time: "1:00 PM TO 2:00 PM",
  },
  {
    name: "DR. BEHLUL SEIKH",
    specialty: "B.H.M.S (MUHS), CCH, CGO",
    days: ["Monday to Saturday"],
    time: "9:00 AM TO 8:00 PM",
  },
  {
    name: "DR. KRUTI KAPADIYA",
    specialty: "B.A.M.S",
    days: ["Monday", "Wednesday", "Friday"],
    time: "4:00 PM TO 5:30 PM",
  },
  {
    name: "DR. KHUSHBOO JOSHI",
    specialty: "MPT",
    days: ["Monday to Saturday"],
    time: "8:00 AM TO 8:00 PM",
  },
  {
    name: "DR. SUCHI PARIKH",
    specialty: "BPT",
    days: ["Monday to Saturday"],
    time: "1:00 PM TO 4:00 PM",
  },
];

const doctor2 = [
  {
    name: "Dr. Priyank Shah",
    specialty: "M.B.B.S, M.D. (Medicine) Physician",
    days: ["Monday to Saturday"],
    time: "12:30 PM to 1:30 PM",
  },
  {
    name: "Dr. Pratik Savla",
    specialty: "DNB Medicine (FID, FNB Infectious Disease)",
    days: ["Monday to Friday"],
    time: "4:00 PM to 6:00 PM",
  },
  {
    name: "Dr. Ankit Gandhi",
    specialty: "M.D. Physician",
    days: ["Tuesday", "Wednesday", "Friday"],
    time: "12:00 PM to 1:00 PM",
  },
  {
    name: "Dr. Mohit Shethia",
    specialty: "MD. DNB (Gastroologist)",
    days: ["Monday", "Thursday"],
    time: "6:00 PM to 7:00 PM",
  },
  {
    name: "Dr. Ishan Shah",
    specialty: "M.B.B.S, DTMH, CCEBDM, Physician",
    days: ["Wednesday"],
    time: "3:00 PM to 4:00 PM",
  },
  {
    name: "Dr. Dhaval Shah",
    specialty: "DM (Cardiology) MD (Medicine)",
    days: ["Saturday"],
    time: "1:00 PM to 2:00 PM",
  },
  {
    name: "Dr. Akash Shah",
    specialty: "M.B.B.S, M.S. Orthopaedic - FIAS",
    days: ["Monday to Friday"],
    time: "4:00 PM to 5:00 PM",
  },
  {
    name: "Dr. Bhavesh Upadhyay",
    specialty: "Asutosh Hospital Medical Officer",
    days: ["Saturday"],
    time: "5:00 PM to 6:00 PM",
  },
  {
    name: "Dr. Aman Kanetwala",
    specialty: "Dentist",
    days: ["Monday", "Tuesday", "Saturday"],
    time: "3:00 PM to 6:00 PM",
  },
  {
    name: "Dr. Harshad S. Trivedi",
    specialty: "ENT Specialist",
    days: ["Tuesday", "Friday"],
    time: "4:30 PM to 5:30 PM",
  },
  {
    name: "Dr. Hiral N. Kataria",
    specialty: "Pediatrician (MBDCH)",
    days: ["Monday", "Thursday"],
    time: "12:30 PM to 1:30 PM",
  },
  {
    name: "Dr. Jana J. Gadhvi",
    specialty: "Homeopathic (BHMS-NDDY)",
    days: ["Monday to Friday"],
    time: "10:00 AM to 11:00 AM",
  },
  {
    name: "Dr. Manasi Patel",
    specialty: "BHMS, C.C.H.",
    days: ["Monday to Saturday"],
    time: "10:00 AM to 12:00 PM",
  },
  {
    name: "Dr. Hiral Solanki",
    specialty: "BHMS, C.C.H.",
    days: ["Monday to Saturday"],
    time: "5:00 PM to 8:00 PM",
  },
  {
    name: "Dr. Dharm Mehta",
    specialty: "MBBS, MD Skin",
    days: ["Tuesday", "Friday"],
    time: "4:15 PM to 5:15 PM",
  },
  {
    name: "Dr. Yashan Vasa",
    specialty: "Physiotherapy",
    days: ["Monday to Saturday"],
    time: "8:00 AM to 1:00 PM",
  },
  {
    name: "Dr. Anita Dodhari",
    specialty: "Physiotherapy",
    days: ["Monday to Saturday"],
    time: "1:00 PM to 5:00 PM",
  },
  {
    name: "Dr. Janak Dicholkar",
    specialty: "Physiotherapy",
    days: ["Monday to Saturday"],
    time: "5:00 PM to 8:00 PM",
  },
  {
    name: "Dr. Amilsh Somani",
    specialty: "Radiologist",
    days: ["Prior Appointment"],
  },
];

const doctorCardsContainer = document.getElementById("doctor-cards-vesu");

doctors.forEach((doctor) => {
  const card = `
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
    <div class="card rounded-0 doc-bg-theme border-0">
        <div class="row g-0 h-100 position-relative" style="overflow: hidden;">
            <div class="col-4 d-flex align-items-center justify-content-center position-relative">
                <img src="https://img.freepik.com/vector-premium/avatar-medico-barbudo-doctor-estetoscopio-vector-illustrationxa_276184-31.jpg"
                    class="img-fluid rounded-circle" alt="${doctor.name}">
                <div class="separator-line"></div>
            </div>
            <div class="col-8 d-flex align-items-center">
                <div class="card-body mt-1">
                    <h5 class="card-title fs-6 mb-0 text-theme">${doctor.name.toUpperCase()}</h5>
                    <p class="card-text  m-0 text-theme-secondary">${doctor.qualification}</p>
                    <p class="card-text m-0"><small class="text-muted">Days: ${doctor.days.join(
                      ", "
                    )}</small></p>
                    <p class="card-text mt-0"><small class="text-muted">Time: ${
                      doctor.time
                    }</small></p>
                </div>
            </div>
        </div>
    </div>
</div>


    `;
  doctorCardsContainer.innerHTML += card;
});

const doctorCardsKailshnagar = document.getElementById(
  "doctor-cards-kailashnagar"
);

doctor2.forEach((doctor) => {
  const card = `
        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
    <div class="card rounded-0 doc-bg-theme border-0">
        <div class="row g-0 h-100 position-relative" style="overflow: hidden;">
            <div class="col-4 d-flex align-items-center justify-content-center position-relative">
                <img src="https://img.freepik.com/vector-premium/avatar-medico-barbudo-doctor-estetoscopio-vector-illustrationxa_276184-31.jpg"
                    class="img-fluid rounded-circle" alt="${doctor.name}">
                <div class="separator-line"></div>
            </div>
            <div class="col-8 d-flex align-items-center">
                <div class="card-body mt-1">
                    <h5 class="card-title fs-6 mb-0 text-theme">${doctor.name.toUpperCase()}</h5>
                    <p class="card-text  m-0 text-theme-secondary">${doctor.specialty}</p>
                    <p class="card-text m-0"><small class="text-muted">Days: ${doctor.days.join(
                      ", "
                    )}</small></p>
                    <p class="card-text mt-0"><small class="text-muted">Time: ${
                      doctor.time
                    }</small></p>
                </div>
            </div>
        </div>
    </div>
</div>

    `;
  doctorCardsKailshnagar.innerHTML += card;
});
