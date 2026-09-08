const { test, expect } = require("@playwright/test");

/**********************************************************************/
// Constants

const BASE_URL = "http://localhost:3000";

const URLS = {
    LOGIN_URL: BASE_URL + "/login",
    REGISTER_URL: BASE_URL + "/register",
    CATALOG_URL: BASE_URL + "/catalog"
};

const constants = {
    PETER_EMAIL: "peter@abv.bg",
    JOHN_EMAIL : "john@abv.bg",
    PASSWORD: "123456",

    CREATE_EMAIL: "peter.gerdzhikov.contact@gmail.com",
    CREATE_PASSWORD: "testPaSSworD243",
    DIFF_CREATE_PASSWORD: "243testPaSSworD",

    CREATE_BOOK_TITLE: "Test Book", 
    CREATE_BOOK_DESC: "This is a test book description...",
    CREATE_BOOK_IMG: "https://example.com/book-image.jpg",
    CREATE_BOOK_TYPE: "Fiction",
   
    JOHN_FIRST_BOOK_TITLE: "To Kill a Mockingbird",
    JOHN_FIRST_BOOK_DESC: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
    JOHN_FIRST_BOOK_TYPE: "Classic",
    JOHN_FIRST_BOOK_IMG: "/images/book3.png"
};

const ERROR_MESSAGES = {
    ALL_FIELDS_ARE_REQUIRED: "All fields are required!",
    PASSWORDS_DO_NOT_MATCH: "Passwords don't match!",
    NO_BOOKS_IN_THE_DB: "No books in database!"
};

const INPUT_FIELDS = {
    EMAIL: "input[name=\"email\"]",
    PASSWORD: "input[name=\"password\"]",
    CONFIRM_PASSWORD: "input[name=\"confirm-pass\"]",
    SUBMIT: "input[type=\"submit\"]",

    TITLE_TAG: "#title",
    DESCRIPTION_TAG: "#description",
    IMAGE_TAG: "#image",
    TYPE_TAG: "#type",
    CREATE_SUBMIT: "#create-form input[type=\"submit\"]"
};


/**********************************************************************/
// NavBar Tests

test("Verify All books link is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    await page.waitForSelector("nav.navbar");

    const allBooksLink = await page.$("a[href=\"/catalog\"]");

    const isLinkVisible = await allBooksLink.isVisible();

    expect(isLinkVisible).toBe(true);
});

test("Verify Login button is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    await page.waitForSelector("nav.navbar");

    const loginButton = await page.$("a[href=\"/login\"]");

    const isLoginButtonVisible = await loginButton.isVisible();

    expect(isLoginButtonVisible).toBe(true);
});

test("Verify Register button is visible", async ({ page }) => {
    await page.goto(BASE_URL);

    await page.waitForSelector("nav.navbar");

    const registerButton = await page.$("a[href=\"/register\"]");

    const isRegisterButtonVisible = await registerButton.isVisible();

    expect(isRegisterButtonVisible).toBe(true);
});

test("Verify All books link is visible after user login", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    const allBooksLink = await page.$("a[href=\"/catalog\"]");

    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
});

test("Verify My books link is visible after user login", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    const myBooksLink = await page.$("a[href=\"/profile\"]");

    const isMyBooksLinkVisible = await myBooksLink.isVisible();

    expect(isMyBooksLinkVisible).toBe(true);
});

test("Verify Add book link is visible after user login", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    const addBookLink = await page.$("a[href=\"/create\"]");

    const isAddBookLinkVisible = await addBookLink.isVisible();

    expect(isAddBookLinkVisible).toBe(true);
});

test("Verify User email is visible after user login", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    const welcomeSpan = await page.$("#user span");
    const spanText = await welcomeSpan.textContent();

    const spanContainsEmail = spanText.includes(constants.PETER_EMAIL);

    expect(spanContainsEmail).toBe(true);
});

/**********************************************************************/
// Login Tests

test("Verify Login with valid credentials", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    await page.$("a[href=\"/catalog\"]");
    expect(page.url()).toBe(URLS.CATALOG_URL);
});

test("Verify Login with empty email", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/login\"]");
    expect(page.url()).toBe(URLS.LOGIN_URL);
});

test("Verify Login with empty password", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/login\"]");
    expect(page.url()).toBe(URLS.LOGIN_URL);
});

test("Verify Login with empty credentials", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/login\"]");
    expect(page.url()).toBe(URLS.LOGIN_URL);
});

/**********************************************************************/
// Register Tests

