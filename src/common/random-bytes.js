const Crypto = require('crypto');

const MAX_BUFFER = 4096 /* typical page size */ - 96 /* Empty buffer overhead */;

let buffer;
let offset = MAX_BUFFER;

function randomBytes(size) {
	if (offset + size >= MAX_BUFFER) {
		offset = 0;
		buffer = Crypto.randomBytes(MAX_BUFFER);
	}

	return buffer.slice(offset, offset += size);
}

module.exports = { randomBytes };
