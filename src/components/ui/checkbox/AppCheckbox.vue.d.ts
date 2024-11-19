interface IProps {
    modelValue: boolean;
    disabled?: boolean;
}
declare let __VLS_typeProps: IProps;
type __VLS_PublicProps = {
    ""?: any;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:": (args_0: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:"?: ((args_0: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    label?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AppCheckbox.vue.d.ts.map