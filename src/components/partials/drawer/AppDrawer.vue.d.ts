interface IProps {
    maxWidth?: string;
}
declare let __VLS_typeProps: IProps;
type __VLS_PublicProps = {
    modelValue?: boolean;
} & typeof __VLS_typeProps;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
}>, {
    maxWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AppDrawer.vue.d.ts.map