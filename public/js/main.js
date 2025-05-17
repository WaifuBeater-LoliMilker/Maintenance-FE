const tabKey = `tab_${Date.now()}_${Math.random()}`;

sessionStorage.setItem(tabKey, 'true');

const incrementTabCount = () => {
  const count = parseInt(localStorage.getItem('openTabs') || '0', 10);
  localStorage.setItem('openTabs', (count + 1).toString());
};

const decrementTabCount = () => {
  const count = parseInt(localStorage.getItem('openTabs') || '0', 10);
  const newCount = Math.max(count - 1, 0);
  localStorage.setItem('openTabs', newCount.toString());

  if (newCount === 0) {
    localStorage.removeItem('access_token');
  }
};

incrementTabCount();

window.addEventListener('beforeunload', () => {
  if (sessionStorage.getItem(tabKey)) {
    sessionStorage.removeItem(tabKey);
    decrementTabCount();
  }
});
window.addEventListener('load', () => {
  if (!localStorage.getItem('openTabs')) {
    localStorage.setItem('openTabs', '1');
  }
});