/*
test("Verify Register with valid credentials", async ({ page }) => {
    await page.goto(URLS.REGISTER_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.CREATE_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.CREATE_PASSWORD);
    await page.fill(INPUT_FIELDS.CONFIRM_PASSWORD, constants.CREATE_PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    await page.$("a[href=\"/catalog\"]");
    expect(page.url()).toBe(URLS.CATALOG_URL);
});
*/

test("Verify Register with empty email", async ({ page }) => {
    await page.goto(URLS.REGISTER_URL);

    await page.fill(INPUT_FIELDS.PASSWORD, constants.CREATE_PASSWORD);
    await page.fill(INPUT_FIELDS.CONFIRM_PASSWORD, constants.CREATE_PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/register\"]");
    expect(page.url()).toBe(URLS.REGISTER_URL);
});

test("Verify Register with empty password", async ({ page }) => {
    await page.goto(URLS.REGISTER_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.CREATE_EMAIL);
    await page.fill(INPUT_FIELDS.CONFIRM_PASSWORD, constants.CREATE_PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/register\"]");
    expect(page.url()).toBe(URLS.REGISTER_URL);
});

test("Verify Register with empty repeat password", async ({ page }) => {
    await page.goto(URLS.REGISTER_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.CREATE_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.CREATE_PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/register\"]");
    expect(page.url()).toBe(URLS.REGISTER_URL);
});

test("Verify Register with different passwords", async ({ page }) => {
    await page.goto(URLS.REGISTER_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.CREATE_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.CREATE_PASSWORD);
    await page.fill(INPUT_FIELDS.CONFIRM_PASSWORD, constants.DIFF_CREATE_PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH);
        await dialog.accept();
    });

    await page.$("a[href=\"/register\"]");
    expect(page.url()).toBe(URLS.REGISTER_URL);
});

/**********************************************************************/
// Add book Tests

/*
test("Verify Add book with correct data", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/create\"]");
    await page.waitForSelector("#create-form");

    await page.fill(INPUT_FIELDS.TITLE_TAG, constants.CREATE_BOOK_TITLE);
    await page.fill(INPUT_FIELDS.DESCRIPTION_TAG, constants.CREATE_BOOK_DESC);
    await page.fill(INPUT_FIELDS.IMAGE_TAG, constants.CREATE_BOOK_IMG);
    await page.selectOption(INPUT_FIELDS.TYPE_TAG, constants.CREATE_BOOK_TYPE);

    await page.click(INPUT_FIELDS.CREATE_SUBMIT);

    await page.waitForURL(URLS.CATALOG_URL);

    expect(page.url()).toBe(URLS.CATALOG_URL);
});
*/

test("Verify Add book with empty Title", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/create\"]");
    await page.waitForSelector("#create-form");

    await page.fill(INPUT_FIELDS.DESCRIPTION_TAG, constants.CREATE_BOOK_DESC);
    await page.fill(INPUT_FIELDS.IMAGE_TAG, constants.CREATE_BOOK_IMG);
    await page.selectOption(INPUT_FIELDS.TYPE_TAG, constants.CREATE_BOOK_TYPE);

    await page.click(INPUT_FIELDS.CREATE_SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/create\"]");
    expect(page.url()).toBe(BASE_URL + "/create");
});

test("Verify Add book with empty Description", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/create\"]");
    await page.waitForSelector("#create-form");

    await page.fill(INPUT_FIELDS.TITLE_TAG, constants.CREATE_BOOK_TITLE);
    await page.fill(INPUT_FIELDS.IMAGE_TAG, constants.CREATE_BOOK_IMG);
    await page.selectOption(INPUT_FIELDS.TYPE_TAG, constants.CREATE_BOOK_TYPE);

    await page.click(INPUT_FIELDS.CREATE_SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/create\"]");
    expect(page.url()).toBe(BASE_URL + "/create");
});

test("Verify Add book with empty Image Url", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/create\"]");
    await page.waitForSelector("#create-form");

    await page.fill(INPUT_FIELDS.TITLE_TAG, constants.CREATE_BOOK_TITLE);
    await page.fill(INPUT_FIELDS.DESCRIPTION_TAG, constants.CREATE_BOOK_DESC);
    await page.selectOption(INPUT_FIELDS.TYPE_TAG, constants.CREATE_BOOK_TYPE);

    await page.click(INPUT_FIELDS.CREATE_SUBMIT);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain(ERROR_MESSAGES.ALL_FIELDS_ARE_REQUIRED);
        await dialog.accept();
    });

    await page.$("a[href=\"/create\"]");
    expect(page.url()).toBe(BASE_URL + "/create");
});

/**********************************************************************/
// All books Tests

