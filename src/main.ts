import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/styles.css';

// Import the FontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Add the icons to the library
library.add(faPhone, faWhatsapp);

const app = createApp(App);

// Register the component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
