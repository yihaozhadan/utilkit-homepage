// Utility functions that can be used across tools
class DevToolboxUtils {
    static copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show success notification
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg';
            notification.textContent = 'Copied to clipboard!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    static formatJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            return JSON.stringify(parsed, null, 2);
        } catch (e) {
            return null;
        }
    }
}

const ThemeManager = (() => {
    const root = document.documentElement;
    const STORAGE_KEY = 'darkMode';

    const applyStoredPreference = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'true') {
            root.classList.add('dark');
        } else if (stored === 'false') {
            root.classList.remove('dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add('dark');
        }
    };

    const toggleTheme = () => {
        const isDark = root.classList.toggle('dark');
        localStorage.setItem(STORAGE_KEY, isDark);
    };

    const bindToggleButton = () => {
        document.addEventListener('click', (event) => {
            const toggleBtn = event.target.closest('#darkModeToggle');
            if (!toggleBtn) return;
            event.preventDefault();
            toggleTheme();
        });
    };

    return {
        init: () => {
            applyStoredPreference();
            bindToggleButton();
        }
    };
})();

const initFeatherIcons = () => {
    const replaceIcons = () => {
        if (window.feather && typeof window.feather.replace === 'function') {
            window.feather.replace();
        }
    };

    replaceIcons();

    if (window.customElements) {
        customElements.whenDefined('custom-navbar').then(replaceIcons);
        customElements.whenDefined('custom-footer').then(replaceIcons);
    }
};

// Initialize all tool functionalities when their sections are loaded
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    initFeatherIcons();
    // This would be expanded for each tool's functionality
    // For now, just a placeholder for future implementations
});