class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 navbar-blur">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" class="flex items-center space-x-2">
                        <i data-feather="tool" class="text-indigo-600 dark:text-indigo-400"></i>
                        <span class="text-xl font-bold text-gray-800 dark:text-white">Util Kit</span>
                    </a>
                    
                    <div class="flex items-center space-x-6">
                        <button id="darkModeToggle" class="theme-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                            <i data-feather="moon" class="hidden dark:block"></i>
                            <i data-feather="sun" class="dark:hidden"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);