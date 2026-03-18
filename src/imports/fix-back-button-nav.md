Fix the navigation behavior of all "Back" buttons in the application.

Problem:
Currently the back buttons only work on the second click.  
The first click does nothing.

Apply the following fixes.

---

BUTTON TYPE

All back buttons must use:

type="button"

This prevents the button from submitting forms.

---

NAVIGATION METHOD

Do NOT use router.back().

Instead use explicit navigation:

router.push("/welcome")

or the correct route for that screen.

---

EVENT HANDLING

Ensure the click handler triggers immediately.

Example:

const router = useRouter()

<button
  type="button"
  onClick={() => router.push("/welcome")}
>

---

VALIDATION

Check all screens that contain a back button.

Make sure:

• the button is not inside a form submit flow  
• the button does not rely on router.back()  
• the click handler runs on the first click

---

IMPORTANT

Do not change layout or styles.  
Only fix navigation behavior.