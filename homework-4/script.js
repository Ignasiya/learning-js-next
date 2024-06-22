import { data } from './resource/data.js';
import { loadSchedule, getSchedule, signSchedule, unsignSchedule, getUserSchedule } from './resource/storage.js';
import { createScheduleRow } from './resource/render.js';

const scheduleBody = document.querySelector(".schedule-body");

loadSchedule(data);

const scheduleData = getSchedule();
const userSchedule = getUserSchedule();

scheduleBody.innerHTML = scheduleData
    .map(schedule => createScheduleRow(schedule, userSchedule))
    .join('');

scheduleBody.addEventListener('click', (event) => {
    if (!event.target.classList.contains('sign-button')) {
        return;
    }

    const scheduleItemEl = event.target.closest('.schedule-row');
    const scheduleId = +scheduleItemEl.dataset.id;

    const signSuccess = signSchedule(scheduleId);
    if (!signSuccess) {
        return;
    }

    const cancelButtonEl = scheduleItemEl.querySelector('.cancel-button');

    hideButton(event.target);
    showButton(cancelButtonEl);
    incrementParticipantCount(scheduleItemEl, 1);
});

scheduleBody.addEventListener('click', (event) => {
    if (!event.target.classList.contains('cancel-button')) {
        return;
    }

    const scheduleItemEl = event.target.closest('.schedule-row');
    const scheduleId = +scheduleItemEl.dataset.id;

    const unsignSuccess = unsignSchedule(scheduleId);
    if (!unsignSuccess) {
        return;
    }

    const cancelButtonEl = scheduleItemEl.querySelector('.sign-button');

    hideButton(event.target);
    showButton(cancelButtonEl);
    decrementParticipantCount(scheduleItemEl, 1);
});

function incrementParticipantCount(scheduleItemEl, increment) {
    const participantsEl = scheduleItemEl.querySelector('.schedule-participants');
    participantsEl.textContent = +participantsEl.textContent + increment;
}

function decrementParticipantCount(scheduleItemEl, decrement) {
    const participantsEl = scheduleItemEl.querySelector('.schedule-participants');
    participantsEl.textContent = +participantsEl.textContent - decrement;
}

function hideButton(buttonEl) {
    buttonEl.classList.add('hidden');
}

function showButton(buttonEl) {
    buttonEl.classList.remove('hidden');
}