ut"}

Implement responsive behavior for the Courses screen.

Do not redesign the layout. Only adapt spacing and widget behavior.

---

### BREAKPOINTS

Use three responsive ranges.

Desktop  
≥ 1440px

Small laptop (13" MacBook)  
1280–1439px

Tablet  
1024–1279px

---

### SMALL LAPTOP (1280–1439px)

Adjust spacing to prevent content clipping.

Layout remains:

Sidebar | Content | Widgets

Rules:

• spacing between sidebar and content: 50px  
• spacing between content and right widgets: 50px  

Course cards should be flexible.

Card width:

min-width: 420px  
max-width: 520px

Cards should shrink slightly if necessary.

---

### TABLET RANGE (1024–1279px)

Right widgets should switch to compact mode.

Transform widget cards into circular icons.

Icon size:

56–64px

Layout:

Sidebar | Content (wider) | compact widgets

Content column becomes wider since widgets occupy less space.

---

### GENERAL RULE

Content should never be clipped or hidden on smaller screens.

Cards must scale smoothly before switching layo