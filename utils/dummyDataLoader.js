const {Comment} = require('../dao/comment');
const {Movie} = require('../dao/movie');
const {Poster} = require('../dao/poster');
const {Reservation} = require('../dao/reservation');
const {ReservationSeat} = require('../dao/reservationSeat');
const {Screen} = require('../dao/screen');
const {ScreenTable} = require('../dao/screenTable');
const {Seat} = require('../dao/seat');
const {User} = require('../dao/user');
const {Theater} = require('../dao/theater');
const {Event} = require('../dao/event');
const {HashMap} = require('hashmap');
const moment = require('moment');

const userData = new HashMap();
const movieData = new HashMap();
const theaterData = new HashMap();
const screenData = new HashMap();
const screenTableData = new HashMap();
const commentData = new HashMap();
const posterData = new HashMap();
const reservationData = new HashMap();
const reservationSeatData = new HashMap();
const seatData = new HashMap();


async function dummyDataLoader() {
    await loadMovieData();
    await loadEventData();
    await loadTheaterData();
    await loadScreenData();
    await loadScreenTableData();
    await loadUserData();
}

async function loadUserData() {
    await saveUserDataIfNotFound("non1233", "0805", "권");
}

async function loadScreenData() {
    const screen1 = await saveScreenDataIfNotFound(theaterData.get(1)._id, 1, 10, 10, 1, 100);
    const screen2 = await saveScreenDataIfNotFound(theaterData.get(1)._id, 2, 10, 10, 1, 100);
    await screenData.set(1, screen1);
    await screenData.set(2, screen2);
    theaterData.get(1).screens.push(screen1._id);
    theaterData.get(1).screens.push(screen2._id);
    await theaterData.get(1).save();
}

async function loadTheaterData() {
    const Theater = await saveTheaterDataIfNotFound("구미 CGV");
    await theaterData.set(1, Theater);
}

async function loadScreenTableData() {
    const screenTableData1 = await saveScreenTableDataIfNotFound(screenData.get(1)._id, movieData.get(1)._id, moment.utc('2022-06-15 00:30'), moment.utc('2022-06-15 02:16'), 99);
    const screenTableData2 = await saveScreenTableDataIfNotFound(screenData.get(1)._id, movieData.get(1)._id, moment.utc('2022-06-15 06:30'), moment.utc('2022-06-15 08:16'), 100);
    const screenTableData3 = await saveScreenTableDataIfNotFound(screenData.get(2)._id, movieData.get(2)._id, moment.utc('2022-06-15 01:30'), moment.utc('2022-06-15 12:39'), 100);
    const screenTableData4 = await saveScreenTableDataIfNotFound(screenData.get(2)._id, movieData.get(2)._id, moment.utc('2022-06-15 08:30'), moment.utc('2022-06-15 10:39'), 100);
    await screenTableData.set(1, screenTableData1);
    await screenTableData.set(2, screenTableData2);
    await screenTableData.set(3, screenTableData3);
    await screenTableData.set(4, screenTableData4);

}


async function loadEventData() {
    await saveEventDataIfNotFound("개봉작 사용 설명서", null, "openingevent.png");
    await saveEventDataIfNotFound("[마녀2] CGV 필름마크", "2022.06.08~2022.07.03", "witch2vent.png");
    await saveEventDataIfNotFound("[버즈 라이트이어] CGV 필름마크", "2022.06.08~2022.07.03", "budsevent.png");
    await saveEventDataIfNotFound("[쥬라기월드:도미니언] 4DX 2주차 이벤트", "2022.06.03~2022.06.19", "monsterworldevent.png");
}

