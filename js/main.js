document.getElementById("join-btn").addEventListener("click", function() {
    alert("感谢你的加入！请填写报名表。");
});


let leaderboard = [
    { name: "玩家1", score: 1500 },
    { name: "玩家2", score: 1200 },
    { name: "玩家3", score: 1000 },
];

function showLeaderboard() {
    const leaderboardSection = document.getElementById("leaderboard");
    leaderboardSection.innerHTML = leaderboard
        .map(player => `<li>${player.name} - ${player.score}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", function () {
    showLeaderboard();
});
