import { CrystallizeClient } from '@crystallize/js-api-client';

export interface Comic {
    title: string;
    url: string;
}

export async function fetchComics(): Promise<Comic[]> {
    const caller = CrystallizeClient.catalogueApi;
    const response = await caller(
        `query($language: String!, $path: String!) {
            catalogue(language: $language, path: $path) {
              name
              children {
                ... on Document {
                  name
                  caption: component(id: "caption") {
                    content {
                      ... on RichTextContent {
                        plainText
                      }
                    }
                  }
                  stripe: component(id: "stripe") {
                    content {
                      ... on ImageContent {
                        firstImage {
                          url
                          variants {
                              height
                              url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
        {
            "language": "en",
            "path": "/comics"
        }
    );

    return response.catalogue.children.map((child: any) => {
        // const variants = child.stripe.content.firstImage.variants.filter((variant: any) => variant.height === 500);
        return {
            title: child.name,
            // url: variants[2]?.url || child.stripe.content.firstImage.url
            url: child.stripe.content.firstImage.url
        };
    });
}
