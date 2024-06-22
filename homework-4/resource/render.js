function createScheduleRow(schedule, userSchedule) {
  const actionsCell = document.createElement("td");
  actionsCell.classList.add("schedule-actions");

  const signButton = document.createElement("button");
  signButton.classList.add("sign-button");
  signButton.textContent = "Записаться";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Отменить запись";

  if (schedule.currentParticipants >= schedule.maxParticipants) {
    signButton.style.background = 'red';
    signButton.textContent = "Нет мест";
    signButton.disabled = true;
  }

  const userSigned = userSchedule.some(item => item === schedule.name);

  if (!userSigned) {
    cancelButton.classList.add('hidden');
  } else {
    signButton.classList.add('hidden');
  }

  actionsCell.appendChild(signButton);
  actionsCell.appendChild(cancelButton);

  return `
      <tr class="schedule-row" data-id="${schedule.id}">
        <td class="schedule-name">${schedule.name}</td>
        <td class="schedule-time">${schedule.time}</td>
        <td class="schedule-max">${schedule.maxParticipants}</td>
        <td class="schedule-participants">${schedule.currentParticipants}</td>
        ${actionsCell.outerHTML}
      </tr>
    `;
}

export { createScheduleRow };