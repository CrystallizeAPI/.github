export interface Boilerplate {
    name: string;
    github: string;
    live: string;
    doc: string;
}

export function fetchBoilerplates(): Boilerplate[] {
    return [
        {
            name: 'Remix Run Advanced Boilerplate',
            github: 'https://github.com/CrystallizeAPI/furniture-remix',
            live: 'https://furniture.superfast.store/',
            doc: 'https://github.com/CrystallizeAPI/furniture-remix'
        },
        {
            name: 'Next JS',
            github: 'https://github.com/CrystallizeAPI/crystallize-nextjs-boilerplate',
            live: 'https://furniture.superfast.shop/',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/react-nextjs'
        },
        {
            name: 'Remix Run Simple Storytelling',
            github: 'https://github.com/CrystallizeAPI/product-storytelling-examples',
            live: 'https://dounot.milliseconds.live/',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/remix-boilerplate'
        },
        {
            name: 'Nuxt JS',
            github: 'https://github.com/CrystallizeAPI/crystallize-nuxtjs-boilerplate',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/vuejs-nuxtjs',
            live: 'https://nuxt.superfast.shop/'
        },
        {
            name: 'Gatsby',
            github: 'https://github.com/CrystallizeAPI/crystallize-gatsby-boilerplate',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/react-gatsby',
            live: 'https://gatsby.superfast.shop/'
        },
        {
            name: 'SaaS',
            github: 'https://github.com/CrystallizeAPI/crystallize-saas-boilerplate',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/saas-boilerplate',
            live: 'https://photofinder.superfast.shop/'
        },
        {
            name: 'Content Commerce',
            github: 'https://github.com/CrystallizeAPI/content-commerce-boilerplate',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/storytelling-ecommerce',
            live: 'https://story.superfast.shop/stories/coffee-from-seed-to-cup'
        },
        {
            name: 'Conference',
            github: 'https://github.com/CrystallizeAPI/conference-boilerplate',
            doc: 'https://crystallize.com/learn/open-source/boilerplates/conference-boilerplate',
            live: 'https://conference.superfast.shop/'
        }
    ];
}

