<script>
    import BOM from "../static/book-of-mormon-no-verses.json";
    import NT from "../static/new-testament.json";
    import DAC from "../static/doctrine-and-covenants.json";

    let languageCode = "sg";
    const languageCodes = [
        { languageName: "English", code: "en" },
        { languageName: "Sango", code: "sg" },
        { languageName: "French", code: "fr" },
    ];
</script>

<div id="main">
    <div class="langSelection">
        Select Language <select id="selectLang" bind:value={languageCode}>
            {#each languageCodes as language}
                <option value={language.code}>{language.languageName}</option>
            {/each}
        </select>
    </div>
    <h3>Introductions and Witnesses</h3>
    <div class="book-wrapper">
        {#each BOM.otherPages as page}
            <div class="book">
                <a class="chapter" href="{page.link} " target="_blank">
                    {page.title}
                </a>
            </div>
        {/each}
    </div>
    <h3>Books</h3>
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

<div>
    <h1>Holy Bible</h1>
    <h3>Books</h3>
    <div class="book-wrapper">
        {#each NT.books as book}
            <div class="book">
                <h3>{book.book}</h3>
                {#each book.chapters as chapter, index}
                    <a
                        class="chapter"
                        href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/nt/{book.abbreviation}/{index +
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

<div>
    <h1>Doctrine and Covenants</h1>
    <h3>Sections</h3>
    <div class="book-wrapper">
        {#each DAC.sections as section, index}
            <div class="book">
                <!-- <h3>{section.reference}</h3> -->
                <!-- {#each book.chapters as chapter, index} -->
                <a
                    class="chapter"
                    href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/dc-testament/dc/{index +
                        1}?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
                    target="_blank"
                >
                    {section.reference}
                </a>
                <!-- {/each} -->
            </div>
        {/each}
    </div>
</div>

<div>
    <h1>Gospel Principles</h1>
    <a href="https://www-churchofjesuschrist-org.translate.goog/study/manual/gospel-principles?lang=eng&_x_tr_sl=en&_x_tr_tl=sg&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true">Chapters</a>
</div>

<style>
    h3 {
        text-align: center;
    }
    .book-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        /* flex-direction: column; */
    }

    .book {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        max-height: 300px;
        overflow: scroll;
    }
    @media screen and (max-width: 480px) {
        #main {
            margin-top: 50px;
        }
        .chapter {
            margin-top: 0.5rem;
        }
        .langSelection {
            position: fixed;
            top: 0;
            background-color: var(--color-bg-1);
            width: 100%;
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
