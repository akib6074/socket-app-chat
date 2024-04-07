"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMultiFile = exports.ApiFile = exports.storageforCustomerInfo = exports.storageforRunnerRequired = exports.storageforCreditSalesInvoice = exports.storageforDoDetails = exports.storageforEmiDetails = exports.storageforCashApplicantDetails = exports.storageforCreditApplicantDetails = exports.storageforRegistration = exports.stockstorage = exports.storage = exports.originalFileName = exports.editedFileName = exports.pdfDocXlFilter = exports.mediaFileFilter = exports.imageFileFilter = void 0;
const swagger_1 = require("@nestjs/swagger");
const multer = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF|jfif|pjpeg|pjp|webp|svg|tif|tiff|bmp|ico|cur|avif|apng)$/)) {
        return callback(new common_1.ForbiddenException({ message: "Only image files are allowed!" }), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const mediaFileFilter = (req, file, callback) => {
    if (!(/\.(mp4|avi|mpeg|mp3|wav|flv|FLV|mkv|MKV|jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|docx|DOCX|xlsx|xlsm|xlsb|xltx|jfif|pjpeg|pjp|webp|svg|tif|tiff|bmp|ico|cur|avif|apng)$/).test(file.originalname)) {
        return callback(new common_1.ForbiddenException({
            message: "Only video image and doc files are allowed!",
        }), false);
    }
    callback(null, true);
};
exports.mediaFileFilter = mediaFileFilter;
const pdfDocXlFilter = (req, file, callback) => {
    if (!(/\.(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF|pdf|PDF|doc|DOC|docx|DOCX|xlsx|xlsm|xlsb|xltx|jfif|pjpeg|pjp|webp|svg|tif|tiff|bmp|ico|cur|avif|apng)$/).test(file.originalname)) {
        console.warn(file.originalname);
        console.warn('false--------------------------------------');
        return callback(new common_1.ForbiddenException({
            message: "Only pdf, doc or xl files are allowed!",
        }), false);
    }
    console.warn(file.originalname);
    console.warn('false--------------------------------------');
    callback(null, true);
};
exports.pdfDocXlFilter = pdfDocXlFilter;
const editedFileName = (req, file, callback) => {
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = file.originalname + "-" + new Date().getTime();
    callback(null, `${randomName}${fileExtName}`);
};
exports.editedFileName = editedFileName;
const originalFileName = (req, file, callback) => {
    const originalName = file.originalname;
    callback(null, `${originalName}`);
};
exports.originalFileName = originalFileName;
exports.storage = multer.diskStorage({
    destination: "./sys-files/",
    filename: exports.editedFileName,
});
exports.stockstorage = multer.diskStorage({
    destination: "./sys-files/stock",
    filename: exports.editedFileName,
});
exports.storageforRegistration = multer.diskStorage({
    destination: "./sys-files/vehicle-registration",
    filename: exports.editedFileName,
});
exports.storageforCreditApplicantDetails = multer.diskStorage({
    destination: "./sys-files/credit-applicant-deatils",
    filename: exports.editedFileName,
});
exports.storageforCashApplicantDetails = multer.diskStorage({
    destination: "./sys-files/cash-applicant-deatils",
    filename: exports.editedFileName,
});
exports.storageforEmiDetails = multer.diskStorage({
    destination: "./sys-files/emi-entry",
    filename: exports.editedFileName,
});
exports.storageforDoDetails = multer.diskStorage({
    destination: "./sys-files/do-details",
    filename: exports.editedFileName,
});
exports.storageforCreditSalesInvoice = multer.diskStorage({
    destination: "./sys-files/credit-sales-invoice",
    filename: exports.editedFileName,
});
exports.storageforRunnerRequired = multer.diskStorage({
    destination: "./sys-files/runner-required",
    filename: exports.originalFileName,
});
exports.storageforCustomerInfo = multer.diskStorage({
    destination: "./sys-files/runner-required",
    filename: exports.editedFileName,
});
const ApiFile = (fileName = "image") => (target, propertyKey, descriptor) => {
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                [fileName]: {
                    type: "string",
                    format: "binary",
                },
            },
        },
    })(target, propertyKey, descriptor);
};
exports.ApiFile = ApiFile;
const ApiMultiFile = (fileName = "image") => (target, propertyKey, descriptor) => {
    (0, swagger_1.ApiBody)({
        type: "multipart/form-data",
        required: true,
        schema: {
            type: "object",
            properties: {
                [fileName]: {
                    type: "array",
                    items: {
                        type: "string",
                        format: "binary",
                    },
                },
            },
        },
    })(target, propertyKey, descriptor);
};
exports.ApiMultiFile = ApiMultiFile;
//# sourceMappingURL=file-uploading.util.js.map