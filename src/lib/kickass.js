// Kick Ass game script
const SCRIPT_URL = 'https://hi.kickassapp.com/kickass.js';

/**
 * Appends Kick Ass game script to the DOM
 */
export default function spawnKickAss() {
  const script = document.createElement('script');
  script.src = SCRIPT_URL;
  document.body.appendChild(script);
}
