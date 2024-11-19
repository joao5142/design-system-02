interface IAuthor {
    name: string;
    avatar: string;
}
interface IProps {
    author: IAuthor;
    description: string;
    comments: Array<{
        author: IAuthor;
        comment: string;
    }>;
    createdAt: string;
}
declare const _default: import('vue').DefineComponent<IProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=AppPost.vue.d.ts.map