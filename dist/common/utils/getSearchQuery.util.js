"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchQuery = void 0;
const typeorm_1 = require("typeorm");
const searchQuery = (text, fieldList) => {
    if (text) {
        let term = `${text.replace(/%20/g, " ")}`;
        console.warn(term, "term");
        let mainquery = {};
        let query = {};
        for (const [index, i] of fieldList.entries()) {
            query[i] = (0, typeorm_1.Like)("%" + term + "%");
            mainquery[i] = { ...query[i] };
            delete query[i];
        }
        console.warn(mainquery, "MAinQuery");
        return mainquery;
    }
    return {};
};
exports.searchQuery = searchQuery;
//# sourceMappingURL=getSearchQuery.util.js.map