### Day 1 – Log (24/09/2025)

**Issue:**  
Vite threw an error when starting dev server:  
`TypeError: crypto.hash is not a function`  

**Cause:**  
My Node.js version was `20.11.1`, but Vite requires `20.19+` or `22.12+`.  

**Fix:**  
- Installed `nvm-windows` from the official repo.  
- Used `nvm install 22.12.0` and `nvm use 22.12.0` to upgrade Node.  
- Verified with `node -v`.  
- Restarted terminal → Vite dev server started successfully.  

**Lesson Learned:**  
Always check framework version requirements. Keep Node updated and use `nvm` for easy version switching.


### Day 2 - Log (25/09/2025)

**Issues**
### Entry 1: - Toggle not updating
The toggle wasn’t working because I hadn’t wired the state updates correctly. Fixed it by using setState(prev => !prev) with a proper return value.

### Entry 2: - Missing quotation mark
Missed a quotation mark in a className, which broke JSX. Added the missing quote.

### Entry 3: - className assigned globally
Tried assigning className directly like a global variable, so styles didn’t apply. Fixed it by passing className through props/state.

### Entry 4: - Arrow function syntax error
Used -> instead of => in an arrow function, causing a syntax error. Replaced it with the correct =>.

**Lesson Learned**
- Updating state correctly using setState(prev => !prev).
- Learnt about `useEffect`, how and when to use it. (Put values in the dependency array only if their change means the effect must re-run.)

### Day 3 - Log (26/09/2025)

**Issues**
### Entry 1: - Clock not ticking
Forgot to add setInterval inside useEffect, so the time only updated once. Fixed by wrapping the update logic in `setInterval`.

### Entry 2: - Wrong dependency array
Used [time] as a dependency, which caused an infinite loop of updates. Fixed by replacing it with [isRunning] so the effect runs only when the value of `isRunning` changes.

### Entry 3: - State not initialized
Didn’t initialize useState with the current time, so the component rendered undefined at first. Fixed by passing `new Date().toLocaleTimeString()` as the initial value.

**Lesson learned**
 - Always initialize state with a sensible default to avoid `undefined`.
 - `setInterval` needs cleanup with `clearInterval` to prevent memory leaks.
 - Dependency arrays control when `useEffect` runs—empty `[]` means run only on mount.

 ### Day 4 - log

 **Issues**
 ### Entry 1: - Clock container styles not applying
 The clock container styles weren't applying because I forgot to set a `position` property (it only had `top` and `left`). Fixed by adding `position: absolute;` in CSS.

### Entry 2: - List not reusable
Initially hardcoded the `USERS` array inside the List component, so it couldn’t accept other data. Fixed by making a generic list component and passing `items` as a `prop`.

### Entry 3: - Wrong <ul> / <li> structure
I wrapped <li> inside a <div>, which caused errors and broke semantics. Fixed by placing the content directly inside <li>.

**Lesson learned**
- CSS positioning rules: `top/left` only work if `position` is set.
- Components should accept `props` to stay reusable.
- List structure must follow semantic HTML: <ul> → <li> → content.
- Render-prop pattern makes lists flexible: `{typeof children === "function" ? children(item, index) : item}`
