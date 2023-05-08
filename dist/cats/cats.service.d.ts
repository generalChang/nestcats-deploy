/// <reference types="multer" />
import { CatsRepository } from './cats.repository';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    signup(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    }>;
    uploadImg(files: Express.Multer.File[], id: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    }>;
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../comments/comments.schema").Comment[];
    }[]>;
}
