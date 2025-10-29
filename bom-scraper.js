import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

// The list of books
const books = [
//   { "title": "1 Nephi", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/1_Nephi" },
//   { "title": "2 Nephi", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/2_Nephi" },
//   { "title": "Jacob", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Jacob" },
//   { "title": "Enos", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Enos" },
//   { "title": "Jarom", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Jarom" },
//   { "title": "Omni", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Omni" },
  { "title": "Words of Mormon", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Words_of_Mormon" },
  { "title": "Mosiah", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Mosiah" },
  { "title": "Alma", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Alma" },
  { "title": "Helaman", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Helaman" },
  { "title": "3 Nephi", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/3_Nephi" },
  { "title": "4 Nephi", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/4_Nephi" },
//   { "title": "Mormon", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Mormon" },
//   { "title": "Ether", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Ether" },
//   { "title": "Moroni", "url": "https://en.wikisource.org/wiki/Book_of_Mormon_(Plain_English_Version)/Moroni" }
];

async function scrapeChapters(book) {
  try {
    const { data } = await axios.get(book.url);
    const $ = cheerio.load(data);

    const chapters = [];
    // Select all <a> inside <ul> that link to this book's chapters
    $("div.mw-parser-output ul li a").each((i, el) => {
      const href = $(el).attr("href");
      const title = $(el).text().trim();
      if (href && href.startsWith(`/wiki/Book_of_Mormon_(Plain_English_Version)/${book.title.replace(/\s/g, "_")}/`)) {
        chapters.push({
          title,
          url: `https://en.wikisource.org${href}`
        });
      }
    });

    return { ...book, chapters };
  } catch (err) {
    console.error(`Error scraping ${book.title}:`, err.message);
    return { ...book, chapters: [] };
  }
}

async function main() {
  const results = [];
  for (const book of books) {
    console.log(`Scraping ${book.title}...`);
    const bookWithChapters = await scrapeChapters(book);
    results.push(bookWithChapters);
  }

  fs.writeFileSync("book_of_mormon_chapters.json", JSON.stringify(results, null, 2));
  console.log("Scraping complete! Saved to book_of_mormon_chapters.json");
}

main();
