# L.O.V.E. Pantry Inventory Tracker

An accessible, bilingual (**English / Spanish**) multi-portal web application built for the **Laurel Organization for Volunteer & Resource Equity (L.O.V.E.)** to streamline food pantry inventory tracking, client meal planning, and volunteer shift coordination.

**Live Demo:** [https://github.io](https://github.io)

---

## Demo Credentials (Volunteer Portal)

To test the authenticated **Volunteer Portal**, click **Enter the Volunteer Portal** on the home page and sign in using either demo account (or click **Fill Demo Volunteer Email**):

* **Demo Email 1:** `volunteer@lovepantry.org`
* **Demo Email 2:** `testing@umd.edu`

> *Note: All demo edits made during a session automatically reset to the clean 212-item baseline when you click **Sign Out** (or **Reset Demo Inventory**).*

---

## Key Features

### 1. Client Portal (`clientPortal.html`)
* **Real-Time Pantry Catalog (212+ Items):** Displays live stock counts across **171 available ingredients** and **41 out-of-stock items** (with estimated restock timelines).
* **Dietary & Kitchen-Equipment Filtering:** Filter ingredients and meal ideas by cooking setup (**No-Cook / Ready-to-Eat**, **Microwave-Only**, **Full Kitchen**) and dietary tags, plus instant search and A–Z directory jumps.
* **Support Ticketing (`support.html`):** Accessible help request form with instant reference ID receipts (`#SUP-XXXX`).

### 2. Volunteer Portal (`volunteerPortal.html`)
* **Tired-Volunteer Inventory Ergonomics:** High-contrast `✓ In Stock` / `✕ Out of Stock` status badges, `44px × 44px` `-` / `+` quantity steppers, and direct numeric inputs that sync live to the Client Portal via `localStorage`.
* **Smart Donation Logging:** `<datalist>` autocomplete suggests existing pantry items as you type and automatically merges donated quantities into matching stock rather than creating duplicates.
* **Shift Continuity & Handoff Messenger:** Features a 10-person shift roster, timestamped **Recent Shift Updates** audit log, an auto-naming **Personal Shift Scratchpad**, and a **Handoff Messenger** (`General` / `Urgent` priority via `Email`, `Text / SMS`, or `Both`) with structured receipts (`#NOTE-XXXX`).
* **Informed-Consent Privacy Settings:** Granular visibility selectors (`Current Shift Only`, `Today's Volunteers`, `Admin Only`) for volunteer email addresses and phone numbers.

### 3. WCAG Accessibility & Bilingual Engine (`site.js` & `style.css`)
* **6 Visual Themes:** Light, Dark, High Contrast, Colorblind-Safe (Okabe-Ito inspired), Warm Sepia, and Soft Calm, persisted without page-load flicker.
* **Dynamic Typography & Audio:** Live text scaling (`XS` through `XL`) and a bilingual **Web Speech API Read-Aloud** engine with customizable speech rate.
* **Full `EN | ES` Localization:** Instant English/Spanish switching across all pages, drawers, and interactive receipts.

---

## Tech Stack
* **Frontend:** Semantic HTML5, CSS3 (Custom Properties, Responsive Grid/Flexbox), Vanilla JavaScript (ES6+)
* **APIs & Storage:** Web Speech API (`speechSynthesis`), `localStorage` & `sessionStorage` cross-portal state sync
* **Hosting:** GitHub Pages

---

## Future Roadmap (V2)
* **Camera Shelf-Scanning Integration:** Mobile photo-to-inventory recognition allowing volunteers to snap pictures of pantry shelves to auto-update stock counts (paired with mandatory human verification prompts).
* **Admin Portal (`adminPortal.html`):** Role-based administrative dashboard for volunteer roster management, analytical pantry trends, and shift schedule oversight.

---

## Author
**Jessica Osei** — B.S. Information Science (Minor: Technology Entrepreneurship & Corporate Innovation), University of Maryland | A.S. Computer Science, Prince George's Community College
