(() => {
  const translations = {
    en: {
      supportLink: "Support",
      homePageTitle: "Pantry Inventory Tracker Prototype",
      clientPageTitle: "L.O.V.E. Client Portal",
      supportPageTitle: "Support Ticket | L.O.V.E. Pantry",
      volunteerPageTitle: "Volunteer Portal | L.O.V.E. Pantry",
      pageControls: "Page controls",
      language: "Language",
      textSizeGroup: "Text size",
      colorThemeGroup: "Color theme",
      settings: "Settings",
      sections: "Sections",
      accessibilitySettings: "Accessibility Settings",
      closeSettings: "Close settings",
      closeSections: "Close sections",
      textSize: "Text Size",
      colorTheme: "Color Theme",
      defaultTheme: "Default",
      darkTheme: "Dark",
      softTheme: "Soft",
      sepiaTheme: "Sepia",
      colorblindSafe: "Colorblind-Safe",
      highContrast: "High Contrast",
      readAloud: "Read Aloud",
      play: "Play",
      pause: "Pause",
      stop: "Stop",
      voice: "Voice",
      systemDefault: "System Default",
      spanishVoiceHelp: "Spanish voices depend on your browser/OS (Microsoft Edge includes built-in Spanish voices).",
      test: "Test",
      readingPace: "Reading Pace",
      volume: "Volume",
      resetSettings: "Reset All Settings",
      jumpToSection: "Jump to a Section",
      filterInventoryTools: "Filter Inventory Tools",
      noCookSection: "No-Cook / Shelter Friendly",
      microwaveOnly: "Microwave-Only",
      fullKitchenRequired: "Full Kitchen Required",
      familyDinners: "Full Kitchen Required / Family Dinners",
      availableIngredients: "Available Ingredients",
      outOfStock: "Out of Stock",
      backHome: "Back to Home",
      clientPortal: "Client Portal",
      prototypeNotice: "This prototype shows illustrative quantities and availability, not live inventory. Cooking setup and preparation time depend on the recipe.",
      resetFilters: "Reset All Filters",
      sampleDataNotice: "All items, recipes, quantities, availability, and descriptions on this page are sample data and do not represent live items or inventory.",
      filterScopeNotice: "These filters apply to the cooking items and recipes shown, not the Available Ingredients or Out of Stock lists, which are controlled by their own respective filters.",
      cookingSetup: "Select Your Cooking Setup (Choose Only One):",
      showAllLayouts: "Show ALL Layouts",
      equipmentYouHave: "Equipment You Have:",
      equipmentInstructions: "Check the tools you have. Items appear when you have all the tools they require. Leave all unchecked to show items regardless of their tool requirements.",
      preparationTime: "Preparation Time (Choose One):",
      showAllTimes: "Show All Preparation Times",
      under15: "Under 15 Minutes",
      "15to30": "15 to 30 Minutes",
      "30to60": "30 to 60 Minutes",
      over1Hour: "Over 1 Hour",
      dietaryPreferences: "Dietary Preferences & Options:",
      stockAvailability: "Stock availability:",
      showAllItems: "Show All Items",
      inStockOnly: "In-stock items only",
      softFoodOnly: "Soft Food Options Only",
      eatingUtensils: "Includes Eating Utensils",
      readyToEat: "Ready to Eat / No Cooking Needed",
      easyOpen: "Easy-Open Packaging",
      noApplianceNeeded: "No Cooking Appliance Needed",
      spoon: "Spoon",
      knife: "Knife",
      canOpener: "Can opener",
      microwave: "Microwave",
      microwaveSafeBowl: "Microwave-safe bowl",
      fork: "Fork",
      microwaveSafePlate: "Microwave-safe plate",
      bowlCover: "Bowl cover",
      whisk: "Whisk",
      stovetop: "Stovetop",
      pot: "Pot",
      skilletOrComal: "Skillet or comal",
      oven: "Oven",
      bakingSheet: "Baking sheet",
      grater: "Grater",
      rollingPin: "Rolling pin",
      bowl: "Bowl",
      bakingDish: "Baking dish",
      casseroleDish: "Casserole dish",
      pieDish: "Pie dish",
      ramekins: "Ramekins",
      largeBowl: "Large bowl",
      jar: "Jar",
      selectFirstLetter: "Filter by First Letter (Choose One):",
      searchAvailable: "Search available ingredients:",
      availablePlaceholder: "Search available ingredients",
      searchOutOfStock: "Search out-of-stock items:",
      outOfStockPlaceholder: "Search out-of-stock items",
      estimatedRestock: "Filter by Estimated Restock Time (Choose One):",
      allRestock: "Show All Restock Estimates",
      twoDaysOrLess: "2 Days or Less",
      threeToFiveDays: "3–5 Days",
      sixPlusDays: "6+ Days",
      inStock: "In Stock",
      outOfStockBadge: "Out of Stock",
      noCookDescription: "Optimized for clients without appliances, kitchen spaces, or tool access.",
      microwaveDescription: "Recipes and pantry options that can be prepared with a microwave.",
      fullKitchenDescription: "Bulk family resources requiring preparation tools, stove burners, or boiling water.",
      availableIngredientNote: "Example unit counts are placeholders. Check with the pantry for current stock.",
      outOfStockNote: "Out-of-stock items and restock estimates are examples only and are not live pantry or delivery information.",
      quickNoCookRecipes: "Quick No-Cook Recipes",
      under15RecipeHeading: "Under 15 Minute Recipes",
      microwaveMeals: "Microwave-Only Quick Meals",
      samplePortalFooter: "L.O.V.E. Client Portal Interface Prototype | SMLP 470",
      all: "All",
      under15Recipes: "Under 15 Minutes",
      "15to30Recipes": "15 to 30 Minute Recipes",
      "15to30Baking": "15 to 30 Minute Baking Recipes",
      "30to60Recipes": "30 to 60 Minute Recipes",
      "30to60Baking": "30 to 60 Minute Baking Recipes",
      overHourRecipes: "Over 1 Hour Recipes",
      overHourBaking: "Over 1 Hour Baking Recipes",
      typeLabel: "Type:",
      packagingLabel: "Packaging:",
      noteLabel: "Note:",
      equipmentLabel: "Equipment needed:",
      preparationLabel: "Preparation time:",
      ingredientsLabel: "Ingredients:",
      featuresLabel: "Features:",
      featureReady: "Ready to eat / no cooking needed",
      featureSoft: "Soft food",
      featureUtensils: "Includes eating utensils",
      featureEasyOpen: "Easy-open packaging (pull-tab lid)",
      featureNoAppliance: "No cooking appliance needed",
      featureMicrowave: "Microwave-friendly",
      featureOven: "Oven / baking only",
      countItems: "{count} cooking items and recipes shown",
      countOneItem: "{count} cooking item or recipe shown",
      noMatchingItems: "No sample items match these filters. Try changing your selections. Ingredient lists use separate filters.",
      showingSample: "Showing {count} sample {itemWord}. Ingredient lists use separate filters.",
      sampleItem: "item",
      sampleItems: "items",
      searchNoMatch: "No {name}s match your search and filters. Try changing your selections.",
      searchLetterNoMatch: "No {name}s starting with {letter} match your search and filters.",
      showingList: "Showing {count} {name}{plural}.",
      availableIngredient: "available ingredient",
      outOfStockItem: "out-of-stock item",
      homeTitle: "LAUREL ORGANIZATION FOR VOLUNTEER & RESOURCE EQUITY (L.O.V.E.)",
      homeWelcome: "Hello! Welcome to L.O.V.E! We are glad to have you here!",
      homeInstructions: "Please, help us serve you better by informing<br>us what kind of user you are and what you<br>hope to accomplish<br><br>(click on your intended portal below to be redirected)",
      availablePortals: "Available System Portals",
      enterClientPortal: "ENTER THE CLIENT PORTAL",
      portalsLocked: "Volunteer & Admin Portals are currently locked and are in development",
      homeFooter: "L.O.V.E. App Framework Prototype | SMLP 470",
      enterVolunteerPortal: "ENTER THE VOLUNTEER PORTAL",
      adminPortalComingSoon: "ADMIN PORTAL — COMING SOON",
      volunteerPortal: "Volunteer Portal",
      volunteerSignIn: "Volunteer Sign-In",
      prototypeDisclaimerTitle: "Prototype only:",
      volunteerDisclaimer: "This is a frontend portfolio prototype with no live backend database. Personal emails will not work; use volunteer@lovepantry.org or testing@umd.edu to preview the dashboard.",
      volunteerSessionIdentityPrefix: "Once signed in with either demo email (volunteer@lovepantry.org or testing@umd.edu), your active session will appear across the portal as ",
      demoUser: "Demo User",
      volunteerEmail: "Volunteer email",
      volunteerEmailError: "Email not found. Use volunteer@lovepantry.org or testing@umd.edu, then select “Fill Demo Volunteer Email” to preview the portal.",
      next: "Next",
      fillDemoEmail: "Fill Demo Volunteer Email",
      signedInAs: "Signed in as",
      signOut: "Sign Out",
      volunteerDashboardNotice: "Demo inventory only. Changes are saved in this browser and reflected on the Client Portal; there is no live pantry connection.",
      photoScanNotice: "Coming soon: use your phone camera to photograph shelves and automatically update counts. Always double-check quantities manually; scanning can make mistakes.",
      inventoryDashboard: "Inventory Dashboard",
      shiftTeamHeading: "Current & Today's Shift Team",
      inventorySaveError: "Inventory changes could not be saved in this browser.",
      shiftNotesHeading: "Shift Notes & Handoff Messenger",
      scratchpadHeading: "Personal Shift Scratchpad",
      noteTitle: "Note Title (optional)",
      noteTitlePlaceholder: "Add a title (or leave blank for Note 1, Note 2...)",
      autoTitle: "Auto-Name",
      editNote: "Edit",
      cancelEdit: "Cancel",
      saveChanges: "Save Changes",
      editedTimestamp: "Edited: {time}",
      editResendNote: "Edit & Resend",
      saveResendNote: "Save & Resend",
      deleteSentNote: "Delete",
      deleteSentNoteFor: "Delete sent note to {recipient}",
      editedResentTimestamp: "Edited & Resent: {time}",
      scratchpadLabel: "Private reminders for this shift",
      scratchpadPlaceholder: "Only you can see these reminders in this browser.",
      saveScratchpad: "Save Note",
      viewSavedNotes: "View Saved Notes ({count})",
      viewSentNotes: "View Sent Notes ({count})",
      noteCardTitle: "Title: {title}",
      noteCardDate: "Date & Time: {timestamp}",
      noteCardBody: "Note Text:",
      deleteNote: "Delete",
      deleteNoteFor: "Delete note: {title}",
      savedNotesEmpty: "No saved notes yet.",
      sentNotesEmpty: "No sent notes yet.",
      sentNoteSender: "Sender: {sender}",
      sentNoteRecipient: "Recipient: {recipient}",
      sentNoteChannel: "Delivery Channel: {channel}",
      sentNotePriority: "Priority: {priority}",
      sentNoteDate: "Date & Time: {timestamp}",
      sentNoteMessage: "Message:",
      scratchpadSaved: "Note saved privately in this browser.",
      scratchpadError: "The note could not be saved in this browser.",
      handoffSaveError: "The sent note could not be saved in this browser.",
      handoffHeading: "Send Handoff Note",
      recipientType: "Recipient Type",
      pantryAdmin: "Pantry Admin",
      fellowVolunteer: "Fellow Volunteer",
      volunteerRecipient: "Volunteer recipient",
      deliveryChannel: "Delivery Channel",
      emailChannel: "Email",
      textChannel: "Text / SMS",
      bothChannels: "Both",
      handoffPriority: "Priority",
      generalPriority: "General",
      urgentPriority: "Urgent",
      handoffMessage: "Message",
      handoffError: "Choose an available volunteer and enter a message.",
      sendHandoff: "Send Note",
      handoffReceipt: "{priority} note recorded for {recipient} via {channel} at {time}: {message} This demo does not send messages.",
      handoffReceiptHeading: "Handoff Note Recorded",
      handoffReceiptSent: "Reference ID: {reference} · Sent: {time}",
      handoffReceiptEditedResent: "Reference ID: {reference} · Edited & Resent: {time}",
      handoffReceiptSender: "Sender: {sender}",
      handoffReceiptRecipient: "Recipient: {recipient}",
      handoffReceiptChannel: "Delivery Channel: {channel}",
      handoffReceiptPriority: "Priority: {priority}",
      handoffReceiptMessage: "Message: Click “View Sent Notes” above to view the full message.",
      handoffReceiptNote: "Demo prototype — no live email or text is sent.",
      handoffResent: "{actor} edited and resent a {priority} handoff note to {recipient} via {channel}.",
      privacyHeading: "Communication & Privacy Settings",
      privacyConsent: "You control how teammates can reach you. These preferences help prevent unwanted contact. Contact details are shown only to the volunteer groups you choose; admins can access them for coordination.",
      emailVisibility: "Email Visibility",
      phoneVisibility: "Phone Number Visibility",
      visibleCurrentShift: "Visible to Current Shift Only",
      visibleToday: "Visible to Today's Volunteers",
      hiddenAdminOnly: "Hidden from Volunteers (Admin Only)",
      adminOnlyContact: "Admin Only",
      savePrivacy: "Save Privacy Preferences",
      privacySaved: "Privacy preferences saved.",
      privacyError: "Privacy preferences could not be saved.",
      currentShift: "Current Shift",
      todaysShift: "Today's Shift",
      unitSingular: "unit",
      unitPlural: "units",
      daySingular: "day",
      dayPlural: "days",
      quantitySummaryOne: "Quantity: {quantity} unit",
      quantitySummary: "Quantity: {quantity} units",
      quantityRestockSummary: "Quantity: {quantity} {unit} | Restock expected in {days} {dayUnit}",
      inventoryControls: "Inventory Controls",
      searchItems: "Search items",
      volunteerSearchPlaceholder: "Search inventory",
      filterInventory: "Filter inventory",
      filterAll: "All",
      filterInStock: "✓ In Stock",
      filterOutOfStock: "✕ Out of Stock",
      inventoryItems: "Inventory Items",
      quantityFor: "Quantity for {name}",
      decreaseQuantity: "Decrease quantity for {name}",
      increaseQuantity: "Increase quantity for {name}",
      restockEta: "Restock ETA in days",
      logDonation: "Log New Donation",
      itemName: "Item Name",
      cookingSetupLabel: "Cooking Setup",
      initialQuantity: "Initial Quantity",
      features: "Features",
      setupNoCook: "No-Cook / Pantry Item",
      setupMicrowave: "Microwave-Only",
      setupKitchen: "Full Kitchen",
      addDonation: "Add Donation",
      donationError: "Enter a name for the donated item.",
      recentUpdates: "Recent Shift Updates",
      resetDemoInventory: "Reset Demo Inventory",
      noInventoryMatches: "No inventory items match this filter.",
      itemQuantityUpdated: "{actor} updated {name} from {from} to {quantity} units.",
      itemRestockUpdated: "{actor} updated the restock estimate for {name} to {days} days.",
      itemRestockUpdatedOne: "{actor} updated the restock estimate for {name} to {days} day.",
      donationLogged: "{actor} logged a donation: +{quantity} units of {name}.",
      itemDonationMerged: "{actor} added {quantity} donated units to {name}; new total: {total}.",
      volunteerSignedIn: "{actor} signed in.",
      volunteerSignedOut: "{actor} signed out.",
      handoffSent: "{actor} sent a {priority} handoff note to {recipient} via {channel}.",
      unknownVolunteer: "A volunteer",
      handoffUrgent: "Urgent",
      handoffGeneral: "general",
      seedBlackBeansUpdate: "Marcus T. updated Black beans (canned) from 14 to 22 units.",
      seedBrownRiceDonation: "Elena R. logged a new donation: +12 units of Brown rice.",
      seedAlmondMilkOut: "Priya S. marked Almond milk (Boxed) as Out of Stock (Restock: 1 day).",
      seedCoolerHandoff: "David K. sent an Urgent handoff note to Pantry Admin regarding cooler shelf space.",
      inventoryReset: "Demo inventory reset.",
      stockInStatus: "✓ In Stock",
      stockOutStatus: "✕ Out of Stock",
      showingVolunteerItems: "{count} inventory items shown.",
      showingVolunteerItem: "1 inventory item shown.",
      donationDuplicateError: "An item with that name is already in the inventory.",
      supportTitle: "Support Ticket",
      supportIntro: "Tell us what happened. This prototype does not send or save tickets; it creates a local confirmation for demonstration.",
      yourRole: "Your Role",
      roleClient: "Pantry Client",
      roleVolunteer: "Volunteer",
      rolePartner: "Community Partner / Donor",
      roleOther: "Other",
      roleError: "Please select your role.",
      urgentNeeded: "Urgent — needed before today's pantry pickup",
      otherRoleOptional: "Specify your role (optional)",
      issueCategory: "Issue Category",
      chooseCategory: "Choose a category",
      categoryStock: "Stock Count / Item Availability",
      categoryFilters: "Filter or Search Issue",
      categoryAccessibility: "Accessibility / Display / Read Aloud",
      categoryHours: "Pantry Hours & Pickup Info",
      categoryFeedback: "General Feedback",
      categoryError: "Please choose an issue category.",
      relatedItem: "Related Item or Section (Optional)",
      relatedPlaceholder: "e.g., Maseca Corn Flour or Microwave-Only filters",
      description: "Description",
      descriptionHelp: "Please include enough detail for us to understand the issue.",
      descriptionError: "Please describe the issue.",
      charactersUsed: "Characters used:",
      followUpPreference: "Follow-Up Preference",
      anonymousReply: "No reply needed (Anonymous)",
      emailReply: "Email",
      phoneReply: "Phone / Text",
      emailAddress: "Email Address",
      emailError: "Enter a valid email address for follow-up.",
      phoneNumber: "Phone Number",
      phoneError: "Enter a phone number for follow-up.",
      formError: "Please review the highlighted fields.",
      submitTicket: "Submit Ticket",
      ticketReceived: "Ticket Received",
      referenceId: "Reference ID",
      submitted: "Submitted",
      priority: "Priority",
      priorityUrgent: "Urgent",
      priorityStandard: "Standard",
      copySummary: "Copy Ticket Summary",
      anotherTicket: "Submit Another Ticket",
      returnPortal: "Return to Client Portal",
      copied: "Ticket summary copied.",
      copyFailed: "Could not copy the ticket summary. Select and copy the text below.",
      noMatchAvailable: "No available ingredients match your search and filters. Try changing your selections.",
      noMatchOut: "No out-of-stock items match your search and filters. Try changing your selections.",
      noMatchAvailableLetter: "No available ingredients starting with {letter} match your search and filters.",
      noMatchOutLetter: "No out-of-stock items starting with {letter} match your search and filters.",
      showingAvailable: "Showing {count} available ingredient{plural}.",
      showingOut: "Showing {count} out-of-stock item{plural}.",
      summaryRole: "Role",
      summaryCategory: "Category",
      summaryRelated: "Related item or section",
      summaryDescription: "Description",
      summaryFollowUp: "Follow-up preference",
      summaryContact: "Contact",
      summaryPriority: "Priority"
    },
    es: {
      supportLink: "Soporte",
      homePageTitle: "Prototipo del rastreador de inventario de despensa",
      clientPageTitle: "Portal para clientes de L.O.V.E.",
      supportPageTitle: "Solicitud de soporte | Despensa L.O.V.E.",
      volunteerPageTitle: "Portal para voluntarios | Despensa L.O.V.E.",
      pageControls: "Controles de la página",
      language: "Idioma",
      textSizeGroup: "Tamaño del texto",
      colorThemeGroup: "Tema de color",
      settings: "Ajustes",
      sections: "Secciones",
      accessibilitySettings: "Ajustes de accesibilidad",
      closeSettings: "Cerrar ajustes",
      closeSections: "Cerrar secciones",
      textSize: "Tamaño del texto",
      colorTheme: "Tema de color",
      defaultTheme: "Predeterminado",
      darkTheme: "Oscuro",
      softTheme: "Suave",
      sepiaTheme: "Sepia",
      colorblindSafe: "Seguro para daltonismo",
      highContrast: "Alto contraste",
      readAloud: "Leer en voz alta",
      play: "Reproducir",
      pause: "Pausar",
      stop: "Detener",
      voice: "Voz",
      systemDefault: "Predeterminado del sistema",
      spanishVoiceHelp: "Las voces en español dependen del navegador o sistema operativo (Microsoft Edge incluye voces en español).",
      test: "Probar",
      readingPace: "Velocidad de lectura",
      volume: "Volumen",
      resetSettings: "Restablecer todos los ajustes",
      jumpToSection: "Ir a una sección",
      filterInventoryTools: "Filtrar herramientas del inventario",
      noCookSection: "Sin cocción / Apto para refugios",
      microwaveOnly: "Solo microondas",
      fullKitchenRequired: "Requiere cocina completa",
      familyDinners: "Requiere cocina completa / Comidas familiares",
      availableIngredients: "Ingredientes disponibles",
      outOfStock: "Agotado",
      backHome: "Volver al inicio",
      clientPortal: "Portal para clientes",
      prototypeNotice: "Este prototipo muestra cantidades y disponibilidad ilustrativas, no inventario en tiempo real. La preparación depende de la receta.",
      resetFilters: "Restablecer todos los filtros",
      sampleDataNotice: "Los artículos, recetas, cantidades, disponibilidad y descripciones de esta página son datos de ejemplo y no representan inventario real.",
      filterScopeNotice: "Estos filtros se aplican a los alimentos y recetas, no a las listas de ingredientes disponibles o agotados, que tienen filtros propios.",
      cookingSetup: "Elija su método de cocina (solo uno):",
      showAllLayouts: "Mostrar todas las opciones",
      equipmentYouHave: "Equipo que tiene:",
      equipmentInstructions: "Marque las herramientas que tiene. Los artículos aparecerán cuando tenga todas las herramientas necesarias. Deje todo sin marcar para mostrar todos los artículos.",
      preparationTime: "Tiempo de preparación (elija uno):",
      showAllTimes: "Mostrar todos los tiempos",
      under15: "Menos de 15 minutos",
      "15to30": "De 15 a 30 minutos",
      "30to60": "De 30 a 60 minutos",
      over1Hour: "Más de 1 hora",
      dietaryPreferences: "Preferencias y opciones alimentarias:",
      stockAvailability: "Disponibilidad:",
      showAllItems: "Mostrar todos los artículos",
      inStockOnly: "Solo artículos disponibles",
      softFoodOnly: "Solo opciones de alimentos blandos",
      eatingUtensils: "Incluye utensilios para comer",
      readyToEat: "Listo para comer / Sin cocinar",
      easyOpen: "Empaque fácil de abrir",
      noApplianceNeeded: "No requiere electrodomésticos",
      spoon: "Cuchara",
      knife: "Cuchillo",
      canOpener: "Abrelatas",
      microwave: "Microondas",
      microwaveSafeBowl: "Tazón apto para microondas",
      fork: "Tenedor",
      microwaveSafePlate: "Plato apto para microondas",
      bowlCover: "Tapa para tazón",
      whisk: "Batidor",
      stovetop: "Estufa",
      pot: "Olla",
      skilletOrComal: "Sartén o comal",
      oven: "Horno",
      bakingSheet: "Bandeja para hornear",
      grater: "Rallador",
      rollingPin: "Rodillo",
      bowl: "Tazón",
      bakingDish: "Fuente para hornear",
      casseroleDish: "Cacerola",
      pieDish: "Molde para pay",
      ramekins: "Moldes individuales",
      largeBowl: "Tazón grande",
      jar: "Frasco",
      selectFirstLetter: "Filtrar por primera letra (elija una):",
      searchAvailable: "Buscar ingredientes disponibles:",
      availablePlaceholder: "Buscar ingredientes disponibles",
      searchOutOfStock: "Buscar artículos agotados:",
      outOfStockPlaceholder: "Buscar artículos agotados",
      estimatedRestock: "Filtrar por tiempo estimado de reposición (elija uno):",
      allRestock: "Mostrar todos los tiempos de reposición",
      twoDaysOrLess: "2 días o menos",
      threeToFiveDays: "3–5 días",
      sixPlusDays: "6 días o más",
      inStock: "En stock",
      outOfStockBadge: "Agotado",
      noCookDescription: "Pensado para clientes sin electrodomésticos, cocina o acceso a utensilios.",
      microwaveDescription: "Recetas y opciones que se pueden preparar en microondas.",
      fullKitchenDescription: "Recursos familiares que requieren utensilios, estufa o agua hirviendo.",
      availableIngredientNote: "Las cantidades son ejemplos. Consulte con la despensa para conocer las existencias actuales.",
      outOfStockNote: "Los artículos agotados y las estimaciones de reposición son ejemplos, no información actual de la despensa o entrega.",
      quickNoCookRecipes: "Recetas rápidas sin cocinar",
      under15RecipeHeading: "Recetas de menos de 15 minutos",
      microwaveMeals: "Comidas rápidas para microondas",
      samplePortalFooter: "Prototipo del portal para clientes de L.O.V.E. | SMLP 470",
      all: "Todos",
      under15Recipes: "Menos de 15 minutos",
      "15to30Recipes": "Recetas de 15 a 30 minutos",
      "15to30Baking": "Horneado de 15 a 30 minutos",
      "30to60Recipes": "Recetas de 30 a 60 minutos",
      "30to60Baking": "Horneado de 30 a 60 minutos",
      overHourRecipes: "Recetas de más de 1 hora",
      overHourBaking: "Horneado de más de 1 hora",
      typeLabel: "Tipo:",
      packagingLabel: "Empaque:",
      noteLabel: "Nota:",
      equipmentLabel: "Equipo necesario:",
      preparationLabel: "Tiempo de preparación:",
      ingredientsLabel: "Ingredientes:",
      featuresLabel: "Características:",
      featureReady: "Listo para comer / sin cocinar",
      featureSoft: "Alimento blando",
      featureUtensils: "Incluye utensilios para comer",
      featureEasyOpen: "Empaque fácil de abrir (tapa abre-fácil)",
      featureNoAppliance: "No requiere electrodomésticos",
      featureMicrowave: "Apto para microondas",
      featureOven: "Solo horno / horneado",
      countItems: "{count} artículos y recetas de cocina mostrados",
      countOneItem: "{count} artículo o receta de cocina mostrado",
      noMatchingItems: "Ningún artículo de ejemplo coincide con estos filtros. Cambie sus selecciones. Las listas de ingredientes tienen filtros separados.",
      showingSample: "Mostrando {count} {itemWord} de ejemplo. Las listas de ingredientes tienen filtros separados.",
      sampleItem: "artículo",
      sampleItems: "artículos",
      searchNoMatch: "Ningún/a {name} coincide con su búsqueda y filtros. Intente cambiar sus selecciones.",
      searchLetterNoMatch: "Ningún/a {name} que empiece con {letter} coincide con su búsqueda y filtros.",
      showingList: "Mostrando {count} {name}{plural}.",
      availableIngredient: "ingrediente disponible",
      outOfStockItem: "artículo agotado",
      homeTitle: "ORGANIZACIÓN LAUREL PARA LA EQUIDAD DE VOLUNTARIOS Y RECURSOS (L.O.V.E.)",
      homeWelcome: "¡Hola! ¡Bienvenido a L.O.V.E.! ¡Nos alegra que esté aquí!",
      homeInstructions: "Ayúdenos a servirle mejor indicándonos<br>qué tipo de usuario es y qué<br>espera lograr<br><br>(haga clic en el portal deseado para continuar)",
      availablePortals: "Portales del sistema disponibles",
      enterClientPortal: "ENTRAR AL PORTAL PARA CLIENTES",
      portalsLocked: "Los portales de voluntarios y administradores están en desarrollo",
      homeFooter: "Prototipo de la aplicación L.O.V.E. | SMLP 470",
      enterVolunteerPortal: "ENTRAR AL PORTAL PARA VOLUNTARIOS",
      adminPortalComingSoon: "PORTAL DE ADMINISTRACIÓN — PRÓXIMAMENTE",
      volunteerPortal: "Portal para voluntarios",
      volunteerSignIn: "Inicio de sesión para voluntarios",
      prototypeDisclaimerTitle: "Solo prototipo:",
      volunteerDisclaimer: "Este es un prototipo de portafolio frontend sin base de datos backend en vivo. Los correos personales no funcionarán; use volunteer@lovepantry.org o testing@umd.edu para ver el panel.",
      volunteerSessionIdentityPrefix: "Al iniciar sesión con cualquiera de los correos de demostración (volunteer@lovepantry.org o testing@umd.edu), su sesión activa aparecerá en el portal como ",
      demoUser: "Demo User",
      volunteerEmail: "Correo electrónico del voluntario",
      volunteerEmailError: "No encontramos el correo. Use volunteer@lovepantry.org o testing@umd.edu y seleccione «Completar correo de voluntario de demostración» para ver el portal.",
      next: "Siguiente",
      fillDemoEmail: "Completar correo de voluntario de demostración",
      signedInAs: "Sesión iniciada como",
      signOut: "Cerrar sesión",
      volunteerDashboardNotice: "Solo inventario de demostración. Los cambios se guardan en este navegador y se reflejan en el Portal para clientes; no hay conexión en vivo con la despensa.",
      photoScanNotice: "Próximamente: use la cámara de su teléfono para fotografiar los estantes y actualizar las cantidades automáticamente. Siempre verifique las cantidades manualmente; el escaneo puede equivocarse.",
      inventoryDashboard: "Panel de inventario",
      shiftTeamHeading: "Equipo del turno actual y de hoy",
      inventorySaveError: "No se pudieron guardar los cambios del inventario en este navegador.",
      shiftNotesHeading: "Notas del turno y mensajería de relevo",
      scratchpadHeading: "Bloc personal del turno",
      noteTitle: "Título de la nota (opcional)",
      noteTitlePlaceholder: "Agregue un título (o déjelo vacío para Nota 1, Nota 2...)",
      autoTitle: "Asignar nombre",
      editNote: "Editar",
      cancelEdit: "Cancelar",
      saveChanges: "Guardar cambios",
      editedTimestamp: "Editado: {time}",
      editResendNote: "Editar y reenviar",
      saveResendNote: "Guardar y reenviar",
      deleteSentNote: "Eliminar",
      deleteSentNoteFor: "Eliminar nota enviada a {recipient}",
      editedResentTimestamp: "Editada y reenviada: {time}",
      scratchpadLabel: "Recordatorios privados para este turno",
      scratchpadPlaceholder: "Solo usted puede ver estos recordatorios en este navegador.",
      saveScratchpad: "Guardar nota",
      viewSavedNotes: "Ver notas guardadas ({count})",
      viewSentNotes: "Ver notas enviadas ({count})",
      noteCardTitle: "Título: {title}",
      noteCardDate: "Fecha y hora: {timestamp}",
      noteCardBody: "Texto de la nota:",
      deleteNote: "Eliminar",
      deleteNoteFor: "Eliminar nota: {title}",
      savedNotesEmpty: "Aún no hay notas guardadas.",
      sentNotesEmpty: "Aún no hay notas enviadas.",
      sentNoteSender: "Remitente: {sender}",
      sentNoteRecipient: "Destinatario: {recipient}",
      sentNoteChannel: "Canal de entrega: {channel}",
      sentNotePriority: "Prioridad: {priority}",
      sentNoteDate: "Fecha y hora: {timestamp}",
      sentNoteMessage: "Mensaje:",
      scratchpadSaved: "La nota se guardó de forma privada en este navegador.",
      scratchpadError: "No se pudo guardar la nota en este navegador.",
      handoffSaveError: "No se pudo guardar la nota enviada en este navegador.",
      handoffHeading: "Enviar nota de relevo",
      recipientType: "Tipo de destinatario",
      pantryAdmin: "Administración de la despensa",
      fellowVolunteer: "Otro voluntario",
      volunteerRecipient: "Voluntario destinatario",
      deliveryChannel: "Canal de entrega",
      emailChannel: "Correo electrónico",
      textChannel: "Mensaje de texto / SMS",
      bothChannels: "Ambos",
      handoffPriority: "Prioridad",
      generalPriority: "General",
      urgentPriority: "Urgente",
      handoffMessage: "Mensaje",
      handoffError: "Elija un voluntario disponible e ingrese un mensaje.",
      sendHandoff: "Enviar nota",
      handoffReceipt: "Nota {priority} registrada para {recipient} por {channel} a las {time}: {message} Esta demostración no envía mensajes.",
      handoffReceiptHeading: "Nota de relevo registrada",
      handoffReceiptSent: "Referencia: {reference} · Enviada: {time}",
      handoffReceiptEditedResent: "Referencia: {reference} · Editada y reenviada: {time}",
      handoffReceiptSender: "Remitente: {sender}",
      handoffReceiptRecipient: "Destinatario: {recipient}",
      handoffReceiptChannel: "Canal de entrega: {channel}",
      handoffReceiptPriority: "Prioridad: {priority}",
      handoffReceiptMessage: "Mensaje: Haga clic en «Ver notas enviadas» para ver el mensaje completo.",
      handoffReceiptNote: "Prototipo de demostración: no se envían correos ni mensajes de texto.",
      handoffResent: "{actor} editó y reenvió una nota de relevo {priority} a {recipient} por {channel}.",
      privacyHeading: "Ajustes de comunicación y privacidad",
      privacyConsent: "Usted controla cómo pueden comunicarse sus compañeros. Estas preferencias ayudan a evitar contactos no deseados. Los datos de contacto solo se muestran a los grupos de voluntarios que elija; la administración puede verlos para coordinar.",
      emailVisibility: "Visibilidad del correo electrónico",
      phoneVisibility: "Visibilidad del número de teléfono",
      visibleCurrentShift: "Visible solo para el turno actual",
      visibleToday: "Visible para los voluntarios de hoy",
      hiddenAdminOnly: "Oculto para voluntarios (solo administración)",
      adminOnlyContact: "Solo administración",
      savePrivacy: "Guardar preferencias de privacidad",
      privacySaved: "Se guardaron las preferencias de privacidad.",
      privacyError: "No se pudieron guardar las preferencias de privacidad.",
      currentShift: "Turno actual",
      todaysShift: "Turno de hoy",
      unitSingular: "unidad",
      unitPlural: "unidades",
      daySingular: "día",
      dayPlural: "días",
      quantitySummaryOne: "Cantidad: {quantity} unidad",
      quantitySummary: "Cantidad: {quantity} unidades",
      quantityRestockSummary: "Cantidad: {quantity} {unit} | Reposición prevista en {days} {dayUnit}",
      inventoryControls: "Controles de inventario",
      searchItems: "Buscar artículos",
      volunteerSearchPlaceholder: "Buscar inventario",
      filterInventory: "Filtrar inventario",
      filterAll: "Todos",
      filterInStock: "✓ En existencia",
      filterOutOfStock: "✕ Agotados",
      inventoryItems: "Artículos del inventario",
      quantityFor: "Cantidad de {name}",
      decreaseQuantity: "Reducir cantidad de {name}",
      increaseQuantity: "Aumentar cantidad de {name}",
      restockEta: "Días hasta la reposición",
      logDonation: "Registrar nueva donación",
      itemName: "Nombre del artículo",
      cookingSetupLabel: "Equipo de cocina",
      initialQuantity: "Cantidad inicial",
      features: "Características",
      readyToEat: "Listo para comer / sin cocinar",
      softFoodOnly: "Opciones de alimentos blandos",
      noApplianceNeeded: "No requiere electrodomésticos",
      setupNoCook: "Sin cocinar / artículo de despensa",
      setupMicrowave: "Solo microondas",
      setupKitchen: "Cocina completa",
      addDonation: "Agregar donación",
      donationError: "Ingrese el nombre del artículo donado.",
      recentUpdates: "Actualizaciones recientes del turno",
      resetDemoInventory: "Restablecer inventario de demostración",
      noInventoryMatches: "Ningún artículo coincide con este filtro.",
      itemQuantityUpdated: "{actor} actualizó {name} de {from} a {quantity} unidades.",
      itemRestockUpdated: "{actor} actualizó la reposición de {name} a {days} días.",
      itemRestockUpdatedOne: "{actor} actualizó la reposición de {name} a {days} día.",
      donationLogged: "{actor} registró una donación: +{quantity} unidades de {name}.",
      itemDonationMerged: "{actor} agregó {quantity} unidades donadas a {name}; nuevo total: {total}.",
      volunteerSignedIn: "{actor} inició sesión.",
      volunteerSignedOut: "{actor} cerró sesión.",
      handoffSent: "{actor} envió una nota de relevo {priority} a {recipient} por {channel}.",
      unknownVolunteer: "Un voluntario",
      handoffUrgent: "urgente",
      handoffGeneral: "general",
      seedBlackBeansUpdate: "Marcus T. actualizó frijoles negros (enlatados) de 14 a 22 unidades.",
      seedBrownRiceDonation: "Elena R. registró una nueva donación: +12 unidades de arroz integral.",
      seedAlmondMilkOut: "Priya S. marcó la leche de almendras (en caja) como agotada (reposición: 1 día).",
      seedCoolerHandoff: "David K. envió una nota de relevo urgente a Administración sobre el espacio del estante refrigerado.",
      inventoryReset: "Se restableció el inventario de demostración.",
      stockInStatus: "✓ En existencia",
      stockOutStatus: "✕ Agotado",
      showingVolunteerItems: "Se muestran {count} artículos del inventario.",
      showingVolunteerItem: "Se muestra 1 artículo del inventario.",
      donationDuplicateError: "Ya existe un artículo con ese nombre en el inventario.",
      supportTitle: "Solicitud de soporte",
      supportIntro: "Cuéntenos qué ocurrió. Este prototipo no envía ni guarda solicitudes; crea una confirmación local de demostración.",
      yourRole: "Su función",
      roleClient: "Cliente de la despensa",
      roleVolunteer: "Voluntario/a",
      rolePartner: "Socio comunitario / Donante",
      roleOther: "Otro",
      roleError: "Seleccione su función.",
      urgentNeeded: "Urgente — se necesita antes de la recogida de hoy",
      otherRoleOptional: "Especifique su función (opcional)",
      issueCategory: "Categoría del problema",
      chooseCategory: "Elija una categoría",
      categoryStock: "Cantidad o disponibilidad de artículos",
      categoryFilters: "Problema con filtros o búsqueda",
      categoryAccessibility: "Accesibilidad / Visualización / Lectura en voz alta",
      categoryHours: "Horario de la despensa e información de recogida",
      categoryFeedback: "Comentarios generales",
      categoryError: "Elija una categoría para el problema.",
      relatedItem: "Artículo o sección relacionada (opcional)",
      relatedPlaceholder: "p. ej., harina de maíz Maseca o filtros de solo microondas",
      description: "Descripción",
      descriptionHelp: "Incluya suficientes detalles para que podamos entender el problema.",
      descriptionError: "Describa el problema.",
      charactersUsed: "Caracteres utilizados:",
      followUpPreference: "Preferencia de seguimiento",
      anonymousReply: "No necesito respuesta (anónimo)",
      emailReply: "Correo electrónico",
      phoneReply: "Teléfono / Mensaje de texto",
      emailAddress: "Dirección de correo electrónico",
      emailError: "Ingrese un correo electrónico válido para recibir respuesta.",
      phoneNumber: "Número de teléfono",
      phoneError: "Ingrese un número de teléfono para recibir respuesta.",
      formError: "Revise los campos marcados.",
      submitTicket: "Enviar solicitud",
      ticketReceived: "Solicitud recibida",
      referenceId: "Número de referencia",
      submitted: "Enviado",
      priority: "Prioridad",
      priorityUrgent: "Urgente",
      priorityStandard: "Estándar",
      copySummary: "Copiar resumen de la solicitud",
      anotherTicket: "Enviar otra solicitud",
      returnPortal: "Volver al portal para clientes",
      copied: "Se copió el resumen de la solicitud.",
      copyFailed: "No se pudo copiar el resumen. Seleccione y copie el texto a continuación.",
      noMatchAvailable: "Ningún ingrediente disponible coincide con su búsqueda y filtros. Intente cambiar sus selecciones.",
      noMatchOut: "Ningún artículo agotado coincide con su búsqueda y filtros. Intente cambiar sus selecciones.",
      noMatchAvailableLetter: "Ningún ingrediente disponible que empiece con {letter} coincide con su búsqueda y filtros.",
      noMatchOutLetter: "Ningún artículo agotado que empiece con {letter} coincide con su búsqueda y filtros.",
      showingAvailable: "Mostrando {count} ingrediente(s) disponible(s).",
      showingOut: "Mostrando {count} artículo(s) agotado(s).",
      summaryRole: "Función",
      summaryCategory: "Categoría",
      summaryRelated: "Artículo o sección relacionada",
      summaryDescription: "Descripción",
      summaryFollowUp: "Preferencia de seguimiento",
      summaryContact: "Contacto",
      summaryPriority: "Prioridad"
    }
  };
  window.siteTranslations = translations;
  const sizeChoices = ["xs", "s", "m", "l", "xl"];
  const themeChoices = ["default", "dark", "soft", "sepia", "colorblind", "high-contrast"];
  const sizeKey = "love-pantry-text-size";
  const themeKey = "love-pantry-theme";
  const root = document.documentElement;
  const settingsDrawer = document.getElementById("settings-drawer");
  const sectionsDrawer = document.getElementById("sections-drawer");
  const settingsTrigger = document.getElementById("settings-toggle");
  const sectionsTrigger = document.getElementById("sections-trigger");
  let openedDrawerTrigger = null;
  let speechGeneration = 0;
  let speechQueue = [];
  let speechIndex = 0;
  let voices = [];
  let currentChunk = null;
  let settingsRestartTimer = 0;
  let currentLanguage = root.lang === "es" ? "es" : "en";
  let autoVoiceName = null;

  function translated(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
  }

  function tagTranslatableUI() {
    const reverse = new Map(Object.entries(translations.en).map(([key, text]) => [text, key]));
    const candidates = document.querySelectorAll("h1, h2, h3, p, a, button, label, legend, option, small, span");
    candidates.forEach((element) => {
      if (element.hasAttribute("data-i18n") || element.children.length > 0) return;
      const key = reverse.get(element.textContent.trim());
      if (key) element.dataset.i18n = key;
    });
    document.querySelectorAll('[type="search"]').forEach((input) => {
      if (input.id === "available-ingredient-search") input.dataset.i18nPlaceholder = "availablePlaceholder";
      if (input.id === "out-of-stock-search") input.dataset.i18nPlaceholder = "outOfStockPlaceholder";
    });
  }

  function applyLanguage(language, persist = true) {
    currentLanguage = language === "es" ? "es" : "en";
    root.lang = currentLanguage;
    refreshVoices();
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translated(key);
      if (key === "homeInstructions") element.innerHTML = value;
      else element.textContent = value;
    });
    translatePortalCards();
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", translated(element.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", translated(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll(".drawer-close").forEach((button) => {
      button.setAttribute("aria-label", translated(button.closest("#sections-drawer") ? "closeSections" : "closeSettings"));
    });
    document.querySelectorAll("#inventory-list > section > ul > li[aria-label]").forEach((item) => {
      const title = item.querySelector(":scope > strong")?.textContent.trim();
      if (title) item.setAttribute("aria-label", `${currentLanguage === "es" ? "Leer en voz alta" : "Read aloud"}: ${title}`);
    });
    document.querySelectorAll(".language-toggle").forEach((group) => {
      group.setAttribute("aria-label", currentLanguage === "es" ? "Idioma" : "Language");
    });
    if (persist) savePreference("a11y-lang", currentLanguage);
    if (currentLanguage === "es" && voiceSelect && !voiceSelect.value) selectLanguageVoice("es");
    if (currentLanguage === "en" && voiceSelect?.value === autoVoiceName) {
      voiceSelect.value = "";
      autoVoiceName = null;
    }
    window.dispatchEvent(new CustomEvent("love-pantry-language-change", { detail: { language: currentLanguage } }));
    updateDynamicMessages();
  }

  function updateDynamicMessages() {
    const visible = document.getElementById("visible-results-count");
    if (visible) {
      const count = Number(visible.textContent.match(/\d+/)?.[0] || 0);
      const key = count === 1 ? "countOneItem" : "countItems";
      visible.textContent = translated(key).replace("{count}", String(count));
    }
    const inventoryStatus = document.getElementById("inventory-status");
    if (inventoryStatus) {
      const match = inventoryStatus.textContent.match(/Showing (\d+) sample (item|items)/);
      inventoryStatus.textContent = match
        ? translated("showingSample")
          .replace("{count}", match[1])
          .replace("{itemWord}", translated(Number(match[1]) === 1 ? "sampleItem" : "sampleItems"))
        : translated("noMatchingItems");
    }
    for (const [statusId, listNameKey] of [
      ["available-ingredient-status", "availableIngredient"],
      ["out-of-stock-status", "outOfStockItem"]
    ]) {
      const status = document.getElementById(statusId);
      if (!status) continue;
      const count = Number(status.textContent.match(/Showing (\d+)/)?.[1] || 0);
      const letter = status.textContent.match(/starting with ([A-Z])/i)?.[1];
      const isAvailable = listNameKey === "availableIngredient";
      let message;
      if (status.textContent.startsWith("No ")) {
        const key = isAvailable
          ? letter ? "noMatchAvailableLetter" : "noMatchAvailable"
          : letter ? "noMatchOutLetter" : "noMatchOut";
        message = translated(key).replace("{letter}", letter || "");
      } else {
        message = translated(isAvailable ? "showingAvailable" : "showingOut")
          .replace("{count}", String(count))
          .replace("{plural}", count === 1 ? "" : "s");
      }
      status.textContent = message;
    }
  }

  tagTranslatableUI();
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Unable to save ${key} preference.`, error);
    }
  }

  function setTextSize(size, persist = true) {
    if (!sizeChoices.includes(size)) return;
    root.dataset.textSize = size;
    document.querySelectorAll("button[data-text-size]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.textSize === size));
    });
    if (persist) savePreference(sizeKey, size);
  }

  function setTheme(theme, persist = true) {
    if (!themeChoices.includes(theme)) return;
    root.dataset.theme = theme;
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
    });
    if (persist) savePreference(themeKey, theme);
  }

  function closeDrawer(drawer, trigger) {
    if (!drawer || drawer.hidden) return;
    drawer.hidden = true;
    trigger?.setAttribute("aria-expanded", "false");
    openedDrawerTrigger = null;
  }

  function closeDrawers(restoreFocus = false) {
    const triggerToRestore = openedDrawerTrigger;
    closeDrawer(settingsDrawer, settingsTrigger);
    closeDrawer(sectionsDrawer, sectionsTrigger);
    if (restoreFocus) triggerToRestore?.focus();
    openedDrawerTrigger = null;
  }

  function toggleDrawer(drawer, trigger) {
    if (!drawer || !trigger) return;
    const shouldOpen = drawer.hidden;
    closeDrawers();
    if (shouldOpen) {
      drawer.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      openedDrawerTrigger = trigger;
      drawer.querySelector(".drawer-close")?.focus();
    }
  }

  settingsTrigger?.addEventListener("click", () => toggleDrawer(settingsDrawer, settingsTrigger));
  sectionsTrigger?.addEventListener("click", () => toggleDrawer(sectionsDrawer, sectionsTrigger));
  document.querySelectorAll(".drawer-close").forEach((button) => {
    button.addEventListener("click", () => closeDrawers());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && openedDrawerTrigger) {
      closeDrawers(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!openedDrawerTrigger) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    const header = document.querySelector(".site-header");
    if (header && !header.contains(target)) closeDrawers();
    if (target instanceof HTMLAnchorElement && target.closest(".sections-drawer")) closeDrawers();
  });

  document.querySelectorAll("button[data-text-size]").forEach((button) => {
    button.addEventListener("click", () => setTextSize(button.dataset.textSize));
  });
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
  });
  setTextSize(root.dataset.textSize || "m", false);
  setTheme(root.dataset.theme || "default", false);

  const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  const ttsSection = document.getElementById("tts-section");
  if (!speechSupported && ttsSection) ttsSection.hidden = true;

  const voiceSelect = document.getElementById("tts-voice");
  const spanishVoiceNote = document.getElementById("tts-spanish-voice-note");
  const rateInput = document.getElementById("tts-rate");
  const volumeInput = document.getElementById("tts-volume");
  const rateValue = document.getElementById("tts-rate-value");
  const volumeValue = document.getElementById("tts-volume-value");

  function voiceLabel(voice) {
    if (/google español de estados unidos/i.test(voice.name)) return "Google Español (US)";
    const region = voice.lang.match(/-([a-z]{2,})$/i)?.[1]?.slice(0, 2).toUpperCase();
    const name = voice.name
      .replace(/\b(Microsoft|Apple|Chrome OS|Online)\b/gi, "")
      .replace(/\s*\(Natural\)/gi, "")
      .replace(/\s*-\s*(English|Spanish)\s*\([^)]*\)/gi, "")
      .replace(/\s*\((?:en|es)-[a-z]{2,}\)/gi, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s-]+|[\s-]+$/g, "");
    return region ? `${name} (${region})` : name;
  }

  function refreshVoices() {
    if (!speechSupported || !voiceSelect) return;
    voices = window.speechSynthesis.getVoices();
    const selectedName = voiceSelect.value;
    const english = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
    const spanish = voices.filter((voice) => voice.lang.toLowerCase().startsWith("es"));
    voiceSelect.replaceChildren(new Option(translated("systemDefault"), ""));
    const groups = [[currentLanguage === "es" ? "Inglés" : "English", english]];
    if (spanish.length) groups.push(["Español", spanish]);
    for (const [label, groupVoices] of groups) {
      const group = document.createElement("optgroup");
      group.label = label;
      groupVoices.forEach((voice) => group.append(new Option(voiceLabel(voice), voice.name)));
      voiceSelect.append(group);
    }
    if (spanishVoiceNote) spanishVoiceNote.hidden = spanish.length > 0;
    if (voices.some((voice) => voice.name === selectedName)) voiceSelect.value = selectedName;
    if (!selectedName && currentLanguage === "es") selectLanguageVoice("es");
  }

  function selectLanguageVoice(language) {
    if (!voiceSelect || !voices.length) return;
    const voice = voices.find((candidate) => candidate.lang.toLowerCase().startsWith(language));
    if (!voice) return;
    voiceSelect.value = voice.name;
    autoVoiceName = voice.name;
  }

  if (speechSupported) {
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
  }

  function selectedVoice() {
    return voices.find((voice) => voice.name === voiceSelect?.value) || null;
  }

  function stopSpeech() {
    window.clearTimeout(settingsRestartTimer);
    speechGeneration++;
    speechQueue = [];
    speechIndex = 0;
    currentChunk = null;
    if (speechSupported) window.speechSynthesis.cancel();
  }

  function speakNextChunk(generation) {
    if (!speechSupported || generation !== speechGeneration || speechIndex >= speechQueue.length) return;
    const text = speechQueue[speechIndex++];
    currentChunk = text;
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = selectedVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    utterance.rate = Number(rateInput?.value || 1);
    utterance.volume = Number(volumeInput?.value || 1);
    utterance.onend = () => {
      if (generation !== speechGeneration) return;
      currentChunk = null;
      speakNextChunk(generation);
    };
    utterance.onerror = (event) => {
      if (generation !== speechGeneration) return;
      if (event.error !== "canceled" && event.error !== "interrupted") {
        console.error("Read-aloud playback failed.", event.error);
      }
      stopSpeech();
    };
    window.speechSynthesis.speak(utterance);
  }

  function speakChunks(chunks) {
    if (!speechSupported || chunks.length === 0) return;
    stopSpeech();
    speechQueue = chunks.filter((chunk) => chunk.trim());
    speechIndex = 0;
    const generation = speechGeneration;
    speakNextChunk(generation);
  }

  function currentGreeting() {
    return currentLanguage === "es"
      ? "Hola, bienvenido al rastreador de inventario de LOVE Pantry. Listo para ayudar."
      : "Hi, welcome to the LOVE Pantry Inventory Tracker! Ready to help.";
  }

  function restartSpeechWithUpdatedSettings() {
    if (
      !speechSupported ||
      !window.speechSynthesis.speaking ||
      window.speechSynthesis.paused ||
      !currentChunk
    ) return;
    const chunk = currentChunk;
    speechGeneration++;
    const generation = speechGeneration;
    currentChunk = null;
    speechQueue = [chunk, ...speechQueue.slice(speechIndex)];
    speechIndex = 0;
    window.speechSynthesis.cancel();
    window.setTimeout(() => speakNextChunk(generation), 0);
  }

  function scheduleSpeechSettingsUpdate() {
    if (!speechSupported || !window.speechSynthesis.speaking || window.speechSynthesis.paused) return;
    window.clearTimeout(settingsRestartTimer);
    settingsRestartTimer = window.setTimeout(restartSpeechWithUpdatedSettings, 150);
  }

  document.getElementById("tts-play")?.addEventListener("click", () => {
    if (speechSupported && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      return;
    }
    const chunks = Array.from(document.querySelectorAll("h1, h2, h3, #inventory-list > section > ul > li"))
      .filter((element) => !element.closest(".site-header, [hidden]") && element.getClientRects().length > 0)
      .map((element) => element.innerText.trim())
      .filter(Boolean);
    speakChunks(chunks);
  });
  document.getElementById("tts-pause")?.addEventListener("click", () => {
    if (speechSupported && window.speechSynthesis.speaking) window.speechSynthesis.pause();
  });
  document.getElementById("tts-stop")?.addEventListener("click", stopSpeech);
  document.getElementById("tts-test")?.addEventListener("click", () => speakChunks([currentGreeting()]));

  rateInput?.addEventListener("input", () => {
    if (rateValue) rateValue.value = `${Number(rateInput.value).toFixed(1)}x`;
    scheduleSpeechSettingsUpdate();
  });
  rateInput?.addEventListener("change", scheduleSpeechSettingsUpdate);
  volumeInput?.addEventListener("input", () => {
    if (volumeValue) volumeValue.value = `${Math.round(Number(volumeInput.value) * 100)}%`;
    scheduleSpeechSettingsUpdate();
  });
  volumeInput?.addEventListener("change", scheduleSpeechSettingsUpdate);
  voiceSelect?.addEventListener("change", () => {
    autoVoiceName = null;
    if (speechSupported && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      scheduleSpeechSettingsUpdate();
    }
  });

  const inventory = document.getElementById("inventory-list");
  const detailLabelKeys = new Map([
    ["Type:", "typeLabel"],
    ["Packaging:", "packagingLabel"],
    ["Note:", "noteLabel"],
    ["Equipment needed:", "equipmentLabel"],
    ["Preparation time:", "preparationLabel"],
    ["Ingredients:", "ingredientsLabel"],
    ["Features:", "featuresLabel"]
  ]);
  const featureKeys = new Map([
    [translations.en.featureReady, "featureReady"],
    [translations.en.featureSoft, "featureSoft"],
    [translations.en.featureUtensils, "featureUtensils"],
    [translations.en.featureEasyOpen, "featureEasyOpen"],
    [translations.en.featureNoAppliance, "featureNoAppliance"],
    [translations.en.featureMicrowave, "featureMicrowave"],
    [translations.en.featureOven, "featureOven"]
  ]);
  const catalogTitlesEs = new Map(Object.entries({
    "Fruit Snack & Granola Bars": "Barras de fruta y granola",
    "Applesauce Cups": "Vasitos de puré de manzana",
    "Apple rings": "Rodajas de manzana",
    "Banana chips": "Chips de plátano",
    "Blueberries (dried)": "Arándanos azules (deshidratados)",
    "Cantaloupe (whole)": "Melón cantalupo (entero)",
    Clementines: "Clementinas",
    "Coconut flakes / shreds": "Hojuelas / coco rallado",
    Currants: "Grosellas",
    "Dates (Medjool, Deglet Noor)": "Dátiles (Medjool, Deglet Noor)",
    "Figs (Mission, Turkish)": "Higos (Mission, turcos)",
    "Goji berries": "Bayas de goji",
    Grapefruit: "Toronja",
    "Grapefruit segments (canned)": "Gajos de toronja (enlatados)",
    "Honeydew melon (whole)": "Melón verde (entero)",
    "Jackfruit (green in brine or sweet in syrup)": "Yaca (verde en salmuera o dulce en almíbar)",
    "Lychees (canned)": "Lichis (enlatados)",
    "Mandarin oranges (canned)": "Mandarinas (enlatadas)",
    "Maraschino cherries": "Cerezas al marrasquino",
    Oranges: "Naranjas",
    "Pears (canned slices or halves)": "Peras (mitades o rebanadas enlatadas)",
    "Pie fillings (apple, cherry, blueberry)": "Rellenos para pay (manzana, cereza, arándano)",
    "Pineapple chunks (dried)": "Trozos de piña (deshidratados)",
    "Pineapple slices, chunks, tidbits, or crushed (canned)": "Rodajas, trozos o piña triturada (enlatada)",
    Pomegranates: "Granadas",
    "Prunes (dried plums)": "Ciruelas pasas",
    "Pumpkin puree (canned)": "Puré de calabaza (enlatado)",
    "Watermelon (whole)": "Sandía (entera)",
    Apricots: "Albaricoques",
    Avocados: "Aguacates",
    "Bay leaves": "Hojas de laurel",
    "Breadcrumbs (plain or panko)": "Pan rallado (normal o panko)",
    "Cajun seasoning": "Condimento cajún",
    "Cayenne pepper": "Pimienta de cayena",
    Chard: "Acelga",
    "Chile powder": "Chile en polvo",
    "Chiles (chipotles in adobo or pickled jalapenos)": "Chiles (chipotles en adobo o jalapeños encurtidos)",
    Cookies: "Galletas",
    "Crushed red pepper": "Hojuelas de chile rojo",
    "Dill seed": "Semillas de eneldo",
    "Fennel seed": "Semillas de hinojo",
    Hominy: "Maíz pozolero",
    Jam: "Mermelada",
    Jelly: "Jalea",
    Ketchup: "Salsa de tomate",
    Marshmallows: "Malvaviscos",
    "Popcorn kernels": "Granos de palomitas de maíz",
    Preserves: "Conservas de fruta",
    Scallions: "Cebollines",
    Shells: "Pasta de conchas",
    "Soybean oil": "Aceite de soya",
    Tea: "Té",
    "Toasted sesame oil": "Aceite de sésamo tostado",
    "Vanilla ice cream": "Helado de vainilla",
    "Walnut oil": "Aceite de nuez",
    "Worcestershire sauce": "Salsa inglesa",
    Baguette: "Baguette",
    Coffee: "Café",
    "Multi-grain cereal": "Cereal multigrano",
    "Mediterranean Chickpea Salad": "Ensalada mediterránea de garbanzos",
    "Fruit & Seed Energy Bowl": "Tazón energético de frutas y semillas",
    "Canned Chicken Salad Romaine Wraps": "Wraps de lechuga romana con ensalada de pollo enlatado",
    "Spicy Avocado & Cracker Mash": "Puré picante de aguacate con galletas saladas",
    "Anchovy & Garlic White Bean Salad": "Ensalada de frijoles blancos con anchoas y ajo",
    "Spicy Spam & Pickle Lettuce Boats": "Barquitos de lechuga con Spam picante y pepinillos",
    "Harvest Yogurt Breakfast Parfait": "Parfait de yogur y fruta de temporada",
    "Zesty Rice Cake & Bean Tostadas": "Tostadas de tortitas de arroz y frijoles",
    "Tropical Coconut Oatmeal Bowls": "Tazones tropicales de avena y coco",
    "Crunch-Master Protein Snack Mix": "Mezcla crujiente de frutos secos y semillas",
    "Goat Cheese & Roasted Red Pepper Wraps": "Wraps de queso de cabra y pimiento rojo asado",
    "Orchard Fruit & Nut Butter Crackers": "Galletas saladas con fruta y crema de frutos secos",
    "Sweet Chili Canned Chicken Salad": "Ensalada de pollo enlatado con chile dulce",
    "Sweet & Savory Chia Seed Pudding": "Pudín dulce y salado de chía",
    "Mac & Cheese Cups": "Vasitos de macarrones con queso",
    "Canned Vegetable Soup": "Sopa de verduras enlatada",
    "Microwave Mac and Cheese Up-grade": "Macarrones con queso mejorados para microondas",
    "Easy Microwave Tuna & Pea Mac": "Macarrones fáciles con atún y chícharos al microondas",
    "Microwave Loaded Canned Potato Chowder": "Crema completa de papa enlatada para microondas",
    "Steamed Curry Rice Mix with Chicken": "Arroz al vapor con curry y pollo",
    "Quick Sweet Agave Oatmeal": "Avena dulce rápida con agave",
    "Warm Garlic & Herb Cannellini Beans": "Frijoles cannellini calientes con ajo y hierbas",
    "Microwave Cheesy Broccoli Rice Bowl": "Tazón de arroz con brócoli y queso para microondas",
    "Quick Microwave Polenta Porridge": "Polenta rápida para microondas",
    "Microwave Sweet Potato & Black Bean Bowl": "Tazón de camote y frijoles negros para microondas",
    "Quick Steamed Couscous & Veggie Medley": "Cuscús rápido al vapor con verduras variadas",
    "Microwave Poached Salmon/Fish-Style Tuna": "Salmón escalfado o atún estilo pescado para microondas",
    "Spaghetti & Pasta Sauce": "Espagueti con salsa para pasta",
    "Spam & Scallion Fried Rice": "Arroz frito con Spam y cebollín",
    "Quick Egg Noodles with Garlic Butter": "Fideos de huevo rápidos con mantequilla de ajo",
    "Savory Polenta with Mushrooms & Greens": "Polenta salada con champiñones y hojas verdes",
    "Quick Chili-Lime Ground Turkey Tacos": "Tacos rápidos de pavo molido con chile y limón",
    "Tomato Garlic Bruschetta Skillet": "Bruschetta de tomate y ajo en sartén",
    "Quick Cinnamon Apple Puff Bites": "Bocaditos rápidos de hojaldre con manzana y canela",
    "Fast Savory Cheddar Biscuits": "Bizcochos salados rápidos de cheddar",
    "Quick Ground Turkey & Rice Skillet": "Pavo molido con arroz rápido en sartén",
    "Creamy Tomato Shells": "Pasta de conchas cremosa con tomate",
    "Skillet Italian Sausage & Cannellini Beans": "Salchicha italiana con frijoles cannellini en sartén",
    "Cajun Chicken & Brown Rice Casserole": "Cazuela cajún de pollo y arroz integral",
    "Potato and Green Bean Curry": "Curry de papa y ejotes",
    "Easy Canned Peach Galette": "Galette fácil de durazno enlatado",
    "Sweet Potato Puff Pastry Turnovers": "Empanadillas de hojaldre con camote",
    "Italian Sausage & Mozzarella Pizza Pockets": "Bolsillos de pizza con salchicha italiana y mozzarella",
    "Classic Dry Black Bean Stew": "Guiso clásico de frijoles negros secos",
    "Slow-Simmered Bolognese with Rotini": "Salsa boloñesa a fuego lento con rotini",
    "Scratch-Made Lentil Soup": "Sopa de lentejas hecha desde cero",
    "Red Beans and Rice with Sausage": "Frijoles rojos con arroz y salchicha",
    "Slow-Simmered Chicken Bulgur Porridge": "Gachas de bulgur con pollo a fuego lento",
    "Old-Fashioned Baked Apple Crisp": "Crujiente de manzana al horno tradicional",
    "Three-Bean Savory Biscuit Casserole": "Cazuela salada de tres frijoles con bizcochos",
    "Deep Dish Berry Pie from Scratch": "Pay hondo de frutos rojos hecho desde cero",
    "Slow-Baked Pumpkin Custard Pots": "Natillas de calabaza horneadas lentamente",
    "Cheesy Polenta & Sausage Bake": "Polenta gratinada con queso y salchicha",
    "Maseca Corn Flour": "Harina de maíz Maseca",
    "Maseca corn flour": "Harina de maíz Maseca"
  }));
  const catalogTermsEs = new Map(Object.entries({
    "Black beans": "frijoles negros", "white beans": "frijoles blancos", "kidney beans": "frijoles rojos",
    "pinto beans": "frijoles pintos", "navy beans": "frijoles blancos pequeños", "green beans": "ejotes",
    "cannellini beans": "frijoles cannellini", "chickpeas": "garbanzos", "lentils": "lentejas",
    "refried beans": "frijoles refritos", "rice noodles": "fideos de arroz", "egg noodles": "fideos de huevo",
    "whole grain pasta": "pasta integral", "spaghetti": "espagueti", "rotini": "rotini", "polenta": "polenta",
    "couscous": "cuscús", "bulgur": "bulgur", "brown rice": "arroz integral", "white rice": "arroz blanco",
    "rice mixes": "mezclas de arroz", "oatmeal": "avena", "rolled oats": "avena en hojuelas",
    "granola bars": "barras de granola", "fruit snack": "bocadillo de fruta", "applesauce": "puré de manzana",
    "apple": "manzana", "apples": "manzanas", "banana": "plátano", "bananas": "plátanos", "pears": "peras",
    "pear": "pera", "peaches": "duraznos", "peach": "durazno", "pineapple": "piña", "mango": "mango",
    "mangos": "mangos", "oranges": "naranjas", "orange": "naranja", "lemons": "limones", "lemon": "limón",
    "limes": "limas", "lime": "lima", "grapefruit": "toronja", "grapes": "uvas", "cherries": "cerezas",
    "cherry": "cereza", "berries": "frutos rojos", "blueberries": "arándanos azules", "strawberries": "fresas",
    "watermelon": "sandía", "pumpkin": "calabaza", "sweet potatoes": "camotes", "potatoes": "papas",
    "potato": "papa", "yams": "ñames", "tomatoes": "tomates", "tomato": "tomate", "onions": "cebollas",
    "onion": "cebolla", "garlic": "ajo", "broccoli": "brócoli", "carrots": "zanahorias",
    "cauliflower": "coliflor", "celery": "apio", "spinach": "espinacas", "kale": "col rizada",
    "lettuce": "lechuga", "greens": "hojas verdes", "mushrooms": "champiñones", "mushroom": "champiñón",
    "bell peppers": "pimientos", "peppers": "pimientos", "corn": "maíz", "peas": "chícharos",
    "mixed vegetables": "verduras mixtas", "chicken": "pollo", "turkey": "pavo", "beef": "res",
    "sausage": "salchicha", "bacon": "tocino", "tuna": "atún", "salmon": "salmón", "anchovy": "anchoa",
    "spam": "Spam", "eggs": "huevos", "milk": "leche", "yogurt": "yogur", "cheddar": "cheddar",
    "mozzarella": "mozzarella", "goat cheese": "queso de cabra", "parmesan": "parmesano",
    "cheese": "queso", "butter": "mantequilla", "flour": "harina", "corn flour": "harina de maíz",
    "bread": "pan", "biscuits": "bizcochos", "crackers": "galletas saladas", "tortillas": "tortillas",
    "puff pastry": "hojaldre", "pie dough": "masa para pay", "pizza dough": "masa para pizza",
    "chocolate": "chocolate", "cocoa powder": "cacao en polvo", "sugar": "azúcar", "honey": "miel",
    "agave syrup": "jarabe de agave", "maple syrup": "jarabe de arce", "coconut milk": "leche de coco",
    "almond milk": "leche de almendras", "oat milk": "leche de avena", "olive oil": "aceite de oliva",
    "vegetable oil": "aceite vegetal", "vinegar": "vinagre", "soy sauce": "salsa de soya",
    "mayonnaise": "mayonesa", "mustard": "mostaza", "salsa": "salsa", "pickles": "pepinillos",
    "olives": "aceitunas", "capers": "alcaparras", "cilantro": "cilantro", "parsley": "perejil",
    "basil": "albahaca", "oregano": "orégano", "thyme": "tomillo", "rosemary": "romero",
    "cinnamon": "canela", "cumin": "comino", "paprika": "pimentón", "chili powder": "chile en polvo",
    "black pepper": "pimienta negra", "salt": "sal", "ginger": "jengibre", "curry powder": "curry en polvo",
    "sunflower seeds": "semillas de girasol", "chia seeds": "semillas de chía", "flax seeds": "semillas de linaza",
    "hemp seeds": "semillas de cáñamo", "sesame seeds": "semillas de sésamo", "pecans": "nueces pecanas",
    "walnuts": "nueces", "almonds": "almendras", "raisins": "pasas", "pretzels": "pretzels",
    "chicken broth": "caldo de pollo", "ground beef": "carne molida de res",
    "bay leaves": "hojas de laurel", "cayenne pepper": "pimienta de cayena",
    "crushed red pepper": "hojuelas de chile rojo", "dill seed": "semillas de eneldo",
    "fennel seed": "semillas de hinojo", "soybean oil": "aceite de soya",
    "sesame oil": "aceite de sésamo", "walnut oil": "aceite de nuez",
    "worcestershire sauce": "salsa inglesa", "bread crumbs": "pan rallado",
    "breadcrumbs": "pan rallado", "cajun seasoning": "condimento cajún", "cayenne": "cayena",
    "chard": "acelga", "hominy": "maíz pozolero", "jam": "mermelada", "jelly": "jalea",
    "ketchup": "salsa de tomate", "marshmallows": "malvaviscos", "popcorn kernels": "granos de palomitas",
    "preserves": "conservas", "scallions": "cebollines", "shells": "conchas",
    "tea": "té", "vanilla ice cream": "helado de vainilla", "baguette": "baguette",
    "coffee": "café", "multi-grain cereal": "cereal multigrano", "quinoa": "quinua",
    "apricots": "albaricoques", "avocados": "aguacates", "cookies": "galletas",
    "chiles": "chiles", "farro": "farro", "spam": "Spam",
    "main course": "plato principal", "side dish": "acompañamiento", "light meal": "comida ligera",
    "breakfast": "desayuno", "dessert": "postre", "snack": "bocadillo", "meal": "comida",
    "soup": "sopa", "fruit": "fruta", "salad": "ensalada", "pasta": "pasta",
    "large": "grande", "deep": "hondo", "plastic": "plástico", "wrapper": "envoltura",
    "includes plastic forks/napkins": "incluye tenedores y servilletas de plástico",
    "easy-open packaging varies by product": "el empaque fácil de abrir depende del producto",
    "commonly used for cooking or baking": "se usa comúnmente para cocinar u hornear",
    "commonly used for baking": "se usa comúnmente para hornear",
    "does not require cooking": "no requiere cocción", "microwave to prepare": "cocine en microondas",
    "not a ready-to-eat item": "no es un producto listo para comer",
    "peel by hand": "se pela a mano", "whole fruit": "fruta entera",
    "restock expected in": "reposición prevista en", "days": "días", "day": "día",
    "black peppercorns": "granos de pimienta negra", "fine salt": "sal fina", "kosher salt": "sal kosher",
    "granulated garlic": "ajo granulado", "ground cinnamon": "canela molida", "ground cloves": "clavo molido",
    "ground cumin": "comino molido", "extra virgin olive oil": "aceite de oliva extra virgen",
    "coconut flakes": "hojuelas de coco", "flat-leaf parsley": "perejil de hoja plana",
    "canned peaches": "duraznos enlatados", "canned chicken": "pollo enlatado",
    "canned vegetable soup": "sopa de verduras enlatada", "rice cake": "tortita de arroz",
    "fruit snack pouches": "bolsitas de bocadillos de fruta", "mixed fruit cans": "latas de fruta mixta",
    "oatmeal bars": "barras de avena", "crispy rice": "arroz inflado", "cornflakes": "hojuelas de maíz",
    "red beans": "frijoles rojos",
    "cherry tomatoes": "tomates cherry", "roasted red peppers": "pimientos rojos asados",
    "brown sugar": "azúcar morena", "granulated sugar": "azúcar granulada",
    "balsamic vinegar": "vinagre balsámico", "apple cider vinegar": "vinagre de sidra de manzana",
    "hot sauce": "salsa picante", "fish sauce": "salsa de pescado", "tomato paste": "pasta de tomate",
    "tomato sauce": "salsa de tomate", "tomato puree": "puré de tomate", "pumpkin puree": "puré de calabaza",
    "evaporated milk": "leche evaporada", "cream of tartar": "cremor tártaro",
    "baking powder": "polvo para hornear", "baking soda": "bicarbonato de sodio",
    "can opener": "abrelatas", "microwave-safe bowl": "tazón apto para microondas",
    "microwave-safe plate": "plato apto para microondas", "baking sheet": "bandeja para hornear",
    "rolling pin": "rodillo", "skillet": "sartén", "spoon": "cuchara", "knife": "cuchillo",
    "fork": "tenedor", "bowl": "tazón", "whisk": "batidor", "oven": "horno", "microwave": "microondas",
    "stovetop": "estufa", "none needed": "ninguno necesario", "tool needed": "utensilio necesario",
    "may be needed": "puede ser necesario", "ready to eat": "listo para comer",
    "ready-to-eat": "listo para comer", "after opening": "después de abrir", "pull-tab lid": "tapa abre-fácil",
    "soft food": "alimento blando", "easy-open packaging": "empaque fácil de abrir",
    "no cooking appliance needed": "no requiere electrodomésticos", "microwave-friendly": "apto para microondas",
    "dry": "seco", "dried": "deshidratado", "whole": "entero", "fresh": "fresco",
    "canned": "enlatado", "frozen": "congelado", "box": "caja", "boxed": "en caja",
    "pouch": "bolsa", "pouches": "bolsas", "cup": "vasito", "cups": "vasitos", "bag": "bolsa",
    "jar": "frasco", "about": "aproximadamente", "minutes": "minutos", "servings": "porciones", "units": "unidades", "unit": "unidad"
  }));

  function translateCatalogText(value) {
    if (currentLanguage !== "es") return value;
    if (catalogTitlesEs.has(value)) return catalogTitlesEs.get(value);
    const terms = [...catalogTermsEs.entries()].sort((first, second) => second[0].length - first[0].length);
    const alternatives = terms.map(([english]) => english.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const lookup = new Map(terms.map(([english, spanish]) => [english.toLowerCase(), spanish]));
    return value.replace(new RegExp(`\\b(${alternatives.join("|")})\\b`, "gi"), (match) => lookup.get(match.toLowerCase()) || match);
  }

  function translatePortalCards() {
    if (!inventory) return;
    inventory.querySelectorAll(":scope > section > ul > li").forEach((item) => {
      const title = item.querySelector(":scope > strong");
      if (!title) return;
      const sourceTitle = item.dataset.sourceTitle || title.textContent.trim();
      item.dataset.sourceTitle = sourceTitle;
      const spanishTitle = catalogTitlesEs.get(sourceTitle) || translateCatalogText(sourceTitle);
      title.textContent = currentLanguage === "es" ? spanishTitle : sourceTitle;
      item.dataset.searchText = `${sourceTitle} ${spanishTitle}`.toLocaleLowerCase();
      item.dataset.searchNameEn = sourceTitle;
      item.dataset.searchNameEs = spanishTitle;

      item.querySelectorAll(":scope > .stock-detail").forEach((detail) => {
        const sourceValue = detail.dataset.sourceValue || detail.textContent.trim();
        detail.dataset.sourceValue = sourceValue;
        detail.textContent = currentLanguage === "es" ? translateCatalogText(sourceValue) : sourceValue;
      });

      item.querySelectorAll(":scope > .item-details > .item-detail").forEach((detail) => {
        if (detail.querySelector("[data-i18n^='feature']")) return;
        const value = detail.dataset.sourceValue || detail.lastChild?.textContent.trim() || "";
        detail.dataset.sourceValue = value;
        const translatedValue = currentLanguage === "es" ? translateCatalogText(value) : value;
        if (detail.lastChild?.nodeType === Node.TEXT_NODE && detail.querySelector("strong")) {
          detail.lastChild.textContent = ` ${translatedValue}`;
        } else if (!detail.querySelector("strong")) {
          detail.textContent = translatedValue;
        }
      });
    });
  }

  function formatItemCards() {
    if (!inventory) return;
    inventory.querySelectorAll("li").forEach((item) => {
      if (item.parentElement?.parentElement?.parentElement !== inventory) return;
      const title = item.querySelector(":scope > strong");
      if (title && !item.dataset.sourceTitle) item.dataset.sourceTitle = title.textContent.trim();
      const status = item.querySelector(".status-in, .status-out");
      if (status) {
        const statusText = status.textContent.trim();
        const isOut = status.classList.contains("status-out") || /^out of stock/i.test(statusText);
        const label = isOut ? "Out of Stock" : "In Stock";
        const details = statusText.replace(/^(?:in stock|out of stock|en stock|agotado)/i, "").replace(/^\s*\|\s*/, "").trim();
        const statusKey = isOut ? "outOfStockBadge" : "inStock";
        status.dataset.i18n = statusKey;
        status.textContent = label;
        status.setAttribute("aria-label", label);
        status.dataset.i18nAriaLabel = statusKey;
        item.classList.add(isOut ? "inventory-card-out" : "inventory-card-in");
        if (details && !status.nextElementSibling?.classList.contains("stock-detail")) {
          const detail = document.createElement("small");
          detail.className = "stock-detail";
          detail.dataset.sourceValue = details;
          detail.textContent = details;
          status.insertAdjacentElement("afterend", detail);
        }
      }

      item.querySelectorAll(":scope > strong").forEach((title) => {
        const next = title.nextSibling;
        if (next?.nodeType === Node.TEXT_NODE) next.textContent = next.textContent.replace(/\s*-\s*$/, " ");
      });

      if (item.closest("#no-cook, #microwave, #full-kitchen")) {
        item.querySelectorAll(":scope > small").forEach((details) => {
          if (details.classList.contains("stock-detail")) return;
          const list = document.createElement("ul");
          list.className = "item-details";
          const parts = details.textContent.split("|").map((part) => part.trim()).filter(Boolean);
          if (details.classList.contains("item-features")) {
            const features = parts.join(", ").replace(/^Features:\s*/i, "").trim();
            if (!features) {
              details.remove();
              return;
            }
            const entry = document.createElement("li");
            entry.className = "item-detail";
            const label = document.createElement("strong");
            label.dataset.i18n = "featuresLabel";
            label.textContent = "Features:";
            entry.append(label, document.createTextNode(" "));
            features.split(", ").forEach((feature, index) => {
              if (index) entry.append(document.createTextNode(", "));
              const featureSpan = document.createElement("span");
              const featureKey = featureKeys.get(feature);
              if (featureKey) featureSpan.dataset.i18n = featureKey;
              featureSpan.textContent = feature;
              entry.append(featureSpan);
            });
            list.append(entry);
          } else parts.forEach((part) => {
            const entry = document.createElement("li");
            entry.className = "item-detail";
            const colon = part.indexOf(":");
            if (colon > 0) {
              const label = document.createElement("strong");
              const labelText = part.slice(0, colon + 1);
              const labelKey = detailLabelKeys.get(labelText);
              if (labelKey) label.dataset.i18n = labelKey;
              label.textContent = labelText;
              const value = part.slice(colon + 1).trim();
              entry.dataset.sourceValue = value;
              entry.append(label, document.createTextNode(` ${value}`));
            } else {
              entry.dataset.sourceValue = part;
              entry.textContent = part;
            }
            list.append(entry);
          });
          details.replaceWith(list);
        });
        translatePortalCards();
      }

      if (item.matches("li[data-minutes]:not([data-minutes='0'])")) item.classList.add("recipe-card");
      if (!item.hasAttribute("tabindex")) item.tabIndex = 0;
      if (!item.hasAttribute("aria-label")) {
        const title = item.querySelector(":scope > strong")?.textContent.trim();
        if (title) item.setAttribute("aria-label", currentLanguage === "es" ? `Leer en voz alta: ${title}` : `Read aloud: ${title}`);
      }
    });
  }

  formatItemCards();
  window.addEventListener("love-pantry-inventory-updated", formatItemCards);
  inventory?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element) || target.closest("a, button, input, select, textarea")) return;
    const card = target.closest("#inventory-list > section > ul > li");
    if (card && inventory.contains(card)) speakChunks([card.innerText.trim()]);
  });
  inventory?.addEventListener("keydown", (event) => {
    if ((event.key !== "Enter" && event.key !== " ") || !(event.target instanceof HTMLLIElement)) return;
    const card = event.target.closest("#inventory-list > section > ul > li");
    if (card) {
      event.preventDefault();
      speakChunks([card.innerText.trim()]);
    }
  });

  document.querySelectorAll(".reset-settings").forEach((button) => {
    button.addEventListener("click", () => {
      stopSpeech();
      setTextSize("m");
      setTheme("default");
      if (voiceSelect) voiceSelect.value = "";
      if (rateInput) rateInput.value = "1";
      if (volumeInput) volumeInput.value = "1";
      if (rateValue) rateValue.value = "1.0x";
      if (volumeValue) volumeValue.value = "100%";
      closeDrawers(true);
    });
  });

  function initializeSupportForm() {
    const form = document.getElementById("support-form");
    if (!form) return;
    const otherRoleWrap = document.getElementById("other-role-wrap");
    const otherRoleInput = document.getElementById("other-role");
    const roleGroup = form.querySelector('[role="radiogroup"][aria-labelledby="role-heading"]');
    const categoryGroup = document.getElementById("issue-category");
    const followUpGroup = document.getElementById("follow-up");
    const urgentInput = document.getElementById("ticket-urgent");
    const emailWrap = document.getElementById("email-wrap");
    const phoneWrap = document.getElementById("phone-wrap");
    const emailInput = document.getElementById("contact-email");
    const phoneInput = document.getElementById("contact-phone");
    const description = document.getElementById("description");
    const characterCount = document.getElementById("character-count");
    const confirmation = document.getElementById("ticket-confirmation");
    let submitAttempted = false;
    let roleTouched = false;
    let categoryTouched = false;
    let descriptionTouched = false;
    let ticket = null;

    function selectedValue(group) {
      return group.querySelector('input[type="radio"]:checked')?.value || "";
    }

    function showFollowUpField() {
      const followUpValue = selectedValue(followUpGroup);
      const emailSelected = followUpValue === "email";
      const phoneSelected = followUpValue === "phone";
      emailWrap.hidden = !emailSelected;
      phoneWrap.hidden = !phoneSelected;
      emailInput.required = emailSelected;
      phoneInput.required = phoneSelected;
      if (!emailSelected) {
        emailInput.value = "";
        clearError(emailInput, "email-error");
      }
      if (!phoneSelected) {
        phoneInput.value = "";
        clearError(phoneInput, "phone-error");
      }
    }

    function clearError(field, errorId) {
      field.removeAttribute("aria-invalid");
      document.getElementById(errorId).hidden = true;
    }

    function setError(field, errorId, show) {
      if (show) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      document.getElementById(errorId).hidden = !show;
    }

    function renderTicketSummary() {
      if (!ticket) return;
      const list = document.createElement("ul");
      list.className = "ticket-summary-list";
      const roleKeys = {
        "Pantry Client": "roleClient",
        Volunteer: "roleVolunteer",
        "Community Partner / Donor": "rolePartner"
      };
      const roleText = ticket.roleValue === "Other"
        ? ticket.otherRole || translated("roleOther")
        : translated(roleKeys[ticket.roleValue]);
      const categoryText = translated(ticket.categoryKey);
      const followUpText = translated(ticket.followUpKey);
      const rows = [
        ["summaryRole", roleText],
        ["summaryCategory", categoryText],
        ["summaryPriority", translated(ticket.urgent ? "priorityUrgent" : "priorityStandard")],
        ["summaryRelated", ticket.related || "—"],
        ["summaryDescription", ticket.description],
        ["summaryFollowUp", followUpText],
        ["summaryContact", ticket.contact || "—"]
      ];
      rows.forEach(([key, value]) => {
        const row = document.createElement("li");
        const label = document.createElement("strong");
        label.textContent = `${translated(key)}:`;
        row.append(label, document.createTextNode(` ${value}`));
        list.append(row);
      });
      document.getElementById("ticket-summary").replaceChildren(list);
    }

    function validateRole(show) {
      const invalid = !selectedValue(roleGroup);
      roleGroup.setAttribute("aria-invalid", String(invalid));
      roleGroup.querySelectorAll('input[name="role"]').forEach((input) => {
        if (invalid) input.setAttribute("aria-invalid", "true");
        else input.removeAttribute("aria-invalid");
      });
      document.getElementById("role-error").hidden = !(show && invalid);
      return !invalid;
    }

    function validateCategory(show) {
      const invalid = !selectedValue(categoryGroup);
      categoryGroup.setAttribute("aria-invalid", String(invalid));
      categoryGroup.querySelectorAll('input[name="category"]').forEach((input) => {
        if (invalid) input.setAttribute("aria-invalid", "true");
        else input.removeAttribute("aria-invalid");
      });
      document.getElementById("category-error").hidden = !(show && invalid);
      return !invalid;
    }

    function validateDescription(show) {
      const invalid = !description.value.trim();
      setError(description, "description-error", show && invalid);
      return !invalid;
    }

    form.querySelectorAll('input[name="role"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        validateRole(submitAttempted || roleTouched);
        const isOther = radio.value === "Other" && radio.checked;
        otherRoleWrap.hidden = !isOther;
        if (!isOther) otherRoleInput.value = "";
      });
    });
    roleGroup.addEventListener("focusout", (event) => {
      if (!roleGroup.contains(event.relatedTarget)) {
        roleTouched = true;
        validateRole(true);
      }
    });
    categoryGroup.querySelectorAll('input[name="category"]').forEach((radio) => {
      radio.addEventListener("change", () => validateCategory(submitAttempted || categoryTouched));
    });
    categoryGroup.addEventListener("focusout", (event) => {
      if (!categoryGroup.contains(event.relatedTarget)) {
        categoryTouched = true;
        validateCategory(true);
      }
    });
    followUpGroup.querySelectorAll('input[name="followUp"]').forEach((radio) => {
      radio.addEventListener("change", showFollowUpField);
    });
    description.addEventListener("blur", () => {
      descriptionTouched = true;
      validateDescription(true);
    });
    description.addEventListener("input", () => validateDescription(submitAttempted || descriptionTouched));
    emailInput.addEventListener("input", () => clearError(emailInput, "email-error"));
    phoneInput.addEventListener("input", () => clearError(phoneInput, "phone-error"));
    emailInput.addEventListener("blur", () => {
      if (selectedValue(followUpGroup) === "email") {
        setError(emailInput, "email-error", !emailInput.value.trim() || !emailInput.validity.valid);
      }
    });
    phoneInput.addEventListener("blur", () => {
      if (selectedValue(followUpGroup) === "phone") {
        setError(phoneInput, "phone-error", !phoneInput.value.trim());
      }
    });
    description.addEventListener("input", () => {
      characterCount.textContent = String(description.value.length);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitAttempted = true;
      const role = form.querySelector('input[name="role"]:checked');
      const category = form.querySelector('input[name="category"]:checked');
      const followUp = selectedValue(followUpGroup);
      const roleValid = validateRole(true);
      const categoryValid = validateCategory(true);
      const descriptionValid = validateDescription(true);
      const emailError = followUp === "email" && (!emailInput.value.trim() || !emailInput.validity.valid);
      const phoneError = followUp === "phone" && !phoneInput.value.trim();
      setError(emailInput, "email-error", emailError);
      setError(phoneInput, "phone-error", phoneError);

      const invalid = !roleValid || !categoryValid || !descriptionValid || emailError || phoneError;
      document.getElementById("form-error").hidden = !invalid;
      if (invalid) {
        (roleValid ? categoryValid ? descriptionValid ? emailError ? emailInput : phoneInput : description : categoryGroup.querySelector('input[name="category"]') : roleGroup.querySelector('input[name="role"]')).focus();
        return;
      }

      const reference = `#LOVE-${crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0, 4).toUpperCase().padStart(4, "0")}`;
      const categoryKey = category.dataset.i18nValue;
      const followUpOption = followUpGroup.querySelector('input[name="followUp"]:checked');
      const submitted = new Date().toLocaleString();
      ticket = {
        reference,
        roleValue: role.value,
        otherRole: otherRoleInput.value.trim(),
        categoryKey,
        related: document.getElementById("related-item").value.trim(),
        description: description.value.trim(),
        followUpKey: followUpOption.dataset.i18nValue,
        contact: followUp === "email" ? emailInput.value.trim() : followUp === "phone" ? phoneInput.value.trim() : "",
        urgent: urgentInput.checked,
        submitted
      };
      document.getElementById("ticket-reference").textContent = reference;
      document.getElementById("ticket-submitted").textContent = submitted;
      renderTicketSummary();
      form.hidden = true;
      confirmation.hidden = false;
      document.getElementById("confirmation-title").focus();
    });

    document.getElementById("copy-ticket").addEventListener("click", async () => {
      const status = document.getElementById("copy-status");
      if (!ticket) return;
      const roleKeys = {
        "Pantry Client": "roleClient",
        Volunteer: "roleVolunteer",
        "Community Partner / Donor": "rolePartner"
      };
      const lines = [
        `${translated("referenceId")}: ${ticket.reference}`,
        `${translated("submitted")}: ${ticket.submitted}`,
        `${translated("summaryRole")}: ${ticket.roleValue === "Other" ? ticket.otherRole || translated("roleOther") : translated(roleKeys[ticket.roleValue])}`,
        `${translated("summaryCategory")}: ${translated(ticket.categoryKey)}`,
        `${translated("summaryPriority")}: ${translated(ticket.urgent ? "priorityUrgent" : "priorityStandard")}`,
        `${translated("summaryRelated")}: ${ticket.related || "—"}`,
        `${translated("summaryDescription")}: ${ticket.description}`,
        `${translated("summaryFollowUp")}: ${translated(ticket.followUpKey)}`,
        `${translated("summaryContact")}: ${ticket.contact || "—"}`
      ];
      try {
        await navigator.clipboard.writeText(lines.join("\n"));
        status.textContent = translated("copied");
      } catch (error) {
        console.error("Unable to copy the support ticket summary.", error);
        status.textContent = translated("copyFailed");
      }
    });

    document.getElementById("another-ticket").addEventListener("click", () => {
      ticket = null;
      form.reset();
      form.hidden = false;
      confirmation.hidden = true;
      document.getElementById("copy-status").textContent = "";
      document.getElementById("character-count").textContent = "0";
      document.getElementById("form-error").hidden = true;
      document.getElementById("role-error").hidden = true;
      form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
      form.querySelectorAll(".form-error").forEach((error) => { error.hidden = true; });
      submitAttempted = false;
      roleTouched = false;
      categoryTouched = false;
      descriptionTouched = false;
      otherRoleWrap.hidden = true;
      showFollowUpField();
      form.querySelector('input[name="role"]').focus();
    });

    window.addEventListener("love-pantry-language-change", renderTicketSummary);
    showFollowUpField();
  }

  function initializeVolunteerPortal() {
    const login = document.getElementById("volunteer-login");
    if (!login) return;
    const dashboard = document.getElementById("volunteer-dashboard");
    const loginForm = document.getElementById("volunteer-login-form");
    const emailInput = document.getElementById("volunteer-email");
    const loginError = document.getElementById("volunteer-login-error");
    const inventoryList = document.getElementById("volunteer-inventory-list");
    const searchInput = document.getElementById("volunteer-search");
    const activityFeed = document.getElementById("volunteer-activity-feed");
    const inventoryKey = "love-pantry-inventory";
    const sessionKey = "love-volunteer-email";
    const privacyKey = "love-pantry-privacy-preferences";
    const sentNotesKey = "love-pantry-sent-handoff-notes";
    const scratchpadNotesKey = (email) => `love-pantry-scratchpad-notes:${email}`;
    const demoEmails = new Set(["volunteer@lovepantry.org", "testing@umd.edu"]);
    const seedItems = [
      {"name":"Applesauce cups","quantity":12,"restockDays":0},
      {"name":"Black beans (Dry)","quantity":8,"restockDays":0},
      {"name":"Brown rice","quantity":10,"restockDays":0},
      {"name":"Chicken (Canned \u0026 pouches)","quantity":9,"restockDays":0},
      {"name":"Chicken breast (Canned \u0026 pouches)","quantity":7,"restockDays":0},
      {"name":"Chickpeas (Canned)","quantity":8,"restockDays":0},
      {"name":"Coconut milk (Canned)","quantity":5,"restockDays":0},
      {"name":"Corn (Canned)","quantity":10,"restockDays":0},
      {"name":"Cornflakes","quantity":6,"restockDays":0},
      {"name":"Crispy rice","quantity":6,"restockDays":0},
      {"name":"Egg noodles","quantity":7,"restockDays":0},
      {"name":"Fruit snack pouches","quantity":12,"restockDays":0},
      {"name":"Granola bars","quantity":24,"restockDays":0},
      {"name":"Green beans (Canned)","quantity":8,"restockDays":0},
      {"name":"Kidney beans (Canned)","quantity":8,"restockDays":0},
      {"name":"Lentils (Dry)","quantity":7,"restockDays":0},
      {"name":"Mac and cheese (Cups \u0026 boxes)","quantity":8,"restockDays":0},
      {"name":"Mixed fruit cans","quantity":6,"restockDays":0},
      {"name":"Mixed vegetables (Canned)","quantity":8,"restockDays":0},
      {"name":"Oat milk (Boxed)","quantity":7,"restockDays":0},
      {"name":"Oatmeal (Packets, containers, \u0026 boxes)","quantity":10,"restockDays":0},
      {"name":"Peas (Canned)","quantity":8,"restockDays":0},
      {"name":"Pinto beans (Canned)","quantity":8,"restockDays":0},
      {"name":"Pinto beans (Dry)","quantity":5,"restockDays":0},
      {"name":"Potatoes (Canned)","quantity":6,"restockDays":0},
      {"name":"Raisins","quantity":6,"restockDays":0},
      {"name":"Red beans (Dry)","quantity":5,"restockDays":0},
      {"name":"Rice mixes","quantity":7,"restockDays":0},
      {"name":"Rotini","quantity":6,"restockDays":0},
      {"name":"Shells","quantity":6,"restockDays":0},
      {"name":"Spam","quantity":5,"restockDays":0},
      {"name":"Spaghetti","quantity":6,"restockDays":0},
      {"name":"Tomatoes (Diced, crushed, paste, \u0026 peeled)","quantity":10,"restockDays":0},
      {"name":"Tuna (Canned \u0026 pouches)","quantity":8,"restockDays":0},
      {"name":"White rice","quantity":10,"restockDays":0},
      {"name":"Agave syrup","quantity":6,"restockDays":0},
      {"name":"Cajun seasoning","quantity":5,"restockDays":0},
      {"name":"Anchovy fillets or paste","quantity":4,"restockDays":0},
      {"name":"Apple cider vinegar","quantity":7,"restockDays":0},
      {"name":"Apricots","quantity":5,"restockDays":0},
      {"name":"Asian fish sauce","quantity":4,"restockDays":0},
      {"name":"Avocados","quantity":5,"restockDays":0},
      {"name":"Bananas","quantity":8,"restockDays":0},
      {"name":"Baking soda","quantity":6,"restockDays":0},
      {"name":"Balsamic or sherry vinegar","quantity":5,"restockDays":0},
      {"name":"Bay leaves","quantity":4,"restockDays":0},
      {"name":"Bell peppers","quantity":6,"restockDays":0},
      {"name":"Berries","quantity":5,"restockDays":0},
      {"name":"Biscuits","quantity":6,"restockDays":0},
      {"name":"Black peppercorns","quantity":5,"restockDays":0},
      {"name":"Boston lettuce","quantity":4,"restockDays":0},
      {"name":"Breadcrumbs (plain or panko)","quantity":6,"restockDays":0},
      {"name":"Bulgur","quantity":5,"restockDays":0},
      {"name":"Cannellini beans","quantity":7,"restockDays":0},
      {"name":"Capers","quantity":4,"restockDays":0},
      {"name":"Cauliflower","quantity":5,"restockDays":0},
      {"name":"Cayenne pepper","quantity":5,"restockDays":0},
      {"name":"Celery","quantity":6,"restockDays":0},
      {"name":"Chard","quantity":4,"restockDays":0},
      {"name":"Cherries","quantity":5,"restockDays":0},
      {"name":"Cherry tomatoes","quantity":6,"restockDays":0},
      {"name":"Chia seeds","quantity":5,"restockDays":0},
      {"name":"Chile powder","quantity":5,"restockDays":0},
      {"name":"Chiles (chipotles in adobo or pickled jalapenos)","quantity":4,"restockDays":0},
      {"name":"Chocolate (chips or bar)","quantity":6,"restockDays":0},
      {"name":"Cilantro","quantity":5,"restockDays":0},
      {"name":"Cocoa powder (unsweetened)","quantity":4,"restockDays":0},
      {"name":"Confectioners\u0027 sugar","quantity":5,"restockDays":0},
      {"name":"Cookies","quantity":8,"restockDays":0},
      {"name":"Couscous","quantity":6,"restockDays":0},
      {"name":"Crackers","quantity":7,"restockDays":0},
      {"name":"Cream of tartar","quantity":4,"restockDays":0},
      {"name":"Crushed red pepper","quantity":5,"restockDays":0},
      {"name":"Curry powder","quantity":5,"restockDays":0},
      {"name":"Dill seed","quantity":4,"restockDays":0},
      {"name":"Evaporated milk","quantity":6,"restockDays":0},
      {"name":"Extra virgin olive oil","quantity":5,"restockDays":0},
      {"name":"Farro","quantity":5,"restockDays":0},
      {"name":"Fennel seed","quantity":4,"restockDays":0},
      {"name":"Fine salt","quantity":7,"restockDays":0},
      {"name":"Flax seeds","quantity":5,"restockDays":0},
      {"name":"Flat-leaf parsley","quantity":4,"restockDays":0},
      {"name":"Garlic","quantity":8,"restockDays":0},
      {"name":"Ginger","quantity":6,"restockDays":0},
      {"name":"Goat cheese","quantity":4,"restockDays":0},
      {"name":"Granulated garlic","quantity":5,"restockDays":0},
      {"name":"Granulated sugar","quantity":8,"restockDays":0},
      {"name":"Grape tomatoes","quantity":5,"restockDays":0},
      {"name":"Ground cinnamon","quantity":5,"restockDays":0},
      {"name":"Ground cloves","quantity":4,"restockDays":0},
      {"name":"Ground cumin","quantity":5,"restockDays":0},
      {"name":"Ground ginger","quantity":4,"restockDays":0},
      {"name":"Ground turkey","quantity":5,"restockDays":0},
      {"name":"Hemp seeds","quantity":4,"restockDays":0},
      {"name":"Hominy","quantity":6,"restockDays":0},
      {"name":"Hot sauce (Tabasco, Sriracha or sambal)","quantity":5,"restockDays":0},
      {"name":"Italian sausage","quantity":4,"restockDays":0},
      {"name":"Jam","quantity":6,"restockDays":0},
      {"name":"Jelly","quantity":5,"restockDays":0},
      {"name":"Kale","quantity":5,"restockDays":0},
      {"name":"Ketchup","quantity":6,"restockDays":0},
      {"name":"Kosher salt","quantity":5,"restockDays":0},
      {"name":"Lemons","quantity":7,"restockDays":0},
      {"name":"Lettuce (romaine or mixed greens)","quantity":5,"restockDays":0},
      {"name":"Limes","quantity":6,"restockDays":0},
      {"name":"Long-grain white rice","quantity":8,"restockDays":0},
      {"name":"Mangos","quantity":5,"restockDays":0},
      {"name":"Maple syrup","quantity":4,"restockDays":0},
      {"name":"Marshmallows","quantity":6,"restockDays":0},
      {"name":"Mayonnaise","quantity":5,"restockDays":0},
      {"name":"Mustard (Dijon or whole grain)","quantity":5,"restockDays":0},
      {"name":"Navy beans","quantity":6,"restockDays":0},
      {"name":"Old-fashioned rolled oats","quantity":7,"restockDays":0},
      {"name":"Olives","quantity":5,"restockDays":0},
      {"name":"Oregano","quantity":4,"restockDays":0},
      {"name":"Paprika (sweet and smoked)","quantity":5,"restockDays":0},
      {"name":"Pecans","quantity":4,"restockDays":0},
      {"name":"Pickles","quantity":6,"restockDays":0},
      {"name":"Pie dough","quantity":4,"restockDays":0},
      {"name":"Pizza dough","quantity":4,"restockDays":0},
      {"name":"Plain yogurt (regular or Greek)","quantity":5,"restockDays":0},
      {"name":"Polenta","quantity":5,"restockDays":0},
      {"name":"Popcorn kernels","quantity":7,"restockDays":0},
      {"name":"Preserves","quantity":5,"restockDays":0},
      {"name":"Pretzels","quantity":6,"restockDays":0},
      {"name":"Puff pastry","quantity":4,"restockDays":0},
      {"name":"Red wine vinegar","quantity":5,"restockDays":0},
      {"name":"Rice noodles","quantity":6,"restockDays":0},
      {"name":"Rice vinegar (unseasoned)","quantity":5,"restockDays":0},
      {"name":"Roasted red peppers","quantity":5,"restockDays":0},
      {"name":"Rosemary","quantity":4,"restockDays":0},
      {"name":"Salads/Greens","quantity":5,"restockDays":0},
      {"name":"Salsa","quantity":6,"restockDays":0},
      {"name":"Scallions","quantity":5,"restockDays":0},
      {"name":"Seasonal beefsteak tomatoes","quantity":4,"restockDays":0},
      {"name":"Sesame seeds","quantity":5,"restockDays":0},
      {"name":"Soybean oil","quantity":4,"restockDays":0},
      {"name":"Soy sauce or tamari","quantity":6,"restockDays":0},
      {"name":"Sunflower seeds","quantity":5,"restockDays":0},
      {"name":"Tea","quantity":8,"restockDays":0},
      {"name":"Thyme","quantity":4,"restockDays":0},
      {"name":"Toasted sesame oil","quantity":4,"restockDays":0},
      {"name":"Vanilla ice cream","quantity":4,"restockDays":0},
      {"name":"Vegetable oil","quantity":6,"restockDays":0},
      {"name":"Walnut oil","quantity":4,"restockDays":0},
      {"name":"Walnuts","quantity":5,"restockDays":0},
      {"name":"Whole grain pasta","quantity":6,"restockDays":0},
      {"name":"Whole nutmeg","quantity":4,"restockDays":0},
      {"name":"Apple rings","quantity":8,"restockDays":0},
      {"name":"Banana chips","quantity":6,"restockDays":0},
      {"name":"Blueberries (dried)","quantity":5,"restockDays":0},
      {"name":"Cantaloupe (whole)","quantity":3,"restockDays":0},
      {"name":"Clementines","quantity":8,"restockDays":0},
      {"name":"Coconut flakes / shreds","quantity":5,"restockDays":0},
      {"name":"Currants","quantity":4,"restockDays":0},
      {"name":"Dates (Medjool, Deglet Noor)","quantity":6,"restockDays":0},
      {"name":"Figs (Mission, Turkish)","quantity":4,"restockDays":0},
      {"name":"Goji berries","quantity":4,"restockDays":0},
      {"name":"Grapefruit segments (canned)","quantity":5,"restockDays":0},
      {"name":"Honeydew melon (whole)","quantity":2,"restockDays":0},
      {"name":"Lychees (canned)","quantity":5,"restockDays":0},
      {"name":"Mandarin oranges (canned)","quantity":7,"restockDays":0},
      {"name":"Maraschino cherries","quantity":4,"restockDays":0},
      {"name":"Oranges","quantity":8,"restockDays":0},
      {"name":"Pears (canned slices or halves)","quantity":6,"restockDays":0},
      {"name":"Pie fillings (apple, cherry, blueberry)","quantity":4,"restockDays":0},
      {"name":"Pineapple chunks (dried)","quantity":5,"restockDays":0},
      {"name":"Pineapple slices, chunks, tidbits, or crushed (canned)","quantity":7,"restockDays":0},
      {"name":"Prunes (dried plums)","quantity":5,"restockDays":0},
      {"name":"Pumpkin puree (canned)","quantity":4,"restockDays":0},
      {"name":"Worcestershire sauce","quantity":5,"restockDays":0},
      {"name":"Almond milk (Boxed)","quantity":0,"restockDays":1},
      {"name":"Canned peaches","quantity":0,"restockDays":7},
      {"name":"Chickpeas (Dry)","quantity":0,"restockDays":4},
      {"name":"Dried cranberries","quantity":0,"restockDays":5},
      {"name":"Kidney beans (Dry)","quantity":0,"restockDays":4},
      {"name":"Maseca corn flour","quantity":0,"restockDays":8},
      {"name":"Multi-grain cereal","quantity":0,"restockDays":2},
      {"name":"Oatmeal bars","quantity":0,"restockDays":6},
      {"name":"Pumpkin (Canned)","quantity":0,"restockDays":2},
      {"name":"White beans (Dry)","quantity":0,"restockDays":3},
      {"name":"Yams","quantity":0,"restockDays":3},
      {"name":"Almonds","quantity":0,"restockDays":4},
      {"name":"Apples","quantity":0,"restockDays":2},
      {"name":"Bacon","quantity":0,"restockDays":3},
      {"name":"Baguette","quantity":0,"restockDays":2},
      {"name":"Baking powder","quantity":0,"restockDays":4},
      {"name":"Blue cheese","quantity":0,"restockDays":6},
      {"name":"Boneless, skinless chicken breasts (freezer)","quantity":0,"restockDays":7},
      {"name":"Broccoli","quantity":0,"restockDays":3},
      {"name":"Carrots","quantity":0,"restockDays":2},
      {"name":"Cheddar","quantity":0,"restockDays":5},
      {"name":"Chicken broth","quantity":0,"restockDays":4},
      {"name":"Coffee","quantity":0,"restockDays":6},
      {"name":"Flour (all purpose, whole wheat or pastry)","quantity":0,"restockDays":2},
      {"name":"Ground beef","quantity":0,"restockDays":5},
      {"name":"Honey","quantity":0,"restockDays":3},
      {"name":"Milk","quantity":0,"restockDays":2},
      {"name":"Mozzarella","quantity":0,"restockDays":4},
      {"name":"Onions","quantity":0,"restockDays":2},
      {"name":"Parmesan (wedge)","quantity":0,"restockDays":6},
      {"name":"Quinoa","quantity":0,"restockDays":5},
      {"name":"Sandwich bread","quantity":0,"restockDays":1},
      {"name":"Spinach","quantity":0,"restockDays":3},
      {"name":"Sweet potatoes","quantity":0,"restockDays":4},
      {"name":"Tortillas","quantity":0,"restockDays":2},
      {"name":"Unsalted butter","quantity":0,"restockDays":3},
      {"name":"White potatoes","quantity":0,"restockDays":5},
      {"name":"Grapefruit","quantity":0,"restockDays":3},
      {"name":"Jackfruit (green in brine or sweet in syrup)","quantity":0,"restockDays":4},
      {"name":"Pomegranates","quantity":0,"restockDays":5},
      {"name":"Watermelon (whole)","quantity":0,"restockDays":3}
    ].map((item) => ({
      ...item,
      id: item.name.trim().toLocaleLowerCase(),
      setup: "no-cook",
      features: [],
      restockDays: item.restockDays || 0,
      isDonation: false
    }));
    const shiftTeam = [
      { name: "Jessica O.", email: "jessica@umd.edu", phone: "301-555-0142", shift: "current", emailVisibility: "current", phoneVisibility: "current" },
      { name: "Marcus T.", email: "marcus.t@lovepantry.org", phone: "301-555-0198", shift: "current", emailVisibility: "current", phoneVisibility: "current" },
      { name: "Elena R.", email: "elena.r@lovepantry.org", phone: "240-555-0115", shift: "current", emailVisibility: "current", phoneVisibility: "current" },
      { name: "David K.", email: "david.k@umd.edu", phone: "240-555-0173", shift: "current", emailVisibility: "current", phoneVisibility: "current" },
      { name: "Priya S.", email: "priya.s@lovepantry.org", phone: "301-555-0164", shift: "current", emailVisibility: "current", phoneVisibility: "current" },
      { name: "Carlos M.", email: "carlos.m@lovepantry.org", phone: "240-555-0189", shift: "today", emailVisibility: "today", phoneVisibility: "admin" },
      { name: "Hannah W.", email: "hannah.w@umd.edu", phone: "301-555-0121", shift: "today", emailVisibility: "today", phoneVisibility: "today" },
      { name: "Devon B.", email: "devon.b@lovepantry.org", phone: "240-555-0156", shift: "today", emailVisibility: "today", phoneVisibility: "admin" },
      { name: "Amina H.", email: "amina.h@umd.edu", phone: "301-555-0137", shift: "today", emailVisibility: "today", phoneVisibility: "today" },
      { name: "Tyler G.", email: "tyler.g@lovepantry.org", phone: "240-555-0192", shift: "today", emailVisibility: "admin", phoneVisibility: "admin" }
    ];
    const initialActivitySeeds = [
      { seedId: "black-beans-update", key: "seedBlackBeansUpdate", values: {}, minutesAgo: 95 },
      { seedId: "brown-rice-donation", key: "seedBrownRiceDonation", values: {}, minutesAgo: 68 },
      { seedId: "almond-milk-out", key: "seedAlmondMilkOut", values: {}, minutesAgo: 42 },
      { seedId: "cooler-handoff", key: "seedCoolerHandoff", values: {}, minutesAgo: 16 }
    ];
    let inventoryState = null;
    let activeFilter = "all";
    let inventoryStored = false;
    let inventoryNeedsMigration = false;
    let currentVolunteerEmail = "";
    let savedPrivacyPreferences = {};
    let savedScratchpadNotes = [];
    let sentHandoffNotes = [];
    let editingScratchpadNoteId = null;
    let editingSentHandoffNoteId = null;
    let activeHandoffReceipt = null;
    let activeHandoffReceiptWasResent = false;

    function formatText(key, values = {}) {
      return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), translated(key));
    }

    function readInventory() {
      try {
        const stored = localStorage.getItem(inventoryKey);
        inventoryStored = Boolean(stored);
        const seededUpdates = initialActivitySeeds.map((entry) => ({
          seedId: entry.seedId,
          key: entry.key,
          values: entry.values,
          time: Date.now() - entry.minutesAgo * 60_000
        }));
        if (!stored) {
          inventoryNeedsMigration = true;
          return {
            items: seedItems.map((item) => ({ ...item, features: [...item.features] })),
            updates: seededUpdates
          };
        }
        const parsed = JSON.parse(stored);
        if (!parsed || !Array.isArray(parsed.items) || !Array.isArray(parsed.updates)) {
          throw new TypeError("Saved volunteer inventory has an invalid structure.");
        }
        const migratingSampleInventory = parsed.items.length < seedItems.length;
        const savedItems = new Map(parsed.items.map((item) => [String(item.id || item.name).trim().toLocaleLowerCase(), item]));
        const catalogItems = seedItems.map((seed) => {
          const saved = savedItems.get(seed.id);
          if (saved) savedItems.delete(seed.id);
          return saved && !migratingSampleInventory
            ? { ...seed, ...saved, id: seed.id, features: [...(saved.features || seed.features)] }
            : { ...seed, features: [...seed.features] };
        });
        const donations = [...savedItems.values()].filter((item) =>
          item.isDonation && item.name?.trim().toLocaleLowerCase() !== "demo oats"
        );
        const seededIds = new Set(parsed.updates.map((entry) => entry.seedId).filter(Boolean));
        const updates = [...parsed.updates, ...seededUpdates.filter((entry) => !seededIds.has(entry.seedId))]
          .sort((first, second) => second.time - first.time)
          .slice(0, 40);
        inventoryNeedsMigration = migratingSampleInventory || parsed.items.length !== catalogItems.length + donations.length ||
          parsed.items.some((item) => item.name?.trim().toLocaleLowerCase() === "demo oats") ||
          seededIds.size < initialActivitySeeds.length;
        return { items: [...catalogItems, ...donations], updates };
      } catch (error) {
        inventoryStored = false;
        inventoryNeedsMigration = true;
        console.error("Unable to load saved volunteer inventory.", error);
        return {
          items: seedItems.map((item) => ({ ...item, features: [...item.features] })),
          updates: initialActivitySeeds.map((entry) => ({
            seedId: entry.seedId,
            key: entry.key,
            values: entry.values,
            time: Date.now() - entry.minutesAgo * 60_000
          }))
        };
      }
    }

    function persistInventory() {
      try {
        localStorage.setItem(inventoryKey, JSON.stringify(inventoryState));
      } catch (error) {
        console.error("Unable to save volunteer inventory changes.", error);
        document.getElementById("inventory-save-error").hidden = false;
        return false;
      }
      document.getElementById("inventory-save-error").hidden = true;
      window.dispatchEvent(new CustomEvent("love-pantry-inventory-updated"));
      return true;
    }

    function resetDemoData() {
      const resetState = {
        items: seedItems.map((item) => ({ ...item, features: [...item.features] })),
        updates: initialActivitySeeds.map((entry) => ({
          seedId: entry.seedId,
          key: entry.key,
          values: entry.values,
          time: Date.now() - entry.minutesAgo * 60_000
        }))
      };
      try {
        localStorage.setItem(inventoryKey, JSON.stringify(resetState));
        localStorage.removeItem(privacyKey);
        localStorage.removeItem(sentNotesKey);
        ["volunteer@lovepantry.org", "testing@umd.edu", "jessica@umd.edu"].forEach((email) => {
          localStorage.removeItem(`love-pantry-scratchpad-notes:${email}`);
          localStorage.removeItem(`love-pantry-scratchpad:${email}`);
        });
        inventoryState = resetState;
        inventoryStored = true;
        inventoryNeedsMigration = false;
        savedPrivacyPreferences = {};
        savedScratchpadNotes = [];
        sentHandoffNotes = [];
        editingScratchpadNoteId = null;
        editingSentHandoffNoteId = null;
        activeHandoffReceipt = null;
        document.getElementById("saved-notes-list").hidden = true;
        document.getElementById("sent-notes-list").hidden = true;
        document.getElementById("view-saved-notes").setAttribute("aria-expanded", "false");
        document.getElementById("view-sent-notes").setAttribute("aria-expanded", "false");
        renderSavedNotes();
        renderSentHandoffNotes();
        document.getElementById("handoff-receipt").hidden = true;
        document.getElementById("scratchpad-title").value = "";
        document.getElementById("shift-scratchpad").value = "";
        document.getElementById("scratchpad-saved").hidden = true;
        document.getElementById("scratchpad-error").hidden = true;
        document.getElementById("privacy-saved").hidden = true;
        document.getElementById("privacy-error").hidden = true;
        document.getElementById("handoff-error").dataset.i18n = "handoffError";
        document.getElementById("handoff-error").hidden = true;
        document.getElementById("handoff-form").reset();
        document.getElementById("handoff-recipient-type").dispatchEvent(new Event("change", { bubbles: true }));
        document.getElementById("demo-reset-error").hidden = true;
        window.dispatchEvent(new CustomEvent("love-pantry-inventory-updated"));
        return true;
      } catch (error) {
        console.error("Unable to reset volunteer demo data.", error);
        document.getElementById("demo-reset-error").hidden = false;
        return false;
      }
    }

    function addActivity(key, values = {}) {
      inventoryState.updates.unshift({ key, values, time: Date.now() });
      inventoryState.updates = inventoryState.updates.slice(0, 40);
      persistInventory();
      renderActivity();
    }

    function renderActivity() {
      activityFeed.replaceChildren();
      inventoryState.updates.forEach((entry) => {
        const row = document.createElement("li");
        const message = document.createElement("span");
        const values = { ...entry.values };
        if (typeof values.name === "string") values.name = translateCatalogText(values.name);
        if (typeof values.actor === "string") values.actor = rosterName(values.actor);
        else if (["itemQuantityUpdated", "itemRestockUpdated", "donationLogged", "itemDonationMerged", "volunteerSignedIn", "volunteerSignedOut", "handoffSent"].includes(entry.key)) {
          values.actor = translated("unknownVolunteer");
        }
        if (entry.key === "itemQuantityUpdated" && values.from === undefined) values.from = values.quantity;
        if (entry.key === "handoffSent" && values.channel === undefined) values.channel = translated("emailChannel");
        message.textContent = formatText(entry.key, values);
        const time = document.createElement("time");
        time.dateTime = new Date(entry.time).toISOString();
        time.textContent = ` ${new Date(entry.time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
        row.append(message, time);
        activityFeed.append(row);
      });
    }

    function rosterName(email) {
      if (email === "Demo User") return email;
      return shiftTeam.find((person) => person.email === email)?.name || email;
    }

    function readPrivacyPreferences() {
      try {
        const stored = localStorage.getItem(privacyKey);
        savedPrivacyPreferences = stored ? JSON.parse(stored) : {};
        if (!savedPrivacyPreferences || typeof savedPrivacyPreferences !== "object" || Array.isArray(savedPrivacyPreferences)) {
          throw new TypeError("Saved volunteer privacy preferences have an invalid structure.");
        }
      } catch (error) {
        savedPrivacyPreferences = {};
        console.error("Unable to load volunteer privacy preferences.", error);
      }
    }

    function privacyFor(person) {
      const saved = savedPrivacyPreferences[person.email];
      return saved
        ? { emailVisibility: saved.emailVisibility || person.emailVisibility, phoneVisibility: saved.phoneVisibility || person.phoneVisibility }
        : person;
    }

    function renderShiftRoster() {
      const roster = document.getElementById("shift-team-list");
      roster.replaceChildren();
      shiftTeam.forEach((person) => {
        const row = document.createElement("li");
        const name = document.createElement("strong");
        name.textContent = person.name;
        const status = document.createElement("span");
        status.textContent = translated(person.shift === "current" ? "currentShift" : "todaysShift");
        row.append(name, document.createTextNode(" — "), status);
        roster.append(row);
      });
    }

    function populateDonationAutocomplete() {
      const datalist = document.getElementById("existing-items-list");
      datalist.replaceChildren(...inventoryState.items.map((item) => {
        const option = document.createElement("option");
        option.value = translateCatalogText(item.name);
        return option;
      }));
    }

    function getCurrentPerson() {
      return shiftTeam.find((person) => person.email === currentVolunteerEmail) ||
        (currentVolunteerEmail === "volunteer@lovepantry.org" ? shiftTeam[0] : null);
    }

    function currentPrivacyIdentity() {
      return getCurrentPerson()?.email || currentVolunteerEmail;
    }

    function renderVolunteerContacts(searchTerm = "") {
      const datalist = document.getElementById("volunteer-roster-list");
      const currentPerson = getCurrentPerson();
      const audienceShift = currentPerson?.shift || "today";
      const audienceAllows = (visibility) =>
        visibility === "today" || (visibility === "current" && audienceShift === "current");
      const normalizedSearch = searchTerm.trim().toLocaleLowerCase();
      const options = [];
      shiftTeam.forEach((person) => {
        const preferences = privacyFor(person);
        const emailVisible = audienceAllows(preferences.emailVisibility);
        const phoneVisible = audienceAllows(preferences.phoneVisibility);
        const initials = person.name.split(/\s+/).map((part) => part[0]).join(" ").toLocaleLowerCase();
        const searchableValues = [
          person.name.toLocaleLowerCase(),
          person.name.split(" ")[0].toLocaleLowerCase(),
          initials,
          emailVisible ? person.email.toLocaleLowerCase() : "",
          phoneVisible ? person.phone : ""
        ];
        if (normalizedSearch && !searchableValues.some((value) => value.includes(normalizedSearch))) return;
        const details = [];
        if (emailVisible) details.push(person.email);
        if (phoneVisible) details.push(person.phone);
        const contactLabel = details.length
          ? `${person.name} — ${details.join(" • ")}`
          : `${person.name} (${translated("adminOnlyContact")})`;
        const option = document.createElement("option");
        option.value = contactLabel;
        option.label = contactLabel;
        options.push(option);
      });
      datalist.replaceChildren(...options);
    }

    function loadPersonalSettings() {
      readPrivacyPreferences();
      const person = getCurrentPerson();
      const ownPreferences = person ? privacyFor(person) : { emailVisibility: "admin", phoneVisibility: "admin" };
      document.getElementById("email-visibility").value = ownPreferences.emailVisibility;
      document.getElementById("phone-visibility").value = ownPreferences.phoneVisibility;
      const scratchpad = document.getElementById("shift-scratchpad");
      try {
        const storedNotes = localStorage.getItem(scratchpadNotesKey(currentVolunteerEmail));
        if (storedNotes) {
          const parsed = JSON.parse(storedNotes);
          if (!Array.isArray(parsed) || parsed.some((note) =>
            !note || typeof note.title !== "string" || typeof note.body !== "string" || typeof note.timestamp !== "string"
          )) {
            throw new TypeError("Saved scratchpad notes have an invalid structure.");
          }
          savedScratchpadNotes = parsed;
          scratchpad.value = "";
        } else {
          savedScratchpadNotes = [];
          scratchpad.value = localStorage.getItem(`love-pantry-scratchpad:${currentVolunteerEmail}`) || "";
        }
        document.getElementById("scratchpad-error").hidden = true;
      } catch (error) {
        savedScratchpadNotes = [];
        document.getElementById("scratchpad-error").hidden = false;
        console.error("Unable to load private shift notes.", error);
      }
      renderSavedNotes();
      readSentHandoffNotes();
      renderSentHandoffNotes();
      renderVolunteerContacts();
    }

    function nextScratchpadTitle() {
      const lastNumber = savedScratchpadNotes.reduce((largest, note) => {
        const match = /^Note (\d+)$/i.exec(note.title);
        return match ? Math.max(largest, Number(match[1])) : largest;
      }, 0);
      return `Note ${lastNumber + 1}`;
    }

    function saveScratchpadNotes(notes) {
      localStorage.setItem(scratchpadNotesKey(currentVolunteerEmail), JSON.stringify(notes));
      localStorage.removeItem(`love-pantry-scratchpad:${currentVolunteerEmail}`);
    }

    function renderSavedNotes() {
      const list = document.getElementById("saved-notes-list");
      const toggle = document.getElementById("view-saved-notes");
      toggle.textContent = formatText("viewSavedNotes", { count: savedScratchpadNotes.length });
      toggle.setAttribute("aria-expanded", String(!list.hidden));
      if (!savedScratchpadNotes.length) {
        const empty = document.createElement("p");
        empty.textContent = translated("savedNotesEmpty");
        list.replaceChildren(empty);
        return;
      }
      list.replaceChildren(...savedScratchpadNotes.map((note) => {
        const card = document.createElement("article");
        card.className = "saved-note-card";
        const title = document.createElement("h4");
        title.textContent = formatText("noteCardTitle", { title: note.title });
        const timestamp = document.createElement("p");
        timestamp.textContent = formatText("noteCardDate", { timestamp: note.timestamp });
        const bodyLabel = document.createElement("strong");
        bodyLabel.textContent = translated("noteCardBody");
        const body = document.createElement("p");
        body.className = "saved-note-body";
        body.textContent = note.body;
        const actions = document.createElement("div");
        actions.className = "note-action-row";
        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "secondary-button";
        edit.textContent = translated("editNote");
        edit.addEventListener("click", () => {
          editingScratchpadNoteId = note.id;
          renderSavedNotes();
        });
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "secondary-button";
        remove.textContent = translated("deleteNote");
        remove.setAttribute("aria-label", formatText("deleteNoteFor", { title: note.title }));
        remove.addEventListener("click", () => {
          const updatedNotes = savedScratchpadNotes.filter((saved) => saved.id !== note.id);
          try {
            saveScratchpadNotes(updatedNotes);
            savedScratchpadNotes = updatedNotes;
            editingScratchpadNoteId = null;
            document.getElementById("scratchpad-error").hidden = true;
            renderSavedNotes();
          } catch (error) {
            console.error("Unable to delete a private shift note.", error);
            document.getElementById("scratchpad-error").hidden = false;
          }
        });
        actions.append(edit, remove);
        card.append(title, timestamp);
        if (note.editedAt) {
          const edited = document.createElement("p");
          edited.textContent = formatText("editedTimestamp", { time: note.editedAt });
          card.append(edited);
        }
        card.append(bodyLabel, body, actions);
        if (editingScratchpadNoteId === note.id) {
          const editor = document.createElement("form");
          editor.className = "note-inline-editor";
          const titleLabel = document.createElement("label");
          titleLabel.textContent = translated("noteTitle");
          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.maxLength = 100;
          titleInput.value = note.title;
          titleLabel.append(titleInput);
          const textLabel = document.createElement("label");
          textLabel.textContent = translated("scratchpadLabel");
          const textInput = document.createElement("textarea");
          textInput.rows = 4;
          textInput.value = note.body;
          textLabel.append(textInput);
          const save = document.createElement("button");
          save.type = "submit";
          save.className = "secondary-button";
          save.textContent = translated("saveChanges");
          const cancel = document.createElement("button");
          cancel.type = "button";
          cancel.className = "secondary-button";
          cancel.textContent = translated("cancelEdit");
          cancel.addEventListener("click", () => {
            editingScratchpadNoteId = null;
            renderSavedNotes();
          });
          editor.append(titleLabel, textLabel, save, cancel);
          editor.addEventListener("submit", (event) => {
            event.preventDefault();
            const updatedNotes = savedScratchpadNotes.map((saved) => saved.id === note.id
              ? { ...saved, title: titleInput.value.trim() || saved.title, body: textInput.value, editedAt: new Date().toLocaleString() }
              : saved
            );
            try {
              saveScratchpadNotes(updatedNotes);
              savedScratchpadNotes = updatedNotes;
              editingScratchpadNoteId = null;
              document.getElementById("scratchpad-error").hidden = true;
              document.getElementById("scratchpad-saved").textContent = translated("scratchpadSaved");
              document.getElementById("scratchpad-saved").hidden = false;
              renderSavedNotes();
            } catch (error) {
              console.error("Unable to edit a private shift note.", error);
              document.getElementById("scratchpad-error").hidden = false;
            }
          });
          card.append(editor);
        }
        return card;
      }));
    }

    function readSentHandoffNotes() {
      try {
        const stored = localStorage.getItem(sentNotesKey);
        const parsed = stored ? JSON.parse(stored) : [];
        if (!Array.isArray(parsed) || parsed.some((note) =>
          !note || typeof note.sender !== "string" || typeof note.recipientName !== "string" ||
          typeof note.message !== "string" || typeof note.timestamp !== "string"
        )) {
          throw new TypeError("Saved handoff notes have an invalid structure.");
        }
        sentHandoffNotes = parsed;
        document.getElementById("handoff-error").dataset.i18n = "handoffError";
        document.getElementById("handoff-error").hidden = true;
      } catch (error) {
        sentHandoffNotes = [];
        document.getElementById("handoff-error").dataset.i18n = "handoffSaveError";
        document.getElementById("handoff-error").textContent = translated("handoffSaveError");
        document.getElementById("handoff-error").hidden = false;
        console.error("Unable to load sent handoff notes.", error);
      }
    }

    function renderHandoffReceipt(note, wasResent = false) {
      activeHandoffReceipt = note;
      activeHandoffReceiptWasResent = wasResent;
      const receipt = document.getElementById("handoff-receipt");
      const channel = translated(note.channel === "sms" ? "textChannel" : note.channel === "both" ? "bothChannels" : "emailChannel");
      const priority = translated(note.priority === "urgent" ? "urgentPriority" : "generalPriority");
      const recipient = note.recipientType === "admin"
        ? translated("pantryAdmin")
        : `${note.recipientName}${note.recipientContact ? ` — ${note.recipientContact}` : ""}`;
      document.getElementById("handoff-receipt-subtitle").textContent = formatText(
        wasResent ? "handoffReceiptEditedResent" : "handoffReceiptSent",
        { reference: note.referenceId, time: wasResent ? note.editedAt : note.timestamp }
      );
      const details = [
        formatText("handoffReceiptSender", { sender: note.sender }),
        formatText("handoffReceiptRecipient", { recipient }),
        formatText("handoffReceiptChannel", { channel }),
        formatText("handoffReceiptPriority", { priority }),
        translated("handoffReceiptMessage"),
        translated("handoffReceiptNote")
      ];
      document.getElementById("handoff-receipt-details").replaceChildren(...details.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
      }));
      receipt.hidden = false;
    }

    function persistSentHandoffNotes(notes) {
      localStorage.setItem(sentNotesKey, JSON.stringify(notes));
      sentHandoffNotes = notes;
    }

    function renderSentHandoffNotes() {
      const list = document.getElementById("sent-notes-list");
      const toggle = document.getElementById("view-sent-notes");
      toggle.textContent = formatText("viewSentNotes", { count: sentHandoffNotes.length });
      toggle.setAttribute("aria-expanded", String(!list.hidden));
      if (!sentHandoffNotes.length) {
        const empty = document.createElement("p");
        empty.textContent = translated("sentNotesEmpty");
        list.replaceChildren(empty);
        return;
      }
      list.replaceChildren(...sentHandoffNotes.map((note) => {
        const card = document.createElement("article");
        card.className = "saved-note-card";
        const title = document.createElement("h4");
        title.textContent = translated("handoffHeading");
        const sender = document.createElement("p");
        sender.textContent = formatText("sentNoteSender", { sender: note.sender });
        const recipientName = note.recipientType === "admin" ? translated("pantryAdmin") : note.recipientName;
        const recipient = document.createElement("p");
        recipient.textContent = formatText("sentNoteRecipient", {
          recipient: `${recipientName}${note.recipientContact ? ` — ${note.recipientContact}` : ""}`
        });
        const channelValue = translated(note.channel === "sms" ? "textChannel" : note.channel === "both" ? "bothChannels" : "emailChannel");
        const channel = document.createElement("p");
        channel.textContent = formatText("sentNoteChannel", { channel: channelValue });
        const priority = document.createElement("p");
        priority.className = "sent-note-priority";
        priority.dataset.priority = note.priority;
        priority.textContent = formatText("sentNotePriority", {
          priority: translated(note.priority === "urgent" ? "urgentPriority" : "generalPriority")
        });
        const timestamp = document.createElement("p");
        timestamp.textContent = formatText("sentNoteDate", { timestamp: note.timestamp });
        const messageLabel = document.createElement("strong");
        messageLabel.textContent = translated("sentNoteMessage");
        const message = document.createElement("p");
        message.className = "saved-note-body";
        message.textContent = note.message;
        card.append(title, sender, recipient, channel, priority, timestamp);
        if (note.editedAt) {
          const edited = document.createElement("p");
          edited.textContent = formatText("editedResentTimestamp", { time: note.editedAt });
          card.append(edited);
        }
        card.append(messageLabel, message);
        const actions = document.createElement("div");
        actions.className = "note-action-row";
        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "secondary-button";
        edit.textContent = translated("editResendNote");
        edit.addEventListener("click", () => {
          editingSentHandoffNoteId = note.id;
          renderSentHandoffNotes();
        });
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "secondary-button";
        remove.textContent = translated("deleteSentNote");
        remove.setAttribute("aria-label", formatText("deleteSentNoteFor", { recipient: recipientName }));
        remove.addEventListener("click", () => {
          const updatedNotes = sentHandoffNotes.filter((saved) => saved.id !== note.id);
          try {
            persistSentHandoffNotes(updatedNotes);
            editingSentHandoffNoteId = null;
            document.getElementById("handoff-error").dataset.i18n = "handoffError";
            document.getElementById("handoff-error").hidden = true;
            renderSentHandoffNotes();
          } catch (error) {
            console.error("Unable to delete a sent handoff note.", error);
            document.getElementById("handoff-error").dataset.i18n = "handoffSaveError";
            document.getElementById("handoff-error").textContent = translated("handoffSaveError");
            document.getElementById("handoff-error").hidden = false;
          }
        });
        actions.append(edit, remove);
        card.append(actions);
        if (editingSentHandoffNoteId === note.id) {
          const editor = document.createElement("form");
          editor.className = "note-inline-editor";
          const label = document.createElement("label");
          label.textContent = translated("handoffMessage");
          const input = document.createElement("textarea");
          input.rows = 4;
          input.maxLength = 1000;
          input.required = true;
          input.value = note.message;
          label.append(input);
          const save = document.createElement("button");
          save.type = "submit";
          save.className = "secondary-button";
          save.textContent = translated("saveResendNote");
          const cancel = document.createElement("button");
          cancel.type = "button";
          cancel.className = "secondary-button";
          cancel.textContent = translated("cancelEdit");
          cancel.addEventListener("click", () => {
            editingSentHandoffNoteId = null;
            renderSentHandoffNotes();
          });
          editor.append(label, save, cancel);
          editor.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!input.value.trim()) {
              input.focus();
              return;
            }
            const editedAt = new Date().toLocaleString();
            const updatedNotes = sentHandoffNotes.map((saved) => saved.id === note.id
              ? { ...saved, message: input.value.trim(), editedAt, resentAt: editedAt }
              : saved
            );
            try {
              persistSentHandoffNotes(updatedNotes);
              editingSentHandoffNoteId = null;
              const updated = updatedNotes.find((saved) => saved.id === note.id);
              renderSentHandoffNotes();
              renderHandoffReceipt(updated, true);
              document.getElementById("handoff-error").dataset.i18n = "handoffError";
              document.getElementById("handoff-error").hidden = true;
              addActivity("handoffResent", {
                actor: "Demo User",
                recipient: recipientName,
                priority: translated(note.priority === "urgent" ? "handoffUrgent" : "handoffGeneral"),
                channel: translated(note.channel === "sms" ? "textChannel" : note.channel === "both" ? "bothChannels" : "emailChannel")
              });
            } catch (error) {
              console.error("Unable to save and resend a handoff note.", error);
              document.getElementById("handoff-error").dataset.i18n = "handoffSaveError";
              document.getElementById("handoff-error").textContent = translated("handoffSaveError");
              document.getElementById("handoff-error").hidden = false;
            }
          });
          card.append(editor);
        }
        return card;
      }));
    }

    function matchesFilter(item) {
      const quantity = Math.max(0, Number(item.quantity) || 0);
      const searchTerm = searchInput.value.trim().toLocaleLowerCase();
      const displayName = translateCatalogText(item.name);
      const matchesSearch = `${item.name} ${displayName}`.toLocaleLowerCase().includes(searchTerm);
      const matchesStock = activeFilter === "all" ||
        (activeFilter === "instock" && quantity > 0) ||
        (activeFilter === "out" && quantity === 0);
      return matchesSearch && matchesStock;
    }

    function renderInventory() {
      inventoryList.replaceChildren();
      const visibleItems = inventoryState.items.filter(matchesFilter);
      visibleItems.forEach((item) => {
        const quantity = Math.max(0, Number(item.quantity) || 0);
        const inStock = quantity > 0;
        const displayName = translateCatalogText(item.name);
        const card = document.createElement("article");
        card.className = "volunteer-item-card";
        card.dataset.stock = inStock ? "instock" : "out";
        const title = document.createElement("h3");
        title.textContent = displayName;
        const badge = document.createElement("span");
        badge.className = "volunteer-stock-badge";
        badge.dataset.stock = inStock ? "instock" : "out";
        badge.textContent = translated(inStock ? "stockInStatus" : "stockOutStatus");
        const countLabel = document.createElement("p");
        countLabel.className = "quantity-summary";
        const restockDays = Math.max(0, Number(item.restockDays) || 0);
        countLabel.textContent = !inStock && restockDays
          ? formatText("quantityRestockSummary", {
              quantity,
              unit: translated(quantity === 1 ? "unitSingular" : "unitPlural"),
              days: restockDays,
              dayUnit: translated(restockDays === 1 ? "daySingular" : "dayPlural")
            })
          : formatText(quantity === 1 ? "quantitySummaryOne" : "quantitySummary", { quantity });
        const controls = document.createElement("div");
        controls.className = "quantity-controls";
        const minus = document.createElement("button");
        minus.type = "button";
        minus.className = "quantity-stepper";
        minus.textContent = "-";
        minus.setAttribute("aria-label", formatText("decreaseQuantity", { name: displayName }));
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "0";
        quantityInput.step = "1";
        quantityInput.value = String(quantity);
        quantityInput.id = `quantity-${encodeURIComponent(item.id)}`;
        quantityInput.className = "quantity-input";
        quantityInput.setAttribute("aria-label", formatText("quantityFor", { name: displayName }));
        quantityInput.setAttribute("inputmode", "numeric");
        const plus = document.createElement("button");
        plus.type = "button";
        plus.className = "quantity-stepper";
        plus.textContent = "+";
        plus.setAttribute("aria-label", formatText("increaseQuantity", { name: displayName }));
        controls.append(minus, quantityInput, plus);
        card.append(title, badge, countLabel, controls);

        const restock = document.createElement("div");
        restock.className = "restock-control";
        restock.hidden = inStock;
        const restockLabel = document.createElement("label");
        restockLabel.htmlFor = `restock-${encodeURIComponent(item.id)}`;
        restockLabel.textContent = translated("restockEta");
        const restockInput = document.createElement("input");
        restockInput.type = "number";
        restockInput.min = "0";
        restockInput.step = "1";
        restockInput.value = String(Math.max(0, Number(item.restockDays) || 0));
        restockInput.id = `restock-${encodeURIComponent(item.id)}`;
        restockInput.className = "restock-input";
        restockInput.setAttribute("aria-label", `${translated("restockEta")}: ${displayName}`);
        restock.append(restockLabel, restockInput);
        card.append(restock);

        function saveQuantity(nextQuantity) {
          const previousQuantity = Math.max(0, Number(item.quantity) || 0);
          item.quantity = Math.max(0, Math.floor(Number(nextQuantity) || 0));
          if (item.quantity > 0) item.restockDays = Math.max(0, Number(item.restockDays) || 0);
          addActivity("itemQuantityUpdated", {
            actor: "Demo User",
            name: item.name,
            from: previousQuantity,
            quantity: item.quantity
          });
          renderInventory();
        }

        minus.addEventListener("click", () => saveQuantity(quantity - 1));
        plus.addEventListener("click", () => saveQuantity(quantity + 1));
        quantityInput.addEventListener("change", () => saveQuantity(quantityInput.value));
        restockInput.addEventListener("change", () => {
          item.restockDays = Math.max(0, Math.floor(Number(restockInput.value) || 0));
          addActivity(item.restockDays === 1 ? "itemRestockUpdatedOne" : "itemRestockUpdated", {
            actor: "Demo User",
            name: item.name,
            days: item.restockDays
          });
          renderInventory();
        });
        inventoryList.append(card);
      });
      populateDonationAutocomplete();
      const count = document.getElementById("volunteer-item-count");
      count.textContent = visibleItems.length
        ? visibleItems.length === 1
          ? translated("showingVolunteerItem")
          : formatText("showingVolunteerItems", { count: visibleItems.length })
        : translated("noInventoryMatches");
    }

    function loadInventory() {
      inventoryState = readInventory();
      if (!inventoryStored || inventoryNeedsMigration) persistInventory();
      document.getElementById("volunteer-signed-in-email").textContent = "Demo User";
      sectionsTrigger.hidden = false;
      login.hidden = true;
      dashboard.hidden = false;
      loadPersonalSettings();
      renderShiftRoster();
      renderInventory();
      renderActivity();
    }

    function signIn(email, recordAudit = false) {
      currentVolunteerEmail = email;
      try {
        sessionStorage.setItem(sessionKey, email);
      } catch (error) {
        console.error("Unable to save volunteer sign-in for this tab.", error);
      }
      emailInput.removeAttribute("aria-invalid");
      loginError.hidden = true;
      loadInventory();
      if (recordAudit) addActivity("volunteerSignedIn", { actor: "Demo User" });
    }

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim().toLocaleLowerCase();
      if (!emailInput.validity.valid || !demoEmails.has(email)) {
        emailInput.setAttribute("aria-invalid", "true");
        loginError.hidden = false;
        emailInput.focus();
        return;
      }
      signIn(email, true);
    });

    document.getElementById("fill-demo-email").addEventListener("click", () => {
      emailInput.value = "volunteer@lovepantry.org";
      emailInput.removeAttribute("aria-invalid");
      loginError.hidden = true;
      emailInput.focus();
    });

    document.getElementById("volunteer-sign-out").addEventListener("click", () => {
      try {
        sessionStorage.removeItem(sessionKey);
        localStorage.removeItem(scratchpadNotesKey(currentVolunteerEmail));
        localStorage.removeItem(`love-pantry-scratchpad:${currentVolunteerEmail}`);
        localStorage.removeItem(sentNotesKey);
      } catch (error) {
        console.error("Unable to clear volunteer sign-in and notes for this tab.", error);
      }
      resetDemoData();
      currentVolunteerEmail = "";
      sectionsTrigger.hidden = true;
      closeDrawers();
      dashboard.hidden = true;
      login.hidden = false;
      emailInput.value = "";
      emailInput.focus();
    });

    document.getElementById("volunteer-filter-tabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-volunteer-filter]");
      if (!button) return;
      activeFilter = button.dataset.volunteerFilter;
      document.querySelectorAll("[data-volunteer-filter]").forEach((tab) => {
        tab.setAttribute("aria-pressed", String(tab === button));
      });
      renderInventory();
    });
    searchInput.addEventListener("input", renderInventory);

    document.getElementById("donation-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nameInput = document.getElementById("donation-name");
      const name = nameInput.value.trim();
      const error = document.getElementById("donation-error");
      const normalizedName = name.toLocaleLowerCase();
      if (!name) {
        nameInput.setAttribute("aria-invalid", "true");
        error.textContent = translated("donationError");
        error.hidden = false;
        nameInput.focus();
        return;
      }
      nameInput.removeAttribute("aria-invalid");
      error.hidden = true;
      const features = Array.from(form.querySelectorAll('input[name="features"]:checked'), (input) => input.value);
      const quantity = Math.max(0, Math.floor(Number(document.getElementById("donation-quantity").value) || 0));
      const existing = inventoryState.items.find((item) =>
        item.name.trim().toLocaleLowerCase() === normalizedName ||
        translateCatalogText(item.name).trim().toLocaleLowerCase() === normalizedName
      );
      if (existing) {
        existing.quantity = Math.max(0, Number(existing.quantity) || 0) + quantity;
        existing.inStock = existing.quantity > 0;
        if (existing.quantity > 0) existing.restockDays = 0;
        existing.features = [...new Set([...(existing.features || []), ...features])];
        addActivity("itemDonationMerged", {
          actor: "Demo User",
          name: existing.name,
          quantity,
          total: existing.quantity
        });
      } else {
        const cookingSetup = document.getElementById("donation-setup").value;
        inventoryState.items.push({
          id: normalizedName,
          name,
          setup: cookingSetup,
          cookingSetup,
          quantity,
          inStock: quantity > 0,
          restockDays: 0,
          features,
          isDonation: true
        });
        addActivity("donationLogged", { actor: "Demo User", name, quantity });
      }
      form.reset();
      document.getElementById("donation-quantity").value = "1";
      renderInventory();
    });
    document.getElementById("donation-name").addEventListener("input", () => {
      const input = document.getElementById("donation-name");
      input.removeAttribute("aria-invalid");
      document.getElementById("donation-error").hidden = true;
    });

    document.getElementById("reset-demo-inventory").addEventListener("click", () => {
      inventoryState = {
        items: seedItems.map((item) => ({ ...item, features: [...item.features] })),
        updates: initialActivitySeeds.map((entry) => ({
          seedId: entry.seedId,
          key: entry.key,
          values: entry.values,
          time: Date.now() - entry.minutesAgo * 60_000
        }))
      };
      addActivity("inventoryReset");
      renderInventory();
      document.getElementById("donation-form").reset();
      document.getElementById("donation-quantity").value = "1";
    });

    document.getElementById("scratchpad-auto-title").addEventListener("click", () => {
      document.getElementById("scratchpad-title").value = nextScratchpadTitle();
      document.getElementById("scratchpad-title").focus();
    });

    document.getElementById("view-saved-notes").addEventListener("click", (event) => {
      const list = document.getElementById("saved-notes-list");
      list.hidden = !list.hidden;
      event.currentTarget.setAttribute("aria-expanded", String(!list.hidden));
    });

    document.getElementById("save-scratchpad").addEventListener("click", () => {
      const titleInput = document.getElementById("scratchpad-title");
      const bodyInput = document.getElementById("shift-scratchpad");
      const note = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        title: titleInput.value.trim() || nextScratchpadTitle(),
        body: bodyInput.value,
        timestamp: new Date().toLocaleString()
      };
      try {
        const updatedNotes = [note, ...savedScratchpadNotes];
        saveScratchpadNotes(updatedNotes);
        savedScratchpadNotes = updatedNotes;
        titleInput.value = "";
        bodyInput.value = "";
        renderSavedNotes();
        document.getElementById("scratchpad-error").hidden = true;
        document.getElementById("scratchpad-saved").hidden = false;
      } catch (error) {
        console.error("Unable to save a private shift note.", error);
        document.getElementById("scratchpad-saved").hidden = true;
        document.getElementById("scratchpad-error").hidden = false;
      }
    });

    document.getElementById("view-sent-notes").addEventListener("click", (event) => {
      const list = document.getElementById("sent-notes-list");
      list.hidden = !list.hidden;
      event.currentTarget.setAttribute("aria-expanded", String(!list.hidden));
    });

    document.getElementById("handoff-recipient-type").addEventListener("change", (event) => {
      const fellow = event.currentTarget.value === "volunteer";
      document.getElementById("handoff-volunteer-wrap").hidden = !fellow;
      if (fellow) renderVolunteerContacts();
      document.getElementById("handoff-error").hidden = true;
      document.getElementById("handoff-error").dataset.i18n = "handoffError";
    });
    document.getElementById("handoff-recipient").addEventListener("input", (event) => {
      renderVolunteerContacts(event.currentTarget.value);
    });

    document.getElementById("handoff-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const type = document.getElementById("handoff-recipient-type").value;
      const recipientInput = document.getElementById("handoff-recipient");
      const recipientName = type === "admin" ? translated("pantryAdmin") : recipientInput.value.trim();
      const currentPerson = getCurrentPerson();
      const audienceShift = currentPerson?.shift || "today";
      const allowedToContact = (visibility) =>
        visibility === "today" || (visibility === "current" && audienceShift === "current");
      const channel = form.querySelector('input[name="handoff-channel"]:checked').value;
      const person = type === "volunteer"
        ? shiftTeam.find((candidate) => {
            const preferences = privacyFor(candidate);
            const emailVisible = allowedToContact(preferences.emailVisibility);
            const phoneVisible = allowedToContact(preferences.phoneVisibility);
            const matchingValues = [candidate.name.toLocaleLowerCase()];
            if (emailVisible) matchingValues.push(candidate.email.toLocaleLowerCase());
            if (phoneVisible) matchingValues.push(candidate.phone);
            const channelAllowed = channel === "email"
              ? emailVisible
              : channel === "sms"
                ? phoneVisible
                : emailVisible && phoneVisible;
            return (matchingValues.some((value) => value && recipientName.toLocaleLowerCase().includes(value)) ||
              recipientName.toLocaleLowerCase().startsWith(candidate.name.split(" ")[0].toLocaleLowerCase())) &&
              channelAllowed;
          })
        : null;
      const messageInput = document.getElementById("handoff-message");
      const error = document.getElementById("handoff-error");
      if (!messageInput.value.trim() || (type === "volunteer" && !person)) {
        error.dataset.i18n = "handoffError";
        error.textContent = translated("handoffError");
        error.hidden = false;
        if (type === "volunteer" && !person) recipientInput.focus();
        else messageInput.focus();
        return;
      }
      error.hidden = true;
      const recipient = person?.name || translated("pantryAdmin");
      const priority = form.querySelector('input[name="handoff-priority"]:checked').value;
      const time = new Date();
      const contactPreferences = person ? privacyFor(person) : null;
      const recipientContact = person
        ? [
            (channel === "email" || channel === "both") && allowedToContact(contactPreferences.emailVisibility) ? person.email : "",
            (channel === "sms" || channel === "both") && allowedToContact(contactPreferences.phoneVisibility) ? person.phone : ""
          ].filter(Boolean).join(" · ")
        : "";
      const note = {
        id: `${time.getTime()}-${Math.random().toString(36).slice(2)}`,
        referenceId: `#NOTE-${Math.random().toString(16).slice(2, 6).toUpperCase().padEnd(4, "0")}`,
        sender: "Demo User",
        recipientType: type,
        recipientName: person?.name || "",
        recipientContact,
        channel,
        priority,
        timestamp: time.toLocaleString(),
        createdAt: time.toISOString(),
        message: messageInput.value.trim()
      };
      try {
        const updatedNotes = [note, ...sentHandoffNotes];
        persistSentHandoffNotes(updatedNotes);
        renderSentHandoffNotes();
      } catch (storageError) {
        console.error("Unable to save a sent handoff note.", storageError);
        error.dataset.i18n = "handoffSaveError";
        error.textContent = translated("handoffSaveError");
        error.hidden = false;
        return;
      }
      error.dataset.i18n = "handoffError";
      error.hidden = true;
      renderHandoffReceipt(note);
      addActivity("handoffSent", {
        actor: "Demo User",
        recipient,
        priority: translated(priority === "urgent" ? "handoffUrgent" : "handoffGeneral"),
        channel: translated(channel === "sms" ? "textChannel" : channel === "both" ? "bothChannels" : "emailChannel")
      });
      form.reset();
      document.getElementById("handoff-recipient-type").dispatchEvent(new Event("change", { bubbles: true }));
    });

    document.getElementById("privacy-form").addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        savedPrivacyPreferences[currentPrivacyIdentity()] = {
          emailVisibility: document.getElementById("email-visibility").value,
          phoneVisibility: document.getElementById("phone-visibility").value
        };
        localStorage.setItem(privacyKey, JSON.stringify(savedPrivacyPreferences));
        document.getElementById("privacy-saved").hidden = false;
        document.getElementById("privacy-error").hidden = true;
        renderVolunteerContacts();
      } catch (error) {
        console.error("Unable to save volunteer privacy preferences.", error);
        document.getElementById("privacy-saved").hidden = true;
        document.getElementById("privacy-error").hidden = false;
      }
    });
    document.getElementById("email-visibility").addEventListener("change", renderVolunteerContacts);
    document.getElementById("phone-visibility").addEventListener("change", renderVolunteerContacts);

    window.addEventListener("storage", (event) => {
      if (event.key !== inventoryKey || dashboard.hidden) return;
      inventoryState = readInventory();
      renderInventory();
      renderActivity();
    });
    window.addEventListener("storage", (event) => {
      if (event.key !== privacyKey || dashboard.hidden) return;
      readPrivacyPreferences();
      const currentPreferences = savedPrivacyPreferences[currentPrivacyIdentity()];
      if (currentPreferences) {
        document.getElementById("email-visibility").value = currentPreferences.emailVisibility;
        document.getElementById("phone-visibility").value = currentPreferences.phoneVisibility;
      }
      renderVolunteerContacts();
    });
    window.addEventListener("love-pantry-language-change", () => {
      if (!dashboard.hidden) {
        renderShiftRoster();
        renderVolunteerContacts();
        renderInventory();
        renderActivity();
        renderSavedNotes();
        renderSentHandoffNotes();
        if (activeHandoffReceipt) renderHandoffReceipt(activeHandoffReceipt, activeHandoffReceiptWasResent);
      }
    });

    try {
      const savedEmail = sessionStorage.getItem(sessionKey)?.trim().toLocaleLowerCase() || "";
      if (demoEmails.has(savedEmail)) signIn(savedEmail);
      else if (savedEmail) sessionStorage.removeItem(sessionKey);
    } catch (error) {
      console.error("Unable to restore volunteer sign-in for this tab.", error);
    }
  }

  initializeSupportForm();
  initializeVolunteerPortal();
  applyLanguage(currentLanguage, false);

  window.addEventListener("beforeunload", stopSpeech);
})();
