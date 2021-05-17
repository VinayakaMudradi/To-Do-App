import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    // page = new AppPage();
  });

  it('Zero To dos initially', async() => {
    await browser.get('/');
    expect(await element(by.css('.mat-card-content')).isPresent()).toBeFalsy();
  })

  it('Do not add empty tasks', async() => {
    await browser.get('/');
    await element(by.css('app-root .task-field')).sendKeys('');
    await element(by.css('.add-task')).click();
    expect(await element(by.css('.mat-card-content')).isPresent()).toBeFalsy();
  })

  it('adding a task', async() => {

    await browser.get('/');
    await element(by.css('app-root .task-field')).sendKeys('Complete Assignments');
    await element(by.css('.add-task')).click();
    // await browser.sleep(5000);
    expect(await element(by.css('.mat-card-content')).getText()).toEqual('Complete Assignments');
    
    expect(await element.all(by.css('.mat-card-content')).count()).toEqual(1);
    

    // page.navigateTo();
    // page.getInputText().sendKeys('Complete Assignments');
    // page.getAddTaskButton().click()
    // expect<any>(page.getCardContent().getText()).toEqual("Complete Assignment")
  })


  
});
