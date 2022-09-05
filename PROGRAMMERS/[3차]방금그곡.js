// 프로그래머스 [3차] 방금그곡 https://school.programmers.co.kr/learn/courses/30/lessons/17683

const replaceMusic = (str) => {
  return str
    .replace(/C#/g, "H")
    .replace(/D#/g, "I")
    .replace(/F#/g, "J")
    .replace(/G#/g, "K")
    .replace(/A#/g, "L");
};

const getTime = (startTime, endTime) => {
  return (
    Number(endTime[0]) * 60 +
    Number(endTime[1]) -
    Number(startTime[0]) * 60 -
    Number(startTime[1])
  );
};

const getMusicWithTime = (music, time) => {
  return (
    music.repeat(Math.floor(time / music.length)) +
    music.slice(0, time % music.length)
  );
};

function solution(m, musicinfos) {
  let answer = "",
    answerTime = 0;
  m = replaceMusic(m);
  musicinfos.forEach((musicinfoEl) => {
    const musicinfo = musicinfoEl.split(",");
    musicinfo[3] = replaceMusic(musicinfo[3]);
    const time = getTime(musicinfo[0].split(":"), musicinfo[1].split(":"));
    const music = getMusicWithTime(musicinfo[3], time);
    const musicRegex = RegExp(m, "g");
    if (musicRegex.exec(music) !== null && answerTime < time) {
      answer = musicinfo[2];
      answerTime = time;
    }
  });
  return answer === "" ? "(None)" : answer;
}
