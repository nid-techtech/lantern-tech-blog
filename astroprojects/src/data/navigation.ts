export type MultiLangTitle = {
    jp: string;
    en: string;
    zh: string;
};

export type PageDefinition = {
    slug: string;
    title: MultiLangTitle;
};

export const blogPages: PageDefinition[] = [
    {
        slug: "integrate",
        title: {
            jp: "全体の状況",
            en: "Overall Integration",
            zh: "整体情况",
        },
    },
    {
        slug: "character",
        title: { jp: "文字", en: "Character", zh: "文字" },
    },
    {
        slug: "vendor",
        title: { jp: "ベンダー", en: "Vendor", zh: "供应商" },
    },
    {
        slug: "conveyor",
        title: { jp: "コンベア", en: "Conveyor", zh: "传送带" },
    },
    {
        slug: "software",
        title: { jp: "ソフトウェア", en: "Software", zh: "软件" },
    },
];

export const newsreleasePages: PageDefinition[] = [
    {
        slug: "matching",
        title: {
            jp: "マッチングプレゼン",
            en: "Matching Presentation",
            zh: "匹配演示",
        },
    },
    {
        slug: "middle",
        title: { jp: "中間報告", en: "Interim Report", zh: "中期报告" },
    },
    {
        slug: "movie",
        title: {
            jp: "動画プレゼン",
            en: "Video Presentation",
            zh: "视频演示",
        },
    },
    {
        slug: "caption",
        title: {
            jp: "キャプションボード",
            en: "Caption Board",
            zh: "说明牌",
        },
    },
    {
        slug: "promotion",
        title: { jp: "PR動画", en: "Promotion Video", zh: "宣传视频" },
    },
];

export const notesPages: PageDefinition[] = [
    {
        slug: "precedent",
        title: {
            jp: "参考作品リサーチ",
            en: "Precedent Research",
            zh: "参考作品研究",
        },
    },
    {
        slug: "pickup",
        title: {
            jp: "気になった記事や作品",
            en: "Picked Up Articles",
            zh: "关注的文章或作品",
        },
    },
];

export const categoryNames = {
    top: { jp: "トップ", en: "Top", zh: "首页" },
    blog: { jp: "ブログ", en: "Blog", zh: "博客" },
    newsrelease: { jp: "発表資料", en: "News Release", zh: "发布资料" },
    notes: { jp: "参考文献", en: "Notes", zh: "参考文献" },
};
