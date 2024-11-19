import { FontWeightTypes, FontSizesTypes, ColorTypes, FontFamilyTypes } from '@can-i-helpu-ds/tokens';
import { TextTagTypes } from './@types';
interface IProps {
    as?: TextTagTypes;
    size?: FontSizesTypes;
    weight?: FontWeightTypes;
    color?: ColorTypes;
    family?: FontFamilyTypes;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<IProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{}>, {
    size: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "xl" | "lg" | "md" | "sm" | "xs";
    as: "abbr" | "b" | "cite" | "code" | "del" | "dfn" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "i" | "ins" | "kbd" | "mark" | "p" | "q" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var";
    family: "primary" | "secondary";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AppText.vue.d.ts.map