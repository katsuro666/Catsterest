import { Notify } from 'quasar';
import './notificationUtils.styles.scss'


export function showAddNewCatNotification () {
  Notify.create({
    message: 'Ура! У тебя новый любимый котик!',
    color: 'positive',
    avatar: '/happy-cat.gif',
    classes: 'custom-notification',
  });
}

export function showDeleteCatNotification() {
  Notify.create({
    message: 'Ты прогнал котика...',
    color: 'warning',
    avatar: '/cat-going-away-icon.png',
    classes: 'custom-notification',
  });
}

export function showDeleteAllCatsNotification() {
  Notify.create({
  message: 'У тебя больше нет котят, теперь живи с этим.',
  color: 'negative',
  avatar: '/crying-cat-icon.svg',
  classes: 'custom-notification',
});
}