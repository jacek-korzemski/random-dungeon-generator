export function csvToTableData(csvString: string, separator = ',') {
  const lines = csvString.split("\n");
  const headers = lines[0].split(separator).map(header => ({ key: header.trim() }));
  const rows = lines.slice(1).map(line => {
      const cells = line.split(separator);
      return cells.map((cell, index) => ({
          key: headers[index]?.key || `col${index}`,
          content: cell.trim(),
      }));
  });
  return { headers, rows };
}