async function loadMovieData() {
    const MovieData1 = await saveMovieDataIfNotFound("범죄도시2", 106, moment.utc('2022-05-18'), "이상용", 99, 17.9, "마동석", `“느낌 오지? 이 놈 잡아야 하는 거”

가리봉동 소탕작전 후 4년 뒤,
금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다.

괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고,
그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다.

‘마석도’와 금천서 강력반은 한국과 베트남을 오가며
 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데...

나쁜 놈들 잡는 데 국경 없다!
통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다! `, 15, "범죄, 액션", "cityposter.png");

    const MovieData2 = await saveMovieDataIfNotFound("브로커", 129, moment.utc('2022-06-08'), "고레에다 히로카즈", 83, 26.2, "송강호, 강동원, 배두나, 이지은, 이주영", `세탁소를 운영하지만 늘 빚에 시달리는 ‘상현’(송강호)과
베이비 박스 시설에서 일하는 보육원 출신의 ‘동수’(강동원).
거센 비가 내리는 어느 날 밤,
그들은 베이비 박스에 놓인 한 아기를 몰래 데려간다.
하지만 이튿날, 생각지 못하게 엄마 ‘소영’(이지은)이 아기 ‘우성’을 찾으러 돌아온다.
아기가 사라진 것을 안 소영이 경찰에 신고하려 하자 솔직하게 털어놓는 두 사람.
우성이를 잘 키울 적임자를 찾아 주기 위해서 그랬다는 변명이 기가 막히지만
소영은 우성이의 새 부모를 찾는 여정에 상현, 동수와 함께하기로 한다.

한편 이 모든 과정을 지켜본 형사 ‘수진’(배두나)과 후배 ‘이형사’(이주영).
이들을 현행범으로 잡고 반 년째 이어온 수사를 마무리하기 위해 조용히 뒤를 쫓는다.

베이비 박스,
그곳에서 의도치 않게 만난 이들의
예기치 못한 특별한 여정이 시작된다.`, 12, '드라마', 'broker2poster.png');

    const MovieData3 = await saveMovieDataIfNotFound("쥬라기 월드-도미니언", 147, moment.utc('2022-06-01'), "콜린 트레보로우", 85, 13.8, "크리스 프랫, 브라이스 달라스 하워드, 드완다 와이즈, 로라 던, 제프 골드브럼, 샘 닐", ' ', 12, '액션, 어드밴쳐', 'monsterworldposter.png');
    const MovieData4 = await saveMovieDataIfNotFound("극장판 포캣몬스터DP-기라티나와 하늘의 꽃다발 쉐이미", 96, moment.utc('2022-06-01'), "유야마 쿠니히코", 94, 10.9, "이선호, 김영선", `끝나지 않은 전설의 포켓몬들의 배틀로
위험에 빠진 반전 세계와 현실 세계를 구하기 위해
감사포켓몬 ‘쉐이미’와 ‘지우’, ‘피카츄’가 나서면서 시작되는 모험 이야기`, 12, '애니매이션', 'giratinaoster.png');

    const MovieData5 = await saveMovieDataIfNotFound("닥터 스트레인지-대혼돈의 멀티버스", 126, moment.utc('2022-05-04'), "샘 레이미", 91, 0.3, " \n" +
        "베네딕트 컴버배치 ,  엘리자베스 올슨 ,  베네딕트 웡 ,  레이첼 맥아담스 ,  치웨텔 에지오포 ,  소치틀 고메즈", `지금껏 본 적 없는 마블의 극한 상상력!
5월, 광기의 멀티버스가 깨어난다!
  
끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며
오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.
대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….`, 12, '액션, 어드밴처, 환타지', 'doctorposter.png');

    const MovieData6 = await saveMovieDataIfNotFound("그대가 조국", 124, moment.utc('2022-05-25'), '이승준', 97, 0.2, '조국', `대한민국은 민주공화국인가 검찰공화국인가
검찰의 칼날이 그대에게 향하지 않는다고 자신할 수 있는가

사냥이 시작됐다. 검찰이 던진 좌표를 따라 언론은 몰려들고 소문은 꼬리를 문다. 
분노한 대중 앞에 검찰은 칼을 휘두른다. 저기 쫓기는 자는 누구인가. 
그대가 아니라고 자신할 수 있는가.`, 12, '다큐멘터리', 'jogukPoster.png');

    const MovieData7 = await saveMovieDataIfNotFound("애프터 양", 96, moment.utc('2022-06-01'), '코코나다', 88, 0.5, `
콜린 파렐 ,  조디 터너 스미스 ,  저스틴 H.민 ,  말레아 엠마 찬드로위자야`, `함께 살던 안드로이드 인간 ‘양’이 어느 날 작동을 멈추자
제이크 가족은 그를 수리할 방법을 찾는다.
그러던 중, ‘양’에게서 특별한 메모리 뱅크를 발견하고
그의 기억을 탐험하기 시작하는데…

무엇을 남기고 싶었어, 양?`, 12, '드라마', 'yangposter.png');

    const MovieData8 = await saveMovieDataIfNotFound('윤시내가 사라졌다', 107, moment.utc('2022-06-08'), '김진화', 93, 0.1, '이주영, 오민애, 노재원, 김재화', `영원한 디바 ‘윤시내’가 고별 콘서트를 앞두고 사라졌다?!

전설적인 가수의 실종으로 대한민국이 떠들썩한 가운데, 
20년 간 이미테이션 가수 ‘연시내’로 활동해온순이(오민애)는 
‘윤시내’와 함께할 뻔한 꿈의 무대도, 일자리도 잃어 좌절에 빠진다.
한편, 사람들의 관심이 고픈 유튜버 ‘짱하’(이주영)는 
라이브 방송 중 우연히 찍힌 엄마 ‘연시내’ 영상의 조회수가 떡상하자 
대박 콘텐츠를 꿈꾸며 ‘윤시내’를 찾는 여정에 따라 나서는데…
동료 가수 ‘운시내’(노재원)와 함께 가시내, 윤신애, 윤사내까지 모두 만나며 
사라진 ‘윤시내’의 행방을 수소문하기 시작한 동상이몽 두 모녀는 과연 ‘진짜’를만날 수 있을까?`, 12, '드라마', 'yooncityposter.png');
    await movieData.set(1, MovieData1);
    await movieData.set(2, MovieData2);
    await movieData.set(3, MovieData3);
    await movieData.set(4, MovieData4);
    await movieData.set(5, MovieData5);
    await movieData.set(6, MovieData6);
    await movieData.set(7, MovieData7);
    await movieData.set(8, MovieData8);

}

