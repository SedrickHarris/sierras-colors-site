import { launchPages } from "../data/launchPages";

console.log("Launch page index");
console.table(launchPages.map((page) => ({ title: page.title, slug: page.slug, status: page.status })));
