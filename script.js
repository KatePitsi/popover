// Comparison Table Data
const comparisonTableData = [
  {
    feature: "Τρόπος εμφάνισης",
    popover: "Μέσα στη σελίδα, σαν overlay πάνω από το περιεχόμενο",
    modal: "Μέσα στη σελίδα, σαν overlay, αλλά μπλοκάρει την υπόλοιπη αλληλεπίδραση",
    popup: "Σε νέο παράθυρο/καρτέλα του browser",
  },
  {
    feature: "HTML/DOM",
    popover: "Στοιχείο DOM (π.χ. <div popover>)",
    modal: "Στοιχείο DOM (π.χ. <dialog>)",
    popup: "Ξεχωριστό παράθυρο, εκτός DOM",
  },
  {
    feature: "Έλεγχος",
    popover: "Με attributes ή JS (showPopover)",
    modal: "Με JS (showModal, close)",
    popup: "Με JS (window.open, window.close)",
  },
  {
    feature: "Κλείσιμο",
    popover: "Light dismiss (κλικ έξω, Esc) αν είναι auto",
    modal: "Συνήθως με explicit action",
    popup: "Από χρήστη ή με JS",
  },
  {
    feature: "Εμπειρία χρήστη",
    popover: "Ελαφρύ, μη-παρεμβατικό",
    modal: "Κλειδώνει την υπόλοιπη σελίδα",
    popup: "Ξεχωριστό, σαν άλλη εφαρμογή",
  },
  {
    feature: "Χρήσεις",
    popover: "Dropdowns, tooltips, info panels",
    modal: "Confirm dialogs, φόρμες",
    popup: "Login flows, third-party content",
  },
  {
    feature: "Popup blockers",
    popover: "Δεν μπλοκάρονται",
    modal: "Δεν μπλοκάρονται",
    popup: "Συχνά μπλοκάρονται",
  },
  {
    feature: "Προσβασιμότητα",
    popover: "Χρειάζεται χειρισμό (ARIA) αλλά έχει στήριξη",
    modal: "Υποστηρίζεται (ειδικά <dialog>)",
    popup: "Εξαρτάται από το περιεχόμενο",
  },
]

// // Dropdown functionality
// function initDropdown(btnId, menuId) {
//   const btn = document.getElementById(btnId)
//   const menu = document.getElementById(menuId)

//   if (!btn || !menu) return

//   btn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     const isOpen = !menu.classList.contains("hidden")

//     // Close all other dropdowns
//     document.querySelectorAll(".dropdown-menu, .dropdown-menu-absolute").forEach((m) => {
//       if (m !== menu) m.classList.add("hidden")
//     })

//     // Toggle current dropdown
//     menu.classList.toggle("hidden")
//     btn.setAttribute("aria-expanded", !isOpen)
//   })

//   // Close on click outside
//   document.addEventListener("click", (e) => {
//     if (!btn.contains(e.target) && !menu.contains(e.target)) {
//       menu.classList.add("hidden")
//       btn.setAttribute("aria-expanded", "false")
//     }
//   })

//   // Close on Escape key
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape" && !menu.classList.contains("hidden")) {
//       menu.classList.add("hidden")
//       btn.setAttribute("aria-expanded", "false")
//     }
//   })
// }

// // Mega Menu functionality
// function initMegaMenu() {
//   const btn = document.getElementById("mega-menu-btn")
//   const menu = document.getElementById("mega-menu")

//   if (!btn || !menu) return

//   btn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     const isOpen = !menu.classList.contains("hidden")
//     menu.classList.toggle("hidden")
//     btn.setAttribute("aria-expanded", !isOpen)
//   })

//   // Close on click outside
//   document.addEventListener("click", (e) => {
//     if (!btn.contains(e.target) && !menu.contains(e.target)) {
//       menu.classList.add("hidden")
//       btn.setAttribute("aria-expanded", "false")
//     }
//   })

//   // Close on Escape key
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape" && !menu.classList.contains("hidden")) {
//       menu.classList.add("hidden")
//       btn.setAttribute("aria-expanded", "false")
//     }
//   })
// }

// // Tooltip functionality
// function initTooltip() {
//   const btn = document.getElementById("tooltip-btn")
//   const tooltip = document.getElementById("tooltip-popover")

//   if (!btn || !tooltip) return

//   btn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     tooltip.classList.toggle("hidden")
//   })

//   // Close on click outside
//   document.addEventListener("click", (e) => {
//     if (!btn.contains(e.target) && !tooltip.contains(e.target)) {
//       tooltip.classList.add("hidden")
//     }
//   })
// }

// // Render comparison table
// function renderComparisonTable() {
//   const rowsContainer = document.getElementById("comparison-rows")
//   if (!rowsContainer) return

//   comparisonTableData.forEach((row) => {
//     const rowDiv = document.createElement("div")
//     rowDiv.className = "comparison-table-row"

//     rowDiv.innerHTML = `
//       <p class="table-cell-bold">${row.feature}</p>
//       <p class="table-cell">${row.popover}</p>
//       <p class="table-cell">${row.modal}</p>
//       <p class="table-cell">${row.popup}</p>
//     `

//     rowsContainer.appendChild(rowDiv)
//   })
// }

// // Set current year in footer
// function setCurrentYear() {
//   const yearSpan = document.getElementById("current-year")
//   if (yearSpan) {
//     yearSpan.textContent = new Date().getFullYear()
//   }
// }

// // Initialize when DOM is ready
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize dropdowns
//   initDropdown("dropdown0-btn", "dropdown0-menu")
//   initDropdown("dropdown1-btn", "dropdown1-menu")

//   // Initialize mega menu
//   initMegaMenu()

//   // Initialize tooltip
//   initTooltip()

//   // Render comparison table
//   renderComparisonTable()

//   // Set current year
//   setCurrentYear()

//   console.log("Popover & Dialog Examples loaded successfully")
// })
