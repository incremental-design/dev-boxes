export function prettyPrintJSON(JSONstring: string, truncateAt?: number) {
  function truncate(line: string, ta: number) {
    if (line.length > ta) {
      return line.slice(0, ta - 3) + '...';
    }
    return line;
  }

  if (truncateAt && truncateAt < 4) throw new Error('truncateAt must be >= 4');
  const trimmed = JSONstring.trim();
  try {
    const j = JSON.parse(trimmed);
    const toPrint = JSON.stringify(j, null, 2);
    if (truncateAt)
      return toPrint
        .split('\n')
        .map((line) => truncate(line, truncateAt))
        .join('\n');
    return toPrint;
  } catch (e) {
    const printErr = `failed to parse JSON for:\n${trimmed}\n`;
    if (truncateAt) {
      return printErr
        .split('\n')
        .map((line) => truncate(line, truncateAt))
        .join('\n');
    }
    return printErr;
  }
}
