import fs from 'fs';
import bomJson from './static/book-of-mormon.json';

bomJson.books.forEach(book => {
    book.chapters.forEach(chapter => {
        if (chapter.verses) {
            delete chapter.verses;
        }
    });
});

fs.writeFileSync('./static/book-of-mormon-no-verses.json', JSON.stringify(bomJson, null, 2));