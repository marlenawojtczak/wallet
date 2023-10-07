// selector ma za zadanie wybrać z Reduxowego stanu informację o tym, czy modal do wylogowania jest otwarty, czy zamknięty

export const selectIsModalLogoutOpen = (state) =>
  state.global.isModalLogoutOpen;
