import { Salary } from './salary';

export function Table({ listings, salarySortDirection, onSalarySortClick }) {
  if (listings.length === 0) {
    return <p>No listings found.</p>;
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-left">
          <th>Date</th>
          <th>Company</th>
          <th>Title</th>
          <th className="text-right">
            <button className="font-bold" onClick={onSalarySortClick}>
              Salary{' '}
              {salarySortDirection === 'asc'
                ? '⬇️'
                : salarySortDirection === 'desc'
                ? '⬆️'
                : null}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {listings.map(({ key, date, company, url, title, salary }) => {
          return (
            <tr key={key}>
              <td>{date}</td>
              <td>{company.name}</td>
              <td>
                <a href={url}>{title}</a>
              </td>
              <td className="text-right">
                <Salary {...salary} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}