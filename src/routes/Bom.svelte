<script>
    import BOM from "../static/book-of-mormon-no-verses.json";

    let languageCode = "sg";
    const languageCodes = [
        { languageName: "English", code: "en" },
        { languageName: "Sango", code: "sg" },
        { languageName: "French", code: "fr" },
    ];
</script>

<div>
    <h1>Books:</h1>
    <div class="langSelection">
        <select id="selectLang" bind:value={languageCode}>
            {#each languageCodes as language}
                <option value={language.code}>{language.languageName}</option>
            {/each}
        </select>
    </div>
    <div class="book-wrapper">
        <h1>{languageCode}</h1>
        {#each BOM.books as book}
            <div class="book">
                <h3>{book.book}</h3>
                {#each book.chapters as chapter, index}
                    <a
                        href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/bofm/{book.abbreviation}/{index +
                            1}?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
                        target="_blank"
                    >
                        {chapter.reference}
                    </a>
                    <br />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .book-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .book {
        padding: 1rem;
    }

    .langSelection {
        display: flex;
        justify-content: center;
    }
    #selectLang {
        font-size: 1.5rem;
    }
</style>
