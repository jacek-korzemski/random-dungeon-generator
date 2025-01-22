type Headers = {
  key: string;
  disableSort?: boolean;
}[];

type Rows = {
  key: string;
  content: any;
}[][];

const Table = ({ headers, rows }: { headers: Headers; rows: Rows }) => {
  return (
    <div className="table-wrapper">
      <table>
          <thead>
              <tr>
                  {headers.map((header, index) => (
                      <td key={index}>{header.key}</td>
                  ))}
              </tr>
          </thead>
          <tbody>
              {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => {
                          const headerKey = headers[cellIndex]?.key;
                          const shouldRenderContent = headerKey === cell.key;
                          return (
                              <td key={cellIndex}>
                                  {shouldRenderContent ? cell.content : ""}
                              </td>
                          );
                      })}
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
};

export default Table;