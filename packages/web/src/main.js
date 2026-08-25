import './styles/theme.css';
import './components/watslog-app.js';
import { registerSW } from 'virtual:pwa-register';
// Register PWA service worker with auto-update
const updateSW = registerSW({
    onNeedRefresh() {
        console.log('New app version available.');
    },
    onOfflineReady() {
        console.log('App ready to work offline.');
    },
});
//# sourceMappingURL=main.js.map