test("Login and verify all books are displayed", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ])

    await page.waitForSelector(".dashboard");

    const bookElements = await page.$$(".other-books-list li");

    expect(bookElements.length).toBeGreaterThan(0);
});

/*
test("Login and verify all books are deleted", async ({page}) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.waitForSelector(".dashboard");

    const noBooksMessage = await page.textContent(".no-books");
    expect(noBooksMessage).toBe(ERROR_MESSAGES.NO_BOOKS_IN_THE_DB);
});
*/

/**********************************************************************/
// Details Tests

test("Login and navigate to Details page", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.JOHN_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/catalog\"]");

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const detailsPageTitle = await page.textContent(".book-information h3");
    expect(detailsPageTitle).toBe(constants.JOHN_FIRST_BOOK_TITLE);
});

test("Navigate to Details page Unauthenticated", async ({ page }) => {
    await page.goto(URLS.CATALOG_URL);

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const detailsPageTitle = await page.textContent(".book-information h3");
    expect(detailsPageTitle).toBe(constants.JOHN_FIRST_BOOK_TITLE);
});

test("Verify all Details page information", async ({ page }) => {
    await page.goto(URLS.CATALOG_URL);

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const detailsPageTitle = await page.textContent(".book-information h3");
    expect(detailsPageTitle).toBe(constants.JOHN_FIRST_BOOK_TITLE);

    const detailsPageDetails = await page.textContent(".book-description p");
    expect(detailsPageDetails).toBe(constants.JOHN_FIRST_BOOK_DESC);

    const detailsPageType = await page.textContent("div.book-information > p.type");
    expect(detailsPageType).toContain(constants.JOHN_FIRST_BOOK_TYPE);

    const imgLocator = page.locator(`img[src=\"${constants.JOHN_FIRST_BOOK_IMG}\"]`);
    await imgLocator.waitFor({ state: "visible" });
    const detailsPageImage = await imgLocator.getAttribute("src");
    expect(detailsPageImage).toBe(constants.JOHN_FIRST_BOOK_IMG);
});

test("Verify Edit and Delete are shown for the Creator", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.JOHN_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/catalog\"]");

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const editButton = await page.locator("#details-page > div.book-information > div > a:nth-child(1)").textContent();
    expect(editButton.trim()).toBe("Edit");

    const deleteButton = await page.locator("#details-page > div.book-information > div > a:nth-child(2)").textContent();
    expect(deleteButton.trim()).toBe("Delete");
});

test("Verify Edit and Delete are not shown for not the Creator", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/catalog\"]");

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const firstButton = await page.locator("#details-page > div.book-information > div > a:nth-child(1)").textContent();
    expect(firstButton.trim()).not.toBe("Edit");

    const deleteButtonExists = await page.locator("#details-page > div.book-information > div > a:nth-child(2)").count();
    expect(deleteButtonExists).toBe(0);
});

test("Verify Like button is not shown for the Creator", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.JOHN_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/catalog\"]");

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const firstButton = await page.locator("#details-page > div.book-information > div > a:nth-child(1)").textContent();
    expect(firstButton.trim()).not.toBe("Like");
});

test("Verify Like button is shown not for the Creator", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.PETER_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL)
    ]);

    await page.click("a[href=\"/catalog\"]");

    await page.waitForSelector(".otherBooks");

    await page.click(".otherBooks a.button");

    await page.waitForSelector(".book-information");

    const firstButton = await page.locator("#details-page > div.book-information > div > a:nth-child(1)").textContent();
    expect(firstButton.trim()).toBe("Like");
});

test("Verify Logout button", async ({ page }) => {
    await page.goto(URLS.LOGIN_URL);

    await page.fill(INPUT_FIELDS.EMAIL, constants.JOHN_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);

    await Promise.all([
        page.click(INPUT_FIELDS.SUBMIT),
        page.waitForURL(URLS.CATALOG_URL),
    ]);
    
    const logoutButton = page.locator("#logoutBtn");
    await expect(logoutButton).toBeVisible();
    
    const logoutButtonText = await logoutButton.textContent();
    expect(logoutButtonText.trim()).toBe("Logout");
});

test("Verify redirection of Logout link after user login", async ({ page }) => {
    page.goto(URLS.LOGIN_URL);
    
    await page.fill(INPUT_FIELDS.EMAIL, constants.JOHN_EMAIL);
    await page.fill(INPUT_FIELDS.PASSWORD, constants.PASSWORD);
    await page.click(INPUT_FIELDS.SUBMIT);

    const logoutLink = await page.$("a[href=\"javascript:void(0)\"]");
    await logoutLink.click();

    const redirectedUrl = page.url();
    expect(redirectedUrl).toBe(URLS.CATALOG_URL);
});