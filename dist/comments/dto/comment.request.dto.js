"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comments_schema_1 = require("../comments.schema");
class CommentRequestDto extends (0, swagger_1.PickType)(comments_schema_1.Comment, [
    'author',
    'contents',
]) {
}
exports.CommentRequestDto = CommentRequestDto;
//# sourceMappingURL=comment.request.dto.js.map