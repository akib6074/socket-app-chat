"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNominationID = exports.createUserID = exports.createPollID = void 0;
const createPollID = async () => {
    const { customAlphabet } = await Promise.resolve().then(() => require('nanoid'));
    return customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
};
exports.createPollID = createPollID;
const createUserID = async () => {
    const { nanoid } = await Promise.resolve().then(() => require('nanoid'));
    return nanoid();
};
exports.createUserID = createUserID;
const createNominationID = async () => {
    const { nanoid } = await Promise.resolve().then(() => require('nanoid'));
    return nanoid(8);
};
exports.createNominationID = createNominationID;
//# sourceMappingURL=ids.js.map