document.addEventListener('DOMContentLoaded', function() {
    // 日付の表示処理のみ実行
    updateDate();
});

// --- 日付更新関数 ---
function updateDate() {
    const dateElement = document.getElementById('currentDate');
    if (!dateElement) return;

    const now = new Date();
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];

    dateElement.textContent = `${year}年${month}月${date}日(${day})`;
}