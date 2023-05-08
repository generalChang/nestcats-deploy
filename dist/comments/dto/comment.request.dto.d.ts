import { Comment } from '../comments.schema';
declare const CommentRequestDto_base: import("@nestjs/common").Type<Pick<Comment, "author" | "contents">>;
export declare class CommentRequestDto extends CommentRequestDto_base {
}
export {};
