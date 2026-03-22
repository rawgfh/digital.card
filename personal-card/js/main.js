/**
 * 个人名片页交互脚本
 * 功能：页面加载动画、标签交互效果、滚动监听
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
});

function initPage() {
    // 添加标签悬停效果
    initTagEffects();

    // 添加笔记卡片点击效果
    initNoteCards();

    // 页面加载完成动画
    document.body.classList.add('loaded');
}

/**
 * 标签效果
 */
function initTagEffects() {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * 笔记卡片效果
 */
function initNoteCards() {
    const noteCards = document.querySelectorAll('.note-card');

    noteCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击反馈动画
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

/**
 * 平滑滚动到指定元素
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 导出全局函数供外部调用
window.personalCard = {
    scrollToElement: scrollToElement
};
