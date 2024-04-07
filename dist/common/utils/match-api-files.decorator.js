"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchApiFiles = void 0;
const swagger_1 = require("@nestjs/swagger");
const MatchApiFiles = (options) => (target, propertyKey) => {
    if (options?.isArray) {
        (0, swagger_1.ApiProperty)({
            type: 'array',
            items: {
                type: 'file',
                properties: {
                    [propertyKey]: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        })(target, propertyKey);
    }
};
exports.MatchApiFiles = MatchApiFiles;
//# sourceMappingURL=match-api-files.decorator.js.map