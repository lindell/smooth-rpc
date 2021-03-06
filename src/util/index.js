const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
function generateID() {
    let str = '';
    for (let i = 0; i < 16; i += 1) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function validateRequest(data) {
    return (
        typeof data.method === 'string' && data.jsonrpc === '2.0' && typeof data.params === 'object'
    );
}

module.exports = { generateID, validateRequest };
