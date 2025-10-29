<script>
  import BOM_OLD from "../static/book-of-mormon-no-verses.json";
  import NT from "../static/new-testament.json";
  import DAC from "../static/doctrine-and-covenants.json";
  import BOM_CHAPTERS from "../static/book_of_mormon_chapters.json";

  let languageCode = "sg";
  const languageCodes = [
    { languageName: "English", code: "en" },
    { languageName: "Sango", code: "sg" },
    { languageName: "French", code: "fr" },
  ];
</script>

<div class="container">
  <!-- Language Selection Sticky Header -->
  <div class="lang-selector">
    <label for="selectLang">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        ></path>
      </svg>
      Language
    </label>
    <select id="selectLang" bind:value={languageCode}>
      {#each languageCodes as language}
        <option value={language.code}>{language.languageName}</option>
      {/each}
    </select>
  </div>

  <!-- Book of Mormon Section -->
  <section class="scripture-section">
    <h1 class="main-title">Book of Mormon</h1>

    <div class="subsection">
      <h2 class="section-title">Introductions and Witnesses</h2>
      <div class="intro-grid">
        {#each BOM_OLD.otherPages as page}
          <a class="intro-card" href={page.link} target="_blank">
            {page.title}
          </a>
        {/each}
      </div>
    </div>

    <div class="subsection">
      <h2 class="section-title">Books</h2>
      <div class="books-grid">
        {#each BOM_CHAPTERS as book}
          <div class="book-card">
            <h3 class="book-title">{book.title}</h3>
            <div class="chapters-container">
              {#each book.chapters as chapter}
                {#if chapter.title.includes("Entire")}
                  <a
                    class="chapter-link"
                    href="{chapter.url.replace(
                      'https://en.wikisource.org',
                      'https://en-wikisource-org.translate.goog'
                    )}?_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp"
                    target="_blank"
                  >
                    {chapter.title}
                  </a>
                {:else if chapter.title.includes("Chapter")}
                  <a
                    class="chapter-link"
                    href="https://en-wikisource-org.translate.goog/wiki/Book_of_Mormon_(Plain_English_Version)/{book.title
                      .split(' ')
                      .join('_')}/{chapter.title
                      .split(' ')
                      .join(
                        '_'
                      )}?_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp"
                    target="_blank"
                  >
                    {chapter.title}
                  </a>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Holy Bible Section -->
  <section class="scripture-section">
    <h1 class="main-title">Holy Bible - New Testament</h1>
    <div class="books-grid">
      {#each NT.books as book}
        <div class="book-card">
          <h3 class="book-title">{book.book}</h3>
          <div class="chapters-container">
            {#each book.chapters as chapter, index}
              <a
                class="chapter-link"
                href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/nt/{book.abbreviation}/{index +
                  1}?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
                target="_blank"
              >
                {chapter.reference}
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Doctrine and Covenants Section -->
  <section class="scripture-section">
    <h1 class="main-title">Doctrine and Covenants</h1>
    <div class="dac-grid">
      {#each DAC.sections as section, index}
        <a
          class="dac-link"
          href="https://www-churchofjesuschrist-org.translate.goog/study/scriptures/dc-testament/dc/{index +
            1}?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
          target="_blank"
        >
          {section.reference}
        </a>
      {/each}
    </div>
  </section>

  <!-- Gospel Principles Section -->
  <section class="scripture-section">
    <h1 class="main-title">Gospel Principles</h1>
    <a
      class="gospel-principles-link"
      href="https://www-churchofjesuschrist-org.translate.goog/study/manual/gospel-principles?lang=eng&_x_tr_sl=en&_x_tr_tl={languageCode}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
      Read All Chapters
    </a>
  </section>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
  }

  /* Language Selector */
  .lang-selector {
    position: sticky;
    top: 0;
    z-index: 100;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 1.5rem;
    margin: 0 -1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .lang-selector label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  #selectLang {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 8px;
    background: white;
    color: #333;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  #selectLang:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  #selectLang:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }

  /* Scripture Sections */
  .scripture-section {
    margin-bottom: 3rem;
    background: #f8f9fa;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .main-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin: 0 0 2rem 0;
    text-align: center;
    font-weight: 700;
    border-bottom: 4px solid #667eea;
    padding-bottom: 1rem;
  }

  .subsection {
    margin-bottom: 2rem;
  }

  .subsection:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-size: 1.8rem;
    color: #34495e;
    margin: 0 0 1.5rem 0;
    font-weight: 600;
  }

  /* Intro Cards */
  .intro-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .intro-card {
    background: white;
    padding: 1.25rem;
    border-radius: 8px;
    text-decoration: none;
    color: #667eea;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
  }

  .intro-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
    background: #f0f3ff;
  }

  /* Books Grid */
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .book-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }

  .book-title {
    font-size: 1.3rem;
    color: #2c3e50;
    margin: 0 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e0e0e0;
    font-weight: 600;
    text-align: center;
  }

  .chapters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 0.5rem;
  }

  /* Custom Scrollbar */
  .chapters-container::-webkit-scrollbar {
    width: 6px;
  }

  .chapters-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  .chapters-container::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 10px;
  }

  .chapters-container::-webkit-scrollbar-thumb:hover {
    background: #5568d3;
  }

  .chapter-link {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    background: #f0f3ff;
    color: #667eea;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid #d0d7ff;
  }

  .chapter-link:hover {
    background: #667eea;
    color: white;
    transform: scale(1.05);
  }

  /* Doctrine and Covenants Grid */
  .dac-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
  }

  .dac-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 2px solid #e0e0e0;
    min-height: 60px;
  }

  .dac-link:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }

  /* Gospel Principles Link */
  .gospel-principles-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .gospel-principles-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .container {
      padding: 0 0.5rem 1rem;
    }

    .lang-selector {
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      margin: 0 -0.5rem 1.5rem;
    }

    .main-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .scripture-section {
      padding: 1.5rem 1rem;
      margin-bottom: 2rem;
    }

    .books-grid,
    .intro-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .dac-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 0.5rem;
    }

    .book-card {
      padding: 1rem;
    }

    .chapters-container {
      max-height: 200px;
    }
  }

  @media screen and (max-width: 480px) {
    .main-title {
      font-size: 1.75rem;
    }

    .book-title {
      font-size: 1.1rem;
    }

    .chapter-link {
      padding: 0.4rem 0.6rem;
      font-size: 0.85rem;
    }

    .dac-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }
  }
</style>
