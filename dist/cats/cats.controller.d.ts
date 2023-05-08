/// <reference types="multer" />
import { CustomAwsService } from './customAws.service';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { Cat } from './cats.schema';
export declare class CatsController {
    private readonly catService;
    private readonly authService;
    private readonly awsService;
    constructor(catService: CatsService, authService: AuthService, awsService: CustomAwsService);
    getCurrentCat(cat: Cat): {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    };
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    }>;
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    logOut(): string;
    uploadCatImg(files: Array<Express.Multer.File>, req: any): Promise<{
        key: string;
        s3Object: import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/s3").PutObjectOutput, import("aws-sdk").AWSError>;
        contentType: string;
    }>;
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    }[]>;
}
