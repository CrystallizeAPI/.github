import mustache from 'mustache';
import fs from "fs";
import { fetchComics } from './UseCases/FetchComics.js';
import { fetchBlogPosts } from './UseCases/FetchBlogPost.js';
import { fetchBoilerplates } from './UseCases/FetchBoilerplates.js';
import { fetchJobOffers } from './UseCases/FetchJobOffers.js';
import { fetchLibraries } from './UseCases/FetchLibraries.js';
import { fetchApps } from './UseCases/FetchApps.js';

export async function run(args: string[], flags: any): Promise<number> {
    const template = './templates/README.md';
    fs.readFile(template, 'utf8', async (err, content) => {
        if (err) {
            console.error(err);
            return 1;
        }
        const now = new Date().toISOString();

        // Get the random Comic
        const comics = await fetchComics();
        const comic = comics[Math.floor(Math.random() * comics.length)];

        // Get the 15 Blog Posts
        const posts = await fetchBlogPosts(15);
        const mainBlogPosts = posts.slice(0, 4);
        const secondaryBlogPosts = posts.slice(4, 11);

        // Boilerplates
        const boilerplates = fetchBoilerplates();

        //Job Offers
        const jobOffers = await fetchJobOffers(10);

        //Libraries
        const libraries = fetchLibraries();

        //Apps
        const apps = fetchApps();

        const context = {
            comic,
            jobOffers,
            mainBlogPosts,
            secondaryBlogPosts,
            boilerplates,
            libraries,
            apps,
            generatedAt: (now.split('T')[0] + ' ' + now.split('T')[1].split('.')[0]).replace(/-/g, '--'),
        };
        console.log(mustache.render(content, context));
    })
    return 0;
}
