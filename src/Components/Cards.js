import React from "react";

const DeleteBtn = (props) => {
  const { handleClick } = props;
  return (
    <div className="delete-Icon" onClick={handleClick}>
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </div>
  );
};

export default (props) => {
  return props.cards.map((info) => (
    <div className="card" key={info.id}>
      <DeleteBtn
        handleClick={() => {
          props.deleteCard(info.id);
        }}
      />
      <div className="card-header">
        <div>{info.full_name}</div>
        <img src={info.owner.avatar_url} />
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-language" aria-hidden="true"></i>
          Langauge
        </div>
        {info.language || "Not available"}
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-star" aria-hidden="true"></i>
          Stars
        </div>
        {info.score}
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-code-fork" aria-hidden="true"></i>
          Forks
        </div>
        {info.forks}
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          Open issues
        </div>
        {info.open_issues_count}
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-birthday-cake" aria-hidden="true"></i>
          Created At
        </div>

        {info.created_at}
      </div>
      <div className="item">
        <div className="label">
          <i className="fa fa-wrench" aria-hidden="true"></i>
          Last update
        </div>
        {info.updated_at}
      </div>
    </div>
  ));
};