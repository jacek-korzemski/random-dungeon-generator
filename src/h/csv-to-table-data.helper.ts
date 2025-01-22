export function csvToTableData(csvString: string) {
  const lines = csvString.split("\n");
  const headers = lines[0].split(",").map(header => ({ key: header.trim() }));
  const rows = lines.slice(1).map(line => {
      const cells = line.split(",");
      return cells.map((cell, index) => ({
          key: headers[index]?.key || `col${index}`,
          content: cell.trim(),
      }));
  });
  return { headers, rows };
}