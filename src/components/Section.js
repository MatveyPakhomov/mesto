export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  appendItem(element) {
    this._containerSelector.append(element);
  }

  prependItem(element) {
    this._containerSelector.prepend(element);
  }
}
