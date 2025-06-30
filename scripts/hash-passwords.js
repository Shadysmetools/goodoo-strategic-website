const bcrypt = require('bcrypt');

(async () => {
  const shady = await bcrypt.hash('Kali@1410', 10);
  const hsa = await bcrypt.hash('Theos@1410', 10);
  console.log('shady@smetools.io:', shady);
  console.log('hsa@smetools.io:', hsa);
})(); 