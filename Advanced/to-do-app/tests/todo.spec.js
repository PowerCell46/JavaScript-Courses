const { test, expect } = require("@playwright/test");


const URL = "http://localhost:5500/";
const taskContents = {
    TEST_TASK_NAME: "Test Task",
    TEST_TASK_ONE_CHAR: "T",
    TEST_TASK_OVER_ONE_THOUSAND_CHARS: "T".repeat(1001)
};
const htmlElements = {
    taskInput: "#task-input",
    addTaskButton: "#add-task",
    filterButton: "#filter"
};


// Add functionality

test("user can add a task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    const taskText = await page.textContent(".task");

    expect(taskText).toContain(taskContents.TEST_TASK_NAME);
});

test("user cannot add an empty task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, "");
    await page.click(htmlElements.addTaskButton);

    const taskCount = await page.locator(".task").count();

    expect(taskCount).toBe(0);
});

test("user can add a one char task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_ONE_CHAR);
    await page.click(htmlElements.addTaskButton);

    const taskText = await page.textContent(".task");

    expect(taskText).toContain(taskContents.TEST_TASK_ONE_CHAR);
});

test("user can add a over 1000 characters task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_OVER_ONE_THOUSAND_CHARS);
    await page.click(htmlElements.addTaskButton);

    const taskText = await page.textContent(".task");

    expect(taskText).toContain(taskContents.TEST_TASK_OVER_ONE_THOUSAND_CHARS);
});

// Delete functionality

test("user can delete a task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.click(".task .delete-task");

    const tasks = await page.$$eval(".task", tasks =>
        tasks.map(task => task.textContent));

    expect(tasks).not.toContain(taskContents.TEST_TASK_NAME);
});

test("delete button not showing with no tasks", async ({ page }) => {
    const taskCount = await page.locator(".task .delete-task").count();

    expect(taskCount).toBe(0);
});

// Complete functionality

test("user can mark a task as complete", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.click(".task .task-complete");

    const completedTask = await page.$(".task .completed");

    expect(completedTask).not.toBeNull;
});

test("complete button not showing with no tasks", async ({ page }) => {
    const taskCount = await page.locator(".task .completed").count();

    expect(taskCount).toBe(0);
});

// Filter functionality

test("user can filter complete task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.click(".task .task-complete");

    await page.selectOption(htmlElements.filterButton, "Completed");

    const incompleteTask = await page.$(".task:not(.completed)");

    expect(incompleteTask).toBeNull;
});

test("user filtering by complete, hides the active task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.click(".task .task-complete");

    await page.fill(htmlElements.taskInput, "Second Task Name");
    await page.click(htmlElements.addTaskButton);

    await page.selectOption(htmlElements.filterButton, "Completed");

    const incompleteTask = page.locator(".task:not(.completed)");

    const isHidden = await incompleteTask.evaluate((element) => {
        return window.getComputedStyle(element).display === "none";
    });

    expect(isHidden).toBe(true);
});

test("user can filter active task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.selectOption(htmlElements.filterButton, "Active");

    const completedTasks = await page.$$(".task.completed");
    expect(completedTasks.length).toBe(0);

    const visibleTasks = await page.$$(".task");
    expect(visibleTasks.length).toBe(1);
});

test("user filtering by active, hides the completed task", async ({ page }) => {
    await page.goto(URL);

    await page.fill(htmlElements.taskInput, taskContents.TEST_TASK_NAME);
    await page.click(htmlElements.addTaskButton);

    await page.click(".task .task-complete");

    await page.fill(htmlElements.taskInput, "Second Task Name");
    await page.click(htmlElements.addTaskButton);

    await page.selectOption(htmlElements.filterButton, "Active");

    const incompleteTask = page.locator(".completed");

    const isHidden = await incompleteTask.evaluate((element) => {
        return window.getComputedStyle(element).display === "none";
    });

    expect(isHidden).toBe(true);
});