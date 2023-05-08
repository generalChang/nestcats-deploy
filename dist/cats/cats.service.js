"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const cats_repository_1 = require("./cats.repository");
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
let CatsService = class CatsService {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    async signup(body) {
        const { email, name, password } = body;
        const isCatExist = await this.catsRepository.existsByEmail(email);
        if (isCatExist) {
            throw new common_1.HttpException('해당하는 고양이는 이미 존재합니다', 403);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const cat = await this.catsRepository.create({
            email,
            name,
            password: hashedPassword,
        });
        return cat.readOnlyData;
    }
    async uploadImg(files, id) {
        console.log(files);
        const fileName = `cats/${files[0].filename}`;
        const newCat = await this.catsRepository.findByIdAndUploadImg(id, fileName);
        return newCat;
    }
    async getAllCat() {
        const allCat = await this.catsRepository.findAll();
        const readOnlyCats = allCat.map((cat) => cat.readOnlyData);
        return readOnlyCats;
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map