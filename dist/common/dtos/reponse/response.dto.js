"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto2 = exports.ResponseDto = void 0;
class ResponseDto {
    constructor(nonce, status, message, error, payload, page) {
        this.nonce = nonce;
        this.status = status;
        this.message = message;
        this.error = error;
        this.payload = payload;
        this.page = page;
    }
}
exports.ResponseDto = ResponseDto;
class ResponseDto2 {
    constructor(nonce, status, message, success, payload, page) {
        this.nonce = nonce;
        this.status = status;
        this.message = message;
        this.success = success;
        this.payload = payload;
        this.page = page;
    }
}
exports.ResponseDto2 = ResponseDto2;
//# sourceMappingURL=response.dto.js.map