### Day 1 – Bug Log (24/09/2025)

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
