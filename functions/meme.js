/**
 * @returns link, subreddit, title, image, author, upvotes, nsfw
 */

const req = require("phin");

module.exports = async () => {
    const res = await req("https://meme-api.herokuapp.com/gimme");
    
    let link = JSON.parse(res.body).postLink
    let subreddit = JSON.parse(res.body).subreddit;
    let title = JSON.parse(res.body).title;
    let image = JSON.parse(res.body).url;
    let author = JSON.parse(res.body).author;
    let upvotes = JSON.parse(res.body).ups;
    let nsfw = JSON.parse(res.body).nsfw;
    
    return { title, link, subreddit, image, author, upvotes, nsfw }
};
