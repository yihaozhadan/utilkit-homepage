class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="mt-auto border-t border-gray-200 dark:border-gray-700 footer-blur">
                <div class="container mx-auto px-4 py-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-4 md:mb-0">
                            <p class="text-gray-600 dark:text-gray-400">&copy; ${new Date().getFullYear()} DevToolbox. All rights reserved.</p>
                        </div>
                        
                        <div class="flex space-x-6">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-600 dark:text-gray-400">
                                <i data-feather="github"></i>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-600 dark:text-gray-400">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="social-icon text-gray-600 dark:text-gray-400">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="mailto:your.email@example.com" class="social-icon text-gray-600 dark:text-gray-400">
                                <i data-feather="mail"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>Built with <i data-feather="heart" class="inline text-red-500"></i> for developers</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);