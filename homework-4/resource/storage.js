const lsScheduleKey = 'schedule ';
const lsUserKey = 'user.schedule';

function loadSchedule(schedules) {
    if (!localStorage.getItem(lsScheduleKey)) {
        localStorage.setItem(lsScheduleKey, schedules);
    }
}

function getSchedule() {
    const schedules = localStorage.getItem(lsScheduleKey);
    return schedules ? JSON.parse(schedules) : [];
}

function getUserSchedule() {
    const userSchedule = localStorage.getItem(lsUserKey);
    return userSchedule ? JSON.parse(userSchedule) : [];
}

function saveSchedule(schedules) {
    localStorage.setItem(lsScheduleKey, JSON.stringify(schedules));
}

function saveUserSchedule(userSchedule) {
    localStorage.setItem(lsUserKey, JSON.stringify(userSchedule));
}

function signSchedule(id) {
    const schedules = getSchedule();
    const userSchedule = getUserSchedule();

    const schedule = schedules.find(item => item.id === id);

    if (schedule.currentParticipants >= schedule.maxParticipants
        || userSchedule.includes(schedule.name)) {
        return false;
    }

    schedule.currentParticipants += 1;
    saveSchedule(schedules);

    userSchedule.push(schedule.name);
    saveUserSchedule(userSchedule);

    return true;
}

function unsignSchedule(id) {
    const schedules = getSchedule();
    const userSchedule = getUserSchedule();

    const schedule = schedules.find(item => item.id === id);

    schedule.currentParticipants -= 1;
    saveSchedule(schedules);

    const newUserSchedule = userSchedule.filter(item => item !== schedule.name);
    saveUserSchedule(newUserSchedule);

    return true;
}

export { loadSchedule, getSchedule, signSchedule, unsignSchedule, getUserSchedule };