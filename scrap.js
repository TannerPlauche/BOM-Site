import fs from 'fs';
import bomJson from './src/static/book-of-mormon.json' assert { type: "json" };;

bomJson.books.forEach(book => {
    book.chapters.forEach(chapter => {
        if (chapter.verses) {
            delete chapter.verses;
        }
    });
});

fs.writeFileSync('./src/static/book-of-mormon-no-verses.json', JSON.stringify(bomJson, null, 2));


// ?lang=eng&_x_tr_sl=fr&_x_tr_tl=sg&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true
// ?lang=eng&_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true

