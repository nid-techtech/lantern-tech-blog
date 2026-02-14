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
        title: {
            jp: "文字",
            en: "Character",
            zh: "文字"
        },
    },
    {
        slug: "vendor",
        title: {
            jp: "ベンダー",
            en: "Vendor",
            zh: "文字提供系统"
        },
    },
    {
        slug: "conveyor",
        title: {
            jp: "コンベア",
            en: "Conveyor",
            zh: "传送带"
        },
    },
    {
        slug: "software",
        title: {
            jp: "ソフトウェア",
            en: "Software",
            zh: "软件"
        },
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
        title: {
            jp: "中間報告",
            en: "Interim Report",
            zh: "中期汇报"
        },
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
        title: {
            jp: "PR動画",
            en: "Promotion Video",
            zh: "宣传视频"
        },
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
    top: {
        jp: "トップ",
        en: "Top",
        zh: "首页"
    },
    blog: {
        jp: "ブログ",
        en: "Blog",
        zh: "博客"
    },
    newsrelease: {
        jp: "発表資料",
        en: "News Release",
        zh: "发布资料"
    },
    notes: {
        jp: "参考文献",
        en: "Notes",
        zh: "参考文献"
    },
};

export const externalLinks = {
    jp: {
        astro: {
            href: "https://astro.build",
            label: "Astro | 世界最速のWebフレームワーク",
        },
        cloudflare: {
            href: "https://pages.cloudflare.com",
            label: "Cloudflare Pages | 記録的な速さのサイトを構築しよう",
        },
        imgur: {
            href: "https://imgur.com",
            label: "Imgur | インターネットの魔法",
        },
        z4a: {
            href: "https://img.z4a.net",
            label: "Z4A図床 | 中国で最も誠実な画像ホスティング",
        },
    },
    en: {
        astro: {
            href: "https://astro.build",
            label: "Astro | World's Fastest Web Framework",
        },
        cloudflare: {
            href: "https://pages.cloudflare.com",
            label: "Cloudflare Pages | Build fast sites. In record time.",
        },
        imgur: {
            href: "https://imgur.com",
            label: "Imgur | The magic of the Internet",
        },
        z4a: {
            href: "https://img.z4a.net",
            label: "Z4A Picture Bed | The most honest image hosting in China",
        },
    },
    zh: {
        astro: {
            href: "https://astro.build",
            label: "Astro | 世界最快的Web框架",
        },
        cloudflare: {
            href: "https://pages.cloudflare.com",
            label: "Cloudflare Pages | 快速构建网站。创纪录的速度。",
        },
        imgur: {
            href: "https://imgur.com",
            label: "Imgur | 互联网的魔法",
        },
        z4a: {
            href: "https://img.z4a.net",
            label: "Z4A图床 | 做中国最良心的免费图床",
        },
    },
};
