function extractEmails(extractString) {
  const regex = /(?:^|\s)(?!.*[-._]{2})[a-zA-Z0-9]+(?:[-._][a-zA-Z0-9]+)*\@(?:[a-zA-Z]+(?:-[a-zA-Z]+)?\.){1,}[a-zA-Z]+(?:-[a-zA-Z]+)?/g;
  let matches = extractString.match(regex);
  
  if (matches) {
    for (const match of matches) {
      console.log(match);
    }
  }
}
