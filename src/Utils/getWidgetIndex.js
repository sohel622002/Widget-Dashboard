export function getWidgetIndex(widgetData, prefix) {
  const keys = Object.keys(widgetData);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].startsWith(prefix)) {
      return i;
    }
  }
  return 0;
}
