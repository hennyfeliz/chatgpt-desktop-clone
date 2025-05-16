export function formatThinking(thinking) {
  if (thinking) {
    return thinking.replace(/<think>/g, "").replace(/<\/think>/g, "");
  } else {
    return thinking;
  }
}