async function saveUserDataIfNotFound(login_id, password, name) {
    const findUser = await User.findOne({login_id: login_id});

    if (findUser != null) {
        return findUser;
    }

    const user = await new User({
        login_id: login_id,
        password: password,
        name: name
    });
    await user.save();
    return user;
}

async function saveMovieDataIfNotFound(name, runtime, open_date, director, total_score, reservation_percent, actors, description, limit_age, genre, image) {
    const findMovie = await Movie.findOne({name: name});
    if (findMovie != null) {
        return findMovie;
    }
    const movie = await new Movie({
        name: name,
        runtime: runtime,
        open_date: open_date,
        director: director,
        total_score: total_score,
        reservation_percent: reservation_percent,
        actors: actors,
        description: description,
        limit_age: limit_age,
        genre: genre,
        image: 'http://kitcapstone.iptime.org:3001/imgs/' + image
    });
    await movie.save();
    return movie;
}

async function savePosterDataIfNotFound(movie, imageName) {
    const findPoster = await Poster.findOne({movie_id: movie})
    if (findPoster != null) {
        return findPoster;
    }
    const poster = await new Poster(
        {
            movie_id: movie,
            image: 'http://kitcapstone.iptime.org:3001/imgs/' + imageName
        }
    );
    await poster.save();
    return poster;
}

async function saveScreenDataIfNotFound(theater, screen_num, row, col, stairs, total_seat) {
    const findScreen = await Screen.findOne({screen_num: screen_num});
    if (findScreen != null) {
        return findScreen;
    }
    const screen = await new Screen(
        {
            theater_id: theater,
            screen_num: screen_num,
            row: row,
            col: col,
            stairs: stairs,
            total_seat: total_seat
        }
    );
    await screen.save();
    return screen;
}

async function saveTheaterDataIfNotFound(name) {
    const findTheater = await Theater.findOne({name: name});
    if (findTheater != null) {
        return findTheater;
    }

    const theater = await new Theater({
        name: name
    });
    await theater.save();
    return theater;
}

async function saveSeatDataIfNotFound(screen, x, y, isAble, reason) {
    const findSeat = await Seat.findOne({screen_id: screen});
    if (findSeat != null) {
        return findSeat;
    }

    const seat = await new Seat({
        screen_id: screen,
        x: x,
        y: y,
        isAble: isAble,
        reason: reason
    });
    await seat.save();
    return seat;
}

async function saveScreenTableDataIfNotFound(screen_id, movie_id, start_time, end_time, reservationable_seat_num) {
    const findScreenTable = await ScreenTable.findOne({
        screen_id: screen_id,
        movie_id: movie_id,
        start_time: start_time,
        end_time: end_time,
        reservationable_seat_num: reservationable_seat_num
    });

    if (findScreenTable != null) {
        return findScreenTable;
    }

    const screenTable = await new ScreenTable(
        {
            screen_id: screen_id,
            movie_id: movie_id,
            start_time: start_time,
            end_time: end_time,
            reservationable_seat_num: reservationable_seat_num
        }
    );
    await screenTable.save();
    return screenTable;
}

async function saveReservationDataIfNotFound(user, screen_table) {
    const findReservation = Reservation.findOne({user_id: user});
    if (findReservation != null) {
        return findReservation;
    }

    const reservation = await new Screen({
        user_id: user,
        screen_table_id: screen_table
    });
    await reservation.save();
    return reservation;
}

async function saveReservationSeatDataIfNotFound(seat_id, screen_table_id, isReservationable) {
    const findReservationSeat = await ReservationSeat.findOne({
        seat_id: seat_id,
        screen_table_id: screen_table_id,
        isReservationable: isReservationable
    });
    if (findReservationSeat != null) {
        return findReservationSeat;
    }

    const reservationSeat = await new ReservationSeat({
        seat_id: seat_id,
        screen_table_id: screen_table_id,
        isReservationable: isReservationable
    });
    await reservationSeat.save();
    return reservationSeat;

}

async function saveCommentDataIfNotFound(user, score, content, movie) {
    const findComment = await Comment.findOne({
        user: user,
        score: score,
        content: content,
        movie_id: movie
    });

    if (findComment != null) {
        return findComment;
    }

    const comment = await new Comment({
        user: user,
        score: score,
        content: content,
        movie_id: movie
    });
    await comment.save();
    return comment;
}

async function saveEventDataIfNotFound(title, period, image) {
    const findEvent = await Event.findOne({
        title: title
    });

    if (findEvent != null) {
        return findEvent;
    }

    const event = await new Event(
        {
            title: title,
            period: period,
            image: 'http://kitcapstone.iptime.org:3001/imgs/' + image
        }
    );
    await event.save();
    return event;
}

module.exports = {dummyDataLoader};