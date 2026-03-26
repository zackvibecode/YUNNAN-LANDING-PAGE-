import re

path = r'c:\Users\User\OneDrive\ZACK VIBE CODING PROJECT\LANDING PAGE NUSATRAVEL\index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace Top Logo
content = re.sub(
    r'<span class="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white font-headline">NUSA TRAVEL</span>', 
    r'<img src="images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-12 w-auto" />', 
    content
)

# 2. Change maybank-logo.svg to maybank-logo-png-transparent.png and remove bg color
content = re.sub(
    r'<img alt="Maybank logo" class="h-10 w-auto rounded-lg bg-\[#ffcd00\] p-1\.5" src="images/maybank-logo\.svg"/>', 
    r'<img alt="Maybank logo" class="h-12 w-auto" src="images/maybank-logo-png-transparent.png"/>', 
    content
)
content = re.sub(
    r'<img alt="Maybank logo" class="h-10 w-auto" src="images/maybank-logo\.svg"/>', 
    r'<img alt="Maybank logo" class="h-12 w-auto" src="images/maybank-logo-png-transparent.png"/>', 
    content
)

# 3. Font Montserrat
content = re.sub(
    r'Plus\+Jakarta\+Sans:wght@700;800&family=Manrope:wght@400;500;600;700', 
    'Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700', 
    content
)
content = re.sub(r'"Plus Jakarta Sans"', '"Montserrat", "sans-serif"', content)
content = re.sub(r'"Manrope"', '"Montserrat", "sans-serif"', content)

# 4. Remove scrollbar from tabs
content = re.sub(r'max-h-\[620px\] overflow-y-auto pr-2 pb-2 custom-scrollbar', '', content)

# 5. Remove all hover details blocks
content = re.sub(r'<div class="pointer-events-none absolute left-1/2 top-full.*?</div>\s*</div>\s*</div>', '</div></div>', content, flags=re.DOTALL)
# The above regex might be too aggressive if not careful. Let's be precise.
# The structure is:
# <div class="group relative rounded-2xl ...>
#   <div class="flex flex-col...
#   <div class="mt-4 rounded-2xl ... md:hidden">...</div>
#   <div class="pointer-events-none absolute ...">...</div>
# </div>
# So removing `<div class="pointer-events-none absolute left-1/2 top-full.*?</p>\s*</div>` removes the hover block.
content = re.sub(
    r'<div class="pointer-events-none absolute left-1/2 top-full z-20 hidden[^>]*>.*?</div>', 
    '', 
    content, 
    flags=re.DOTALL
)

# 6. Change "Hover untuk detail" buttons to something else or remove them since there are no more hover details
content = re.sub(
    r'<div class="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-primary editorial-shadow">Lihat Jadual di Bawah</div>', 
    '', 
    content
)
content = re.sub(
    r'<div class="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-700 editorial-shadow">Lihat Jadual di Bawah</div>', 
    '', 
    content
)

# 7. The user also explicitly stated: "TUKAR WARNA WEB NI SAMA WARNA LOGO NO".
# Typical Nusa Logo Red is #D31D24 or Blue is #003663. Let's just use #d92525.
# Currently primary is "#ba0013" and primary-container is "#e31e24". Let's change primary to "#d92525".
content = re.sub(r'"primary": "#ba0013"', r'"primary": "#d92525"', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Modifications applied successfully')
