import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getInputText() {
    // browser.sleep(10000)
    return element(by.css('app-root .task-field'))
  }

  getAddTaskButton() {
    return element(by.css('add-task'))
  }

  getCardContent() {
    return element(by.css('mat-card-content'))
  }

  // async navigateTo(): Promise<unknown> {
  //   // browser.waitForAngularEnabled(false);
  //   return await browser.get(browser.baseUrl);
  // }

  // async getInputText(): Promise<any> {
  //   return element(by.css('app-root .task-field'));
  // }
}
