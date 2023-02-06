import fs from 'fs';
import NodeCache from 'node-cache';

// export const cache = new NodeCache();
export const OTPcache = new NodeCache({ stdTTL: 60, checkperiod: 70 });

// const DEFAULT_EMAIL = { email: [] };
// const DEFAULT_SMS = { sms: [] };
// OTPcache.mset([
//     { key: 'email', val: [] },
//     { key: 'sms', val: [] },
// ]);

// const fileBKP = fs.readFileSync('./cache-backup.json', 'utf-8');
// OTPcache.data = JSON.parse(fileBKP);

process.on('exit', () => {
    // fs.writeFileSync('./cache-backup.json', JSON.stringify(cache.data));
});
