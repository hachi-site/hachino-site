const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
  
    // 1桁の場合は0を足して2桁に
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    // 時刻の文字列を作成
    let time = `${hour}:${min}:${sec}`;
  
    // 文字列を出力
    document.querySelector(".clock-time").innerText = time;
  };
  
  // 1秒ごとにclock関数を呼び出す
  setInterval(clock, 1000);