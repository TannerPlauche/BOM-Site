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
        Select Language <select id="selectLang" bind:value={languageCode}>
            {#each languageCodes as language}
                <option value={language.code}>{language.languageName}</option>
            {/each}
        </select>
    </div>
    <div class="book-wrapper">
        {#each BOM.books as book}
            <div class="book">
                <h3>{book.book}</h3>
                {#each book.chapters as chapter, index}
                    <a
                        class="chapter"
                        href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/bofm/{book.abbreviation}/{index +
                            1}?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
                        target="_blank"
                    >
                        {chapter.reference}
                    </a>
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem;
    }
    @media screen and (max-width: 480px) {
        .chapter {
            margin-bottom: 0.5rem;
        }
    }

    .langSelection {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #selectLang {
        font-size: 1.5rem;
        margin: 0.5rem;
    }
</style>
