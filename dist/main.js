"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const common_1 = require("@nestjs/common");
const success_interceptor_1 = require("./common/interceptors/success.interceptor");
const swagger_1 = require("@nestjs/swagger");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const path_1 = __importDefault(require("path"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new success_interceptor_1.SuccessInterceptor());
    app.use(['/docs', '/docs-json'], (0, express_basic_auth_1.default)({
        challenge: true,
        users: {
            [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
    }));
    app.useStaticAssets(path_1.default.join(__dirname, './common', 'uploads'), {
        prefix: '/media',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('고양이 커뮤니티 REST API 문서')
        .setDescription('고양이 커뮤니티 제작을 위한 REST API 문서입니다.')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: true,
        credentials: true,
    });
    const PORT = process.env.PORT;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map