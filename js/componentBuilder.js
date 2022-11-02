export const objectToArticleBuilder = (article) => {
    const articleDiv = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleContent = document.createElement('div');
    const articleDate = document.createElement('small');
    const articleAuthor = document.createElement('p');
    const articleImg = document.createElement('img');

    articleDiv.setAttribute('data-tab', article.id);
    articleDiv.classList.add('article');

    articleTitle.classList.add('article-title');
    articleTitle.textContent = article.title;

    articleContent.classList.add('article-content');
    articleContent.innerHTML = article.content;

    articleDate.classList.add('article-date');
    articleDate.textContent = article.date;

    articleAuthor.classList.add('article-author');
    articleAuthor.textContent = article.author;

    articleImg.classList.add('article-img');
    articleImg.src = article.img;

    articleDiv.appendChild(articleImg);
    articleDiv.appendChild(articleTitle);
    articleDiv.appendChild(articleContent);
    articleDiv.appendChild(articleAuthor);
    articleDiv.appendChild(articleDate);

    return {
        articleDiv,
        articleTitle,
        articleContent,
        articleDate,
        articleAuthor,
        articleImg,
    };
};

export const objectToTabBuilder = (article) => {
    const tab = document.createElement('div');
    const tabTitle = document.createElement('h3');
    const tabDate = document.createElement('p');
    const tabImg = document.createElement('img');
    const tabContent = document.createElement('div');

    tabDate.textContent = article.date;
    tabImg.src = article.img;
    tabTitle.textContent = article.title;

    tab.appendChild(tabImg);
    tab.classList.add('tab');
    tab.setAttribute('data-tab', article.id);

    tabContent.appendChild(tabTitle);
    tabContent.appendChild(tabDate);

    tab.appendChild(tabContent);

    return {
        tab,
        tabTitle,
        tabDate,
        tabImg,
        tabContent,
    };
};
