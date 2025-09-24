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
- Learnt about `useEffect`, how and when to use it.