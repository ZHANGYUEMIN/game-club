// 游戏社团主要JavaScript功能

// 加入按钮事件处理
document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.getElementById("join-btn");
    if (joinBtn) {
        joinBtn.addEventListener("click", function() {
            alert("感谢你的加入！请填写报名表。");
        });
    }
    
    console.log('Main.js: DOM loaded');
    
    // 确保排行榜正确初始化（备用）
    setTimeout(() => {
        if (typeof showLeaderboard === 'function') {
            console.log('Main.js: Backup leaderboard initialization');
            showLeaderboard('lol');
        }
    }, 1000);
});

// 搜索功能
function searchPlayers(query) {
    if (typeof leaderboards !== 'undefined') {
        const allPlayers = Object.values(leaderboards).flat();
        const results = allPlayers.filter(player => 
            player.name.toLowerCase().includes(query.toLowerCase())
        );
        return results;
    }
    return [];
}

// 添加一些实用工具函数
function formatScore(score) {
    return score.toLocaleString();
}

function getPlayerRankColor(rank) {
    const rankColors = {
        '钻石': '#00ff88',
        '铂金': '#00bfff',
        '黄金': '#ffd700',
        '白银': '#c0c0c0',
        '青铜': '#cd7f32'
    };
    
    for (let [key, color] of Object.entries(rankColors)) {
        if (rank.includes(key)) {
            return color;
        }
    }
    return '#ffffff';
}

console.log('Main.js loaded successfully');
