import React from 'react';

// I couldn't find a better common name for study career/job career, maybe I'll change it later
const Enrichment = ({ path, timeIcon, children }) => {
  return (
    <div className="enrich">
      <h2>
        <div className="Academy_work">{path.pathName}</div>
        <div className="organization">{path.place}</div>
      </h2>
      <div className="enrich_info">
        <div className="period">
          <img src={timeIcon} alt="period icon" />
          {path.period.from}-{path.period.to}
        </div>
        {children}
      </div>
      <ul>
        {path.tasks.map((task) => {
          return <li key={task.id}>{task.taskText}</li>;
        })}
      </ul>
    </div>
  );
};

export default Enrichment;
