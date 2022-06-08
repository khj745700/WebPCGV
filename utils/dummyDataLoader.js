const { Comment } = require('../dao/comment');
const { Movie } = require('../dao/movie');
const { Poster } = require('../dao/poster');
const { Reservation  } = require('../dao/reservation');
const { ReservationSeat } = require('../dao/reservationSeat');
const { Screen } = require('../dao/screen');
const { ScreenTable } = require('../dao/screenTable');
const { Seat } = require('../dao/seat');
const { User } = require('../dao/user');
const { Theater } = require('../dao/theater');

async function dummyDataLoader() {

}

async function loadUserData(){

}


async function saveUserDataIfNotFound(login_id, password){
    const findUser = await User.findOne({login_id : login_id});

    if(findUser != null){
        return findUser;
    }

    const user = await new User({
        login_id: login_id,
        password: password
    });
    await user.save();
    return user;
}

async function saveMovieDataIfNotFound(name, runtime, open_date, director, total_score, reservation_percent, actors, description, limit_age, genre){
    const findMovie = await Movie.findOne({name : name});
    if(findMovie != null){
        return findMovie;
    }
    const movie = await new Movie({
        name : name,
        runtime : runtime,
        open_date : open_date,
        director : director,
        total_score : total_score,
        reservation_percent : reservation_percent,
        actors : actors,
        description : description,
        limit_age : limit_age,
        genre : genre
    });
    await movie.save();
    return movie;
}

async function savePosterDataIfNotFound(movie, image){
    const findPoster = await Poster.findOne({movie_id : movie})
    if(findPoster != null){
        return findPoster;
    }
    const poster = await new Poster(
        {
            movie_id : movie,
            image : image
        }
    );
    await poster.save();
    return poster;
}

async function saveScreenDataIfNotFound(theater, screen_num, row, col, stairs, total_seat){
    const findScreen = await Screen.findOne({screen_num : screen_num});
    if(findScreen != null){
        return findScreen;
    }
    const screen = await new Screen(
        {
            theater_id : theater,
            screen_num : screen_num,
            row : row,
            col : col,
            stairs : stairs,
            total_seat : total_seat
        }
    );
    await screen.save();
    return screen;
}

async function saveTheaterDataIfNotFound(name){
    const findTheater = await Theater.findOne({name : name});
    if ( findTheater != null){
        return findTheater;
    }

    const theater = await new Theater({
        name : name
    });
    await theater.save();
    return theater;
}

async function saveSeatDataIfNotFound(screen, x, y, isAble, reason){
    const findSeat = await Seat.findOne({screen_id : screen});
    if( findSeat != null){
        return findSeat;
    }

    const seat = await new Seat({
        screen_id : screen,
        x : x,
        y : y,
        isAble : isAble,
        reason : reason
    });
    await seat.save();
    return seat;
}

async function saveScreenTableDataIfNotFound(screen_id, movie_id, start_time, end_time, reservationable_seat_num){
    const findScreenTable = await ScreenTable.findOne({
        screen_id : screen_id,
        movie_id : movie_id,
        start_time : start_time,
        end_time : end_time,
        reservationable_seat_num : reservationable_seat_num
    });

    if(findScreenTable != null){
        return findScreenTable;
    }

    const screenTable = await new ScreenTable(
        {
            screen_id : screen_id,
            movie_id : movie_id,
            start_time : start_time,
            end_time : end_time,
            reservationable_seat_num : reservationable_seat_num
        }
    );
    await screenTable.save();
    return screenTable;
}

async function saveReservationDataIfNotFound(user, screen_table){
    const findReservation = Reservation.findOne({user_id : user});
    if(findReservation != null){
        return findReservation;
    }

    const reservation = await new Screen({
        user_id : user,
        screen_table_id : screen_table
    });
    await reservation.save();
    return reservation;
}

async function saveReservationSeatDataIfNotFound(seat_id, screen_table_id, isReservationable){
    const findReservationSeat = await ReservationSeat.findOne({
        seat_id : seat_id,
        screen_table_id : screen_table_id,
        isReservationable : isReservationable
    });
    if(findReservationSeat != null){
        return findReservationSeat;
    }

    const reservationSeat = await new ReservationSeat({
        seat_id : seat_id,
        screen_table_id : screen_table_id,
        isReservationable : isReservationable
    });
    await reservationSeat.save();
    return reservationSeat;

}

async function saveCommentDataIfNotFound(user, score, content, movie){
    const findComment = await Comment.findOne({
        user: user,
        score: score,
        content : content,
        movie_id : movie
    });

    if(findComment != null){
        return findComment;
    }

    const comment = await new Comment({
        user: user,
        score: score,
        content : content,
        movie_id : movie
    });
    await comment.save();
    return comment;

}