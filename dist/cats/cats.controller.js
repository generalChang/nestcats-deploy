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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const customAws_service_1 = require("./customAws.service");
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
const cats_request_dto_1 = require("./dto/cats.request.dto");
const swagger_1 = require("@nestjs/swagger");
const cat_dto_1 = require("./dto/cat.dto");
const auth_service_1 = require("../auth/auth.service");
const login_request_dto_1 = require("../auth/dto/login.request.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const cats_schema_1 = require("./cats.schema");
const platform_express_1 = require("@nestjs/platform-express");
const multer_options_1 = require("../common/utils/multer.options");
let CatsController = class CatsController {
    constructor(catService, authService, awsService) {
        this.catService = catService;
        this.authService = authService;
        this.awsService = awsService;
    }
    getCurrentCat(cat) {
        return cat.readOnlyData;
    }
    async signUp(body) {
        return await this.catService.signup(body);
    }
    login(data) {
        return this.authService.jwtLogin(data);
    }
    logOut() {
        return 'logout';
    }
    async uploadCatImg(files, req) {
        return await this.awsService.uploadFileToS3('cats', files[0]);
    }
    getAllCat() {
        return this.catService.getAllCat();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '내 고양이 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_schema_1.Cat]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getCurrentCat", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공',
        type: cat_dto_1.ReadOnlyCatDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_request_dto_1.CatRequestDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: '로그아웃' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "logOut", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiOperation)({ summary: '고양이 사진 업로드' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 10, (0, multer_options_1.multerOptions)('cats'))),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "uploadCatImg", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '모든 고양이 가져오기',
    }),
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAllCat", null);
CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        auth_service_1.AuthService,
        customAws_service_1.CustomAwsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map