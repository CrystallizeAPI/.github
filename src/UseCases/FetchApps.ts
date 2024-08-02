export interface App {
    name: string;
    github: string;
    doc: string;
}

export function fetchApps(): App[] {
    return [
        {
            name: 'Hello World App',
            github: 'https://github.com/CrystallizeAPI/hello-world-comics-app',
            doc: 'https://github.com/CrystallizeAPI/hello-world-comics-app',
        },
        {
            name: 'Refund App',
            github: 'https://github.com/CrystallizeAPI/crystallize-refund-app',
            doc: 'https://github.com/CrystallizeAPI/crystallize-refund-app'
        },
        {
            name: 'Subscription Contract App',
            github: 'https://github.com/CrystallizeAPI/crystallize-subscription-contract-app',
            doc: 'https://github.com/CrystallizeAPI/crystallize-subscription-contract-app',
        },
        {
            name: 'Translation App',
            github: 'https://github.com/CrystallizeAPI/translation-app',
            doc: 'https://github.com/CrystallizeAPI/translation-app'
        }, 
        {
            name: 'Generative AI App',
            github: 'https://github.com/CrystallizeAPI/generative-ai-app',
            doc: 'https://github.com/CrystallizeAPI/generative-ai-app'
        }
    ];
}

