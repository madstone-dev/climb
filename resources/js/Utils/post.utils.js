export const replaceHashtag = (str) =>
  str.replace(
    /#([0-9a-zA-Z가-힣]*)/gi,
    (word) => `<span class="text-blue-500">${word}</span>`,
  );
