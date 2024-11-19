interface IUser {
    avatar?: string;
    year?: string;
    name?: string;
}
interface IProps {
    isMe: boolean;
    imFollowing?: boolean;
    user: IUser;
}
declare const _default: import('vue').DefineComponent<IProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{}>, {
    user: IUser;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=AppUserCard.vue.d.ts.map