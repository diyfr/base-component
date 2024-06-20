import BaseComponent from '../src/index';

class TestComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.textContent = 'Test Component';
  }

  public onInit() {
    console.log('Component initialized');
  }
}

describe('BaseComponent', () => {
  let testComponent: TestComponent;

  beforeEach(() => {
    testComponent = new TestComponent();
  });

  test('should render element in the DOM', async () => {
    await testComponent.render();
    expect(document.body.contains(testComponent.element)).toBe(true);
  });

  test('should remove element from the DOM', async () => {
    await testComponent.render();
    await testComponent.remove();
    expect(document.body.contains(testComponent.element)).toBe(false);
  });

  test('should call onInit after rendering', async () => {
    const onInitSpy = jest.spyOn(testComponent, 'onInit');
    await testComponent.render();
    expect(onInitSpy).toHaveBeenCalled();
  });

  test('should update class list correctly', () => {
    const element = testComponent.element;
    testComponent.classListUpdate(element, 'test-class', true);
    expect(element.classList.contains('test-class')).toBe(true);
    testComponent.classListUpdate(element, 'test-class', false);
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should wait for element to be rendered in the DOM', async () => {
    const elementId = 'testElementId';
    const element = document.createElement('div');
    element.id = elementId;
    setTimeout(() => {
      document.body.appendChild(element);
    }, 100);
    const result = await testComponent.waitForRendering(elementId);
    expect(result).toBe(element);
  });
});
