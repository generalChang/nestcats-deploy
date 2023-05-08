"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = exports.Comment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Comment = class Comment {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'author',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Types.ObjectId,
        ref: 'cats',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comment.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'contents',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Comment.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'like count',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Comment.prototype, "likeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'receiver',
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Types.ObjectId,
        ref: 'cats',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comment.prototype, "info", void 0);
Comment = __decorate([
    (0, mongoose_1.Schema)(options)
], Comment);
exports.Comment = Comment;
exports.CommentsSchema = mongoose_1.SchemaFactory.createForClass(Comment);
//# sourceMappingURL=comments.schema.js.map