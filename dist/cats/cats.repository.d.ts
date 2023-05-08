import { Cat } from './cats.schema';
import mongoose, { Model, Types } from 'mongoose';
import { CatRequestDto } from './dto/cats.request.dto';
import { Comment } from 'src/comments/comments.schema';
export declare class CatsRepository {
    private catModel;
    private readonly commentModel;
    constructor(catModel: Model<Cat>, commentModel: Model<Comment>);
    existsByEmail(email: string): Promise<{
        _id: Types.ObjectId;
    }>;
    create(cat: CatRequestDto): Promise<mongoose.Document<unknown, {}, Cat> & Omit<Cat & {
        _id: Types.ObjectId;
    }, never>>;
    findCatByEmail(email: string): Promise<mongoose.Document<unknown, {}, Cat> & Omit<Cat & {
        _id: Types.ObjectId;
    }, never>>;
    findCatByIdWithoutPassword(catId: string | Types.ObjectId): Promise<mongoose.Document<unknown, {}, Cat> & Omit<Cat & {
        _id: Types.ObjectId;
    }, never>>;
    findByIdAndUploadImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: Comment[];
    }>;
    findAll(): Promise<Omit<mongoose.Document<unknown, {}, Cat> & Omit<Cat & {
        _id: Types.ObjectId;
    }, never>, never>[]>;
}
