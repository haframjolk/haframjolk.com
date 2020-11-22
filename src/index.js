import KonamiCode from 'konami-code';
import spawnKickAss from './lib/kickass';

document.addEventListener('DOMContentLoaded', () => {
  // Spawn Kick Ass if Konami code is entered
  const konami = new KonamiCode();
  konami.listen(spawnKickAss);
});
