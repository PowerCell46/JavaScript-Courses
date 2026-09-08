function browserHistory(obj, array) {
    let browser = obj["Browser Name"];
    let openTabs = obj["Open Tabs"];
    let recentlyClosed = obj["Recently Closed"];
    let browserLogs = obj["Browser Logs"];

    for (let index = 0; index < array.length; index++) {
        let [command, site] = array[index].split(" ");
        switch (command) {
            case "Open":
                openTabs.push(site);
                browserLogs.push(array[index]);
                break;

            case "Close":
                if (openTabs.includes(site)) {
                    let searchedIndex = openTabs.indexOf(site);
                    openTabs.splice(searchedIndex, 1);
                    recentlyClosed.push(site);
                    browserLogs.push(array[index]);
                }
                break;

            case "Clear":
                openTabs = [];
                recentlyClosed = [];
                browserLogs = [];
                break;
        }
    }

    console.log(browser);
    console.log(`Open Tabs: ${openTabs.join(", ")}`);
    console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
    console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}
