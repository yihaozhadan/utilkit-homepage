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

// Initialize all tool functionalities when their sections are loaded
document.addEventListener('DOMContentLoaded', () => {
    // This would be expanded for each tool's functionality
    // For now, just a placeholder for future implementations
});