import { articles } from './articles.js';
import {
    objectToArticleBuilder,
    objectToTabBuilder,
} from './componentBuilder.js';

// get hash from url
let articleId = window.location.hash.slice(1) || 1;
window.location.hash = articleId;

// make tabs for each article
const tabsContainer = document.querySelector('.tabs');

// create tab for each article
articles.forEach((article) => {
    const { tab } = objectToTabBuilder(article);
    tabsContainer.appendChild(tab);
});

// get all tabs
const tabs = document.querySelectorAll('.tab');

// create articles
const articlesContainer = document.querySelector('.articles');
articles.forEach((article) => {
    const { articleDiv } = objectToArticleBuilder(article);
    articlesContainer.appendChild(articleDiv);
});

displayArticles(articleId);

// add active class to tab on click and remove from other tabs

tabs.forEach((tab) => {
    if (tab.getAttribute('data-tab') == articleId) {
        tab.classList.add('active');
    }
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');

        // get data attribute of clicked tab which is the article id
        const tabName = tab.getAttribute('data-tab');

        // add path to url
        window.location.hash = tabName;
        // get hash from url and remove #
        articleId = window.location.hash.slice(1);

        // add active class to article with same data attribute as clicked tab
        displayArticles(articleId);
    });
});

function displayArticles(articleId) {
    const articlesElements = document.querySelectorAll('.article');
    articlesElements.forEach((article) => {
        if (article.getAttribute('data-active') == 'true') {
            article.setAttribute('data-active', 'false');
        }
        article.style.display = 'none';
    });
    articlesElements[articleId - 1].style.display = 'block';
    articlesElements[articleId - 1].setAttribute('data-active', 'true');
}
